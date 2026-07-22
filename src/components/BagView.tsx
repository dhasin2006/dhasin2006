import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Trash2, Plus, Minus, CreditCard, Tag, Sparkles, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { Product, CartItem, ScreenType } from '../types';
import { products } from '../data';

interface BagViewProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  setScreen: (screen: ScreenType) => void;
  addToCart: (product: Product, size: number, color: string) => void;
}

export const BagView: React.FC<BagViewProps> = ({ cart, setCart, setScreen, addToCart }) => {
  // Promo code variables
  const [promoCodeInput, setPromoCodeInput] = useState<string>('');
  const [activePromoDiscount, setActivePromoDiscount] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState<string>('');

  // Sizing or checkouts variables
  const [checkOutStep, setCheckOutStep] = useState<boolean>(false);
  const [transactProving, setTransactProving] = useState<boolean>(false);
  const [transactSuccess, setTransactSuccess] = useState<boolean>(false);

  // Bag slider additions (Recommended)
  const sliderIds = ['urban-float-2', 'ignite-pro-x', 'vanguard-alpha', 'drift-lite-4'];
  const recommendedSliders = products.filter(p => sliderIds.includes(p.id));

  // Cart operations
  const updateQuantity = (index: number, delta: number) => {
    setCart(prev => {
      const copy = [...prev];
      const target = copy[index];
      const nextQty = target.quantity + delta;
      
      if (nextQty <= 0) {
        // Remove item from bag
        return prev.filter((_, i) => i !== index);
      } else {
        copy[index] = { ...target, quantity: nextQty };
        return copy;
      }
    });
  };

  const removeCartItem = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const applyPromoCode = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = promoCodeInput.trim().toUpperCase();
    if (cleanCode === 'STRIDEX7') {
      setActivePromoDiscount(0.10); // 10% discount
      setPromoMessage('PROMO APPLIED: 10% DEDUCTION APPLIED');
    } else {
      setPromoMessage('INVALID CODE PROTOCOL. TRY: STRIDEX7');
    }
  };

  // Math totals
  const subtotal = useMemo(() => {
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }, [cart]);

  const discountAmount = useMemo(() => {
    return subtotal * activePromoDiscount;
  }, [subtotal, activePromoDiscount]);

  const shipping = useMemo(() => {
    if (subtotal > 150 || subtotal === 0) return 0;
    return 15.00; // Flat express rate
  }, [subtotal]);

  const totalCost = useMemo(() => {
    return subtotal - discountAmount + shipping;
  }, [subtotal, discountAmount, shipping]);

  const runTransactSubmission = () => {
    setTransactProving(true);
    setTimeout(() => {
      setTransactProving(false);
      setTransactSuccess(true);
      setCart([]); // Reset bag
    }, 2800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      
      {/* Dynamic Full Screen checkout success screen over-layer */}
      <AnimatePresence>
        {transactSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#111314]/95 z-55 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white max-w-md w-full p-8 rounded-sm text-center border-t-4 border-[#ff5722] space-y-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-20 w-20 bg-linear-to-bl from-orange-500/10 to-transparent pointer-events-none" />
              
              <div className="bg-[#ff5722]/10 text-[#ff5722] w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 stroke-[3.5]" />
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#ff5722] font-black">
                  SECURE BLOCKCHAIN GATEWAY APPROVED
                </span>
                <h3 className="font-display font-black text-2xl uppercase tracking-tight text-gray-950">
                  METRIC ORDER APPROVED
                </h3>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                Your order specification codes have been successfully built into our manufacturing registry queue. Shipping logs will transmit to you in under 1 hour.
              </p>

              <div className="bg-gray-50 text-left p-4.5 rounded-xs border border-gray-100 divide-y divide-gray-150 font-mono text-[10px] text-gray-400">
                <div className="py-1 flex justify-between">
                  <span>LOGISTIC ID:</span>
                  <span className="text-gray-900 font-bold">#STX-774-0A2</span>
                </div>
                <div className="py-1 flex justify-between">
                  <span>PREPARATION:</span>
                  <span className="text-gray-900 font-bold">NITRO-PLATE CURE</span>
                </div>
                <div className="py-1 flex justify-between">
                  <span>SHIPPING SPEED:</span>
                  <span className="text-orange-500 font-bold">EXPRESS TARGET</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setTransactSuccess(false);
                  setScreen('home');
                }}
                className="w-full bg-black hover:bg-[#ff5722] text-white py-4.5 font-display text-xs tracking-widest font-black uppercase transition-all duration-300 rounded-xs cursor-pointer inline-block"
              >
                RETURN TO LAB FRONT
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Header Area */}
      <div className="border-b border-gray-100 pb-5 mb-8">
        <span className="font-mono text-[9px] tracking-widest text-[#ff5722] font-semibold uppercase block">
          STRIDEX FOOTWEAR CO // TRANSACTION PORTAL
        </span>
        <h1 className="font-display font-black text-2xl sm:text-3xl tracking-tight uppercase">
          SHOPPING BAG
        </h1>
        <p className="text-xs text-gray-400 mt-1 uppercase font-mono">
          {cart.length === 0 ? 'BAG EMPTY' : `${cart.length} CONFIGURED SYSTEMS STOWED // SECURE CHECKOUT`}
        </p>
      </div>

      {cart.length === 0 ? (
        /* Empty Cart Placeholder Block */
        <div className="bg-white border border-gray-100 text-center py-20 px-4 rounded-xs space-y-5">
          <span className="text-4xl text-gray-400 block p-2">🛒</span>
          <h3 className="font-display font-extrabold text-sm tracking-wide text-gray-900 uppercase">
            YOUR LAB SHOPPING BAG IS VACANT
          </h3>
          <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
            Take a look at our current sneakers catalog and assemble dynamic performance compounds tailored to your workout speed.
          </p>
          <button
            onClick={() => setScreen('listing')}
            className="bg-[#ff5722] hover:bg-orange-600 text-white font-mono text-[10px] tracking-widest px-8 py-3.5 uppercase font-bold transition-all rounded-xs cursor-pointer inline-flex items-center space-x-2"
          >
            <span>CATALOG DIRECTORY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        /* General Split Column Form */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT TABLE: Cart list (8 columns on large) */}
          <div className="lg:col-span-8 bg-white border border-gray-100 rounded-sm overflow-hidden divide-y divide-gray-100">
            {cart.map((item, index) => (
              <div
                key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                className="p-5 flex flex-col sm:flex-row gap-5 justify-between items-start sm:items-center bg-white hover:bg-gray-50/50 transition-colors"
              >
                {/* Product spec block (Image + name + traits) */}
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-50 border border-gray-100 p-2 rounded-xs flex items-center justify-center shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">
                      {item.product.brand}
                    </span>
                    <h3 className="font-display font-extrabold text-xs sm:text-sm text-gray-900 uppercase tracking-wide leading-snug line-clamp-1">
                      {item.product.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-[10px] font-mono text-gray-400 uppercase pt-0.5">
                      <span className="bg-orange-50 border border-orange-100 text-orange-600 px-1.5 py-0.5 rounded-xs font-bold">
                        SIZE {item.selectedSize}
                      </span>
                      <span className="bg-gray-100 border border-gray-150 text-gray-600 px-1.5 py-0.5 rounded-xs">
                        {item.selectedColor}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Controls (Adjust Qty + Value price spec + Delete) */}
                <div className="flex sm:flex-col justify-between items-center sm:items-end w-full sm:w-auto gap-3 pt-3 sm:pt-0 border-t border-gray-50 sm:border-0">
                  
                  {/* Dynamic price for the item quantity */}
                  <span className="font-mono font-black text-sm text-gray-900 order-2 sm:order-1">
                    ₹{(item.product.price * item.quantity).toFixed(2)}
                  </span>

                  {/* Quantity adjustments */}
                  <div className="flex items-center space-x-1 border border-gray-200 rounded-2xs bg-white text-xs font-mono order-1 sm:order-2">
                    <button
                      onClick={() => updateQuantity(index, -1)}
                      className="p-1.5 text-gray-500 hover:text-black hover:bg-gray-50 rounded-l-2xs cursor-pointer"
                      title="Decrease by 1"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 text-center text-gray-900 font-bold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(index, 1)}
                      className="p-1.5 text-gray-500 hover:text-black hover:bg-gray-50 rounded-r-2xs cursor-pointer"
                      title="Increase by 1"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeCartItem(index)}
                    className="text-gray-400 hover:text-red-500 p-1.5 transition-colors cursor-pointer order-3"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDEBAR: Purchase summaries (4 columns) */}
          <aside className="lg:col-span-4 bg-white border border-gray-100 p-5 rounded-sm space-y-6 lg:sticky lg:top-28">
            <h4 className="font-display font-black text-[11px] tracking-widest text-[#ff5c00] border-b border-gray-50 pb-3 uppercase">
              TRANSACT SUMMARY
            </h4>

            {/* Calculations items */}
            <div className="divide-y divide-gray-50 font-mono text-[11px] text-gray-400 space-y-3">
              <div className="flex justify-between py-1.5">
                <span>SUBTOTAL SPEC:</span>
                <span className="text-gray-900 font-bold">₹{subtotal.toFixed(2)}</span>
              </div>
              {activePromoDiscount > 0 && (
                <div className="flex justify-between py-1.5 text-green-500">
                  <span>PROMO SPEC REDUCTION:</span>
                  <span>-₹{discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between py-1.5">
                <span>EXPRESS TARGET DELIVERY:</span>
                {shipping === 0 ? (
                  <span className="text-green-500 font-extrabold uppercase">[FREE OVER ₹150]</span>
                ) : (
                  <span className="text-gray-900 font-bold">₹{shipping.toFixed(2)}</span>
                )}
              </div>
              <div className="flex justify-between py-3 border-t-2 border-gray-900 text-xs font-display font-black text-gray-950">
                <span className="uppercase">TOTAL TRANSACTION:</span>
                <span className="text-base text-[#ff5722] font-mono">₹{totalCost.toFixed(2)}</span>
              </div>
            </div>

            {/* Promo Code input mockup */}
            <div className="border-t border-gray-50 pt-5 mt-2">
              <span className="block text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase mb-2">
                APPLY CODE PROVISION
              </span>
              <form onSubmit={applyPromoCode} className="flex">
                <input
                  type="text"
                  value={promoCodeInput}
                  onChange={(e) => setPromoCodeInput(e.target.value)}
                  placeholder="CODE: STRIDEX7"
                  className="bg-gray-50 border border-gray-200 text-xs px-3 py-2 w-full text-black font-mono tracking-widest focus:outline-hidden focus:bg-white rounded-l-xs uppercase"
                />
                <button
                  type="submit"
                  className="bg-black hover:bg-orange-600 text-white font-mono text-[10px] font-bold px-4 rounded-r-xs uppercase cursor-pointer"
                  id="btn-apply-promo"
                >
                  VERIFY
                </button>
              </form>
              {promoMessage && (
                <p className={`text-[10px] font-mono mt-2 font-bold uppercase tracking-wider ${promoMessage.includes('INVALID') ? 'text-red-500' : 'text-green-600'}`}>
                  {promoMessage}
                </p>
              )}
            </div>

            {/* Secure payment trigger */}
            <div className="border-t border-gray-50 pt-5 mt-2 space-y-3">
              {transactProving ? (
                <button
                  disabled
                  className="w-full bg-[#111314] text-white py-4.5 rounded-xs font-display font-black text-xs tracking-widest flex items-center justify-center space-x-2 w-full cursor-not-allowed"
                >
                  <svg className="animate-spin h-4 w-4 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>MINTING SPEC SCHEMES...</span>
                </button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={runTransactSubmission}
                  className="w-full bg-gradient-to-r from-[#ff5722] to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white py-4.5 rounded-xs font-display font-black text-xs tracking-widest uppercase flex items-center justify-center space-x-2 w-full shadow-xl shadow-orange-500/25 cursor-pointer transition-all duration-300"
                  id="btn-checkout-transact"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>PAY ₹{totalCost.toFixed(2)} SECURE NOW</span>
                </motion.button>
              )}
              <div className="text-[9px] font-mono text-gray-400 text-center uppercase tracking-wider">
                LOCK🔒 // SECURE AES EXCHANGE CONFIRMED
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* FOOTER SLIDER RECOMMENDED CHIPS ("People Also Recommended") */}
      <section className="mt-16 border-t border-gray-150 pt-12">
        <h3 className="font-display font-black text-lg tracking-tight uppercase mb-6 text-gray-950 text-center sm:text-left">
          PEOPLE ALSO RECOMMENDED
        </h3>

        {/* Swipe or row of cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recommendedSliders.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100 rounded-sm p-4 hover:border-orange-200 transition-all shadow-3xs flex flex-col justify-between group"
            >
              <div className="bg-gray-50 p-2.5 rounded-xs flex items-center justify-center min-h-[140px] relative">
                {item.tags && item.tags[0] && (
                  <span className="absolute top-2 left-2 bg-[#ff5722] text-white text-[8px] font-mono px-1.5 py-0.5 rounded-xs uppercase">
                    {item.tags[0]}
                  </span>
                )}
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-28 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="pt-3 space-y-1.5">
                <div>
                  <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">
                    {item.brand}
                  </span>
                  <h4 className="font-display font-extrabold text-[11px] text-gray-900 group-hover:text-orange-600 transition-colors uppercase leading-tight line-clamp-1">
                    {item.name}
                  </h4>
                </div>

                <div className="flex justify-between items-center border-t border-gray-50 pt-2.5 mt-2">
                  <span className="font-mono text-xs font-bold text-gray-950">
                    ${item.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => {
                      addToCart(item, 10.5, 'Default White');
                    }}
                    className="p-1 border border-gray-150 hover:border-[#ff5722] hover:bg-[#ff5722] hover:text-white rounded-xs text-gray-500 transition-colors flex items-center justify-center cursor-pointer"
                    title="Merge config to bag"
                    id={`btn-slider-add-${item.id}`}
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
