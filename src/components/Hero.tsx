import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  Clock, 
  Award, 
  ShieldCheck, 
  Heart,
  PhoneCall,
  Cake
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

interface HeroProps {
  onOpenCakeStudio: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCakeStudio, onExploreMenu }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#F6EFE7] to-[#FAF6F0] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#EADCCF]/60">
      {/* Decorative Warm Lighting Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Local Business Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E5D4] border border-[#DFC8B2] text-[#8C3C0B] text-xs sm:text-sm font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Karimnagar's Favorite Patisserie & Bistro • Jyothinagar</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#241711] leading-[1.12]">
              Where Every Celebration Begins With An{' '}
              <span className="gold-gradient-text italic block sm:inline">
                Artisanal Masterpiece.
              </span>
            </h1>

            {/* Subtitle with verified local details */}
            <p className="text-[#594236] text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Welcome to <span className="font-semibold text-[#241711]">La'Delicious Bakery and Cafe</span> (home of Charlie Bistro). From bespoke wedding & birthday cakes crafted with pure Belgian chocolate to sizzling continental starters and artisanal coffees, we bring Parisian patisserie refinement to Karimnagar.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenCakeStudio}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#92400E] via-[#B45309] to-[#D97706] text-white font-semibold text-base shadow-lg shadow-[#B45309]/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 group"
              >
                <Cake className="w-5 h-5 text-amber-200 group-hover:rotate-12 transition-transform" />
                <span>Custom Cake Studio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white text-[#4A3328] font-semibold text-base border border-[#E0CEBE] hover:bg-[#F9F4EE] hover:border-[#C29D7D] shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Digital Menu</span>
              </button>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-[#241711] text-amber-200 font-medium text-sm hover:bg-[#382319] transition-all flex items-center justify-center gap-2"
                title="Get Directions on Google Maps"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Value & Trust Badges Strip */}
            <div className="pt-6 border-t border-[#E8DACB] grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-[#241711] text-sm">4.3★ Rating</div>
                  <div className="text-xs text-[#7A6052]">500+ Local Reviews</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-[#241711] text-sm">100% Eggless</div>
                  <div className="text-xs text-[#7A6052]">Daily Fresh Varieties</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center text-orange-800 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-[#241711] text-sm">2-Hour Express</div>
                  <div className="text-xs text-[#7A6052]">Fast Cake Delivery</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-rose-100 flex items-center justify-center text-rose-800 shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-[#241711] text-sm">15,000+ Cakes</div>
                  <div className="text-xs text-[#7A6052]">Baked with Love</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-white">
                <div className="aspect-[4/5] relative overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85"
                    alt="La'Delicious Signature Artisanal Chocolate Cake"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
                  
                  {/* Floating Top Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md text-xs font-bold text-[#92400E] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Chef's Signature Creation</span>
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-amber-300">Fresh Today</span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                      Belgian Dark Chocolate Ganache Gateau
                    </h3>
                    <p className="text-xs text-stone-200 mt-1 line-clamp-2">
                      Silky 54% cocoa ganache, roasted hazelnut crunch & edible gold dust.
                    </p>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/20">
                      <div>
                        <span className="text-xs text-amber-200">Starting from</span>
                        <div className="font-bold text-lg text-white">₹450 <span className="text-xs font-normal text-stone-300">(500g)</span></div>
                      </div>
                      <a
                        href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20La%27Delicious,%20I%20want%20to%20order%20the%20Belgian%20Dark%20Chocolate%20Ganache%20Cake!`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-colors flex items-center gap-1"
                      >
                        <span>Pre-Order</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Testimonial Pill */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-[#EADBCC] max-w-xs animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center shrink-0">
                    RS
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                      ★★★★★ <span className="text-stone-500 font-medium text-[11px]">(Google)</span>
                    </div>
                    <p className="text-[11px] text-[#422C20] font-medium leading-tight mt-0.5">
                      "Best birthday cakes in Karimnagar! The Belgian chocolate was a huge hit."
                    </p>
                    <span className="text-[10px] text-stone-400 mt-0.5 block">— Rakesh Sharma, Jyothinagar</span>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Mini Card (Charlie Bistro Special) */}
              <div className="hidden sm:flex absolute -top-5 -right-6 bg-[#241711] text-white p-3 rounded-2xl shadow-xl border border-amber-900/40 items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div className="text-left pr-2">
                  <div className="text-[10px] uppercase font-bold text-amber-400">Direct Order Line</div>
                  <div className="text-xs font-semibold text-white">{BUSINESS_INFO.phone}</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
