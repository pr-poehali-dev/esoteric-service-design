import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface FavoriteProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  salesCount: number;
  inStock: boolean;
}

interface FavoriteService {
  id: number;
  title: string;
  image: string;
  price: number;
  duration: string;
  rating: number;
  reviewsCount: number;
  author: {
    name: string;
    avatar: string;
  };
}

interface FavoriteAuthor {
  id: number;
  name: string;
  avatar: string;
  specialty: string;
  rating: number;
  reviewsCount: number;
  salesCount: number;
  isOnline: boolean;
}

export default function Favorites() {
  const [favoriteProducts, setFavoriteProducts] = useState<FavoriteProduct[]>([
    {
      id: 1,
      name: 'Таро "Золотое сияние"',
      image: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      price: 2890,
      oldPrice: 3490,
      rating: 4.9,
      reviewsCount: 234,
      salesCount: 1247,
      inStock: true
    },
    {
      id: 2,
      name: 'Набор рунических камней',
      image: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      price: 1590,
      rating: 4.8,
      reviewsCount: 156,
      salesCount: 892,
      inStock: true
    },
    {
      id: 3,
      name: 'Оракул "Лунный свет"',
      image: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
      price: 2490,
      oldPrice: 2990,
      rating: 5.0,
      reviewsCount: 312,
      salesCount: 1678,
      inStock: false
    },
    {
      id: 4,
      name: 'Кристалл аметиста',
      image: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      price: 790,
      rating: 5.0,
      reviewsCount: 98,
      salesCount: 567,
      inStock: true
    }
  ]);

  const [favoriteServices, setFavoriteServices] = useState<FavoriteService[]>([
    {
      id: 1,
      title: 'Расклад на Таро "Путь души"',
      image: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      price: 2500,
      duration: '60 мин',
      rating: 5.0,
      reviewsCount: 342,
      author: {
        name: 'Мария Звездная',
        avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg'
      }
    },
    {
      id: 2,
      title: 'Нумерологический анализ',
      image: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
      price: 1800,
      duration: '45 мин',
      rating: 4.9,
      reviewsCount: 189,
      author: {
        name: 'Алексей Числовой',
        avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg'
      }
    },
    {
      id: 3,
      title: 'Руническая диагностика',
      image: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      price: 3000,
      duration: '90 мин',
      rating: 5.0,
      reviewsCount: 267,
      author: {
        name: 'Олег Рунный',
        avatar: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg'
      }
    }
  ]);

  const [favoriteAuthors, setFavoriteAuthors] = useState<FavoriteAuthor[]>([
    {
      id: 1,
      name: 'Мария Звездная',
      avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      specialty: 'Таролог, нумеролог',
      rating: 5.0,
      reviewsCount: 892,
      salesCount: 3456,
      isOnline: true
    },
    {
      id: 2,
      name: 'Олег Рунный',
      avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      specialty: 'Мастер рун, астролог',
      rating: 4.9,
      reviewsCount: 567,
      salesCount: 2134,
      isOnline: false
    },
    {
      id: 3,
      name: 'Елена Лунная',
      avatar: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
      specialty: 'Астролог, хиромант',
      rating: 5.0,
      reviewsCount: 734,
      salesCount: 2890,
      isOnline: true
    },
    {
      id: 4,
      name: 'Алексей Числовой',
      avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      specialty: 'Нумеролог',
      rating: 4.8,
      reviewsCount: 423,
      salesCount: 1567,
      isOnline: true
    }
  ]);

  const handleRemoveProduct = (productId: number) => {
    setFavoriteProducts(prev => prev.filter(p => p.id !== productId));
  };

  const handleRemoveService = (serviceId: number) => {
    setFavoriteServices(prev => prev.filter(s => s.id !== serviceId));
  };

  const handleRemoveAuthor = (authorId: number) => {
    setFavoriteAuthors(prev => prev.filter(a => a.id !== authorId));
  };

  const handleAddToCart = (productId: number) => {
    console.log('Добавление в корзину:', productId);
    alert('Товар добавлен в корзину!');
  };

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
            Избранное
          </h1>
          <p className="text-muted-foreground">
            Товары, услуги и авторы, которые вам понравились
          </p>
        </div>

        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
            <TabsTrigger value="products" className="relative">
              Товары
              {favoriteProducts.length > 0 && (
                <Badge className="ml-2 bg-accent text-accent-foreground px-2 py-0.5 text-xs">
                  {favoriteProducts.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="services" className="relative">
              Услуги
              {favoriteServices.length > 0 && (
                <Badge className="ml-2 bg-accent text-accent-foreground px-2 py-0.5 text-xs">
                  {favoriteServices.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="authors" className="relative">
              Авторы
              {favoriteAuthors.length > 0 && (
                <Badge className="ml-2 bg-accent text-accent-foreground px-2 py-0.5 text-xs">
                  {favoriteAuthors.length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            {favoriteProducts.length === 0 ? (
              <Card className="bg-card/50 border-border text-center py-16">
                <CardContent>
                  <Icon name="Heart" size={64} className="text-muted-foreground mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-4">Нет избранных товаров</h2>
                  <p className="text-muted-foreground mb-6">Добавляйте товары в избранное, чтобы не потерять их</p>
                  <Link to="/products">
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Icon name="ShoppingBag" size={18} className="mr-2" />
                      Перейти к товарам
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {favoriteProducts.map((product) => (
                  <Card key={product.id} className="group overflow-hidden bg-card/50 border-border hover:border-accent/50 transition-all duration-300 flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </Link>
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleRemoveProduct(product.id)}
                        className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                      >
                        <Icon name="X" size={18} className="text-red-400" />
                      </Button>
                      {!product.inStock && (
                        <Badge className="absolute top-3 left-3 bg-red-500/80 text-white border-0">
                          Нет в наличии
                        </Badge>
                      )}
                    </div>

                    <CardHeader className="pb-3">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="text-lg font-bold mb-2 line-clamp-2 hover:text-accent transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {product.name}
                        </h3>
                      </Link>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="flex items-center">
                          <Icon name="Star" className="text-accent fill-accent" size={14} />
                          <span className="text-accent font-bold ml-1">{product.rating}</span>
                          <span className="text-muted-foreground ml-1">({product.reviewsCount})</span>
                        </div>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{product.salesCount} продаж</span>
                      </div>
                    </CardHeader>

                    <CardFooter className="pt-0 flex-col gap-3 mt-auto">
                      <div className="w-full flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-accent">{product.price}₽</p>
                          {product.oldPrice && (
                            <p className="text-sm text-muted-foreground line-through">{product.oldPrice}₽</p>
                          )}
                        </div>
                        {product.oldPrice && (
                          <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                            -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                          </Badge>
                        )}
                      </div>
                      <Button
                        onClick={() => handleAddToCart(product.id)}
                        disabled={!product.inStock}
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      >
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        {product.inStock ? 'В корзину' : 'Нет в наличии'}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="services">
            {favoriteServices.length === 0 ? (
              <Card className="bg-card/50 border-border text-center py-16">
                <CardContent>
                  <Icon name="Heart" size={64} className="text-muted-foreground mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-4">Нет избранных услуг</h2>
                  <p className="text-muted-foreground mb-6">Добавляйте услуги в избранное для быстрого доступа</p>
                  <Link to="/services">
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Icon name="Briefcase" size={18} className="mr-2" />
                      Перейти к услугам
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteServices.map((service) => (
                  <Card key={service.id} className="group overflow-hidden bg-card/50 border-border hover:border-accent/50 transition-all duration-300 flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <Link to={`/service/${service.id}`}>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </Link>
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleRemoveService(service.id)}
                        className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                      >
                        <Icon name="X" size={18} className="text-red-400" />
                      </Button>
                    </div>

                    <CardHeader className="pb-3">
                      <Link to={`/service/${service.id}`}>
                        <h3 className="text-lg font-bold mb-3 line-clamp-2 hover:text-accent transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {service.title}
                        </h3>
                      </Link>
                      <div className="flex items-center space-x-3 mb-3">
                        <Avatar className="w-8 h-8 border-2 border-accent/30">
                          <AvatarImage src={service.author.avatar} alt={service.author.name} />
                          <AvatarFallback className="bg-accent/10 text-accent text-xs">
                            {service.author.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <Link to={`/author/${service.id}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                          {service.author.name}
                        </Link>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <Icon name="Star" className="text-accent fill-accent" size={14} />
                          <span className="text-accent font-bold ml-1">{service.rating}</span>
                          <span className="text-muted-foreground ml-1">({service.reviewsCount})</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Icon name="Clock" size={14} className="mr-1" />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardFooter className="pt-0 flex-col gap-3 mt-auto">
                      <div className="w-full flex items-center justify-between">
                        <p className="text-2xl font-bold text-accent">{service.price}₽</p>
                      </div>
                      <Link to={`/service/${service.id}`} className="w-full">
                        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                          <Icon name="Calendar" size={16} className="mr-2" />
                          Записаться
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="authors">
            {favoriteAuthors.length === 0 ? (
              <Card className="bg-card/50 border-border text-center py-16">
                <CardContent>
                  <Icon name="Heart" size={64} className="text-muted-foreground mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-4">Нет избранных авторов</h2>
                  <p className="text-muted-foreground mb-6">Подписывайтесь на авторов, чтобы следить за их работой</p>
                  <Link to="/services">
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Icon name="Users" size={18} className="mr-2" />
                      Найти авторов
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {favoriteAuthors.map((author) => (
                  <Card key={author.id} className="group overflow-hidden bg-card/50 border-border hover:border-accent/50 transition-all duration-300 flex flex-col">
                    <CardHeader className="text-center pb-3 relative">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleRemoveAuthor(author.id)}
                        className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                      >
                        <Icon name="X" size={18} className="text-red-400" />
                      </Button>
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
                        </div>
                        <h3 className="text-xl font-bold mb-2 hover:text-accent transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {author.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">{author.specialty}</p>
                      </Link>
                      <div className="flex items-center justify-center space-x-4 text-sm">
                        <div className="flex items-center">
                          <Icon name="Star" className="text-accent fill-accent" size={14} />
                          <span className="text-accent font-bold ml-1">{author.rating}</span>
                        </div>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{author.reviewsCount} отзывов</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">{author.salesCount} консультаций</p>
                    </CardHeader>

                    <CardFooter className="pt-0 flex-col gap-2 mt-auto">
                      <Link to={`/author/${author.id}`} className="w-full">
                        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                          <Icon name="User" size={16} className="mr-2" />
                          Перейти в профиль
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
