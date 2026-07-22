import React from 'react';
import { ShoppingBag, Search } from 'lucide-react';
import { ScreenType } from '../types';

interface HeaderProps {
  currentScreen: ScreenType;
  setScreen: (screen: ScreenType) => void;
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, setScreen, cartCount }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs transition-shadow">
      {/* Top micro-banner */}
      <div className="bg-black text-white text-[11px] font-mono tracking-widest text-center py-2 uppercase px-4 flex justify-between items-center max-w-7xl mx-auto md:px-8">
        <span>STRIDEX ELITE LABS // GLOBAL RELEASE PROVISION</span>
        <div className="hidden sm:flex items-center gap-4">
          <span>FREE EXPRESS TARGET SHIPPING OVER ₹150</span>
          <span className="text-[#ff5722]">CODE: STRIDEX7</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-18">
        {/* Brand Logo - aggressive, high-contrast, modern display typography */}
        <button
          onClick={() => setScreen('home')}
          className="group flex items-center space-x-2 text-left cursor-pointer"
          id="btn-logo"
        >
          <div className="bg-[#ff5722] text-white p-1.5 font-black text-lg skew-x-12 flex items-center justify-center w-9 h-9 shadow-md group-hover:scale-105 transition-all duration-300">
            S
          </div>
          <div>
            <span className="font-display font-black text-xl tracking-tighter text-gray-900 leading-none block">
              STRID<span className="text-[#ff5722]">Ξ</span>X
            </span>
            <span className="font-mono text-[9px] tracking-widest text-[#888888] uppercase block">
              FOOTWEAR SYSTEM
            </span>
          </div>
        </button>

        {/* Global Navigation links with active style indicators */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 font-display font-bold text-xs tracking-widest">
          <button
            onClick={() => setScreen('home')}
            className={`cursor-pointer transition-colors pb-1 border-b-2 uppercase py-1 ${
              currentScreen === 'home'
                ? 'text-gray-900 border-[#ff5722]'
                : 'text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-200'
            }`}
            id="nav-home"
          >
            HOME
          </button>
          <button
            onClick={() => setScreen('about')}
            className={`cursor-pointer transition-colors pb-1 border-b-2 uppercase py-1 ${
              currentScreen === 'about'
                ? 'text-gray-900 border-[#ff5722]'
                : 'text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-200'
            }`}
            id="nav-about"
          >
            ABOUT
          </button>
          <button
            onClick={() => setScreen('contact')}
            className={`cursor-pointer transition-colors pb-1 border-b-2 uppercase py-1 ${
              currentScreen === 'contact'
                ? 'text-gray-900 border-[#ff5722]'
                : 'text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-200'
            }`}
            id="nav-contact"
          >
            CONTACT
          </button>
          <button
            onClick={() => setScreen('listing')}
            className={`cursor-pointer transition-colors pb-1 border-b-2 uppercase py-1 ${
              currentScreen === 'listing'
                ? 'text-gray-900 border-[#ff5722]'
                : 'text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-200'
            }`}
            id="nav-listing"
          >
            SNEAKERS CATALOG
          </button>
          <button
            onClick={() => setScreen('bag')}
            className={`cursor-pointer transition-colors pb-1 border-b-2 uppercase py-1 ${
              currentScreen === 'bag'
                ? 'text-gray-900 border-[#ff5722]'
                : 'text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-200'
            }`}
            id="nav-bag"
          >
            MY BAG ({cartCount})
          </button>
        </nav>

        {/* Right tools (Search mockup + Dynamic Bag indicator) */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden lg:block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="QUICK DISCOVERY SPEC..."
              className="pl-9 pr-4 py-1.5 w-48 text-[11px] font-mono border border-gray-200 bg-gray-50 rounded-xs focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-orange-500 transition-all uppercase"
            />
          </div>

          <button
            onClick={() => setScreen('bag')}
            className="relative p-2 text-gray-700 hover:text-orange-600 transition-colors cursor-pointer flex items-center justify-center"
            aria-label="View Shopping bag"
            id="btn-header-bag"
          >
            <ShoppingBag className="w-5.5 h-5.5 stroke-[1.8]" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#ff5722] text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center ring-2 ring-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
