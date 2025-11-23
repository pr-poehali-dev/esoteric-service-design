import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface Author {
  id: number;
  name: string;
  avatar: string;
  specialty: string;
  servicesCount: number;
  salesCount: number;
  rating: number;
  reviewsCount: number;
  isOnline: boolean;
  isVerified: boolean;
}

export default function Authors() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  const authors: Author[] = [
    {
      id: 1,
      name: 'Мария Звездная',
      avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      specialty: 'Таролог, нумеролог',
      servicesCount: 12,
      salesCount: 3456,
      rating: 5.0,
      reviewsCount: 892,
      isOnline: true,
      isVerified: true
    },
    {
      id: 2,
      name: 'Олег Рунный',
      avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      specialty: 'Мастер рун, астролог',
      servicesCount: 8,
      salesCount: 2134,
      rating: 4.9,
      reviewsCount: 567,
      isOnline: false,
      isVerified: true
    },
    {
      id: 3,
      name: 'Елена Лунная',
      avatar: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
      specialty: 'Астролог, хиромант',
      servicesCount: 15,
      salesCount: 2890,
      rating: 5.0,
      reviewsCount: 734,
      isOnline: true,
      isVerified: true
    },
    {
      id: 4,
      name: 'Алексей Числовой',
      avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      specialty: 'Нумеролог',
      servicesCount: 6,
      salesCount: 1567,
      rating: 4.8,
      reviewsCount: 423,
      isOnline: true,
      isVerified: false
    },
    {
      id: 5,
      name: 'Анна Кристальная',
      avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      specialty: 'Литотерапевт, целитель',
      servicesCount: 10,
      salesCount: 1876,
      rating: 4.9,
      reviewsCount: 512,
      isOnline: false,
      isVerified: true
    },
    {
      id: 6,
      name: 'Дмитрий Ведун',
      avatar: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
      specialty: 'Ведический астролог',
      servicesCount: 9,
      salesCount: 2245,
      rating: 5.0,
      reviewsCount: 645,
      isOnline: true,
      isVerified: true
    },
    {
      id: 7,
      name: 'Софья Звёздная',
      avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      specialty: 'Таролог, оракул',
      servicesCount: 14,
      salesCount: 3012,
      rating: 4.9,
      reviewsCount: 789,
      isOnline: true,
      isVerified: true
    },
    {
      id: 8,
      name: 'Виктор Мудрый',
      avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      specialty: 'Кармический психолог',
      servicesCount: 7,
      salesCount: 1345,
      rating: 4.7,
      reviewsCount: 398,
      isOnline: false,
      isVerified: false
    },
    {
      id: 9,
      name: 'Ирина Солнечная',
      avatar: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
      specialty: 'Ангелотерапевт, регрессолог',
      servicesCount: 11,
      salesCount: 2567,
      rating: 5.0,
      reviewsCount: 678,
      isOnline: true,
      isVerified: true
    },
    {
      id: 10,
      name: 'Максим Древний',
      avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      specialty: 'Шаман, практик',
      servicesCount: 5,
      salesCount: 987,
      rating: 4.8,
      reviewsCount: 234,
      isOnline: false,
      isVerified: true
    },
    {
      id: 11,
      name: 'Екатерина Магия',
      avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      specialty: 'Магистр магии, ритуалист',
      servicesCount: 13,
      salesCount: 2789,
      rating: 4.9,
      reviewsCount: 712,
      isOnline: true,
      isVerified: true
    },
    {
      id: 12,
      name: 'Андрей Ясновидец',
      avatar: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
      specialty: 'Ясновидящий, медиум',
      servicesCount: 8,
      salesCount: 1678,
      rating: 4.8,
      reviewsCount: 456,
      isOnline: true,
      isVerified: false
    }
  ];

  const filteredAuthors = authors
    .filter(author => 
      author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      author.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating || b.reviewsCount - a.reviewsCount;
        case 'sales':
          return b.salesCount - a.salesCount;
        case 'reviews':
          return b.reviewsCount - a.reviewsCount;
        case 'services':
          return b.servicesCount - a.servicesCount;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Sparkles" className="text-accent" size={32} />
            <h1 className="text-2xl font-bold text-accent" style={{ fontFamily: 'Playfair Display, serif' }}>
              Мистерия
            </h1>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/services">
              <Button variant="ghost" size="sm">
                <Icon name="Briefcase" size={16} className="mr-2" />
                Услуги
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="ghost" size="sm">
                <Icon name="ShoppingBag" size={16} className="mr-2" />
                Товары
              </Button>
            </Link>
            <Link to="/authors">
              <Button variant="ghost" size="sm">
                <Icon name="Users" size={16} className="mr-2" />
                Авторы
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="sm">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Корзина
              </Button>
            </Link>
            <Link to="/favorites">
              <Button variant="ghost" size="sm">
                <Icon name="Heart" size={16} className="mr-2" />
                Избранное
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Профиль
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Авторы
          </h1>
          <p className="text-muted-foreground">
            Найдите своего эксперта среди {authors.length} мастеров
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Поиск по имени или специализации..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-64">
              <SelectValue placeholder="Сортировка" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">По рейтингу</SelectItem>
              <SelectItem value="sales">По количеству продаж</SelectItem>
              <SelectItem value="reviews">По отзывам</SelectItem>
              <SelectItem value="services">По услугам</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {filteredAuthors.length === 0 ? (
          <Card className="bg-card/50 border-border text-center py-16">
            <CardContent>
              <Icon name="SearchX" size={64} className="text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Ничего не найдено</h2>
              <p className="text-muted-foreground mb-6">Попробуйте изменить параметры поиска</p>
              <Button onClick={() => setSearchQuery('')} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Сбросить фильтры
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAuthors.map((author) => (
              <Card key={author.id} className="group overflow-hidden bg-card/50 border-border hover:border-accent/50 transition-all duration-300 flex flex-col">
                <CardHeader className="text-center pb-3">
                  <Link to={`/author/${author.id}`} className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <Avatar className="w-24 h-24 border-4 border-accent/30 group-hover:border-accent transition-colors">
                        <AvatarImage src={author.avatar} alt={author.name} />
                        <AvatarFallback className="bg-accent/10 text-accent text-2xl">
                          {author.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      {author.isOnline && (
                        <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-background" />
                      )}
                      {author.isVerified && (
                        <div className="absolute top-0 right-0 bg-accent rounded-full p-1">
                          <Icon name="BadgeCheck" size={16} className="text-accent-foreground" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 hover:text-accent transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {author.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{author.specialty}</p>
                  </Link>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="Star" className="text-accent fill-accent" size={16} />
                      <span className="text-accent font-bold text-lg">{author.rating}</span>
                      <span className="text-muted-foreground">({author.reviewsCount} отзывов)</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div className="bg-background/50 rounded-lg p-2">
                        <div className="flex items-center justify-center text-muted-foreground mb-1">
                          <Icon name="Briefcase" size={14} />
                        </div>
                        <p className="text-center font-bold">{author.servicesCount}</p>
                        <p className="text-xs text-center text-muted-foreground">услуг</p>
                      </div>
                      <div className="bg-background/50 rounded-lg p-2">
                        <div className="flex items-center justify-center text-muted-foreground mb-1">
                          <Icon name="ShoppingBag" size={14} />
                        </div>
                        <p className="text-center font-bold">{author.salesCount}</p>
                        <p className="text-xs text-center text-muted-foreground">продаж</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardFooter className="pt-0 flex-col gap-2 mt-auto">
                  <Link to={`/author/${author.id}`} className="w-full">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Icon name="User" size={16} className="mr-2" />
                      Профиль автора
                    </Button>
                  </Link>
                  <Link to="/chat" className="w-full">
                    <Button variant="outline" className="w-full">
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      Написать
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Показано {filteredAuthors.length} из {authors.length} авторов
          </p>
        </div>
      </div>
    </div>
  );
}
