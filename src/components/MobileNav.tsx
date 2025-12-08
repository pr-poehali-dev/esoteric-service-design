import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function MobileNav() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: 'Home', label: 'Главная' },
    { path: '/services', icon: 'ShoppingBag', label: 'Услуги' },
    { path: '/orders', icon: 'Package', label: 'Заказы' },
    { path: '/authors', icon: 'Users', label: 'Авторы' },
    { path: '/profile', icon: 'User', label: 'Профиль' }
  ];
  
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all ${
                isActive 
                  ? 'text-accent' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon 
                name={item.icon as any} 
                size={20} 
                className={isActive ? 'text-accent' : ''}
              />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}