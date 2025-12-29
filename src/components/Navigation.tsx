import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import NotificationCenter from '@/components/notifications/NotificationCenter';

export default function Navigation() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🔮</span>
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Astro Market
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/services" className="text-sm font-medium transition-colors hover:text-primary">
            Услуги
          </Link>
          <Link to="/products" className="text-sm font-medium transition-colors hover:text-primary">
            Товары
          </Link>
          <Link to="/authors" className="text-sm font-medium transition-colors hover:text-primary">
            Авторы
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            О нас
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <NotificationCenter />
          
          <Link to="/favorites">
            <Button variant="ghost" size="icon">
              <Icon name="Heart" size={20} />
            </Button>
          </Link>

          <Link to="/cart">
            <Button variant="ghost" size="icon">
              <Icon name="ShoppingCart" size={20} />
            </Button>
          </Link>

          <Link to="/profile">
            <Button variant="ghost" size="icon">
              <Icon name="User" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
