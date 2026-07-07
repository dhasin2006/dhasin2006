import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Tag, Activity, Zap, Shield, ArrowUpRight } from 'lucide-react';
import { Product, ScreenType } from '../types';
import { products, testimonials } from '../data';
import { ImageTrail } from './ImageTrail';

interface HomeViewProps {
  setScreen: (screen: ScreenType) => void;
  setSelectedProductId: (id: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setScreen, setSelectedProductId }) => {
  // Filter only homepage trending items
  const trendingIds = ['apex-velocity-x', 'stealth-runner-v2', 'ignite-series-pro', 'cloudwalk-360'];
  const trendingProducts = products.filter(p => trendingIds.includes(p.id));

  // Sizing Simulator State
  const [distance, setDistance] = useState<string>('5k');
  const [pace, setPace] = useState<string>('medium');
  const [recommendation, setRecommendation] = useState<Product | null>(null);
  const [trailKey, setTrailKey] = useState<number>(0);

  const runSimulator = () => {
    // Recommend based on user choice
    if (distance === 'marathon') {
      // High distance -> Velocity Elite
      const elite = products.find(p => p.id === 'aero-core-velocity-elite');
      setRecommendation(elite || products[0]);
    } else if (pace === 'fast') {
      // Pace fast -> Velocity Runner Elite or Apex Velocity X
      const apex = products.find(p => p.id === 'apex-velocity-x');
      setRecommendation(apex || products[1]);
    } else {
      // Regular or recreational -> CloudWalk 360 or stealth runner
      const cloud = products.find(p => p.id === 'cloudwalk-360');
      setRecommendation(cloud || products[2]);
    }
  };

  const handleProductClick = (id: string) => {
    setSelectedProductId(id);
    setScreen('detail');
  };

  return (
    <div className="space-y-20 pb-20 overflow-hidden">
      {/* 1. Hero Banner Section */}
      <section className="relative bg-[#111314] text-white min-h-[580px] md:min-h-[660px] flex items-center overflow-hidden">
        {/* Abstract background vector lines and glows */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-orange-600/10 via-amber-600/5 to-transparent pointer-events-none" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1 text-xs font-mono tracking-widest text-[#ff5722] uppercase">
              <Zap className="w-3.5 h-3.5 fill-current animate-pulse" />
              <span>NEXT-GEN SILHOUETTES DROP</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-5xl xl:text-6xl tracking-tight leading-none uppercase">
              BREAK ALL <br />
              <span className="text-[#ff5c00] text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
                LIMITATION LABS
              </span>
            </h1>

            <p className="text-gray-400 text-sm md:text-base max-w-lg leading-relaxed font-sans">
              Experience the pinnacle of footwear engineering. StrideX design houses deliver unparalleled responsiveness, nitrogen-charged cushion cores, and custom carbon weave trajectories.
            </p>

            {/* Micro spec items */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/5 font-mono text-[11px] text-gray-400">
              <div>
                <span className="text-white font-bold block text-lg">+89%</span>
                ENERGY TRANSIT
              </div>
              <div>
                <span className="text-white font-bold block text-lg font-sans">198g</span>
                WEIGHT SPEC
              </div>
              <div>
                <span className="text-white font-bold block text-lg">3K WEAVE</span>
                CARBON SHIELD
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setScreen('listing')}
                className="bg-[#ff5722] hover:bg-orange-600 text-white font-display font-bold text-xs tracking-widest px-8 py-4 uppercase flex items-center space-x-2 shadow-lg hover:shadow-orange-500/25 transition-all cursor-pointer rounded-xs"
                id="hero-shop-now"
              >
                <span>EXPLORE ALL SNEAKERS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleProductClick('aero-core-velocity-elite')}
                className="bg-transparent hover:bg-white/5 border border-white/20 text-white font-display font-bold text-xs tracking-widest px-8 py-4 uppercase transition-all cursor-pointer rounded-xs"
                id="hero-view-featured"
              >
                AERO-CORE MODEL
              </button>
            </div>
          </div>

          {/* Hero Right Media */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Visual background circle base */}
            <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-white/5 bg-white/[0.01]" />
            <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full border border-dashed border-white/10" />

            <div className="relative group max-w-[440px]">
              {/* Dynamic Image with subtle rotation entrance */}
              <motion.img
                initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
                animate={{ opacity: 1, rotate: -5, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg0Je9FRrYUxtQUpMMzUeNEE9EmEAzvYn9rh8coJPD3BrldDrXlrgx9aHtnNsvP-MXZCobquB273keA3KRsI5L8a-Q89bc2hQMlHFDCs65bcPBvaUPEyKLtGXq8xrGgxCRnzLrXNdwnzdrlSfWNHm2oV4OlbhdyGNrtzeh2cCrkBRLQQegK-zC82ezMLfRsTLFOhwNsT_ZX5eNMAtPRDxwkpBQCMgptXsjnIhKbsi7xjP7wy0GqggU3y_Mbw5XYrVQour8NHN5Wa4h"
                alt="Aero-Core Velocity Elite Orange"
                referrerPolicy="no-referrer"
                className="w-full h-auto drop-shadow-[0_20px_40px_rgba(255,87,34,0.35)] object-contain relative z-10 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3"
              />

              {/* Float info pills */}
              <div className="absolute -top-4 right-4 bg-black/90 border border-[#ff5722] text-[#ff5722] font-mono text-[10px] tracking-widest px-3 py-1.5 rounded-xs shadow-md z-20 uppercase">
                STRIDEX AERO-CORE V2 // BRAND NEW
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gray-900 border border-gray-800 text-white font-mono text-[10px] tracking-widest px-3 py-1.5 rounded-xs shadow-md z-20 flex items-center space-x-1.5 uppercase">
                <Activity className="w-3.5 h-3.5 text-orange-500" />
                <span>SPEC PRICE // $224.99</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Style Categories Quick Navigation */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="font-mono text-[10px] tracking-widest text-[#ff5722] font-bold uppercase block">
            MODULAR CLASSIFICATION
          </span>
          <h2 className="font-display font-black text-2xl tracking-tight uppercase">
            TARGET PERFORMANCES
          </h2>
          <div className="h-0.5 w-12 bg-[#ff5722] mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: 'SNEAKERS CATALOG',
              label: 'Elite Lifestyle',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHlsZtNF8qmbnSvZ2Xb6ZLMjfQ4abo7KSe6calwxZTa7CAg7srJlDzH6Asx4O2GIH-Q9MnMvKTOhjtW52gMF1m1RwDdhw8s0fgupq1aCXj5r7PShmMjYy6kuPnMZUQ2LC-46xpbThWNjO7b969icYQe8eDkh0QcGPvfuyrOQ1KAB9fhG8vcV22GRgX6l_ppBSsBc1DdD060g3XIJk5Ru51bUK8VnYAziq2EdgbJsvAqdzA2yiOWMaChV7j6pxhWkl5xXS31HgftDbh',
              screen: 'listing' as ScreenType
            },
            {
              title: 'PRO RUNNING',
              label: 'Power Endurance',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOFlhNY5YbhPpdevlIWrVDXaFmUpQueqjL5mHXSi5tSlnX9RtkuBQQ82KV0NpViVmW_eqHjNndxwjDs0OffTJBhcJkrb2Fb6jvV2o7GqeJgNd5kMnwqZwkY1Wv4gscpLojodxZfeLHdg_jBv2IpLsdOylsmi_szAYQhQdIgAQWBo36jl9mOSHXt7OpCZIPqMPrucMaqoauRwsFC51kMwbruX96uuf26n9iLuZj9gqQBIWGiQPME7QRJ9ZYbBcbIU2aWpJXB47WiRHb',
              screen: 'listing' as ScreenType
            },
            {
              title: 'TACTICAL TRAINING',
              label: 'Lateral Force',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCV_F_EvRCpjSKgz19BnqGIQq2jbHpy95T8urRd9Jbk6Y92hi8A6aykEnr944xfpRnljB_eqfXSZOdpSi2hwHYq0QXckzkLjHOaqgqacqEwIwwrBDYs7A2gcnDD_JLf9Z6HVqGxbCz2qm9iw_bjmsu3OCXOrlYschMFhDEmv4GPCKjvXOrheSMnuzOcLyZdTmaHpQ_F0lyHmAXM3JphHKRt7kzIJrwZlpJ22MZCX_hXPer_XhinJefy6ctw1_tQhEHAGVVB6hGOEXAC',
              screen: 'listing' as ScreenType
            },
            {
              title: 'AERO-CORE ELITE',
              label: 'Special Edition',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY8oHKQQko-ytlc8tkRvLTdhaTBLKCKshdqeMKwYArXfz0S7-IeahyF_Z5VIq109B9ttJve_Nj0dPp6snBh47ydjrWRjjOpd0j3-jkGtsMSHmOnDQAy5zqeLvY3KUh0_yxT8-3h5bRTx_OZsvXrv0sJ3aTV6mJklPDlds-cPzjzWAP8skj8wKWlwCwqfci8FSMfZGYQOz5rMVqAUkMSTXO36VbHgaSuMrDPECIyg94nBS23XcqXubv7fX8nDq6XtTgx2CmksBlnAec',
              screen: 'detail' as ScreenType
            }
          ].map((cat, i) => (
            <button
              key={i}
              onClick={() => setScreen(cat.screen)}
              className="group relative h-48 bg-gray-900 overflow-hidden cursor-pointer rounded-xs border border-gray-100 flex flex-col justify-end p-5 text-left transition-all hover:border-[#ff5722]"
            >
              {/* Image base */}
              <img
                src={cat.image}
                alt={cat.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              <div className="relative z-10 text-white space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#ff5c00] font-bold block">{cat.label}</span>
                <h3 className="font-display font-bold text-sm tracking-wide flex items-center justify-between">
                  <span>{cat.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#ff5722]" />
                </h3>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 3. Trending Now Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 border-b border-gray-100 pb-4">
          <div className="space-y-1">
            <span className="font-mono text-[10px] tracking-widest text-[#ff5722] font-bold uppercase block">
              SEASONAL SELECTION
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight uppercase">
              TRENDING NOW
            </h2>
          </div>
          <button
            onClick={() => setScreen('listing')}
            className="text-xs font-mono font-bold tracking-widest text-gray-500 hover:text-black uppercase flex items-center space-x-1.5 transition-colors cursor-pointer mt-2 md:mt-0"
          >
            <span>VIEW COMPLETE CATALOG</span>
            <ArrowRight className="w-4 h-4 text-[#ff5722]" />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((p) => (
            <div
              key={p.id}
              onClick={() => handleProductClick(p.id)}
              className="bg-white group cursor-pointer border border-gray-100 relative rounded-sm shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
            >
              {/* Upper Image Zone */}
              <div className="relative bg-gray-50 pt-5 pb-5 px-4 overflow-hidden flex items-center justify-center min-h-[220px]">
                {p.tags && p.tags[0] && (
                  <span className="absolute top-3 left-3 bg-[#ff5722] text-white text-[9px] font-mono tracking-widest font-extrabold uppercase px-2 py-1 rounded-xs z-10">
                    {p.tags[0]}
                  </span>
                )}
                {/* Image display with responsive micro zoom */}
                <img
                  src={p.image}
                  alt={p.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-44 object-contain mix-blend-multiply group-hover:scale-108 transition-all duration-500"
                />
              </div>

              {/* Lower Info Area */}
              <div className="p-5 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block">
                    {p.brand}
                  </span>
                  <h3 className="font-display font-bold text-sm tracking-wide text-gray-900 group-hover:text-orange-600 transition-colors uppercase line-clamp-1">
                    {p.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-gray-50 mt-2">
                  <span className="font-mono font-black text-sm text-gray-900">
                    ${p.price.toFixed(2)}
                  </span>
                  {/* Miniature specs button or chevron */}
                  <span className="text-[10px] font-mono text-gray-400 group-hover:text-[#ff5c00] flex items-center gap-1 uppercase tracking-widest transition-colors font-bold">
                    SPEC <ArrowRight className="w-3 h-3 text-[#ff5722]" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Image Trail Showcase */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-6 border-b border-gray-100 pb-4">
          <div className="space-y-1">
            <span className="font-mono text-[10px] tracking-widest text-[#ff5722] font-bold uppercase block">
              KINETIC MOTION ENGINE
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight uppercase">
              INTERACTIVE IMAGE TRAIL
            </h2>
          </div>
          <button
            onClick={() => setTrailKey(prev => prev + 1)}
            className="text-xs font-mono font-bold tracking-widest text-[#ff5722] hover:underline uppercase flex items-center space-x-1.5 transition-colors cursor-pointer mt-2 md:mt-0"
          >
            <span>RESET TRAIL MATRIX</span>
          </button>
        </div>

        <div style={{ height: '500px', position: 'relative', overflow: 'hidden'}} className="shadow-xl rounded-sm">
          <ImageTrail
            key={trailKey}
            items={products.map(p => p.image)}
            variant="1"
          />
        </div>
      </section>

      {/* 4. Interactive Fit & Performance Matcher */}
      <section className="bg-white border-y border-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left copy */}
          <div className="md:col-span-5 space-y-4">
            <div className="inline-flex items-center space-x-1.5 bg-orange-100 text-[#ff5722] px-2.5 py-1 text-[10px] font-mono font-bold uppercase rounded-xs">
              <Activity className="w-3.5 h-3.5" />
              <span>DYNAMO MATRICES</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl tracking-tight uppercase leading-snug">
              FIND YOUR <br />
              SYSTEM MATCH
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed font-sans">
              Enter details of your targeted output cycle. Our system diagnostics will instantly recommend your optimal footwear layout compound.
            </p>
          </div>

          {/* Right form matcher */}
          <div className="md:col-span-7 bg-gray-50 border border-gray-100 p-6 rounded-xs space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400">
                  Sprint Distance Cycle
                </label>
                <select
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  className="w-full bg-white border border-gray-200 text-xs py-2 px-3 focus:outline-hidden focus:ring-1 focus:ring-orange-500 font-mono tracking-wider"
                >
                  <option value="5k">5K - 10K SPEED RUN</option>
                  <option value="half-marathon">HALF MARATHON SPRINT</option>
                  <option value="marathon">ULTRA MARATHON RUN</option>
                  <option value="casual">DAILY LIFE RECREATION</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400">
                  Pacing Intention
                </label>
                <select
                  value={pace}
                  onChange={(e) => setPace(e.target.value)}
                  className="w-full bg-white border border-gray-200 text-xs py-2 px-3 focus:outline-hidden focus:ring-1 focus:ring-orange-500 font-mono tracking-wider"
                >
                  <option value="fast">ELITE SPEED RACE ({'<'}4:00/km)</option>
                  <option value="medium">TEMPO ATHLETIC (4:00-5:30/km)</option>
                  <option value="slow">RECREATIONAL STEADY ({'>'}5:30/km)</option>
                </select>
              </div>
            </div>

            <button
              onClick={runSimulator}
              className="w-full bg-black hover:bg-[#ff5722] text-white py-3 text-[10px] font-mono tracking-widest uppercase transition-all duration-300 font-bold cursor-pointer rounded-xs"
              id="btn-run-simulator"
            >
              RUN DIAGNOSTIC ANALYTIC
            </button>

            {recommendation && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-orange-200 p-4 rounded-xs flex items-center space-x-4 mt-2"
              >
                <img
                  src={recommendation.image}
                  alt={recommendation.name}
                  referrerPolicy="no-referrer"
                  className="w-20 h-20 object-contain mix-blend-multiply flex-none"
                />
                <div className="flex-1 space-y-1">
                  <span className="text-[9px] font-mono text-[#ff5722] font-black uppercase tracking-widest">
                    SYSTEM REFORGED MATCH
                  </span>
                  <h4 className="font-display font-extrabold text-xs text-gray-950 uppercase">
                    {recommendation.name}
                  </h4>
                  <p className="text-[10px] text-gray-400 font-mono">
                    PRICE: ${recommendation.price.toFixed(2)} // {recommendation.brand}
                  </p>
                  <button
                    onClick={() => handleProductClick(recommendation.id)}
                    className="text-[10px] font-bold text-gray-900 border-b-2 border-orange-500 hover:text-orange-500 tracking-wider inline-block pt-1 uppercase cursor-pointer"
                  >
                    CONFIG VARIATION
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 5. Athlete Endorsements & Reviews */}
      <section className="max-w-7xl mx-auto px-4 md:px-8" id="testimonials">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="font-mono text-[10px] tracking-widest text-[#ff5722] font-bold uppercase block">
            VERIFIED CRITIQUES
          </span>
          <h2 className="font-display font-black text-2xl tracking-tight uppercase">
            ENDORSED BY THE ATHLETE FORCE
          </h2>
          <div className="h-0.5 w-12 bg-[#ff5722] mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-gray-100 p-6 rounded-xs shadow-2xs space-y-4 hover:border-orange-200 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex text-orange-500 space-x-0.5">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 italic leading-relaxed font-sans">
                  {t.quote}
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-4 border-t border-gray-50 mt-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <h4 className="font-display font-bold text-xs text-gray-900 uppercase">
                    {t.name}
                  </h4>
                  <span className="text-[10px] font-mono text-gray-400 tracking-wider">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
