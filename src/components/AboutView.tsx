import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Award, ArrowRight, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { ScreenType } from '../types';

interface AboutViewProps {
  setScreen: (screen: ScreenType) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setScreen }) => {
  return (
    <div className="bg-[#fbfbfb] text-gray-900 min-h-screen py-16 px-4 md:px-8 space-y-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto text-center space-y-6 pt-10">
        <div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-200 px-4 py-1.5 text-xs font-mono tracking-widest text-[#ff5722] uppercase rounded-full">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>STRIDEX ELITE LABS // BRAND MANIFESTO</span>
        </div>
        <h1 className="font-display font-black text-4xl sm:text-6xl tracking-tight uppercase max-w-4xl mx-auto leading-none">
          ENGINEERED FOR <span className="text-[#ff5722]">ABSOLUTE VELOCITY</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
          Founded on principles of extreme biomechanics and uncompromising material science. We craft footwear systems that defy traditional friction and elevate human kinetic potential.
        </p>
      </section>

      {/* Visual Showcase Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-gray-200 p-8 rounded-xl shadow-xs space-y-4 hover:border-orange-500 transition-colors"
        >
          <div className="w-12 h-12 bg-orange-50 text-[#ff5722] flex items-center justify-center rounded-lg font-mono font-bold text-lg">
            01
          </div>
          <h3 className="font-display font-bold text-xl uppercase tracking-tight">Nitrogen Core Foams</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our supercritical nitrogen infusion process creates a cellular foam matrix that returns 92% of impact energy into forward propulsion.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white border border-gray-200 p-8 rounded-xl shadow-xs space-y-4 hover:border-orange-500 transition-colors"
        >
          <div className="w-12 h-12 bg-orange-50 text-[#ff5722] flex items-center justify-center rounded-lg font-mono font-bold text-lg">
            02
          </div>
          <h3 className="font-display font-bold text-xl uppercase tracking-tight">Carbon Trajectory Plates</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Curved 3K carbon-fiber plates tuned specifically for each shoe size to deliver torsional rigidity and an explosive toe-off snap.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white border border-gray-200 p-8 rounded-xl shadow-xs space-y-4 hover:border-orange-500 transition-colors"
        >
          <div className="w-12 h-12 bg-orange-50 text-[#ff5722] flex items-center justify-center rounded-lg font-mono font-bold text-lg">
            03
          </div>
          <h3 className="font-display font-bold text-xl uppercase tracking-tight">Aero Weave Uppers</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Monofilament engineered yarns mapped using pressure-point sensors to eliminate hot spots while ensuring torrential breathability.
          </p>
        </motion.div>
      </section>

      {/* Brand Story Banner with Shoe Imagery */}
      <section className="max-w-7xl mx-auto bg-gray-900 text-white rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center shadow-xl">
        <div className="lg:col-span-6 p-8 md:p-14 space-y-6">
          <div className="font-mono text-xs tracking-widest text-[#ff5722] uppercase">
            // THE STRIDEX LABS FACILITY
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight leading-none">
            WHERE SCIENCE MEETS FOOTWEAR ARTISTRY
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Every StrideX silhouette undergoes 4,000 hours of stress testing in our wind tunnel and kinetic motion capture laboratories. We refuse to compromise on grip, weight, or durability.
          </p>
          <div className="space-y-3 font-mono text-xs text-gray-300">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff5722]" />
              <span>ISO-9001 certified kinetic testing protocols</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff5722]" />
              <span>Zero-waste recycled composite upper threads</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff5722]" />
              <span>World-class marathon champion endorsements</span>
            </div>
          </div>
          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setScreen('listing')}
              className="bg-gradient-to-r from-[#ff5722] to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-display font-bold text-xs tracking-widest px-8 py-4 uppercase flex items-center space-x-2 transition-all cursor-pointer rounded-xs shadow-xl shadow-orange-500/20"
            >
              <span>BROWSE SNEAKERS CATALOG</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
        <div className="lg:col-span-6 relative bg-gradient-to-br from-gray-800 to-black p-8 flex items-center justify-center min-h-[400px]">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg0Je9FRrYUxtQUpMMzUeNEE9EmEAzvYn9rh8coJPD3BrldDrXlrgx9aHtnNsvP-MXZCobquB273keA3KRsI5L8a-Q89bc2hQMlHFDCs65bcPBvaUPEyKLtGXq8xrGgxCRnzLrXNdwnzdrlSfWNHm2oV4OlbhdyGNrtzeh2cCrkBRLQQegK-zC82ezMLfRsTLFOhwNsT_ZX5eNMAtPRDxwkpBQCMgptXsjnIhKbsi7xjP7wy0GqggU3y_Mbw5XYrVQour8NHN5Wa4h"
            alt="StrideX Advanced Prototype"
            referrerPolicy="no-referrer"
            className="w-full max-w-md object-contain drop-shadow-[0_25px_50px_rgba(255,87,34,0.3)] hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>
    </div>
  );
};
