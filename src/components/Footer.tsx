import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Sparkles" className="text-accent" size={32} />
              <h3 className="text-2xl font-bold text-accent" style={{ fontFamily: 'Playfair Display, serif' }}>
                Мистерия
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Профессиональные эзотерические консультации от лучших мастеров
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Все услуги
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Астрология
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Таро
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Руны
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Компания</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/authors" className="text-muted-foreground hover:text-accent transition-colors">
                  Наши авторы
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-accent transition-colors">
                  Товары
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Поддержка</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Помощь
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Обратная связь
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Политика конфиденциальности
            </Link>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-accent transition-colors">
              Условия использования
            </a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-accent transition-colors">
              Публичная оферта
            </a>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Copyright" size={14} />
            <span>{currentYear} Мистерия. Все права защищены.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
