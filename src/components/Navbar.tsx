import React, { useState, useEffect } from 'react';
import { 
  Cake, 
  Clock, 
  MapPin, 
  Phone, 
  Menu as MenuIcon, 
  X, 
  ShoppingBag, 
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenCakeStudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  cartCount, 
  onOpenCart,
  onOpenCakeStudio 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Calculate real-time open status (10 AM to 10 PM IST)
    const checkOpenStatus = () => {
      const now = new Date();
      // IST is UTC+5:30
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istDate = new Date(utc + (3600000 * 5.5));
      const hours = istDate.getHours();
      setIsOpenNow(hours >= BUSINESS_INFO.timings.openHour && hours < BUSINESS_INFO.timings.closeHour);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#241711] text-[#E8D8C8] text-xs py-2 px-4 border-b border-[#3D281F]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-[#E69A3B] font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>Jyothinagar, Karimnagar (Opp. Easy Buy)</span>
            </span>
            <span className="hidden md:inline-block text-[#5C3E30]">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#E69A3B]" />
              <span>Bakery: 10 AM - 10 PM | Cafe: 12 PM - 10 PM</span>
            </span>
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide ${
              isOpenNow ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/60' : 'bg-amber-950/80 text-amber-300 border border-amber-800/60'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${isOpenNow ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`}></span>
              {isOpenNow ? 'Open Now' : 'Closed • Reopens 10 AM'}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="flex items-center gap-1 text-[#E8D8C8] hover:text-[#E69A3B] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E69A3B]" />
              <span className="font-medium">{BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-[#5C3E30]">|</span>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20La%27Delicious%20Bakery,%20I%20would%20like%20to%20inquire%20about%20your%20cakes%20and%20cafe%20menu!`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF6F0]/95 backdrop-blur-md shadow-md border-b border-[#EADCCF]' 
          : 'bg-[#FAF6F0] border-b border-[#EADCCF]/60'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#92400E] via-[#D97706] to-[#78350F] flex items-center justify-center text-white shadow-md shadow-[#D97706]/20 group-hover:scale-105 transition-transform duration-300 border border-amber-300/30">
                <Cake className="w-6 h-6 text-amber-100" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#241711] leading-none group-hover:text-[#92400E] transition-colors">
                  La'Delicious
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#B45309] mt-1 flex items-center gap-1">
                  <span>Bakery & Cafe</span>
                  <span className="w-1 h-1 rounded-full bg-[#B45309]"></span>
                  <span className="text-zinc-600 font-normal">Patisserie</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#4A3328]">
              <a href="#designer-cakes" className="hover:text-[#B45309] transition-colors">
                Specialty Cakes
              </a>
              <a href="#digital-menu" className="hover:text-[#B45309] transition-colors">
                Digital Menu
              </a>
              <a href="#cake-studio" className="flex items-center gap-1.5 text-[#B45309] font-semibold hover:text-[#92400E] transition-colors">
                <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                <span>Cake Studio</span>
              </a>
              <a href="#charlie-story" className="hover:text-[#B45309] transition-colors">
                Our Story
              </a>
              <a href="#reviews" className="hover:text-[#B45309] transition-colors">
                Reviews
              </a>
              <a href="#location-directions" className="hover:text-[#B45309] transition-colors">
                Directions
              </a>
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Custom Cake Button */}
              <button
                onClick={onOpenCakeStudio}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F5ECE1] text-[#92400E] border border-[#E0CEBE] hover:bg-[#EADCCF] transition-all hover:shadow-sm"
              >
                <Cake className="w-4 h-4" />
                <span>Custom Cake Studio</span>
              </button>

              {/* Order Tray / Cart Button */}
              <button
                onClick={onOpenCart}
                className="relative p-2.5 rounded-full bg-[#241711] text-white hover:bg-[#3D281F] transition-all shadow-sm flex items-center justify-center"
                aria-label="View Order Tray"
              >
                <ShoppingBag className="w-5 h-5 text-amber-300" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#D97706] text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FAF6F0] shadow-sm animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl text-[#241711] hover:bg-[#EADCCF]/60 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF6F0] border-b border-[#EADCCF] px-4 pt-2 pb-6 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-2 pt-2 border-t border-[#EADCCF]/80">
              <a 
                href="#designer-cakes" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-[#241711] hover:bg-[#F5ECE1]"
              >
                🎂 Specialty Designer Cakes
              </a>
              <a 
                href="#digital-menu" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-[#241711] hover:bg-[#F5ECE1]"
              >
                🥐 Digital Menu & Cafe Bites
              </a>
              <a 
                href="#cake-studio" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCakeStudio();
                }}
                className="px-3 py-2 rounded-lg text-base font-bold text-[#92400E] bg-[#F5ECE1] flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  Custom Cake Studio & Estimator
                </span>
                <span className="text-xs bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full font-bold">Try Now</span>
              </a>
              <a 
                href="#charlie-story" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-[#241711] hover:bg-[#F5ECE1]"
              >
                ☕ Our Story & Charlie Cafe
              </a>
              <a 
                href="#reviews" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-[#241711] hover:bg-[#F5ECE1]"
              >
                ⭐ Verified Reviews & Ratings
              </a>
              <a 
                href="#location-directions" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-[#241711] hover:bg-[#F5ECE1]"
              >
                📍 Location, Directions & Timings
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-4 rounded-xl bg-[#241711] text-amber-200 font-semibold text-sm flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Open in Google Maps Directions</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20La%27Delicious,%20I%20would%20like%20to%20order%20a%20cake/food!`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-4 rounded-xl bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 97043 03881)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
