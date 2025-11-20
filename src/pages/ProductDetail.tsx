import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function ProductDetail() {
  const { id } = useParams();
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [showReviewDialog, setShowReviewDialog] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: 'Таро "Золотое сияние"',
    description: `Премиальная колода Таро "Золотое сияние" — это уникальное произведение искусства для профессиональных тарологов и ценителей эзотерики.

Особенности колоды:
• 78 карт с авторскими иллюстрациями в стиле Art Nouveau
• Позолоченные края карт
• Матовое ламинирование для комфортной работы
• Плотная бумага премиум-класса (350 г/м²)
• Размер карт: 70×120 мм
• Подробная инструкция на русском языке (64 страницы)
• Роскошная подарочная коробка с магнитным замком
• Бархатный мешочек для хранения

Колода создана с учётом классической символики Райдера-Уэйта, но дополнена современными интерпретациями и глубокими эзотерическими смыслами. Каждая карта — это портал в мир архетипов и древней мудрости.

Идеально подходит для:
✓ Профессиональных консультаций
✓ Глубоких медитаций
✓ Изучения Таро
✓ Подарка ценителю эзотерики

Эта колода станет вашим верным проводником в мир тайных знаний и поможет раскрыть ответы на самые сложные вопросы.`,
    images: [
      '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
      '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg'
    ],
    price: 2890,
    oldPrice: 3490,
    rating: 4.9,
    reviewsCount: 234,
    salesCount: 1247,
    stock: 15,
    isPurchased: true,
    seller: {
      id: 1,
      name: 'Мария Звездная',
      avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      rating: 5.0,
      reviewsCount: 892,
      salesCount: 3456
    },
    specifications: [
      { label: 'Количество карт', value: '78 карт' },
      { label: 'Размер карт', value: '70×120 мм' },
      { label: 'Материал', value: 'Премиум бумага 350 г/м²' },
      { label: 'Покрытие', value: 'Матовое + позолота' },
      { label: 'Язык инструкции', value: 'Русский' },
      { label: 'Страна производства', value: 'Италия' }
    ]
  };

  const reviews = [
    {
      id: 1,
      author: 'Анна Кристальная',
      avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      rating: 5,
      date: '15 января 2025',
      verified: true,
      text: 'Потрясающая колода! Качество печати на высшем уровне, карты приятно держать в руках. Позолота не стирается даже после нескольких месяцев активного использования. Символика понятная, работать очень комфортно. Коробка действительно премиальная, с магнитным замком. Рекомендую всем, кто ищет качественную рабочую колоду!',
      images: [
        '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
        '/img/bfba9552-d826-4988-b161-355884e82a28.jpg'
      ]
    },
    {
      id: 2,
      author: 'Дмитрий Звёздный',
      avatar: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
      rating: 5,
      date: '10 января 2025',
      verified: true,
      text: 'Купил в подарок жене, она в восторге! Упаковка роскошная, карты красивые. Даже я, не разбирающийся в Таро, оценил качество исполнения. Доставка быстрая, всё пришло в идеальном состоянии. Продавец надёжный, рекомендую!',
      images: []
    },
    {
      id: 3,
      author: 'Елена Лунная',
      avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      rating: 4,
      date: '3 января 2025',
      verified: true,
      text: 'Отличная колода для профессиональной работы. Единственный минус — карты немного скользят в первое время, но после нескольких дней использования всё нормализовалось. Иллюстрации глубокие, многослойные. Инструкция подробная, помогла разобраться с нюансами трактовок.',
      images: ['/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg']
    },
    {
      id: 4,
      author: 'Ольга Мистик',
      avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      rating: 5,
      date: '28 декабря 2024',
      verified: true,
      text: 'Это моя третья колода Таро, и она стала любимой! Энергетика карт очень мощная, расклады получаются точные и глубокие. Карты ложатся идеально, размер удобный. За эту цену — просто подарок! Спасибо продавцу за качественный товар и быструю отправку.',
      images: []
    }
  ];

  const similarProducts = [
    {
      id: 2,
      name: 'Набор рунических камней',
      image: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      price: 1590,
      rating: 4.8,
      reviewsCount: 156,
      salesCount: 892
    },
    {
      id: 3,
      name: 'Оракул "Лунный свет"',
      image: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
      price: 2490,
      rating: 5.0,
      reviewsCount: 312,
      salesCount: 1678
    },
    {
      id: 4,
      name: 'Кристалл аметиста',
      image: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      price: 790,
      rating: 5.0,
      reviewsCount: 98,
      salesCount: 567
    },
    {
      id: 5,
      name: 'Маятник из розового кварца',
      image: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      price: 890,
      rating: 4.9,
      reviewsCount: 124,
      salesCount: 678
    }
  ];

  const handleSubmitReview = () => {
    if (reviewRating > 0 && reviewText.trim()) {
      console.log('Отправка отзыва:', { rating: reviewRating, text: reviewText });
      setReviewRating(0);
      setReviewText('');
      setShowReviewDialog(false);
    }
  };

  const handleAddToCart = () => {
    console.log('Добавление в корзину:', { productId: id, quantity });
    alert(`${quantity} шт. товара "${product.name}" добавлено в корзину!`);
  };

  const handleBuyNow = () => {
    console.log('Быстрая покупка:', { productId: id, quantity });
    alert(`Переход к оформлению заказа: ${quantity} шт. "${product.name}"`);
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

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/products" className="flex items-center text-muted-foreground hover:text-accent transition-colors">
            <Icon name="ChevronLeft" size={20} />
            <span className="ml-1">Вернуться к товарам</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Carousel className="w-full">
              <CarouselContent>
                {product.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-square overflow-hidden rounded-lg border border-border">
                      <img
                        src={image}
                        alt={`${product.name} - изображение ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>

            <div className="grid grid-cols-4 gap-3 mt-4">
              {product.images.slice(0, 4).map((image, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-accent transition-colors cursor-pointer">
                  <img
                    src={image}
                    alt={`Миниатюра ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                {product.name}
              </h1>

              <div className="flex flex-wrap items-center gap-6 mb-4">
                <div className="flex items-center">
                  <Icon name="Star" className="text-accent fill-accent" size={20} />
                  <span className="text-xl font-bold text-accent ml-2">{product.rating}</span>
                  <span className="text-muted-foreground ml-2">({product.reviewsCount} отзывов)</span>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <div className="flex items-center text-muted-foreground">
                  <Icon name="ShoppingBag" size={18} className="mr-2" />
                  <span>{product.salesCount} продаж</span>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <div className="flex items-center text-green-500">
                  <Icon name="Package" size={18} className="mr-2" />
                  <span>В наличии: {product.stock} шт</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div>
                  <span className="text-4xl font-bold text-accent">{product.price}₽</span>
                  {product.oldPrice && (
                    <span className="text-xl text-muted-foreground line-through ml-3">{product.oldPrice}₽</span>
                  )}
                </div>
                {product.oldPrice && (
                  <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                    Скидка {Math.round((1 - product.price / product.oldPrice) * 100)}%
                  </Badge>
                )}
              </div>

              <Card className="bg-card/50 border-border mb-6">
                <CardContent className="p-4">
                  <Link to={`/author/${product.seller.id}`}>
                    <div className="flex items-center space-x-4 hover:bg-muted/20 p-2 rounded-lg transition-colors">
                      <Avatar className="w-16 h-16 border-2 border-accent">
                        <AvatarImage src={product.seller.avatar} alt={product.seller.name} />
                        <AvatarFallback className="bg-accent/10 text-accent text-xl">
                          {product.seller.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-bold text-lg mb-1">{product.seller.name}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Icon name="Star" className="text-accent fill-accent" size={14} />
                            <span className="text-accent font-medium ml-1">{product.seller.rating}</span>
                            <span className="ml-1">({product.seller.reviewsCount})</span>
                          </div>
                          <Separator orientation="vertical" className="h-4" />
                          <div className="flex items-center">
                            <Icon name="ShoppingBag" size={14} className="mr-1" />
                            <span>{product.seller.salesCount} продаж</span>
                          </div>
                        </div>
                      </div>
                      <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                    </div>
                  </Link>
                </CardContent>
              </Card>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="rounded-r-none"
                  >
                    <Icon name="Minus" size={16} />
                  </Button>
                  <span className="px-6 py-2 font-bold">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="rounded-l-none"
                  >
                    <Icon name="Plus" size={16} />
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">Максимум: {product.stock} шт</span>
              </div>

              <div className="flex gap-3 mb-6">
                <Button
                  onClick={handleAddToCart}
                  variant="outline"
                  size="lg"
                  className="flex-1"
                >
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  В корзину
                </Button>
                <Button
                  onClick={handleBuyNow}
                  size="lg"
                  className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <Icon name="Zap" size={20} className="mr-2" />
                  Купить сейчас
                </Button>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="flex-1">
                  <Icon name="Heart" size={20} className="mr-2" />
                  В избранное
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Icon name="Share2" size={20} className="mr-2" />
                  Поделиться
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="bg-card/50 border-border mb-8">
              <CardHeader>
                <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Описание товара
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
              </CardContent>
            </Card>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Отзывы о товаре
                  </h2>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Icon name="Star" className="text-accent fill-accent" size={20} />
                      <span className="text-xl font-bold text-accent ml-2">{product.rating}</span>
                    </div>
                    <span className="text-muted-foreground">на основе {product.reviewsCount} отзывов</span>
                  </div>
                </div>
                {product.isPurchased && (
                  <Dialog open={showReviewDialog} onOpenChange={setShowReviewDialog}>
                    <DialogTrigger asChild>
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Icon name="Plus" size={18} className="mr-2" />
                        Написать отзыв
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg">
                      <DialogHeader>
                        <DialogTitle>Написать отзыв о товаре</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Ваша оценка</label>
                          <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                onClick={() => setReviewRating(star)}
                                className="transition-transform hover:scale-110"
                              >
                                <Icon
                                  name="Star"
                                  size={32}
                                  className={`${
                                    star <= reviewRating
                                      ? 'text-accent fill-accent'
                                      : 'text-muted-foreground'
                                  }`}
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Ваш отзыв</label>
                          <Textarea
                            placeholder="Расскажите о вашем опыте использования товара..."
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            rows={6}
                            className="resize-none"
                          />
                        </div>
                        <Button
                          onClick={handleSubmitReview}
                          disabled={reviewRating === 0 || !reviewText.trim()}
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                        >
                          Отправить отзыв
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>

              <div className="space-y-6">
                {reviews.map((review) => (
                  <Card key={review.id} className="bg-card/50 border-border">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-12 h-12 border-2 border-accent/30">
                            <AvatarImage src={review.avatar} alt={review.author} />
                            <AvatarFallback className="bg-accent/10 text-accent">
                              {review.author.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="font-bold">{review.author}</h4>
                              {review.verified && (
                                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                                  <Icon name="BadgeCheck" size={12} className="mr-1" />
                                  Покупка подтверждена
                                </Badge>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Icon key={i} name="Star" className="text-accent fill-accent" size={16} />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {review.text}
                      </p>
                      {review.images.length > 0 && (
                        <div className="flex gap-2">
                          {review.images.map((image, index) => (
                            <div key={index} className="w-24 h-24 rounded-lg overflow-hidden border border-border">
                              <img src={image} alt={`Фото отзыва ${index + 1}`} className="w-full h-full object-cover" />
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div>
            <Card className="bg-card/50 border-border sticky top-24 mb-8">
              <CardHeader>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Характеристики
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-border/50 last:border-0">
                      <span className="text-sm text-muted-foreground">{spec.label}</span>
                      <span className="text-sm font-medium text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            Похожие товары
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map((similar) => (
              <Link key={similar.id} to={`/product/${similar.id}`}>
                <Card className="group overflow-hidden bg-card/50 border-border hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={similar.image}
                      alt={similar.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>

                  <CardHeader className="pb-3">
                    <h3 className="text-lg font-bold mb-2 line-clamp-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {similar.name}
                    </h3>
                  </CardHeader>

                  <CardFooter className="pt-0 flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Icon name="Star" className="text-accent fill-accent" size={14} />
                        <span className="text-sm font-bold text-accent ml-1">{similar.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">({similar.reviewsCount})</span>
                    </div>
                    <p className="text-xl font-bold text-accent">{similar.price}₽</p>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
