import React, { useState } from 'react';
import { ScreenType, Product, CartItem } from './types';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { ListingView } from './components/ListingView';
import { DetailView } from './components/DetailView';
import { BagView } from './components/BagView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { SilkBackground } from './components/SilkBackground';
import { products } from './data';

export default function App() {
  const [currentScreen, setScreen] = useState<ScreenType>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('aero-core-velocity-elite');

  // Pre-populate cart items from the design spec
  const [cart, setCart] = useState<CartItem[]>(() => {
    return [
      {
        product: products[0],
        selectedSize: 10,
        selectedColor: 'Velocity Orange',
        quantity: 1
      }
    ];
  });

  const addToCart = (product: Product, size: number, color: string) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.selectedSize === size && item.selectedColor === color
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { product, selectedSize: size, selectedColor: color, quantity: 1 }];
    });
    setScreen('bag');
  };

  const updateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      setCart(prev => prev.filter((_, i) => i !== index));
    } else {
      setCart(prev => {
        const updated = [...prev];
        updated[index].quantity = newQty;
        return updated;
      });
    }
  };

  const removeItem = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const renderActiveScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeView setScreen={setScreen} setSelectedProductId={setSelectedProductId} />;
      case 'about':
        return <AboutView setScreen={setScreen} />;
      case 'contact':
        return <ContactView setScreen={setScreen} />;
      case 'listing':
        return <ListingView setScreen={setScreen} setSelectedProductId={setSelectedProductId} />;
      case 'detail':
        return (
          <DetailView
            productId={selectedProductId}
            setScreen={setScreen}
            addToCart={addToCart}
            productsList={products}
          />
        );
      case 'bag':
        return (
          <BagView
            cart={cart}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
            setScreen={setScreen}
          />
        );
      default:
        return <HomeView setScreen={setScreen} setSelectedProductId={setSelectedProductId} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] font-sans relative selection:bg-orange-500 selection:text-white flex flex-col justify-between">
      <SilkBackground />

      {/* Global Sticky Header */}
      <Header
        currentScreen={currentScreen}
        setScreen={setScreen}
        cartCount={totalCartCount}
      />

      {/* Main Content Area */}
      <main className="flex-grow pt-24">
        {renderActiveScreen()}
      </main>

      {/* Standard brand footer */}
      <Footer setScreen={setScreen} />
    </div>
  );
}

