import { ShoppingCart, Home, Info, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemsCount, onCartClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex space-x-8">
            <Link
              to="/"
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Info size={20} />
              <span>About</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail size={20} />
              <span>Contact</span>
            </Link>
          </div>
          <button
            onClick={onCartClick}
            className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors relative"
          >
            <ShoppingCart size={20} />
            <span>Cart</span>
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}