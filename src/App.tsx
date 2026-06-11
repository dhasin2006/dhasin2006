import React, { useState } from 'react';
import { ScreenType, CartItem, Product } from './types';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { ListingView } from './components/ListingView';
import { DetailView } from './components/DetailView';
import { BagView } from './components/BagView';
import { Footer } from './components/Footer';
import { products } from './data';

export default function App() {
  const [currentScreen, setScreen] = useState<ScreenType>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('aero-core-velocity-elite');

  // Pre-populate cart items from the design spec
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Let's grab the initial 3 shoes from our catalog
    const velocityRunner = products.find(p => p.id === 'velocity-runner-elite');
    const gravityPro = products.find(p => p.id === 'gravity-pro-high');
    const apexTrail = products.find(p => p.id === 'apex-trail-30');

    const defaultCart: CartItem[] = [];

    if (velocityRunner) {
      defaultCart.push({
        product: velocityRunner,
        selectedSize: 10.5,
        selectedColor: 'Blaze Orange',
        quantity: 1
      });
    }

    if (gravityPro) {
      defaultCart.push({
        product: gravityPro,
        selectedSize: 11,
        selectedColor: 'Phantom Grey',
        quantity: 1
      });
    }

    if (apexTrail) {
      defaultCart.push({
        product: apexTrail,
        selectedSize: 10.5,
        selectedColor: 'Jet Black',
        quantity: 1
      });
    }

    return defaultCart;
  });

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const addToCart = (product: Product, size: number, color: string) => {
    setCart(prev => {
      // Check if duplicate entry already stowed
      const existingIdx = prev.findIndex(item =>
        item.product.id === product.id &&
        item.selectedSize === size &&
        item.selectedColor === color
      );

      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += 1;
        return copy;
      } else {
        return [...prev, { product, selectedSize: size, selectedColor: color, quantity: 1 }];
      }
    });
  };

  const renderActiveScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeView setScreen={setScreen} setSelectedProductId={setSelectedProductId} />;
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
            setCart={setCart}
            setScreen={setScreen}
            addToCart={addToCart}
          />
        );
      default:
        return <HomeView setScreen={setScreen} setSelectedProductId={setSelectedProductId} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-orange-500 bg-[#fbfbfb]">
      {/* Dynamic Header */}
      <Header currentScreen={currentScreen} setScreen={setScreen} cartCount={cartCount} />

      {/* Primary Display viewport */}
      <main className="flex-1">
        {renderActiveScreen()}
      </main>

      {/* Standard brand footer */}
      <Footer setScreen={setScreen} />
    </div>
  );
}
