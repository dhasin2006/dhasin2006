import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ShieldAlert, ShoppingBag, Plus, Sparkles, ChevronDown, Check, ArrowRight } from 'lucide-react';
import { Product, CartItem, ScreenType } from '../types';
import { products } from '../data';

interface DetailViewProps {
  productId: string;
  setScreen: (screen: ScreenType) => void;
  addToCart: (product: Product, size: number, color: string) => void;
  productsList: Product[];
}

export const DetailView: React.FC<DetailViewProps> = ({
  productId,
  setScreen,
  addToCart,
  productsList
}) => {
  // Find target product (default to main detail product)
  const product = productsList.find(p => p.id === productId) || productsList[0];

  // Image & Color coordination state
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<number>(9.5);
  const [selectedColor, setSelectedColor] = useState<string>(product.colorNames ? product.colorNames[0] : 'Velocity Orange');
  const [successMessage, setSuccessMessage] = useState<boolean>(false);

  // Accordion active toggle states
  const [activeSpecsTab, setActiveSpecsTab] = useState<string>('cushion');

  // Reset indices if the product changes
  useEffect(() => {
    setActiveImageIndex(0);
    if (product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[Math.floor(product.sizes.length / 2)]);
    }
    if (product.colorNames && product.colorNames.length > 0) {
      setSelectedColor(product.colorNames[0]);
    }
  }, [product]);

  // Handle color swatch clicks - also changes active image to represent color variation
  const handleColorChange = (colorName: string, index: number) => {
    setSelectedColor(colorName);
    // If we have distinct images mapped, swap index
    if (product.images && index < product.images.length) {
      setActiveImageIndex(index);
    }
  };

  const handleAddToBag = () => {
    addToCart(product, selectedSize, selectedColor);
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
    }, 2500);
  };

  // Complete your kit recommendations
  const recommendedKitIds = [
    'aero-core-training-crew',
    'velocity-performance-short',
    'wind-shield-pro-jacket',
    'terra-grip-trail-runner'
  ];
  const kitItems = products.filter(p => recommendedKitIds.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      {/* Dynamic Success Alert Message */}
      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-55 bg-gradient-to-r from-green-500 to-emerald-600 border border-green-400 text-white shadow-xl px-6 py-4 flex items-center space-x-3 rounded-xs font-mono text-xs uppercase tracking-widest min-w-[280px] sm:min-w-[420px]"
          >
            <div className="bg-white/25 rounded-full p-1">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <div>
              <p className="font-bold">SPEC ADDED TO BAG SUCCESS</p>
              <p className="text-[10px] text-green-150">
                {product.name} // SIZE {selectedSize} // {selectedColor}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Breadcrumb */}
      <div className="mb-6 text-[10px] uppercase font-mono tracking-widest text-gray-400 flex items-center space-x-2">
        <button onClick={() => setScreen('home')} className="hover:text-black">HOME</button>
        <span>/</span>
        <button onClick={() => setScreen('listing')} className="hover:text-black">CATALOG</button>
        <span>/</span>
        <span className="text-gray-900 font-bold">{product.name}</span>
      </div>

      {/* Main product configuration block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 leading-relaxed">
        
        {/* Gallery Panel (7 Column width on large) */}
        <div className="lg:col-span-7 flex flex-col md:flex-row-reverse gap-4">
          
          {/* Large Main Showcase Area */}
          <div className="flex-1 bg-gray-50 border border-gray-100 rounded-sm p-6 relative flex items-center justify-center min-h-[360px] md:min-h-[480px]">
            {product.tags && product.tags[0] && (
              <span className="absolute top-4 left-4 bg-black text-white text-[9px] font-mono tracking-widest font-extrabold uppercase px-2 py-1.5 rounded-sm z-10">
                PRO LAB APPROVED // {product.tags[0]}
              </span>
            )}

            <motion.img
              key={activeImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={product.images ? product.images[activeImageIndex] : product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full max-h-[380px] object-contain mix-blend-multiply drop-shadow-[0_12px_24px_rgba(0,0,0,0.06)]"
            />

            {/* Dynamic decorative specifications overlay (No-larping, purely useful specs) */}
            <div className="absolute bottom-4 right-4 text-right hidden sm:block">
              <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest block">ANGLE VARIATION CODE</span>
              <span className="font-mono text-xs text-gray-900 font-bold uppercase block">
                [V00{activeImageIndex + 1}_SPEC]
              </span>
            </div>
          </div>

          {/* Alternate Thumbnail Strip (Vertical layout on medium+, Horizontal on mobile) */}
          <div className="flex md:flex-col gap-3 flex-row overflow-x-auto hide-scrollbar shrink-0 w-full md:w-24">
            {product.images && product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`flex-none w-18 h-18 bg-gray-50 border rounded-xs flex items-center justify-center p-1 cursor-pointer transition-all ${
                  activeImageIndex === index
                    ? 'border-orange-500 ring-1 ring-orange-200'
                    : 'border-gray-200 hover:border-gray-900'
                }`}
              >
                <img
                  src={img}
                  alt={`Angle variation ${index + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Content Configuration Form (5 Column width on large) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-1.5">
            <span className="font-mono text-[10px] tracking-widest text-[#ff5722] font-black uppercase block">
              {product.brand} // ENGINEERING LABS
            </span>
            <h1 className="font-display font-black text-3xl xl:text-4xl tracking-tight uppercase leading-none text-gray-900">
              {product.name}
            </h1>
            
            {/* Stars rating mockup info */}
            <div className="flex items-center space-x-2 pt-1">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-[11px] font-mono font-bold text-gray-600 uppercase tracking-widest">
                {product.rating || '4.5'} RATING // ({product.reviewsCount || '1,248'} REVIEWS)
              </span>
            </div>
          </div>

          {/* Pricing tier */}
          <div className="bg-[#111314] text-white p-4 rounded-xs flex justify-between items-center relative overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-orange-500/20 to-transparent pointer-events-none" />
            <div>
              <span className="text-[9px] font-mono text-gray-400 block tracking-widest uppercase">SPEC PRICE PROVISION</span>
              <span className="font-mono text-2xl font-black tracking-tight text-white">
                ${product.price.toFixed(2)}
              </span>
            </div>
            <div className="text-right">
              <span className="text-green-400 font-mono text-[10px] tracking-wider block font-bold">
                ● EXEMPT FROM CUSTOMS TAX
              </span>
              <span className="text-gray-400 font-mono text-[9px] block">
                OVERNIGHT LOGISTICS DIRECT
              </span>
            </div>
          </div>

          <p className="text-xs text-gray-500 leading-relaxed font-sans mt-2">
            {product.description || 'Premium high-performance elite athletic footwear configured with our custom kinetic responsive design formulas.'}
          </p>

          {/* COLOR SELECTOR SWATCHES */}
          {product.colorNames && product.colorNames.length > 0 && (
            <div className="space-y-2.5 pt-2 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase">
                  COLOR PATHWAY
                </span>
                <span className="text-[10px] font-mono font-black text-gray-900 uppercase">
                  {selectedColor}
                </span>
              </div>
              <div className="flex gap-2.5">
                {product.colorNames.map((colorName, idx) => {
                  const hex = product.colors && product.colors[idx] ? product.colors[idx] : '#000';
                  const active = selectedColor === colorName;
                  return (
                    <button
                      key={colorName}
                      onClick={() => handleColorChange(colorName, idx)}
                      title={colorName}
                      className={`h-8 px-3.5 rounded-sm border text-[10px] font-mono font-bold uppercase transition-all tracking-wider cursor-pointer flex items-center space-x-1.5 ${
                        active
                          ? 'border-orange-500 bg-orange-500 text-white shadow-xs'
                          : 'border-gray-200 bg-white text-gray-800 hover:border-gray-900'
                      }`}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full border border-black/10 shrink-0"
                        style={{ backgroundColor: hex }}
                      />
                      <span>{colorName.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* SIZE SELECTOR */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="space-y-2.5 pt-2 border-t border-gray-100">
              <div className="flex justify-between items-center text-[10px] font-mono">
                <span className="font-bold tracking-widest text-gray-400 uppercase">
                  US ATHLETIC SIZE
                </span>
                <span className="text-[#ff5722] hover:underline cursor-pointer uppercase font-black">
                  SIZING SPEC SHEET
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => {
                  const active = selectedSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 text-xs font-mono font-bold rounded-xs cursor-pointer transition-all border ${
                        active
                          ? 'border-orange-500 bg-orange-500 text-white scale-[1.02] shadow-xs'
                          : 'border-gray-200 text-gray-850 hover:border-gray-900'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ACTION BUTTONS */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAddToBag}
              className="flex-1 bg-[#ff5722] hover:bg-orange-600 text-white font-display font-black text-xs tracking-widest py-4 rounded-xs uppercase flex items-center justify-center space-x-2.5 shadow-lg shadow-orange-500/15 group cursor-pointer transition-all duration-300"
              id="btn-detail-add"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>STOW SPEC IN SHOPPING BAG</span>
            </button>
          </div>

          <div className="text-[10px] text-gray-400 font-mono flex items-center justify-center gap-1.5 p-3.5 bg-gray-50 border border-gray-100 rounded-xs uppercase">
            <ShieldAlert className="w-4 h-4 text-gray-400 flex-none" />
            <span>CRITICAL LOG: ONLY {Math.floor(Math.random() * 4) + 2} UNITS REGISTERED IN INVENTORY</span>
          </div>
        </div>
      </div>

      {/* Blueprints and specs accordion sections */}
      <section className="mt-20 border-t border-gray-150 pt-12">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="font-mono text-[10px] tracking-widest text-[#ff5722] font-black uppercase block">
            TECHNICAL COMPILING
          </span>
          <h2 className="font-display font-black text-2xl tracking-tight uppercase text-gray-900">
            SYSTEM ARCHITECTURES
          </h2>
          <div className="h-0.5 w-12 bg-[#ff5722] mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              id: 'cushion',
              title: 'NITRO-CORE POWER',
              tagline: 'Nitrogen-Infused Energy Core',
              desc: 'Our proprietary nitro-compound is forged under custom thermodynamic conditions, yielding a lightweight responsive matrix that yields extreme energy return and mitigates joint load cycles.'
            },
            {
              id: 'carbon',
              title: 'CARBON MATRIX GRID',
              tagline: '3K Structural Carbon Fiber',
              desc: 'An integrated custom carbon composite plate aligns with your natural foot strike trajectory, optimizing transition speed, ensuring high-strength lateral rigidity, and accelerating stride pacing.'
            },
            {
              id: 'airflow',
              title: 'HIGH-FLUID VENT UPPER',
              tagline: 'Structured Micro Dynamic Threads',
              desc: 'Crafted with premium high-tensile structural threads. Air flow channels run parallel along the instep, promoting dynamic climate cooling during active marathon stress tests.'
            }
          ].map((tab) => (
            <div
              key={tab.id}
              className="bg-white border border-gray-100 p-6 rounded-xs space-y-3 shadow-2xs hover:border-orange-200 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="text-[#ff5c00] font-mono text-[10px] font-black tracking-widest uppercase">
                  // {tab.title}
                </div>
                <h4 className="font-display font-extrabold text-sm text-gray-950 uppercase">
                  {tab.tagline}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-sans">
                  {tab.desc}
                </p>
              </div>
              <div className="pt-2 text-[10px] font-mono text-gray-300 uppercase">
                COMPOUND CODE RESYNCED
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUGGESTED COMPLEMENTARY GEAR KIT (Complete Your Kit section) */}
      <section className="mt-20 border-t border-gray-150 pt-12">
        <h3 className="font-display font-black text-xl tracking-tight text-gray-950 uppercase mb-8">
          COMPLETE THE LAB KIT
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {kitItems.map((kitItem) => (
            <div
              key={kitItem.id}
              className="bg-white border border-gray-100 group flex flex-col justify-between rounded-xs p-4 hover:border-orange-200 transition-all shadow-3xs"
            >
              <div className="bg-gray-50 p-4 rounded-xs overflow-hidden flex items-center justify-center min-h-[140px] relative">
                <img
                  src={kitItem.image}
                  alt={kitItem.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-28 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="pt-3 space-y-2">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block">
                    {kitItem.brand.split(' ')[1] || 'ACCESSORIES'}
                  </span>
                  <h4 className="font-display font-extrabold text-[11px] text-gray-900 group-hover:text-orange-500 transition-colors uppercase leading-tight line-clamp-1">
                    {kitItem.name}
                  </h4>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-gray-50">
                  <span className="font-mono text-xs font-black text-gray-900">
                    ${kitItem.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => {
                      addToCart(kitItem, 9.5, 'Default White');
                      setSuccessMessage(true);
                      setTimeout(() => setSuccessMessage(false), 2000);
                    }}
                    className="p-1 border border-gray-200 hover:border-[#ff5722] hover:bg-[#ff5722] hover:text-white rounded-xs transition-colors flex items-center justify-center text-gray-600 cursor-pointer"
                    title="Quick Add to Bag"
                    id={`btn-kit-add-${kitItem.id}`}
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
