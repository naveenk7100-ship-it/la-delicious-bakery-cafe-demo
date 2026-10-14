import React from 'react';
import { 
  Sparkles, 
  Coffee, 
  CheckCircle2
} from 'lucide-react';
import { GALLERY_IMAGES } from '../data/bakeryData';

export const StorySection: React.FC = () => {
  return (
    <section id="charlie-story" className="py-16 sm:py-24 bg-[#F5ECE1]/40 border-b border-[#EADCCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Story Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-white aspect-[4/5]">
                <img 
                  src={GALLERY_IMAGES[0].url} 
                  alt="La'Delicious Artisanal Cake Design" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                />
              </div>
              <div className="bg-[#241711] text-amber-100 p-6 rounded-3xl shadow-md border border-amber-900/40">
                <span className="text-3xl font-serif font-bold text-amber-400">100%</span>
                <h4 className="font-bold text-sm text-white mt-1">Eggless Specialization</h4>
                <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                  Every celebratory milestone caters to vegetarian & eggless preferences without compromising on fluffy, moist texture.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="bg-white p-6 rounded-3xl shadow-md border border-[#E0CEBE]">
                <Coffee className="w-8 h-8 text-[#92400E] mb-2" />
                <h4 className="font-bold text-sm text-[#241711]">Charlie Cafe & Bistro</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Not just cakes! Savor our iconic Charlie Chicken, crispy chew rollers, and sizzling Asian wok specialties.
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-white aspect-[4/5]">
                <img 
                  src={GALLERY_IMAGES[2].url} 
                  alt="Cozy Jyothinagar Cafe Dining" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-[#92400E] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Two Passions, One Iconic Destination</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241711] tracking-tight leading-tight">
              Where French Patisserie Finesse Meets Sizzling Bistro Delights.
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Situated right in Jyothinagar opposite Easy Buy on Shiva Theater Road, <span className="font-semibold text-[#241711]">La'Delicious Bakery and Cafe</span> was founded on a simple philosophy: Karimnagar deserves world-class celebration cakes paired with an upbeat, comfortable dining atmosphere.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              By pairing the artisanal cake artistry of <span className="font-medium text-[#92400E]">La'Delicious</span> with the savory excitement of <span className="font-medium text-[#92400E]">Charlie Restaurant</span>, our kitchen offers the complete celebration experience: from starter soups and crispy rollers to decadent Belgian chocolate centerpieces.
            </p>

            {/* Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#241711] uppercase tracking-wider">Pure Couverture Chocolate</h4>
                  <p className="text-[11px] text-stone-500 mt-0.5">Real cocoa butter, silky ganache, and zero compound fats.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#241711] uppercase tracking-wider">Custom Themed Pastries</h4>
                  <p className="text-[11px] text-stone-500 mt-0.5">Pinterest-worthy fondant, tiered wedding & cartoon cakes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#241711] uppercase tracking-wider">Signature Charlie Kitchen</h4>
                  <p className="text-[11px] text-stone-500 mt-0.5">Freshly prepared snacks, tandoori bites, and aromatic biryanis.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#241711] uppercase tracking-wider">Warm Jyothinagar Hangout</h4>
                  <p className="text-[11px] text-stone-500 mt-0.5">Cozy AC seating, music, and friendly staff for friends & families.</p>
                </div>
              </div>
            </div>

            {/* Quote Strip */}
            <div className="p-4 rounded-2xl bg-white border border-[#E0CEBE] text-xs text-[#594236] italic">
              "We believe that a birthday without a sublime cake is merely a gathering. At La'Delicious, we make memories taste unforgettable."
              <span className="block not-italic font-bold text-[#92400E] text-[11px] mt-1">— Pastry Chef Team, La'Delicious</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
