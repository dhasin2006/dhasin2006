import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';
import { ScreenType } from '../types';

interface ContactViewProps {
  setScreen: (screen: ScreenType) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ setScreen }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#fbfbfb] text-gray-900 min-h-screen py-16 px-4 md:px-8 space-y-16">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4 pt-10">
        <div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-200 px-4 py-1.5 text-xs font-mono tracking-widest text-[#ff5722] uppercase rounded-full">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>STRIDEX LABS // SUPPORT CHANNEL</span>
        </div>
        <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight uppercase">
          CONNECT WITH OUR <span className="text-[#ff5722]">ENGINEERING TEAM</span>
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto font-sans leading-relaxed">
          Have questions regarding sizing specs, custom carbon plates, or global lab delivery? Send us a secure transmission.
        </p>
      </section>

      {/* Main Grid: Contact Form & Info Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-xs space-y-6">
            <h3 className="font-display font-bold text-xl uppercase tracking-tight">LAB LOCATIONS & DIRECT CHANNELS</h3>
            
            <div className="space-y-6 text-sm">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-orange-50 text-[#ff5722] rounded-lg shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-display">GLOBAL HQ // TOKYO LABS</h4>
                  <p className="text-gray-600 text-xs mt-0.5">Shibuya Kinetic Tower, 4-2-1 Tokyo 150-0002</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-orange-50 text-[#ff5722] rounded-lg shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-display">SECURE EMAIL SPEC</h4>
                  <p className="text-gray-600 text-xs mt-0.5">support@stridexlabs.sys</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-orange-50 text-[#ff5722] rounded-lg shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-display">COMMUNICATION LINE</h4>
                  <p className="text-gray-600 text-xs mt-0.5">+1 (800) 555-STRIDE (24/7)</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 font-mono text-[11px] text-gray-500">
              RESPONSE TIME: <span className="text-[#ff5722] font-bold">UNDER 2 HOURS</span> AVERAGE ACROSS ALL GLOBAL ZONES.
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-gray-200 p-8 md:p-10 rounded-xl shadow-sm">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-display font-black text-2xl uppercase tracking-tight">TRANSMISSION RECEIVED</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Thank you, <span className="font-bold text-gray-900">{formData.name}</span>. Our support engineering unit has received your inquiry and will reply to <span className="font-mono text-gray-900">{formData.email}</span> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-gray-900 hover:bg-black text-white font-display font-bold text-xs tracking-widest px-6 py-3 uppercase rounded-xs cursor-pointer transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-display font-bold text-xl uppercase tracking-tight">SEND A SECURE INQUIRY</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-mono font-bold text-gray-700 uppercase">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xs px-4 py-3 text-sm text-gray-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#ff5722]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-mono font-bold text-gray-700 uppercase">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xs px-4 py-3 text-sm text-gray-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#ff5722]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono font-bold text-gray-700 uppercase">Inquiry Category</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xs px-4 py-3 text-sm text-gray-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#ff5722]"
                  >
                    <option>General Inquiry</option>
                    <option>Sizing & Fit Consultation</option>
                    <option>Order & Shipping Status</option>
                    <option>Carbon Plate Warranty Claim</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono font-bold text-gray-700 uppercase">Message Specification</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe your inquiry in detail..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xs p-4 text-sm text-gray-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#ff5722]"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#ff5722] to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-display font-bold text-xs tracking-widest py-4 uppercase flex items-center justify-center space-x-2 transition-all cursor-pointer rounded-xs shadow-lg shadow-orange-500/20"
                >
                  <span>TRANSMIT MESSAGE SPEC</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
