import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Utensils, 
  Sparkles, 
  Plus, 
  Check, 
  ShieldCheck, 
  Flame, 
  ExternalLink,
  Coffee,
  Cake,
  Sandwich
} from 'lucide-react';
import { MENU_ITEMS, BUSINESS_INFO } from '../data/bakeryData';
import type { MenuItem } from '../data/bakeryData';

interface MenuExplorerProps {
  onAddToCart: (item: MenuItem) => void;
  cartItemIds: string[];
}

export const MenuExplorer: React.FC<MenuExplorerProps> = ({ onAddToCart, cartItemIds }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterDietary, setFilterDietary] = useState<string>('all'); // 'all' | 'eggless' | 'specials' | 'popular'

  const categories = [
    { id: 'all', label: 'All Delicacies', icon: Utensils },
    { id: 'designer-cakes', label: 'Artisanal Cakes', icon: Cake },
    { id: 'patisserie', label: 'French Patisserie & Desserts', icon: Sparkles },
    { id: 'cafe-bites', label: 'Charlie Bistro & Starters', icon: Sandwich },
    { id: 'beverages', label: 'Shakes & Artisan Coffees', icon: Coffee }
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Dietary filter
      if (filterDietary === 'eggless' && !item.isEggless) {
        return false;
      }
      if (filterDietary === 'specials' && !item.isChefSpecial) {
        return false;
      }
      if (filterDietary === 'popular' && !item.isPopular) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesTags = item.tags.some(t => t.toLowerCase().includes(query));
        return matchesName || matchesDesc || matchesTags;
      }
      return true;
    });
  }, [selectedCategory, filterDietary, searchQuery]);

  return (
    <section id="digital-menu" className="py-16 sm:py-24 bg-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-[#92400E] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Verified Menu & Prices</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241711] tracking-tight">
              Explore Our Digital Menu
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-xl">
              Freshly baked every morning in our Jyothinagar kitchen. Select your favorites to build an instant WhatsApp pre-order or order on delivery platforms.
            </p>
          </div>

          {/* Delivery Platform Links */}
          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <span className="text-xs font-semibold text-stone-500">Also order via:</span>
            <a
              href={BUSINESS_INFO.swiggyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 text-orange-700 font-bold text-xs flex items-center gap-1.5 transition-colors border border-orange-200"
            >
              <span>Swiggy</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={BUSINESS_INFO.zomatoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-700 font-bold text-xs flex items-center gap-1.5 transition-colors border border-red-200"
            >
              <span>Zomato</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="space-y-4 mb-10">
          
          {/* Search bar */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cakes, waffles, Charlie chicken, shakes..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-[#E0CEBE] focus:outline-none focus:border-amber-600 text-sm shadow-xs"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map(cat => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap flex items-center gap-2 transition-all shrink-0 ${
                    isActive
                      ? 'bg-[#241711] text-amber-200 shadow-md scale-[1.02]'
                      : 'bg-white border border-[#E0CEBE] text-stone-600 hover:bg-stone-50 hover:border-stone-400'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-stone-400'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Dietary Filters Pill Row */}
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="text-stone-500 font-medium">Quick Filter:</span>
            <button
              onClick={() => setFilterDietary('all')}
              className={`px-3 py-1 rounded-full font-semibold transition-all ${
                filterDietary === 'all' 
                  ? 'bg-stone-800 text-white' 
                  : 'bg-stone-200/70 text-stone-700 hover:bg-stone-200'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setFilterDietary('eggless')}
              className={`px-3 py-1 rounded-full font-semibold transition-all flex items-center gap-1 ${
                filterDietary === 'eggless' 
                  ? 'bg-emerald-700 text-white' 
                  : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Eggless Only</span>
            </button>
            <button
              onClick={() => setFilterDietary('specials')}
              className={`px-3 py-1 rounded-full font-semibold transition-all flex items-center gap-1 ${
                filterDietary === 'specials' 
                  ? 'bg-amber-700 text-white' 
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chef's Specials</span>
            </button>
            <button
              onClick={() => setFilterDietary('popular')}
              className={`px-3 py-1 rounded-full font-semibold transition-all flex items-center gap-1 ${
                filterDietary === 'popular' 
                  ? 'bg-rose-700 text-white' 
                  : 'bg-rose-100 text-rose-800 hover:bg-rose-200'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Best Sellers</span>
            </button>
          </div>

        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#EADCCF]">
            <Utensils className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-stone-800">No items match your search</h3>
            <p className="text-sm text-stone-500 mt-1">Try another keyword or reset filters to browse the full bakery menu.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setFilterDietary('all'); }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#241711] text-amber-200 font-semibold text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item: MenuItem) => {
              const isInCart = cartItemIds.includes(item.id);
              return (
                <div 
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden border border-[#E8DCCF] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group bakery-card-hover"
                >
                  {/* Card Image */}
                  <div className="aspect-[16/10] relative overflow-hidden bg-stone-100">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {item.isEggless && (
                        <span className="bg-emerald-900/90 backdrop-blur-xs text-emerald-200 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          100% Eggless
                        </span>
                      )}
                      {item.isChefSpecial && (
                        <span className="bg-amber-900/90 backdrop-blur-xs text-amber-200 border border-amber-500/30 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                          Chef's Pick
                        </span>
                      )}
                    </div>

                    {/* Price Tag Overlay */}
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-xl shadow-md text-right">
                      <div className="text-sm font-extrabold text-[#241711]">₹{item.price}</div>
                      {item.priceNote && (
                        <div className="text-[9px] text-stone-500 font-medium -mt-0.5">{item.priceNote}</div>
                      )}
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Tags */}
                      <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
                        {item.tags.map((tag: string, i: number) => (
                          <span key={i} className="text-[10px] font-semibold text-[#8C3C0B] bg-amber-50 px-2 py-0.5 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-lg font-bold text-[#241711] group-hover:text-[#92400E] transition-colors leading-snug">
                        {item.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Action Row */}
                    <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                      <a
                        href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20La%27Delicious,%20I%20would%20like%20to%20order:%20*${encodeURIComponent(item.name)}*%20(₹${item.price})`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#92400E] hover:underline"
                      >
                        Quick WhatsApp Order →
                      </a>

                      <button
                        type="button"
                        onClick={() => onAddToCart(item)}
                        className={`px-3.5 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all ${
                          isInCart
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-[#241711] text-amber-200 hover:bg-[#3D281F]'
                        }`}
                      >
                        {isInCart ? (
                          <>
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add to Tray</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
