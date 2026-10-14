import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Send, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO } from '../data/bakeryData';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const ContactSection: React.FC = () => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.8 }
      });
    } catch {
      // noop
    }

    setSubmitted(true);

    const text = `*NEW CONTACT MESSAGE — La'Delicious Bakery Website*
----------------------------------------
👤 *Name:* ${formName}
📞 *Phone:* ${formPhone}
💬 *Message:* ${formMessage}

Hi team, I sent an inquiry through your official demo website.`;

    const encoded = encodeURIComponent(text);
    setTimeout(() => {
      window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encoded}`, '_blank');
    }, 400);
  };

  return (
    <section id="location-directions" className="py-16 sm:py-24 bg-[#F5ECE1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-[#92400E] text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Visit Us in Jyothinagar</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241711] tracking-tight">
            Find Us & Get in Touch
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            Conveniently located opposite Easy Buy on Shiva Theater Road. Drop in for hot pastries and fresh coffees or order ahead for express pickup!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Business Details & Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Details Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E0CEBE] space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-[#92400E] flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#241711]">Physical Address</h4>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-mono font-semibold bg-stone-100 text-stone-700 px-2.5 py-0.5 rounded-md border border-stone-200">
                    Plus Code: {BUSINESS_INFO.plusCode}
                  </span>
                </div>
              </div>

              {/* Working Directions Action */}
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-[#92400E] to-[#B45309] hover:from-[#78350F] hover:to-[#92400E] text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                >
                  <Navigation className="w-4 h-4 text-amber-300" />
                  <span>Open Turn-by-Turn Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="h-px bg-stone-200"></div>

              {/* Contact Numbers */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-base text-[#241711]">Phone & WhatsApp</h4>
                  <div className="flex flex-col gap-1 pt-0.5">
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-sm font-semibold text-[#92400E] hover:underline">
                      {BUSINESS_INFO.phone} <span className="text-xs text-stone-400 font-normal">(Primary Order Line)</span>
                    </a>
                    <a href={`tel:${BUSINESS_INFO.altPhone}`} className="text-sm font-semibold text-stone-700 hover:underline">
                      {BUSINESS_INFO.altPhone} <span className="text-xs text-stone-400 font-normal">(Support)</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="h-px bg-stone-200"></div>

              {/* Operating Timings */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-800 flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#241711]">Operational Timings</h4>
                  <div className="mt-1 space-y-1 text-xs text-stone-600">
                    <div className="flex justify-between gap-6">
                      <span className="font-semibold text-stone-800">Patisserie & Cakes:</span>
                      <span>{BUSINESS_INFO.timings.bakery}</span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span className="font-semibold text-stone-800">Charlie Cafe Dining:</span>
                      <span>{BUSINESS_INFO.timings.restaurant}</span>
                    </div>
                    <div className="text-[11px] text-emerald-700 font-semibold pt-1">
                      ✓ Open 7 Days a Week (Mon – Sun)
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px bg-stone-200"></div>

              {/* Social Link */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-stone-700">
                  <InstagramIcon className="w-4 h-4 text-pink-600" />
                  <span className="font-semibold">{BUSINESS_INFO.instagramHandle}</span>
                </div>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#92400E] hover:underline flex items-center gap-1"
                >
                  <span>Follow Reels</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Google Maps Embed & Quick Message Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Map Container */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#E0CEBE] p-2">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-stone-200">
                <iframe
                  title="Google Maps Location - La'Delicious Bakery Karimnagar"
                  src="https://maps.google.com/maps?q=La'Delicious+Bakery+and+Cafe,+Jyothinagar,+Karimnagar,+Telangana+505001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                ></iframe>

                {/* Floating Map Overlay Badge */}
                <div className="absolute top-3 left-3 bg-[#241711]/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-xl shadow-md text-xs font-semibold flex items-center gap-1.5 border border-amber-900/40">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Karimnagar Outlet • Shiva Theater Rd</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-[#E0CEBE]">
              <h3 className="font-serif text-lg font-bold text-[#241711] mb-1">
                Have a Custom Catering or Celebration Question?
              </h3>
              <p className="text-xs text-stone-500 mb-4">
                Leave a quick note below and connect directly with our branch supervisor.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={e => setFormName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-800 focus:outline-none focus:border-amber-600 bg-[#FAF6F0]"
                  />
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={e => setFormPhone(e.target.value)}
                    placeholder="Your Phone / WhatsApp"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-800 focus:outline-none focus:border-amber-600 bg-[#FAF6F0]"
                  />
                </div>

                <textarea
                  required
                  rows={2}
                  value={formMessage}
                  onChange={e => setFormMessage(e.target.value)}
                  placeholder="Tell us what you need (e.g. corporate cake hampers, anniversary party, special dietary requirement)..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-800 focus:outline-none focus:border-amber-600 bg-[#FAF6F0]"
                />

                <div className="flex items-center justify-between pt-1">
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#241711] hover:bg-[#382319] text-amber-200 font-bold text-xs flex items-center gap-2 transition-colors shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Inquiry to Bakery WhatsApp</span>
                  </button>

                  {submitted && (
                    <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Redirecting to WhatsApp...
                    </span>
                  )}
                </div>
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
