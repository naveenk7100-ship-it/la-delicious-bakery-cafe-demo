import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpecialtyCakesShowcase } from './components/SpecialtyCakesShowcase';
import { CustomCakeStudio } from './components/CustomCakeStudio';
import { MenuExplorer } from './components/MenuExplorer';
import { StorySection } from './components/StorySection';
import { ReservationSection } from './components/ReservationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderTrayDrawer } from './components/OrderTrayDrawer';
import type { CartItem } from './components/OrderTrayDrawer';
import { BUSINESS_INFO } from './data/bakeryData';
import type { MenuItem } from './data/bakeryData';
import { Phone, MessageCircle, Cake, ShoppingBag } from 'lucide-react';

export function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(ci => ci.item.id === item.id);
      if (existing) {
        return prev.map(ci => 
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      setCart(prev => prev.filter(ci => ci.item.id !== itemId));
    } else {
      setCart(prev => prev.map(ci => 
        ci.item.id === itemId ? { ...ci, quantity: newQty } : ci
      ));
    }
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToCakeStudio = () => {
    const el = document.getElementById('cake-studio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const el = document.getElementById('digital-menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((sum, ci) => sum + ci.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] selection:bg-amber-400 selection:text-stone-950">
      
      {/* Navigation */}
      <Navbar 
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCakeStudio={scrollToCakeStudio}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero 
          onOpenCakeStudio={scrollToCakeStudio}
          onExploreMenu={scrollToMenu}
        />

        <SpecialtyCakesShowcase 
          onOpenCakeStudio={scrollToCakeStudio}
          onAddToCart={handleAddToCart}
        />

        <CustomCakeStudio id="cake-studio" />

        <MenuExplorer 
          onAddToCart={handleAddToCart}
          cartItemIds={cart.map(c => c.item.id)}
        />

        <StorySection />

        <ReservationSection />

        <ReviewsSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Cart / Order Drawer */}
      <OrderTrayDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Mobile Sticky Action Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-[#241711]/95 backdrop-blur-md border-t border-[#3D281F] py-2.5 px-4 z-30 lg:hidden flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-center text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-amber-300" />
          <span>Call Us</span>
        </a>

        <button
          onClick={scrollToCakeStudio}
          className="flex-1 py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-center text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
        >
          <Cake className="w-3.5 h-3.5" />
          <span>Cake Studio</span>
        </button>

        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20La%27Delicious%20Bakery,%20I%20would%20like%20to%20order%20from%20your%20Karimnagar%20outlet!`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-center text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {totalCartCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="p-2 rounded-xl bg-amber-600 text-white relative flex items-center justify-center"
            aria-label="Open Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
              {totalCartCount}
            </span>
          </button>
        )}
      </div>

    </div>
  );
}

export default App;
