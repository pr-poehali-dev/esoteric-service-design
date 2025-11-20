import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

export default function ServiceDetail() {
  const [mainImage, setMainImage] = useState('/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg');
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [showReviewDialog, setShowReviewDialog] = useState(false);
  
  const service = {
    id: 1,
    name: 'Натальная карта + консультация',
    shortDescription: 'Полный разбор натальной карты с детальной консультацией астролога',
    fullDescription: `Натальная карта — это ваш космический паспорт, уникальный снимок неба в момент вашего рождения. Это мощный инструмент самопознания, который помогает понять свои сильные стороны, таланты, жизненные задачи и потенциальные сложности.

В рамках этой консультации я проведу глубокий анализ вашей натальной карты, включающий:

• Анализ положения планет в знаках и домах
• Аспекты между планетами и их влияние на вашу жизнь
• Лунные узлы и кармические задачи
• Личные планеты (Солнце, Луна, Меркурий, Венера, Марс)
• Социальные планеты (Юпитер, Сатурн)
• Высшие планеты (Уран, Нептун, Плутон)
• Асцендент и МС (Середина Неба)
• Текущие транзиты и прогнозы

Консультация проходит в формате личной беседы, где вы можете задать все интересующие вопросы. Я помогу вам понять, как использовать знания о себе для достижения гармонии и успеха в жизни.

После консультации вы получите письменный отчёт с ключевыми моментами вашей натальной карты.`,
    price: '3000₽',
    duration: '2-3 часа',
    deliveryTime: 'В течение 24 часов',
    subscription: 'Премиум',
    rating: 5.0,
    reviews: 156,
    sales: 412,
    mainImage: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
    additionalImages: [
      '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
    ],
    author: {
      name: 'Мария Звездная',
      avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      about: 'Профессиональный астролог с 12-летним стажем. Член Международной Ассоциации Астрологов. Провела более 2000 консультаций. Специализируюсь на натальной астрологии, синастрии и прогнозах. Мой подход сочетает классическую астрологию с современной психологией, помогая людям лучше понять себя и свой жизненный путь.',
      rating: 5.0,
      services: 12,
      totalSales: 1247
    }
  };

  const reviews = [
    {
      id: 1,
      author: 'Анна К.',
      avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      rating: 5,
      date: '15 января 2025',
      text: 'Невероятно точный и глубокий разбор! Мария смогла объяснить многие моменты моей жизни, которые я не понимала. Консультация длилась больше 3 часов, и я получила ответы на все свои вопросы. Письменный отчёт очень подробный, буду перечитывать. Рекомендую!'
    },
    {
      id: 2,
      author: 'Дмитрий В.',
      avatar: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
      rating: 5,
      date: '10 января 2025',
      text: 'Обратился к Марии за консультацией по карьере. Она не только рассказала о моих талантах и предназначении, но и дала конкретные рекомендации по времени для важных решений. Уже вижу результаты! Спасибо!'
    },
    {
      id: 3,
      author: 'Елена М.',
      avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      rating: 5,
      date: '3 января 2025',
      text: 'Мария — настоящий профессионал! Разбор натальной карты помог мне понять свои отношения с близкими людьми и найти пути решения давних конфликтов. Консультация прошла в очень тёплой атмосфере, чувствовалась искренняя забота.'
    },
    {
      id: 4,
      author: 'Ольга С.',
      avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      rating: 5,
      date: '28 декабря 2024',
      text: 'Это была моя первая консультация у астролога, и я очень довольна! Мария всё объяснила простым языком, без сложных терминов. После консультации появилось ясное понимание своих сильных сторон и направления развития.'
    }
  ];

  const similarServices = [
    {
      id: 2,
      name: 'Прогноз совместимости партнеров',
      description: 'Синастрия - астрологический анализ совместимости двух людей',
      image: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      author: {
        name: 'Мария Звездная',
        avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg'
      },
      rating: 4.9,
      reviews: 98,
      price: '2200₽',
      subscription: 'Стандарт'
    },
    {
      id: 3,
      name: 'Расклад Таро "Кельтский крест"',
      description: 'Глубокий анализ вашей жизненной ситуации через древнюю систему Таро',
      image: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      author: {
        name: 'Анна Волкова',
        avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg'
      },
      rating: 4.9,
      reviews: 89,
      price: '1500₽',
      subscription: 'Базовая'
    },
    {
      id: 4,
      name: 'Гадание на рунах "Один"',
      description: 'Быстрый ответ на конкретный вопрос через мудрость северных рун',
      image: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
      author: {
        name: 'Виктор Рунов',
        avatar: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg'
      },
      rating: 5.0,
      reviews: 67,
      price: '1200₽',
      subscription: 'Базовая'
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
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Sparkles" className="text-accent" size={32} />
            <h1 className="text-2xl font-bold text-accent" style={{ fontFamily: 'Playfair Display, serif' }}>
              Мистерия
            </h1>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/services">
              <Button variant="ghost" size="sm">
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                К услугам
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
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="relative rounded-2xl overflow-hidden mb-4 border-2 border-accent/30">
              <img 
                src={mainImage} 
                alt={service.name}
                className="w-full h-[500px] object-cover"
              />
              <Badge className={`absolute top-4 right-4 ${getSubscriptionColor(service.subscription)}`}>
                {service.subscription}
              </Badge>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {service.additionalImages.map((img, index) => (
                <div 
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`relative rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                    mainImage === img ? 'border-accent' : 'border-border hover:border-accent/50'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${service.name} ${index + 1}`}
                    className="w-full h-32 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              {service.name}
            </h1>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <Icon name="Star" className="text-accent fill-accent" size={20} />
                <span className="text-xl font-bold text-accent ml-2">{service.rating}</span>
                <span className="text-muted-foreground ml-2">({service.reviews} отзывов)</span>
              </div>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center text-muted-foreground">
                <Icon name="ShoppingBag" size={18} className="mr-2" />
                <span>{service.sales} продаж</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-6">
              {service.shortDescription}
            </p>

            <Card className="bg-card/50 border-accent/30 mb-6">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="Clock" size={18} className="mr-2" />
                      <span>Длительность</span>
                    </div>
                    <span className="font-semibold">{service.duration}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="Timer" size={18} className="mr-2" />
                      <span>Срок выполнения</span>
                    </div>
                    <span className="font-semibold">{service.deliveryTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Цена</p>
                <p className="text-4xl font-bold text-accent">{service.price}</p>
              </div>
              <div className="flex space-x-3">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Заказать
                </Button>
                <Link to="/chat">
                  <Button size="lg" variant="outline">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Написать
                  </Button>
                </Link>
              </div>
            </div>

            <Separator className="my-6" />

            <div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Об авторе
              </h3>
              <Card className="bg-card/50 border-border hover:border-accent/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-20 h-20 border-4 border-accent/30">
                      <AvatarImage src={service.author.avatar} alt={service.author.name} />
                      <AvatarFallback className="bg-accent/10 text-accent text-2xl">
                        {service.author.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">{service.author.name}</h4>
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center">
                          <Icon name="Star" className="text-accent fill-accent" size={16} />
                          <span className="text-lg font-bold text-accent ml-1">{service.author.rating}</span>
                        </div>
                        <Separator orientation="vertical" className="h-4" />
                        <span className="text-sm text-muted-foreground">{service.author.services} услуг</span>
                        <Separator orientation="vertical" className="h-4" />
                        <span className="text-sm text-muted-foreground">{service.author.totalSales} продаж</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.author.about}
                      </p>
                      <Button variant="outline" size="sm" className="mt-4">
                        <Icon name="User" size={16} className="mr-2" />
                        Профиль автора
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        <div className="max-w-4xl mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Описание услуги
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-foreground leading-relaxed whitespace-pre-line">
              {service.fullDescription}
            </p>
          </div>
        </div>

        <Separator className="my-12" />

        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Отзывы клиентов
              </h2>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Icon name="Star" className="text-accent fill-accent" size={20} />
                  <span className="text-xl font-bold text-accent ml-2">{service.rating}</span>
                </div>
                <span className="text-muted-foreground">на основе {service.reviews} отзывов</span>
              </div>
            </div>
            <Dialog open={showReviewDialog} onOpenChange={setShowReviewDialog}>
              <DialogTrigger asChild>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Icon name="Plus" size={18} className="mr-2" />
                  Оставить отзыв
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <DialogTitle>Написать отзыв</DialogTitle>
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
                      placeholder="Расскажите о вашем опыте использования услуги..."
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
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="bg-card/50 border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-12 h-12 border-2 border-accent/30">
                        <AvatarImage src={review.avatar} alt={review.author} />
                        <AvatarFallback className="bg-accent/10 text-accent">
                          {review.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold">{review.author}</h4>
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
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {review.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-12" />

        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
              Похожие услуги
            </h2>
            <Link to="/services">
              <Button variant="outline">
                Все услуги
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {similarServices.map((similarService) => (
              <Link key={similarService.id} to={`/service/${similarService.id}`}>
                <Card className="group overflow-hidden bg-card/50 border-border hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={similarService.image}
                      alt={similarService.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <Badge className={`absolute top-3 right-3 ${getSubscriptionColor(similarService.subscription)}`}>
                      {similarService.subscription}
                    </Badge>
                  </div>

                  <CardHeader className="pb-3">
                    <h3 className="text-lg font-bold mb-2 line-clamp-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {similarService.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {similarService.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pb-3 flex-1 flex flex-col justify-between">
                    <div className="flex items-center space-x-2 mb-3">
                      <Avatar className="w-8 h-8 border border-accent/30">
                        <AvatarImage src={similarService.author.avatar} alt={similarService.author.name} />
                        <AvatarFallback className="bg-accent/10 text-accent text-xs">
                          {similarService.author.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-foreground truncate">{similarService.author.name}</p>
                        <div className="flex items-center">
                          <Icon name="Star" className="text-accent fill-accent" size={12} />
                          <span className="text-xs font-bold text-accent ml-1">{similarService.rating}</span>
                          <span className="text-xs text-muted-foreground ml-2">({similarService.reviews})</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <p className="text-xl font-bold text-accent">{similarService.price}</p>
                      <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        Смотреть
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}