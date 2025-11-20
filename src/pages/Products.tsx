import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const products = [
    {
      id: 1,
      name: 'Таро "Золотое сияние"',
      description: 'Премиальная колода Таро с позолоченными краями и мистическими иллюстрациями',
      images: [
        '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
        '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
        '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg'
      ],
      price: 2890,
      rating: 4.9,
      reviewsCount: 234,
      salesCount: 1247,
      stock: 15,
      seller: {
        id: 1,
        name: 'Мария Звездная',
        avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
        rating: 5.0
      }
    },
    {
      id: 2,
      name: 'Набор рунических камней',
      description: 'Натуральные камни с выгравированными рунами в бархатном мешочке',
      images: [
        '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
        '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
        '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg'
      ],
      price: 1590,
      rating: 4.8,
      reviewsCount: 156,
      salesCount: 892,
      stock: 23,
      seller: {
        id: 2,
        name: 'Анна Луна',
        avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
        rating: 4.9
      }
    },
    {
      id: 3,
      name: 'Кристалл аметиста',
      description: 'Натуральный кристалл аметиста для медитаций и защиты',
      images: [
        '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
        '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
        '/img/bfba9552-d826-4988-b161-355884e82a28.jpg'
      ],
      price: 790,
      rating: 5.0,
      reviewsCount: 98,
      salesCount: 567,
      stock: 8,
      seller: {
        id: 1,
        name: 'Мария Звездная',
        avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
        rating: 5.0
      }
    },
    {
      id: 4,
      name: 'Ароматические свечи "Мистика"',
      description: 'Набор из 3 свечей для ритуалов и медитаций с натуральными ароматами',
      images: [
        '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
        '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
        '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg'
      ],
      price: 1290,
      rating: 4.7,
      reviewsCount: 189,
      salesCount: 1034,
      stock: 42,
      seller: {
        id: 3,
        name: 'Елена Магия',
        avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
        rating: 4.8
      }
    },
    {
      id: 5,
      name: 'Маятник из розового кварца',
      description: 'Изящный маятник для гаданий из натурального розового кварца',
      images: [
        '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
        '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
        '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg'
      ],
      price: 890,
      rating: 4.9,
      reviewsCount: 124,
      salesCount: 678,
      stock: 3,
      seller: {
        id: 2,
        name: 'Анна Луна',
        avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
        rating: 4.9
      }
    },
    {
      id: 6,
      name: 'Книга "Путь астролога"',
      description: 'Полное руководство по астрологии для начинающих и продвинутых',
      images: [
        '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
        '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
        '/img/bfba9552-d826-4988-b161-355884e82a28.jpg'
      ],
      price: 1490,
      rating: 5.0,
      reviewsCount: 267,
      salesCount: 1456,
      stock: 28,
      seller: {
        id: 1,
        name: 'Мария Звездная',
        avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
        rating: 5.0
      }
    },
    {
      id: 7,
      name: 'Алтарная скатерть "Луна"',
      description: 'Бархатная скатерть с вышитыми лунными фазами для алтаря',
      images: [
        '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
        '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
        '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg'
      ],
      price: 2190,
      rating: 4.8,
      reviewsCount: 87,
      salesCount: 345,
      stock: 12,
      seller: {
        id: 3,
        name: 'Елена Магия',
        avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
        rating: 4.8
      }
    },
    {
      id: 8,
      name: 'Набор "Магия трав"',
      description: 'Коллекция из 12 высушенных трав для ритуалов и настоек',
      images: [
        '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
        '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
        '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg'
      ],
      price: 1890,
      rating: 4.9,
      reviewsCount: 145,
      salesCount: 789,
      stock: 19,
      seller: {
        id: 2,
        name: 'Анна Луна',
        avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
        rating: 4.9
      }
    },
    {
      id: 9,
      name: 'Оракул "Лунный свет"',
      description: 'Колода оракулов с авторскими иллюстрациями и подробной инструкцией',
      images: [
        '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
        '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
        '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg'
      ],
      price: 2490,
      rating: 5.0,
      reviewsCount: 312,
      salesCount: 1678,
      stock: 34,
      seller: {
        id: 1,
        name: 'Мария Звездная',
        avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
        rating: 5.0
      }
    },
    {
      id: 10,
      name: 'Амулет "Защита"',
      description: 'Серебряный амулет ручной работы с древними символами защиты',
      images: [
        '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
        '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
        '/img/bfba9552-d826-4988-b161-355884e82a28.jpg'
      ],
      price: 3490,
      rating: 4.9,
      reviewsCount: 178,
      salesCount: 456,
      stock: 6,
      seller: {
        id: 3,
        name: 'Елена Магия',
        avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
        rating: 4.8
      }
    }
  ];

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handleAddToCart = (productId: number, productName: string) => {
    console.log('Добавление в корзину:', productId);
    alert(`"${productName}" добавлен в корзину!`);
  };

  const getStockColor = (stock: number) => {
    if (stock <= 5) return 'text-red-500';
    if (stock <= 15) return 'text-yellow-500';
    return 'text-green-500';
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
            <Button variant="ghost" size="sm">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
            <Link to="/profile">
              <Button variant="ghost" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Профиль
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative bg-gradient-to-br from-mystic-purple/20 via-background to-mystic-deep/30 py-16 px-4 border-b border-border">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Магазин товаров
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Откройте для себя мир эзотерики: кристаллы, Таро, руны и магические артефакты
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden bg-card/50 border-border hover:border-accent/50 transition-all duration-300 flex flex-col">
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {product.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={image}
                            alt={`${product.name} - изображение ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
                
                {product.stock <= 5 && (
                  <Badge className="absolute top-3 left-3 bg-red-500/90 text-white border-red-500">
                    <Icon name="AlertCircle" size={14} className="mr-1" />
                    Мало товара
                  </Badge>
                )}
              </div>

              <CardHeader className="pb-3">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-xl font-bold mb-2 hover:text-accent transition-colors line-clamp-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {product.description}
                </p>

                <div className="flex items-center justify-between text-sm mb-3">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Icon name="Star" className="text-accent fill-accent" size={14} />
                      <span className="font-bold text-accent ml-1">{product.rating}</span>
                      <span className="text-muted-foreground ml-1">({product.reviewsCount})</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="ShoppingBag" size={14} className="mr-1" />
                      <span>{product.salesCount}</span>
                    </div>
                  </div>
                  <div className={`flex items-center font-medium ${getStockColor(product.stock)}`}>
                    <Icon name="Package" size={14} className="mr-1" />
                    <span>{product.stock} шт</span>
                  </div>
                </div>

                <Link to={`/author/${product.seller.id}`}>
                  <div className="flex items-center space-x-2 p-2 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors">
                    <Avatar className="w-8 h-8 border border-accent/30">
                      <AvatarImage src={product.seller.avatar} alt={product.seller.name} />
                      <AvatarFallback className="bg-accent/10 text-accent text-xs">
                        {product.seller.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{product.seller.name}</p>
                      <div className="flex items-center">
                        <Icon name="Star" className="text-accent fill-accent" size={10} />
                        <span className="text-xs text-accent ml-1">{product.seller.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </CardHeader>

              <CardFooter className="pt-0 flex items-center justify-between mt-auto border-t border-border/50 pt-4">
                <div>
                  <p className="text-2xl font-bold text-accent">{product.price}₽</p>
                </div>
                <Button
                  onClick={() => handleAddToCart(product.id, product.name)}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  В корзину
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              <Icon name="ChevronLeft" size={20} />
            </Button>

            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setCurrentPage(page)}
                  className={currentPage === page ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : ''}
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>
        )}

        <div className="text-center mt-6 text-sm text-muted-foreground">
          Показано {startIndex + 1}-{Math.min(endIndex, products.length)} из {products.length} товаров
        </div>
      </div>
    </div>
  );
}
