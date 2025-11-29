import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import NotificationCenter from '@/components/notifications/NotificationCenter';

export default function Services() {
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const services = [
    {
      id: 1,
      name: 'Расклад Таро "Кельтский крест"',
      description: 'Глубокий анализ вашей жизненной ситуации через древнюю систему Таро',
      image: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      author: {
        name: 'Анна Волкова',
        avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg'
      },
      rating: 4.9,
      purchases: 247,
      reviews: 89,
      subscription: 'Базовая',
      price: '1500₽',
      category: 'tarot'
    },
    {
      id: 2,
      name: 'Натальная карта + консультация',
      description: 'Полный разбор натальной карты с детальной консультацией астролога',
      image: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      author: {
        name: 'Мария Звездная',
        avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg'
      },
      rating: 5.0,
      purchases: 412,
      reviews: 156,
      subscription: 'Премиум',
      price: '3000₽',
      category: 'astrology'
    },
    {
      id: 3,
      name: 'Гадание на рунах "Один"',
      description: 'Быстрый ответ на конкретный вопрос через мудрость северных рун',
      image: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
      author: {
        name: 'Виктор Рунов',
        avatar: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg'
      },
      rating: 4.8,
      purchases: 189,
      reviews: 67,
      subscription: 'Базовая',
      price: '1200₽',
      category: 'runes'
    },
    {
      id: 4,
      name: 'Таро на любовь и отношения',
      description: 'Специализированный расклад для раскрытия тайн сердечных дел',
      image: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      author: {
        name: 'Анна Волкова',
        avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg'
      },
      rating: 4.9,
      purchases: 334,
      reviews: 122,
      subscription: 'Базовая',
      price: '1800₽',
      category: 'tarot'
    },
    {
      id: 5,
      name: 'Прогноз совместимости партнеров',
      description: 'Синастрия - астрологический анализ совместимости двух людей',
      image: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      author: {
        name: 'Мария Звездная',
        avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg'
      },
      rating: 4.9,
      purchases: 278,
      reviews: 98,
      subscription: 'Стандарт',
      price: '2200₽',
      category: 'astrology'
    },
    {
      id: 6,
      name: 'Рунический амулет и активация',
      description: 'Создание персонального рунического амулета с энергетической активацией',
      image: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
      author: {
        name: 'Виктор Рунов',
        avatar: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg'
      },
      rating: 5.0,
      purchases: 156,
      reviews: 74,
      subscription: 'Премиум',
      price: '2800₽',
      category: 'runes'
    }
  ];

  const filteredServices = filter === 'all' 
    ? services 
    : services.filter(s => s.category === filter);

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentServices = filteredServices.slice(startIndex, endIndex);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSubscriptionColor = (subscription: string) => {
    switch (subscription) {
      case 'Базовая':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Стандарт':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Премиум':
        return 'bg-accent/20 text-accent border-accent/30';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Sparkles" className="text-accent" size={32} />
            <h1 className="text-2xl font-bold text-accent" style={{ fontFamily: 'Playfair Display, serif' }}>
              Мистерия
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Icon name="Home" size={16} className="mr-2" />
              Главная
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="ShoppingBag" size={16} className="mr-2" />
              Услуги
            </Button>
            <NotificationCenter />
            <Button variant="ghost" size="sm">
              <Icon name="User" size={16} className="mr-2" />
              Профиль
            </Button>
          </div>
        </div>
      </nav>

      <div className="relative overflow-hidden py-16 px-4 bg-gradient-to-br from-mystic-purple/20 via-background to-mystic-deep/30">
        <div className="container mx-auto text-center relative z-10">
          <div className="flex items-center justify-center mb-4">
            <Icon name="ShoppingBag" className="text-accent mr-3" size={40} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-accent via-mystic-violet to-accent bg-clip-text text-transparent" 
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Каталог услуг
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите услугу, которая откроет вам путь к познанию судьбы
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 bg-card/50">
            <TabsTrigger value="all" onClick={() => handleFilterChange('all')}>
              Все
            </TabsTrigger>
            <TabsTrigger value="tarot" onClick={() => handleFilterChange('tarot')}>
              Таро
            </TabsTrigger>
            <TabsTrigger value="astrology" onClick={() => handleFilterChange('astrology')}>
              Астрология
            </TabsTrigger>
            <TabsTrigger value="runes" onClick={() => handleFilterChange('runes')}>
              Руны
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentServices.map((service) => (
            <Card 
              key={service.id} 
              className="group overflow-hidden bg-card/50 border-border hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <Badge className={`absolute top-3 right-3 ${getSubscriptionColor(service.subscription)}`}>
                  {service.subscription}
                </Badge>
              </div>

              <CardHeader className="pb-3">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="pb-3 flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="w-10 h-10 border-2 border-accent/30">
                    <AvatarImage src={service.author.avatar} alt={service.author.name} />
                    <AvatarFallback className="bg-accent/10 text-accent text-sm">
                      {service.author.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-foreground">{service.author.name}</p>
                    <div className="flex items-center mt-0.5">
                      <Icon name="Star" className="text-accent fill-accent" size={14} />
                      <span className="text-sm font-bold text-accent ml-1">{service.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-background/50 rounded-lg p-2">
                    <div className="flex items-center justify-center mb-1">
                      <Icon name="ShoppingCart" size={14} className="text-muted-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground">Покупок</p>
                    <p className="text-sm font-bold text-foreground">{service.purchases}</p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-2">
                    <div className="flex items-center justify-center mb-1">
                      <Icon name="MessageSquare" size={14} className="text-muted-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground">Отзывов</p>
                    <p className="text-sm font-bold text-foreground">{service.reviews}</p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-2">
                    <div className="flex items-center justify-center mb-1">
                      <Icon name="Star" size={14} className="text-accent" />
                    </div>
                    <p className="text-xs text-muted-foreground">Рейтинг</p>
                    <p className="text-sm font-bold text-accent">{service.rating}</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-0 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Цена</p>
                  <p className="text-2xl font-bold text-accent">{service.price}</p>
                </div>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Заказать
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <Icon name="Search" className="text-muted-foreground mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-2">Услуги не найдены</h3>
            <p className="text-muted-foreground">Попробуйте выбрать другую категорию</p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex flex-col items-center space-y-4 mt-12">
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="disabled:opacity-50"
              >
                <Icon name="ChevronLeft" size={16} />
              </Button>

              <div className="flex items-center space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <Button
                        key={page}
                        variant={currentPage === page ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => goToPage(page)}
                        className={
                          currentPage === page
                            ? 'bg-accent hover:bg-accent/90 text-accent-foreground'
                            : ''
                        }
                      >
                        {page}
                      </Button>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return (
                      <span key={page} className="px-2 text-muted-foreground">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="disabled:opacity-50"
              >
                <Icon name="ChevronRight" size={16} />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Страница {currentPage} из {totalPages} · Показано {startIndex + 1}-{Math.min(endIndex, filteredServices.length)} из {filteredServices.length} услуг
            </p>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 pb-16">
        <Card className="bg-gradient-to-br from-mystic-purple/20 to-mystic-deep/20 border-accent/30">
          <CardContent className="p-8 text-center">
            <Icon name="Sparkles" className="text-accent mx-auto mb-4" size={48} />
            <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Не нашли подходящую услугу?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Закажите индивидуальную консультацию, и наши мастера подберут решение специально для вас
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Индивидуальная консультация
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}