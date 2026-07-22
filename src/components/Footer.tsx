import React from 'react';
import { Send, Cpu, Award, RefreshCw, Star } from 'lucide-react';
import { ScreenType } from '../types';

interface FooterProps {
  setScreen: (screen: ScreenType) => void;
}

export const Footer: React.FC<FooterProps> = ({ setScreen }) => {
  return (
    <footer className="bg-[#121314] text-gray-400 font-sans border-t border-gray-800">
      {/* Upper Specs Feature Grid */}
      <div className="border-b border-gray-850 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start space-x-4">
            <div className="p-2.5 bg-gray-900 border border-gray-800 text-[#ff5722] rounded-xs">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-display font-semibold text-sm tracking-wide">ELITE LAB RESPONSIVENESS</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Nitrogen-infused foam compounds engineered for maximal energy transmission and kinetic impact deceleration.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-2.5 bg-gray-900 border border-gray-800 text-[#ff5722] rounded-xs">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-display font-semibold text-sm tracking-wide">30-DAY TRIAL WARRANTY</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Take them for a test sprint. If they do not amplify your kinetic cycle, return them no questions asked.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-2.5 bg-gray-900 border border-gray-800 text-[#ff5722] rounded-xs">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-display font-semibold text-sm tracking-wide">STRIDEX RECYCLING ECO</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Send back your tired footwear. We dismantle, recycle, and repurpose for premium training track bases.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Sitemap & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Branding description */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="bg-[#ff5722] text-white p-1 font-black text-sm skew-x-12">
              S
            </div>
            <span className="font-display font-black text-lg tracking-tighter text-white">
              STRID<span className="text-[#ff5c00]">Ξ</span>X ELITE
            </span>
          </div>
          <p className="text-xs leading-relaxed text-gray-500">
            A state-of-the-art laboratory for high-end athletic footwear design. Our mission is pure, unchecked speed with comfortable wear mechanics.
          </p>
          <div className="pt-2 text-xs font-mono text-gray-600 flex flex-col gap-1">
            <span>OPERATING: INITIATED // v1.4</span>
            <span>SYSTEM HOST: GLOBAL INGRESS</span>
          </div>
        </div>

        {/* Directory Columns */}
        <div>
          <h4 className="font-display font-bold text-xs tracking-widest text-[#ff5722] uppercase mb-4">NAVIGATION</h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <button onClick={() => setScreen('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                HOME
              </button>
            </li>
            <li>
              <button onClick={() => setScreen('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                ABOUT
              </button>
            </li>
            <li>
              <button onClick={() => setScreen('contact')} className="hover:text-white transition-colors cursor-pointer text-left">
                CONTACT
              </button>
            </li>
            <li>
              <button onClick={() => setScreen('listing')} className="hover:text-white transition-colors cursor-pointer text-left">
                SNEAKERS CATALOG
              </button>
            </li>
            <li>
              <button onClick={() => setScreen('bag')} className="hover:text-white transition-colors cursor-pointer text-left">
                MY BAG
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-xs tracking-widest text-white uppercase mb-4">SUPPORT CHANNELS</h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <a href="#" className="hover:text-white transition-colors">TRACK ORDER SPEC</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">KINETIC RETURNS</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">WARRANTY REPORT</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">AFFILIATE NETWORK</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-xs tracking-widest text-white uppercase">ELITE COMMUNIQUE</h4>
          <p className="text-xs text-gray-500 leading-relaxed">
            Register to join our private release list. Recieve blueprint drafts and early access notifications of prototype drops.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); alert("System provisioning complete. You are registered."); }} className="flex">
            <input
              type="email"
              required
              placeholder="ENTER ENCRYPTION EMAIL"
              className="bg-gray-900 border border-gray-800 text-white text-xs px-3 py-2 w-full focus:outline-hidden focus:border-[#ff5722] font-mono rounded-l-xs uppercase"
            />
            <button
              type="submit"
              className="bg-[#ff5722] text-white px-3 py-2 hover:bg-orange-600 transition-colors flex items-center justify-center rounded-r-xs cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>

      {/* Under Credits */}
      <div className="bg-black/80 py-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-gray-600 gap-4">
          <span>&copy; {new Date().getFullYear()} STRIDEX FOOTWEAR INC. ALL BLUEPRINT SCHEMES PRESERVED.</span>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">PRIVACY PROTOCOL</a>
            <a href="#" className="hover:text-white">TERMS OF OPERATION</a>
            <a href="#" className="hover:text-white">API DEPLOYMENT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
