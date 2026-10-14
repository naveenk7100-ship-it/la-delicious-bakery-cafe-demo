import React, { useState } from 'react';
import { Sparkles, Cake, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { MENU_ITEMS, BUSINESS_INFO } from '../data/bakeryData';
import type { MenuItem } from '../data/bakeryData';

interface SpecialtyCakesShowcaseProps {
  onOpenCakeStudio: () => void;
  onAddToCart: (item: MenuItem) => void;
}

export const SpecialtyCakesShowcase: React.FC<SpecialtyCakesShowcaseProps> = ({ 
  onOpenCakeStudio, 
  onAddToCart 
}) => {
  const [filter, setFilter] = useState<'all' | 'choco' | 'fruity'>('all');

  const cakes = MENU_ITEMS.filter(item => item.category === 'designer-cakes');

  const filteredCakes = cakes.filter(cake => {
    if (filter === 'choco') {
      return cake.id.includes('belgian') || cake.id.includes('choco') || cake.id.includes('signature');
    }
    if (filter === 'fruity') {
      return cake.id.includes('blueberry') || cake.id.includes('redvelvet') || cake.id.includes('butterscotch');
    }
    return true;
  });

  return (
    <section id="designer-cakes" className="py-16 sm:py-24 bg-white border-b border-[#EADCCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-[#92400E] text-xs font-bold uppercase tracking-wider mb-2">
              <Cake className="w-3.5 h-3.5 text-amber-600" />
              <span>Signature Cake Collection</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241711] tracking-tight">
              Bespoke Designer & Birthday Cakes
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-xl">
              Baked fresh daily in Jyothinagar with rich Belgian cocoa, pure butter, and 100% eggless options for every occasion.
            </p>
          </div>

          {/* Quick Studio Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCakeStudio}
              className="px-5 py-3 rounded-2xl bg-[#241711] text-amber-200 hover:bg-[#3D281F] font-bold text-xs flex items-center gap-2 transition-all shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Launch Custom Cake Studio</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'all' 
                ? 'bg-[#92400E] text-white shadow-sm' 
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            All Signature Cakes
          </button>
          <button
            onClick={() => setFilter('choco')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'choco' 
                ? 'bg-[#92400E] text-white shadow-sm' 
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            🍫 Belgian & Dark Chocolate
          </button>
          <button
            onClick={() => setFilter('fruity')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'fruity' 
                ? 'bg-[#92400E] text-white shadow-sm' 
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            🫐 Fruit, Velvet & Butterscotch
          </button>
        </div>

        {/* Cakes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCakes.map(cake => (
            <div 
              key={cake.id}
              className="bg-[#FAF6F0] rounded-3xl overflow-hidden border border-[#E8DCCF] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-stone-100">
                <img 
                  src={cake.image} 
                  alt={cake.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute top-3 left-3 flex items-center gap-1 bg-emerald-900/90 text-emerald-200 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>100% Eggless Option</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-white/95 px-3 py-1 rounded-xl shadow-md text-right">
                  <div className="text-sm font-extrabold text-[#241711]">₹{cake.price}</div>
                  <span className="text-[9px] text-stone-500 font-medium block -mt-0.5">500g</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    {cake.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-semibold text-[#8C3C0B] bg-amber-100/70 px-2 py-0.5 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#241711] group-hover:text-[#92400E] transition-colors">
                    {cake.name}
                  </h3>

                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    {cake.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-stone-200/60 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onAddToCart(cake)}
                    className="text-xs font-bold text-stone-800 hover:text-[#92400E] underline py-1"
                  >
                    + Add to Tray
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20La%27Delicious,%20I%20would%20like%20to%20order%20the%20*${encodeURIComponent(cake.name)}*%20(₹${cake.price})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#241711] to-[#3D281F] rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-amber-950/40">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl font-bold text-amber-100">
              Need a 2-Tier, 3-Tier or Custom Fondant Theme Cake?
            </h4>
            <p className="text-xs text-stone-300">
              Share any photo reference from Pinterest or Instagram with our Karimnagar cake artists.
            </p>
          </div>

          <button
            onClick={onOpenCakeStudio}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-bold text-xs shrink-0 flex items-center gap-2 shadow-md transition-all hover:scale-105"
          >
            <span>Open Custom Cake Studio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
