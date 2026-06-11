import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, SlidersHorizontal, ArrowUpDown, RefreshCw, X, ArrowRight } from 'lucide-react';
import { Product, ScreenType } from '../types';
import { products } from '../data';

interface ListingViewProps {
  setScreen: (screen: ScreenType) => void;
  setSelectedProductId: (id: string) => void;
}

export const ListingView: React.FC<ListingViewProps> = ({ setScreen, setSelectedProductId }) => {
  // Pre-filter catalog items to represent Sneakers primarily
  const sneakersList = useMemo(() => products.filter(p => p.category === 'Sneakers'), []);

  // Filter States
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(260);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Available unique filter values
  const allBrands = useMemo(() => Array.from(new Set(sneakersList.map(p => p.brand))), [sneakersList]);
  const allSizes = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12];
  
  // Custom color labels matching mocks
  const colorSwatches = [
    { label: 'Orange', value: '#ff5722' },
    { label: 'Black', value: '#1a1c1c' },
    { label: 'White', value: '#ffffff' },
    { label: 'Acid Green', value: '#CCFF00' },
    { label: 'Grey', value: '#5f5e5e' },
    { label: 'Cream', value: '#E5D3B3' }
  ];

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleSize = (size: number) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (colorLabel: string) => {
    setSelectedColors(prev =>
      prev.includes(colorLabel) ? prev.filter(c => c !== colorLabel) : [...prev, colorLabel]
    );
  };

  const resetFilters = () => {
    setSelectedBrands([]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setMaxPrice(260);
    setSearchQuery('');
    setSortBy('featured');
  };

  // Perform dynamic filtering matches
  const filteredProducts = useMemo(() => {
    return sneakersList.filter(p => {
      // 1. Search query match
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesDesc = p.description?.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc) return false;
      }

      // 2. Brand match
      if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) {
        return false;
      }

      // 3. Price match
      if (p.price > maxPrice) {
        return false;
      }

      // 4. Size match (matches if product has sizes listed AND matches any selected size)
      if (selectedSizes.length > 0) {
        if (!p.sizes) return false;
        const hasSize = p.sizes.some(size => selectedSizes.includes(size));
        if (!hasSize) return false;
      }

      // 5. Color match
      if (selectedColors.length > 0) {
        if (!p.colors || !p.colorNames) return false;
        // Check if any selected colors match either hex colors or colorNames list
        const haseColorName = selectedColors.some(selColor => {
          const lowerHexList = p.colors?.map(c => c.toLowerCase()) || [];
          const lowerNamesList = p.colorNames?.map(n => n.toLowerCase()) || [];
          
          if (selColor === 'Orange' && (lowerHexList.includes('#ff5722') || lowerNamesList.some(n => n.includes('orange')))) return true;
          if (selColor === 'Black' && (lowerHexList.includes('#1a1c1c') || lowerHexList.includes('#000000') || lowerNamesList.some(n => n.includes('black') || n.includes('charcoal') || n.includes('carbon') || n.includes('obsidian')))) return true;
          if (selColor === 'White' && (lowerHexList.includes('#ffffff') || lowerHexList.includes('#e2e2e2') || lowerHexList.includes('#e4e2e2') || lowerNamesList.some(n => n.includes('white') || n.includes('pristine')))) return true;
          if (selColor === 'Acid Green' && (lowerHexList.includes('#ccff00') || lowerNamesList.some(n => n.includes('acid') || n.includes('green')))) return true;
          if (selColor === 'Grey' && (lowerHexList.includes('#5f5e5e') || lowerNamesList.some(n => n.includes('grey') || n.includes('slate')))) return true;
          if (selColor === 'Cream' && (lowerHexList.includes('#e5d3b3') || lowerNamesList.some(n => n.includes('cream') || n.includes('tan')))) return true;

          return false;
        });

        if (!haseColorName) return false;
      }

      return true;
    }).sort((a, b) => {
      // Sorting
      if (sortBy === 'price-low') {
        return a.price - b.price;
      }
      if (sortBy === 'price-high') {
        return b.price - a.price;
      }
      if (sortBy === 'rating') {
        return (b.rating || 0) - (a.rating || 0);
      }
      return 0; // Default featured sort (the original list)
    });
  }, [sneakersList, selectedBrands, selectedSizes, selectedColors, maxPrice, searchQuery, sortBy]);

  const handleProductSelect = (id: string) => {
    setSelectedProductId(id);
    setScreen('detail');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      {/* 1. Page Header */}
      <div className="border-b border-gray-100 pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="font-mono text-[9px] tracking-widest text-[#ff5722] font-semibold uppercase block">
            STRIDEX PLATFORM CATALOG // SNEAKERS
          </span>
          <h1 className="font-display font-black text-2xl sm:text-3xl tracking-tight uppercase mt-0.5">
            SNEAKERS CATALOG
          </h1>
          <p className="text-xs text-gray-400 mt-1 uppercase font-mono">
            {filteredProducts.length} SYSTEM COMPOUND{filteredProducts.length !== 1 ? 'S' : ''} ALIVE // PAGE 1 OF 1
          </p>
        </div>

        {/* Global Catalog Controls */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {/* Quick Search */}
          <div className="relative flex-1 md:w-56 md:flex-none">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Search className="w-3.5 h-3.5" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH CATALOG SPEC..."
              className="pl-8.5 pr-4 py-2 w-full text-[11px] font-mono border border-gray-200 bg-white rounded-xs focus:ring-1 focus:ring-orange-500 uppercase focus:outline-hidden"
            />
          </div>

          {/* Sorter */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="pl-3 pr-8 py-2 text-[11px] bg-white border border-gray-200 rounded-xs font-mono uppercase tracking-wider focus:outline-hidden text-gray-800"
            >
              <option value="featured">BEST REGISTER MATCH</option>
              <option value="price-low">PRICE: LOW TO HIGH</option>
              <option value="price-high">PRICE: HIGH TO LOW</option>
              <option value="rating">HIGHEST TEST STARS</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* SIDEBAR FILTERS (4 Columns on large) */}
        <aside className="lg:col-span-3 space-y-6 lg:sticky lg:top-28">
          <div className="bg-white border border-gray-100 p-5 rounded-xs space-y-6">
            {/* Header reset button */}
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="text-xs font-display font-bold uppercase tracking-wider text-gray-900 flex items-center gap-1.5">
                <SlidersHorizontal className="w-4 h-4 text-[#ff5722]" />
                DIAGNOSTIC FILTERS
              </span>
              <button
                onClick={resetFilters}
                className="text-[10px] font-mono hover:text-[#ff5c00] text-gray-400 flex items-center gap-1.5 transition-colors cursor-pointer uppercase"
                id="btn-reset-filters"
              >
                <RefreshCw className="w-3 h-3" />
                RESET ALL
              </button>
            </div>

            {/* BRAND FILTER */}
            <div className="space-y-2.5">
              <h4 className="text-[10px] font-mono font-bold text-gray-400 tracking-wider uppercase">
                BRAND SYSTEM
              </h4>
              <div className="flex flex-col space-y-1.5">
                {allBrands.map(brand => (
                  <label key={brand} className="flex items-center space-x-2.5 text-xs text-gray-700 cursor-pointer hover:text-gray-900 font-sans">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="rounded-sm border-gray-300 text-orange-600 focus:ring-orange-500 w-3.5 h-3.5"
                    />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* SIZING FILTER - responsive wrap pill list */}
            <div className="space-y-2.5 border-t border-gray-50 pt-5">
              <h4 className="text-[10px] font-mono font-bold text-gray-400 tracking-wider uppercase">
                PRO SIZINGS US
              </h4>
              <div className="grid grid-cols-4 gap-1.5">
                {allSizes.map(size => {
                  const active = selectedSizes.includes(size);
                  return (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`py-1.5 text-[10px] font-mono border rounded-xs transition-colors font-bold cursor-pointer outline-hidden ${
                        active
                          ? 'border-orange-500 bg-orange-500 text-white'
                          : 'border-gray-200 text-gray-800 hover:border-gray-900'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* COLOR DOTS FILTER */}
            <div className="space-y-2.5 border-t border-gray-50 pt-5">
              <h4 className="text-[10px] font-mono font-bold text-gray-400 tracking-wider uppercase">
                COLOR COMPOUNDS
              </h4>
              <div className="flex flex-wrap gap-2">
                {colorSwatches.map(color => {
                  const active = selectedColors.includes(color.label);
                  return (
                    <button
                      key={color.label}
                      onClick={() => toggleColor(color.label)}
                      title={color.label}
                      className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all cursor-pointer relative ${
                        active ? 'ring-2 ring-orange-500 scale-105 border-white' : 'border-gray-200 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.value === '#ffffff' ? '#fcfcfc' : color.value }}
                    >
                      {color.label === 'White' && <div className="absolute inset-0 rounded-full border border-gray-150 pointer-events-none" />}
                      {active && (
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: color.label === 'White' ? '#000000' : '#ffffff' }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* PRICE FILTER SLIDER */}
            <div className="space-y-2.5 border-t border-gray-50 pt-5">
              <div className="flex justify-between items-baseline text-[10px] font-mono font-bold tracking-wider text-gray-400">
                <span className="uppercase">PRICE TRESHOLD</span>
                <span className="text-gray-900">${maxPrice}</span>
              </div>
              <input
                type="range"
                min="100"
                max="260"
                step="5"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-orange-600 h-1 bg-gray-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between items-center text-[9px] text-gray-400 font-mono">
                <span>$100.00</span>
                <span>$260.00</span>
              </div>
            </div>
          </div>
        </aside>

        {/* PRODUCTS GRID AREA (9 Columns on large) */}
        <main className="lg:col-span-9 space-y-8">
          {filteredProducts.length === 0 ? (
            <div className="bg-white border border-gray-100 text-center py-20 px-4 rounded-xs space-y-4">
              <span className="text-3xl">🧩</span>
              <h3 className="font-display font-extrabold text-sm tracking-wide uppercase text-gray-900">
                NO REGISTER CONFORMS TO FILTER SPECIFICATION
              </h3>
              <p className="text-xs text-gray-400 max-w-sm mx-auto">
                No designs matches your brand, size, or color specifications. Please expand your threshold values or reload default configurations.
              </p>
              <button
                onClick={resetFilters}
                className="bg-black hover:bg-orange-600 text-white font-mono text-[10px] tracking-widest px-5 py-2.5 uppercase transition-colors font-bold cursor-pointer rounded-xs"
              >
                RELOAD DIRECTORIES
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => handleProductSelect(p.id)}
                  className="bg-white group cursor-pointer border border-gray-100 rounded-sm hover:border-orange-200 transition-all shadow-2xs hover:shadow-md flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Image Box */}
                  <div className="bg-gray-50 pt-6 pb-6 px-4 overflow-hidden relative flex items-center justify-center min-h-[220px]">
                    {p.tags && p.tags[0] && (
                      <span className="absolute top-3 left-3 bg-[#ff5722] text-white text-[9px] font-mono tracking-widest font-extrabold uppercase px-2 py-1 rounded-xs z-10">
                        {p.tags[0]}
                      </span>
                    )}
                    <img
                      src={p.image}
                      alt={p.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-44 object-contain mix-blend-multiply group-hover:scale-108 transition-all duration-500"
                    />
                  </div>

                  {/* Info details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <div className="flex justify-between items-baseline">
                        <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                          {p.brand}
                        </span>
                        <span className="text-[10px] text-gray-300 font-mono">
                          SIZES UP TO 12
                        </span>
                      </div>
                      <h3 className="font-display font-black text-sm tracking-wide text-gray-900 group-hover:text-orange-600 transition-colors uppercase mt-0.5 line-clamp-1">
                        {p.name}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-gray-50 mt-1">
                      <span className="font-mono font-black text-sm text-gray-900">
                        ${p.price.toFixed(2)}
                      </span>
                      <span className="text-[10px] font-mono text-gray-400 group-hover:text-[#ff5c00] flex items-center gap-1.5 transition-colors uppercase tracking-widest font-extrabold">
                        SELECT <ArrowRight className="w-3.0 h-3.0 text-[#ff5722]" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
