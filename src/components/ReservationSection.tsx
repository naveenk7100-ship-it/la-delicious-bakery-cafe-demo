import React, { useState } from 'react';
import { 
  PartyPopper, 
  MessageCircle, 
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO } from '../data/bakeryData';

export const ReservationSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('7:00 PM');
  const [guests, setGuests] = useState('4 Guests');
  const [occasion, setOccasion] = useState('Birthday Celebration');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // noop
    }

    setSubmitted(true);

    const message = `*TABLE & CELEBRATION BOOKING — La'Delicious / Charlie Bistro*
----------------------------------------
👤 *Name:* ${name || 'Guest'}
📞 *Phone:* ${phone || 'Not provided'}
📅 *Date:* ${date || 'Today/Soon'}
⏰ *Time:* ${time}
👥 *Guests:* ${guests}
🎉 *Occasion:* ${occasion}
📝 *Cake/Food Notes:* ${notes.trim() || 'Standard dining'}

Hi! I would like to reserve our table/party spot at your Jyothinagar cafe. Please confirm availability!`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encoded}`;
    
    setTimeout(() => {
      window.open(url, '_blank');
    }, 400);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#241711] via-[#2F1E16] to-[#1C120C] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-amber-950/60 relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <PartyPopper className="w-4 h-4 text-amber-400" />
                <span>Celebrate With Us</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight text-white">
                Host Your Birthday & Family Gathering at Jyothinagar
              </h2>

              <p className="text-stone-300 text-sm leading-relaxed">
                Planning a special birthday surprise, romantic anniversary dinner, or friendly team treat? Reserve your table in advance and let us coordinate custom cake cutting, music, and savory Charlie bistro platters.
              </p>

              <div className="space-y-3 pt-2 text-xs text-stone-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free cake table setup & festive sparklers</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dedicated group seating in comfortable AC lounge</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Custom combo starters & beverages arranged on request</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-stone-400">
                Urgent same-day booking? Call us directly:{' '}
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-amber-300 font-bold hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-7 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15">
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-amber-200 mb-1">Your Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="e.g. Sneha Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-amber-200 mb-1">Contact Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-amber-200 mb-1">Reservation Date</label>
                    <input 
                      type="text" 
                      required
                      value={date}
                      onChange={e => setDate(e.target.value)}
                      placeholder="e.g. Friday, 24 Oct"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-amber-200 mb-1">Preferred Time</label>
                    <select
                      value={time}
                      onChange={e => setTime(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#2F1E16] border border-white/20 text-white text-sm focus:outline-none focus:border-amber-400"
                    >
                      <option value="12:30 PM">12:30 PM (Lunch)</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="4:30 PM">4:30 PM (High Tea)</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:30 PM">7:30 PM (Dinner)</option>
                      <option value="8:30 PM">8:30 PM</option>
                      <option value="9:15 PM">9:15 PM</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-amber-200 mb-1">Party Size</label>
                    <select
                      value={guests}
                      onChange={e => setGuests(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#2F1E16] border border-white/20 text-white text-sm focus:outline-none focus:border-amber-400"
                    >
                      <option value="2 Guests">2 Guests (Couple)</option>
                      <option value="4 Guests">4 Guests</option>
                      <option value="6 Guests">6 Guests</option>
                      <option value="8-12 Guests">8 - 12 Guests</option>
                      <option value="15+ Guests (Party)">15+ Guests (Private Area)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-amber-200 mb-1">Occasion</label>
                    <select
                      value={occasion}
                      onChange={e => setOccasion(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#2F1E16] border border-white/20 text-white text-sm focus:outline-none focus:border-amber-400"
                    >
                      <option value="Birthday Celebration">🎂 Birthday Celebration</option>
                      <option value="Anniversary Date">❤️ Anniversary Celebration</option>
                      <option value="Friends Hangout">☕ Friends Hangout</option>
                      <option value="Family Dinner">🍽️ Family Dinner</option>
                      <option value="Casual Cafe Dining">✨ Casual Cafe Dining</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-amber-200 mb-1">Cake or Food Special Notes</label>
                    <input 
                      type="text" 
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                      placeholder="e.g. Keep 1kg Belgian cake ready"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-extrabold text-sm shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Confirm Table Reservation via WhatsApp</span>
                  </button>
                  {submitted && (
                    <p className="text-xs text-amber-300 text-center mt-2 font-medium">
                      ✓ Redirecting to WhatsApp with your reservation summary...
                    </p>
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
