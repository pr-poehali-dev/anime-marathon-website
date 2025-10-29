import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white border-t-4 border-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
              <span className="font-bold text-xl">NINJA SHOP</span>
            </div>
            <p className="text-gray-300 text-sm">
              Лучший магазин для настоящих ниндзя
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-primary">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors">Главная</Link></li>
              <li><Link to="/catalog" className="text-gray-300 hover:text-primary transition-colors">Каталог</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Услуги</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-primary">Контакты</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@ninjashop.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Ниндзя, 1</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-primary">Соц. сети</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-colors">
                <Icon name="Share2" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 NINJA SHOP. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
