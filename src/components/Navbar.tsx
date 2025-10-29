import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg border-b-4 border-primary sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Zap" className="text-white" size={24} />
            </div>
            <span className="font-bold text-xl text-foreground">NINJA SHOP</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-foreground hover:text-primary font-medium transition-colors">
              Главная
            </Link>
            <Link to="/catalog" className="text-foreground hover:text-primary font-medium transition-colors">
              Каталог
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary font-medium transition-colors">
              Услуги
            </Link>
            <Link to="/faq" className="text-foreground hover:text-primary font-medium transition-colors">
              FAQ
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary font-medium transition-colors">
              Блог
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="ShoppingCart" size={20} />
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold">
              Войти
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon name={isOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block py-2 text-foreground hover:text-primary font-medium">
              Главная
            </Link>
            <Link to="/catalog" className="block py-2 text-foreground hover:text-primary font-medium">
              Каталог
            </Link>
            <Link to="/services" className="block py-2 text-foreground hover:text-primary font-medium">
              Услуги
            </Link>
            <Link to="/faq" className="block py-2 text-foreground hover:text-primary font-medium">
              FAQ
            </Link>
            <Link to="/blog" className="block py-2 text-foreground hover:text-primary font-medium">
              Блог
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
