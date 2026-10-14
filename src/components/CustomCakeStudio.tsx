import React, { useState } from 'react';
import { 
  Cake, 
  Sparkles, 
  Check, 
  MessageCircle, 
  ShieldCheck, 
  Info,
  Gift
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO } from '../data/bakeryData';

interface CustomCakeStudioProps {
  id?: string;
}

const OCCASIONS = [
  { id: 'birthday', label: '🎂 Birthday Party', desc: 'Custom cartoon, floral or drip cake' },
  { id: 'wedding', label: '💍 Wedding / Engagement', desc: 'Tiered floral & fondant elegance' },
  { id: 'anniversary', label: '❤️ Anniversary Milestone', desc: 'Heart shaped & luxury velvet finishes' },
  { id: 'kids', label: '🦄 Kids Theme / Superhero', desc: 'Custom fondant characters & figures' },
  { id: 'farewell', label: '🎓 Graduation / Farewell', desc: 'Celebration message plaque cakes' },
  { id: 'other', label: '✨ Other Custom Celebration', desc: 'Share your Pinterest/Instagram concept' }
];

const FLAVORS = [
  { id: 'sig-truffle', name: "La'Delicious Signature Ganache", basePrice500g: 450, tag: "House Favorite" },
  { id: 'belgian', name: "Belgian Dark Chocolate Silk", basePrice500g: 420, tag: "Rich Cocoa" },
  { id: 'choco-almond', name: "Choco Almond Royale", basePrice500g: 440, tag: "Toasted Nuts" },
  { id: 'red-velvet', name: "Velvet Cream Cheese", basePrice500g: 430, tag: "Crimson Silk" },
  { id: 'blueberry', name: "Wild Blueberry Gateau", basePrice500g: 410, tag: "Fruity Compote" },
  { id: 'blackforest', name: "Classic Black Forest with Cherries", basePrice500g: 380, tag: "Timeless Classic" },
  { id: 'butterscotch', name: "Butterscotch Praline Crunch", basePrice500g: 380, tag: "Golden Caramel" }
];

const SIZES = [
  { weight: 0.5, label: "0.5 Kg", serves: "4 - 6 Servings", multiplier: 1.0 },
  { weight: 1.0, label: "1.0 Kg", serves: "8 - 12 Servings", multiplier: 1.9 },
  { weight: 1.5, label: "1.5 Kg", serves: "14 - 18 Servings", multiplier: 2.8 },
  { weight: 2.0, label: "2.0 Kg", serves: "20 - 25 Servings", multiplier: 3.7 },
  { weight: 3.0, label: "3.0 Kg (2-Tier)", serves: "30+ Servings", multiplier: 5.4 }
];

const ADDONS = [
  { id: 'sparkler', name: 'Magic Sparkler Candle', price: 30 },
  { id: 'photo', name: 'Edible Photo Sugar Plaque', price: 90 },
  { id: 'topper', name: 'Acrylic Golden "Happy Birthday/Anniversary" Topper', price: 50 },
  { id: 'flowers', name: 'Fresh Edible Flower Garnish', price: 120 }
];

export const CustomCakeStudio: React.FC<CustomCakeStudioProps> = ({ id = "cake-studio" }) => {
  const [selectedOccasion, setSelectedOccasion] = useState(OCCASIONS[0].id);
  const [selectedFlavor, setSelectedFlavor] = useState(FLAVORS[0].id);
  const [selectedSize, setSelectedSize] = useState(1.0); // 1kg default
  const [isEggless, setIsEggless] = useState(true);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['topper']);
  const [cakeMessage, setCakeMessage] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

  // Compute estimated price
  const flavorObj = FLAVORS.find(f => f.id === selectedFlavor) || FLAVORS[0];
  const sizeObj = SIZES.find(s => s.weight === selectedSize) || SIZES[1];
  const baseEstimatedPrice = Math.round(flavorObj.basePrice500g * sizeObj.multiplier);
  
  const addonsTotal = selectedAddons.reduce((sum, addId) => {
    const addon = ADDONS.find(a => a.id === addId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const totalEstimatedPrice = baseEstimatedPrice + addonsTotal;

  const toggleAddon = (addId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addId) ? prev.filter(x => x !== addId) : [...prev, addId]
    );
  };

  const handleSendInquiry = () => {
    // Trigger confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // ignore if unsupported
    }

    setInquirySent(true);

    const occasionObj = OCCASIONS.find(o => o.id === selectedOccasion);
    const addonNames = selectedAddons.map(id => ADDONS.find(a => a.id === id)?.name).filter(Boolean).join(', ');

    const whatsappMessage = `*CUSTOM CAKE INQUIRY — La'Delicious Bakery Karimnagar*
----------------------------------------
🎂 *Occasion:* ${occasionObj?.label}
🍰 *Flavor:* ${flavorObj.name}
⚖️ *Weight / Size:* ${sizeObj.label} (${sizeObj.serves})
🌱 *Eggless:* ${isEggless ? 'Yes (100% Eggless)' : 'Regular'}
✍️ *Message on Cake:* ${cakeMessage.trim() ? `"${cakeMessage.trim()}"` : 'None specified yet'}
✨ *Add-ons:* ${addonNames || 'None'}
📅 *Target Date:* ${deliveryDate || 'Flexible'}
📝 *Special Instructions:* ${customerNotes.trim() || 'None'}
💰 *Estimated Demo Price:* ~₹${totalEstimatedPrice}

Hi team, I would like to confirm availability and place this custom cake order!`;

    const encoded = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encoded}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <section id={id} className="py-16 sm:py-24 bg-[#F5ECE1]/60 border-b border-[#EADCCF]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-[#92400E] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive Custom Cake Studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241711] tracking-tight">
            Design Your Bespoke Celebration Cake
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Customize your dream cake in 4 simple steps. Get an instant transparent estimate and send the exact specification straight to our head pastry chef at Jyothinagar via WhatsApp!
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Configuration Form */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-[#E4D5C5] space-y-8">
            
            {/* Step 1: Occasion */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold uppercase tracking-wider text-[#92400E] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#92400E] text-white text-[11px] flex items-center justify-center font-bold">1</span>
                  <span>Choose Celebration Occasion</span>
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {OCCASIONS.map(occ => (
                  <button
                    key={occ.id}
                    type="button"
                    onClick={() => setSelectedOccasion(occ.id)}
                    className={`p-3 rounded-2xl text-left border transition-all text-xs sm:text-sm ${
                      selectedOccasion === occ.id
                        ? 'border-[#92400E] bg-amber-50/70 text-[#241711] font-semibold shadow-xs ring-1 ring-[#92400E]'
                        : 'border-[#EADCCF] hover:border-amber-300 bg-white text-stone-700'
                    }`}
                  >
                    <div className="font-semibold text-[#241711]">{occ.label}</div>
                    <div className="text-[11px] text-stone-500 mt-0.5">{occ.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Flavor Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold uppercase tracking-wider text-[#92400E] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#92400E] text-white text-[11px] flex items-center justify-center font-bold">2</span>
                  <span>Select Signature Flavor</span>
                </label>
                <span className="text-xs text-stone-500">Verified Karimnagar Flavors</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {FLAVORS.map(flv => (
                  <button
                    key={flv.id}
                    type="button"
                    onClick={() => setSelectedFlavor(flv.id)}
                    className={`p-3.5 rounded-2xl text-left border transition-all flex items-center justify-between ${
                      selectedFlavor === flv.id
                        ? 'border-[#92400E] bg-amber-50/80 text-[#241711] shadow-xs ring-1 ring-[#92400E]'
                        : 'border-[#EADCCF] hover:border-amber-300 bg-white text-stone-700'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm text-[#241711]">{flv.name}</div>
                      <span className="text-[11px] inline-block px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 mt-1 font-medium">
                        {flv.tag}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-[#92400E]">₹{flv.basePrice500g}</div>
                      <span className="text-[10px] text-stone-400">per 500g</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Size & Dietary Option */}
            <div className="space-y-4">
              <label className="text-sm font-bold uppercase tracking-wider text-[#92400E] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#92400E] text-white text-[11px] flex items-center justify-center font-bold">3</span>
                <span>Select Weight & Dietary Preference</span>
              </label>

              {/* Weight Options */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {SIZES.map(s => (
                  <button
                    key={s.weight}
                    type="button"
                    onClick={() => setSelectedSize(s.weight)}
                    className={`p-3 rounded-2xl text-center border transition-all ${
                      selectedSize === s.weight
                        ? 'border-[#92400E] bg-[#241711] text-amber-200 font-bold shadow-md'
                        : 'border-[#EADCCF] hover:border-stone-400 bg-white text-stone-700'
                    }`}
                  >
                    <div className="text-sm font-bold">{s.label}</div>
                    <div className="text-[10px] opacity-80 mt-0.5">{s.serves}</div>
                  </button>
                ))}
              </div>

              {/* Eggless Toggle */}
              <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#EADCCF] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#241711]">100% Eggless Preparation</div>
                    <div className="text-xs text-stone-500">Baked in separate dedicated pans with pure milk solids</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsEggless(!isEggless)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    isEggless ? 'bg-emerald-600' : 'bg-stone-300'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                      isEggless ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Step 4: Add-ons & Custom Message */}
            <div className="space-y-4">
              <label className="text-sm font-bold uppercase tracking-wider text-[#92400E] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#92400E] text-white text-[11px] flex items-center justify-center font-bold">4</span>
                <span>Celebration Add-ons & Custom Message</span>
              </label>

              {/* Add-ons checkboxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ADDONS.map(addon => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-2xl text-left border flex items-center justify-between transition-all ${
                        isChecked
                          ? 'border-amber-600 bg-amber-50/60 text-[#241711]'
                          : 'border-[#EADCCF] bg-white text-stone-600'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isChecked ? 'bg-amber-600 border-amber-600 text-white' : 'border-stone-300 bg-white'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{addon.name}</span>
                      </div>
                      <span className="text-xs font-bold text-amber-800">+₹{addon.price}</span>
                    </button>
                  );
                })}
              </div>

              {/* Message on Cake input */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Text on Cake Plaque (e.g. Happy 25th Anniversary Ravi & Sneha)
                  </label>
                  <input
                    type="text"
                    value={cakeMessage}
                    onChange={(e) => setCakeMessage(e.target.value)}
                    placeholder="E.g., Happy Birthday Aarav!"
                    maxLength={40}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-600 text-sm bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Target Delivery / Pickup Date & Time
                  </label>
                  <input
                    type="text"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    placeholder="E.g. Tomorrow by 6:00 PM"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-600 text-sm bg-white"
                  />
                </div>
              </div>

              {/* Additional notes */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Design Notes / Color Scheme / Theme Reference
                </label>
                <textarea
                  value={customerNotes}
                  onChange={(e) => setCustomerNotes(e.target.value)}
                  placeholder="Tell us if you want specific colors, floral arrangement, drip styling, or if you will send a photo reference..."
                  rows={2}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-600 text-sm bg-white"
                />
              </div>

            </div>

          </div>

          {/* Right Column: Live Order Summary Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <div className="bg-[#241711] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-amber-950/60 relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Cake className="w-5 h-5 text-amber-400" />
                  <span className="font-serif text-lg font-bold text-amber-100">Live Estimate</span>
                </div>
                <span className="text-[11px] uppercase tracking-wider font-bold bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full">
                  Bakery Demo
                </span>
              </div>

              {/* Itemized spec */}
              <div className="py-4 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-start">
                  <span className="text-stone-300">Selected Flavor:</span>
                  <span className="font-semibold text-right text-white max-w-[160px]">{flavorObj.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-300">Weight & Servings:</span>
                  <span className="font-semibold text-white">{sizeObj.label} ({sizeObj.serves})</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-300">Dietary:</span>
                  <span className={`font-semibold ${isEggless ? 'text-emerald-400' : 'text-stone-200'}`}>
                    {isEggless ? '100% Eggless' : 'Regular'}
                  </span>
                </div>
                {cakeMessage.trim() && (
                  <div className="flex justify-between items-start">
                    <span className="text-stone-300">Plaque Text:</span>
                    <span className="font-medium italic text-amber-200 text-right">"{cakeMessage.trim()}"</span>
                  </div>
                )}
                {selectedAddons.length > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-stone-300">Add-ons ({selectedAddons.length}):</span>
                    <span className="font-semibold text-amber-300">+₹{addonsTotal}</span>
                  </div>
                )}
              </div>

              {/* Price Calculation Box */}
              <div className="pt-4 border-t border-white/15">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-wider text-amber-300/90 font-medium">Estimated Demo Total</span>
                  <div className="text-3xl font-extrabold text-white">
                    ₹{totalEstimatedPrice}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-stone-400 mt-2">
                  <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Verified base rates. Final customization confirmed by baker.</span>
                </div>
              </div>

              {/* WhatsApp Action Button */}
              <div className="pt-5">
                <button
                  type="button"
                  onClick={handleSendInquiry}
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send WhatsApp Inquiry (+91 97043 03881)</span>
                </button>

                {inquirySent && (
                  <p className="text-[11px] text-emerald-400 text-center mt-2 font-medium animate-pulse">
                    ✓ Opening WhatsApp with your cake configuration...
                  </p>
                )}
              </div>

              {/* Verified phone badge */}
              <div className="mt-4 pt-3 border-t border-white/10 text-center text-xs text-stone-400">
                Or call direct for urgent same-day orders:{' '}
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-amber-300 font-bold hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

            </div>

            {/* Quality Promise card */}
            <div className="bg-white rounded-2xl p-4 border border-[#E4D5C5] shadow-xs text-xs space-y-2 text-stone-600">
              <div className="font-bold text-[#241711] flex items-center gap-1.5">
                <Gift className="w-4 h-4 text-[#92400E]" />
                <span>Karimnagar Celebration Guarantee</span>
              </div>
              <p>
                All designer cakes are prepared fresh on order with food-grade safe colors, pure dairy butter, and high-quality chocolate. No frozen, stale sponge used.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
