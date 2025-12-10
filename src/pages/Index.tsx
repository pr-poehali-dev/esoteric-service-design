import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import NotificationCenter from '@/components/notifications/NotificationCenter';
import Footer from '@/components/Footer';
import FadeIn from '@/components/ui/fade-in';
import MobileNav from '@/components/MobileNav';

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isUserLoggedIn] = useState(true);
  const [userZodiac] = useState('Рыбы');

  const getZodiacIcon = (zodiac: string) => {
    const icons: { [key: string]: string } = {
      'Овен': '♈', 'Телец': '♉', 'Близнецы': '♊', 'Рак': '♋',
      'Лев': '♌', 'Дева': '♍', 'Весы': '♎', 'Скорпион': '♏',
      'Стрелец': '♐', 'Козерог': '♑', 'Водолей': '♒', 'Рыбы': '♓'
    };
    return icons[zodiac] || '✨';
  };

  const todayHoroscope = {
    zodiac: userZodiac,
    date: '3 декабря 2024',
    text: 'Сегодня звёзды благоволят новым начинаниям. Отличный день для творческих проектов и общения с близкими. Доверьтесь интуиции — она не подведёт.',
    luck: 85,
    mood: 'Вдохновлённое',
    luckyColor: 'Фиолетовый'
  };

  const popularServices = [
    {
      id: 1,
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
      price: '3000₽'
    },
    {
      id: 2,
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
      price: '1800₽'
    },
    {
      id: 3,
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
      price: '2200₽'
    },
    {
      id: 4,
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
      price: '1500₽'
    }
  ];

  const popularCategories = [
    {
      id: 1,
      name: 'Астрология',
      description: 'Натальные карты, прогнозы, совместимость партнеров',
      image: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      servicesCount: 45
    },
    {
      id: 2,
      name: 'Таро',
      description: 'Расклады на любовь, карьеру и жизненные ситуации',
      image: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      servicesCount: 38
    },
    {
      id: 3,
      name: 'Руны',
      description: 'Древние символы для предсказания и защиты',
      image: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
      servicesCount: 22
    },
    {
      id: 4,
      name: 'Нумерология',
      description: 'Анализ судьбы через числа и даты рождения',
      image: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      servicesCount: 31
    },
    {
      id: 5,
      name: 'Хиромантия',
      description: 'Чтение судьбы по линиям ладони',
      image: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      servicesCount: 18
    },
    {
      id: 6,
      name: 'Медитация',
      description: 'Практики осознанности и духовного развития',
      image: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
      servicesCount: 27
    }
  ];

  const popularAuthors = [
    {
      id: 1,
      name: 'Мария Звездная',
      avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      specialty: 'Астролог',
      rating: 5.0,
      services: 12,
      clients: 1247
    },
    {
      id: 2,
      name: 'Анна Волкова',
      avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      specialty: 'Таролог',
      rating: 4.9,
      services: 8,
      clients: 892
    },
    {
      id: 3,
      name: 'Виктор Рунов',
      avatar: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
      specialty: 'Рунолог',
      rating: 5.0,
      services: 6,
      clients: 645
    },
    {
      id: 4,
      name: 'Елена Лунная',
      avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      specialty: 'Нумеролог',
      rating: 4.8,
      services: 10,
      clients: 534
    }
  ];

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
    <div className="min-h-screen bg-background text-foreground pb-20 md:pb-0">
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://cdn.poehali.dev/projects/c12b3f43-75dd-4704-be69-05b102369318/files/94bb61a2-8a70-485d-ad4a-3d8ae17e25bb.jpg" alt="Мистический мир" className="w-10 h-10 object-contain" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-accent via-mystic-violet to-accent bg-clip-text text-transparent animate-gradient" style={{ fontFamily: 'Playfair Display, serif' }}>
              Мистический мир
            </h1>
          </Link>
          <div className="flex items-center space-x-2">
            <Link to="/services" className="hidden md:inline-block">
              <Button variant="ghost" size="sm">
                <Icon name="ShoppingBag" size={16} className="md:mr-2" />
                <span className="hidden md:inline">Услуги</span>
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              <Icon name="Package" size={16} className="md:mr-2" />
              <span className="hidden md:inline">Товары</span>
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              <Icon name="Users" size={16} className="md:mr-2" />
              <span className="hidden md:inline">Авторы</span>
            </Button>
            <NotificationCenter />
            <Link to="/profile">
              <Button variant="ghost" size="sm">
                <Icon name="User" size={16} className="md:mr-2" />
                <span className="hidden md:inline">Профиль</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative overflow-hidden py-16 px-4 bg-gradient-to-br from-mystic-purple/20 via-background to-mystic-deep/30">
        <div className="container mx-auto text-center relative z-10">
          <FadeIn delay={0}>
            <div className="flex items-center justify-center mb-4">
              <Icon name="Sparkles" className="text-accent animate-pulse" size={48} />
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-accent via-mystic-violet to-accent bg-clip-text text-transparent" 
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Раскройте тайны судьбы
            </h1>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Профессиональные эзотерические консультации от лучших мастеров
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="max-w-2xl mx-auto relative">
              <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground z-10" size={20} />
              <Input 
                placeholder="Поиск услуг, авторов, товаров..."
                className="pl-12 pr-32 py-6 text-lg bg-card/50 border-border focus:border-accent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent hover:bg-accent/90 text-accent-foreground">
                Найти
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {isUserLoggedIn && (
          <Card className="mb-12 bg-gradient-to-br from-mystic-purple/10 via-card/50 to-mystic-violet/10 border-accent/30 overflow-hidden">
            <div className="absolute top-0 right-0 text-[200px] opacity-5 select-none">
              {getZodiacIcon(userZodiac)}
            </div>
            <CardHeader className="relative z-10">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-3">
                  <div className="text-5xl">{getZodiacIcon(userZodiac)}</div>
                  <div>
                    <h3 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Гороскоп на сегодня
                    </h3>
                    <p className="text-muted-foreground">{todayHoroscope.zodiac} • {todayHoroscope.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">{todayHoroscope.luck}%</div>
                    <div className="text-xs text-muted-foreground">Удача</div>
                  </div>
                  <div className="h-12 w-px bg-border"></div>
                  <div className="text-right">
                    <div className="font-semibold">{todayHoroscope.mood}</div>
                    <div className="text-xs text-muted-foreground">Настроение</div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-foreground text-lg leading-relaxed mb-4">
                {todayHoroscope.text}
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Palette" size={16} className="text-accent" />
                  <span className="text-muted-foreground">Цвет дня:</span>
                  <span className="font-medium">{todayHoroscope.luckyColor}</span>
                </div>
                <Button variant="ghost" size="sm" className="ml-auto">
                  Подробный прогноз
                  <Icon name="ArrowRight" size={14} className="ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Популярные категории
            </h2>
            <p className="text-muted-foreground">Выберите направление, которое вас интересует</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {popularCategories.map((category, index) => (
            <FadeIn key={category.id} delay={index * 100}>
              <Card 
              key={category.id} 
              className="group overflow-hidden bg-card/50 border-border hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              </div>

              <CardHeader className="pb-3 relative -mt-10 z-10">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {category.name}
                  </h3>
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                    {category.servicesCount}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </CardHeader>

              <CardFooter>
                <Button variant="ghost" className="w-full group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                  Смотреть услуги
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
            </FadeIn>
          ))}
        </div>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Популярные услуги
            </h2>
            <p className="text-muted-foreground">Самые востребованные консультации наших мастеров</p>
          </div>
          <Link to="/services">
            <Button variant="outline">
              Все услуги
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {popularServices.map((service, index) => (
            <FadeIn key={service.id} delay={index * 100}>
              <Card 
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
                <h3 className="text-lg font-bold mb-2 line-clamp-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="pb-3 flex-1">
                <div className="flex items-center space-x-2 mb-3">
                  <Avatar className="w-8 h-8 border border-accent/30">
                    <AvatarImage src={service.author.avatar} alt={service.author.name} />
                    <AvatarFallback className="bg-accent/10 text-accent text-xs">
                      {service.author.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-foreground truncate">{service.author.name}</p>
                    <div className="flex items-center">
                      <Icon name="Star" className="text-accent fill-accent" size={12} />
                      <span className="text-xs font-bold text-accent ml-1">{service.rating}</span>
                      <span className="text-xs text-muted-foreground ml-2">({service.reviews})</span>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-0 flex items-center justify-between">
                <div>
                  <p className="text-xl font-bold text-accent">{service.price}</p>
                </div>
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Заказать
                </Button>
              </CardFooter>
            </Card>
            </FadeIn>
          ))}
        </div>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Популярные авторы
            </h2>
            <p className="text-muted-foreground">Проверенные мастера с высоким рейтингом</p>
          </div>
          <Button variant="outline">
            Все авторы
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularAuthors.map((author, index) => (
            <FadeIn key={author.id} delay={index * 100} direction="up">
              <Card 
              className="group overflow-hidden bg-card/50 border-border hover:border-accent/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <CardHeader className="text-center pb-3">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-accent/30 group-hover:border-accent transition-colors">
                  <AvatarImage src={author.avatar} alt={author.name} />
                  <AvatarFallback className="bg-accent/10 text-accent text-2xl">
                    {author.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {author.name}
                </h3>
                <p className="text-sm text-muted-foreground">{author.specialty}</p>
              </CardHeader>

              <CardContent className="pb-3">
                <div className="flex items-center justify-center mb-3">
                  <Icon name="Star" className="text-accent fill-accent" size={16} />
                  <span className="text-lg font-bold text-accent ml-1">{author.rating}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-background/50 rounded-lg p-2">
                    <p className="text-xs text-muted-foreground">Услуг</p>
                    <p className="text-sm font-bold text-foreground">{author.services}</p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-2">
                    <p className="text-xs text-muted-foreground">Клиентов</p>
                    <p className="text-sm font-bold text-foreground">{author.clients}</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Button variant="outline" className="w-full">
                  <Icon name="User" size={16} className="mr-2" />
                  Перейти в профиль
                </Button>
              </CardFooter>
            </Card>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <Card className="bg-gradient-to-br from-mystic-purple/20 to-mystic-deep/20 border-accent/30">
          <CardContent className="p-8 text-center">
            <Icon name="Sparkles" className="text-accent mx-auto mb-4" size={48} />
            <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Не знаете, что выбрать?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Наши специалисты помогут подобрать подходящую услугу и ответят на все ваши вопросы
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </CardContent>
        </Card>
      </div>

      <Footer />
      <MobileNav />
    </div>
  );
}