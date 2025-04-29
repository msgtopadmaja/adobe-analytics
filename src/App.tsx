import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { Products } from "./pages/Products";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { CartItem, Product } from "./types";

// Create a wrapper component that will handle the analytics tracking
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // Update the data layer with the current path whenever location changes
    if (typeof window !== "undefined") {
      // Initialize digitalData object if it doesn't exist
      if (!(window as any).digitalData) {
        (window as any).digitalData = {};
      }

      // Set the pageView event
      (window as any).digitalData= {
          event: "pageView",
          path: location.pathname,
      };
    }

    if (typeof window !== "undefined") {
      // Initialize digitalData object if it doesn't exist
      if (!(window as any).adobeDataLayer) {
        (window as any).adobeDataLayer = {};
      }

      // Set the pageView event
      (window as any).adobeDataLayer= {
          event: "pageView",
          path: location.pathname,
      };
    }
  }, [location]);

  return null;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === product.id);
      if (existingItem) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <Router>
      {/* Add the analytics tracker here */}
      <AnalyticsTracker />

      <div className="min-h-screen bg-gray-50">
        <Header
          cartItemsCount={cartItems.reduce(
            (sum, item) => sum + item.quantity,
            0
          )}
          onCartClick={() => setShowCart(!showCart)}
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {showCart ? (
            <>
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                  Shopping Cart
                </h1>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  Continue Shopping
                </button>
              </div>
              <Cart
                items={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
              />
            </>
          ) : (
            <Routes>
              <Route path="/" element={<Products onAddToCart={addToCart} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          )}
        </main>
      </div>
    </Router>
  );
}

export default App;
