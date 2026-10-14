import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageCircle, 
  ArrowRight,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO } from '../data/bakeryData';
import type { MenuItem } from '../data/bakeryData';

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface OrderTrayDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onClearCart: () => void;
}

export const OrderTrayDrawer: React.FC<OrderTrayDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onClearCart
}) => {
  if (!isOpen) return null;

  const totalAmount = cart.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);

  const handleCheckoutWhatsApp = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 50,
        origin: { y: 0.6 }
      });
    } catch {
      // noop
    }

    const itemsSummary = cart.map(ci => 
      `• ${ci.item.name} x${ci.quantity} — ₹${ci.item.price * ci.quantity}`
    ).join('\n');

    const whatsappText = `*ORDER INQUIRY — La'Delicious Bakery & Cafe*
----------------------------------------
📍 *Outlet:* Jyothinagar, Karimnagar
📋 *Selected Items:*
${itemsSummary}
----------------------------------------
💰 *Demo Order Subtotal:* ₹${totalAmount}

Hi! I would like to place this order for pickup/delivery in Karimnagar. Please confirm preparation time!`;

    const encoded = encodeURIComponent(whatsappText);
    const url = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encoded}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF6F0] shadow-2xl flex flex-col border-l border-[#E0CEBE]">
          
          {/* Header */}
          <div className="p-5 bg-[#241711] text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-amber-300" />
              <div>
                <h3 className="font-serif text-lg font-bold">Your Bakery Order Tray</h3>
                <span className="text-[11px] text-amber-200/80">
                  {cart.length} {cart.length === 1 ? 'item' : 'items'} selected
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#EADCCF] text-[#8C3C0B] flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#241711]">Your tray is empty</h4>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Browse our artisanal cakes, French pastries, and savory Charlie cafe bites to add items here.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-5 py-2.5 rounded-xl bg-[#92400E] text-white text-xs font-bold shadow-sm"
                >
                  Browse Menu Now
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-stone-200 text-xs text-stone-500">
                  <span>Selected Specialties</span>
                  <button
                    onClick={onClearCart}
                    className="text-red-700 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear All</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {cart.map(({ item, quantity }) => (
                    <div 
                      key={item.id} 
                      className="bg-white p-3.5 rounded-2xl border border-[#E0CEBE] shadow-xs flex items-center gap-3"
                    >
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-16 h-16 rounded-xl object-cover shrink-0" 
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif font-bold text-sm text-[#241711] truncate">
                          {item.name}
                        </h4>
                        <div className="text-xs font-bold text-[#92400E] mt-0.5">
                          ₹{item.price * quantity}
                          <span className="text-[10px] text-stone-400 font-normal ml-1">
                            (₹{item.price} each)
                          </span>
                        </div>

                        {/* Quantity Counter */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, quantity - 1)}
                            className="w-6 h-6 rounded-lg bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-700 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-5 text-center text-stone-800">
                            {quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, quantity + 1)}
                            className="w-6 h-6 rounded-lg bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-700 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => onUpdateQuantity(item.id, 0)}
                        className="text-stone-300 hover:text-red-600 p-1.5 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Dietary badge */}
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-[11px] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fresh daily bake assurance. 100% Eggless packaging clearly marked.</span>
                </div>
              </>
            )}
          </div>

          {/* Footer with Checkout */}
          {cart.length > 0 && (
            <div className="p-5 bg-white border-t border-[#E0CEBE] space-y-4 shadow-lg">
              <div className="flex items-center justify-between text-base font-bold text-[#241711]">
                <span>Estimated Subtotal</span>
                <span className="text-xl text-[#92400E]">₹{totalAmount}</span>
              </div>

              <button
                type="button"
                onClick={handleCheckoutWhatsApp}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Place Order on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center">
                <span className="text-[11px] text-stone-500 block mb-1.5">Prefer standard delivery apps?</span>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={BUSINESS_INFO.swiggyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-orange-600 hover:underline flex items-center gap-1"
                  >
                    <span>Open on Swiggy</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-stone-300">•</span>
                  <a
                    href={BUSINESS_INFO.zomatoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-red-600 hover:underline flex items-center gap-1"
                  >
                    <span>Open on Zomato</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
