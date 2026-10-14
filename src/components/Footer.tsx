import React from 'react';
import { Cake, MapPin, ExternalLink, ShieldCheck, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C120C] text-[#E8D8C8] pt-16 pb-12 border-t border-[#332015]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-600 flex items-center justify-center text-white">
                <Cake className="w-5 h-5 text-amber-100" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block leading-none">
                  La'Delicious
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-400">
                  Bakery & Cafe • Karimnagar
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Artisanal patisserie, bespoke celebration cakes, and cozy dining at Charlie Restaurant. Proudly crafting memories across Karimnagar with premium Belgian chocolate and 100% eggless delicacies.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-pink-600/30 text-stone-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-amber-600/30 text-stone-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 font-semibold text-xs flex items-center gap-1.5 transition-colors border border-emerald-500/20"
              >
                <span>WhatsApp (+91 97043 03881)</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-amber-200 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#designer-cakes" className="hover:text-amber-300 transition-colors">Specialty Cakes & Prices</a>
              </li>
              <li>
                <a href="#digital-menu" className="hover:text-amber-300 transition-colors">Full Cafe & Patisserie Menu</a>
              </li>
              <li>
                <a href="#cake-studio" className="hover:text-amber-300 transition-colors">Custom Cake Studio & Estimator</a>
              </li>
              <li>
                <a href="#charlie-story" className="hover:text-amber-300 transition-colors">Charlie Restaurant & Our Story</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-300 transition-colors">Customer Reviews on Google</a>
              </li>
              <li>
                <a href="#location-directions" className="hover:text-amber-300 transition-colors">Directions & Hours</a>
              </li>
            </ul>
          </div>

          {/* Verified Outlet Location */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold text-amber-200 uppercase tracking-wider">
              Karimnagar Location
            </h4>
            <div className="text-xs text-stone-400 space-y-2">
              <p className="leading-relaxed">
                {BUSINESS_INFO.address}
              </p>
              <p className="text-stone-300 font-medium">
                Landmark: Opposite Easy Buy / Near Shiva Theater
              </p>
              <div className="pt-1">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="pt-2 text-[11px] text-stone-500">
                Bakery: 10:00 AM – 10:00 PM | Cafe: 12:00 PM – 10:00 PM
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} La'Delicious Bakery and Cafe • All rights reserved.
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-stone-400">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Demo Website • Verified Karimnagar Business Information</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
