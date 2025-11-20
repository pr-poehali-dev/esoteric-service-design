import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

export default function AuthorProfile() {
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [showReviewDialog, setShowReviewDialog] = useState(false);

  const author = {
    id: 1,
    name: 'Мария Звездная',
    avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
    specialty: 'Астролог',
    shortBio: 'Профессиональный астролог с 12-летним стажем',
    about: `Приветствую вас на моей странице! Меня зовут Мария, и я профессиональный астролог с 12-летним стажем работы.

Я являюсь членом Международной Ассоциации Астрологов и провела более 2000 консультаций. Моя специализация — натальная астрология, синастрия (анализ совместимости партнёров) и прогностическая астрология.

Мой подход уникален тем, что я сочетаю классическую астрологию с современной психологией. Это помогает моим клиентам не только узнать о себе что-то новое, но и понять, как применить эти знания в реальной жизни для достижения гармонии и успеха.

Я верю, что каждый человек уникален, и натальная карта — это ключ к пониманию своего предназначения, талантов и жизненных задач. В своей работе я использую методы классической западной астрологии, а также элементы психологической астрологии.

Буду рада помочь вам на вашем пути самопознания!`,
    rating: 5.0,
    reviewsCount: 234,
    services: 12,
    totalSales: 1247,
    clients: 892,
    isOnline: true,
    hasPurchasedServices: true,
    workSchedule: [
      { day: 'Понедельник', hours: '10:00 - 20:00' },
      { day: 'Вторник', hours: '10:00 - 20:00' },
      { day: 'Среда', hours: '10:00 - 20:00' },
      { day: 'Четверг', hours: '10:00 - 20:00' },
      { day: 'Пятница', hours: '10:00 - 18:00' },
      { day: 'Суббота', hours: '12:00 - 16:00' },
      { day: 'Воскресенье', hours: 'Выходной' }
    ]
  };

  const services = [
    {
      id: 1,
      name: 'Натальная карта + консультация',
      description: 'Полный разбор натальной карты с детальной консультацией астролога',
      image: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      rating: 5.0,
      reviews: 156,
      price: '3000₽',
      subscription: 'Премиум'
    },
    {
      id: 2,
      name: 'Прогноз совместимости партнеров',
      description: 'Синастрия - астрологический анализ совместимости двух людей',
      image: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      rating: 4.9,
      reviews: 98,
      price: '2200₽',
      subscription: 'Стандарт'
    },
    {
      id: 3,
      name: 'Астрологический прогноз на год',
      description: 'Детальный прогноз на предстоящий год с учётом транзитов планет',
      image: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      rating: 5.0,
      reviews: 124,
      price: '2500₽',
      subscription: 'Стандарт'
    }
  ];

  const reviews = [
    {
      id: 1,
      author: 'Анна К.',
      avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      rating: 5,
      date: '15 января 2025',
      serviceName: 'Натальная карта + консультация',
      text: 'Мария — невероятный специалист! Консультация превзошла все мои ожидания. Она не только точно описала мой характер и ситуации из прошлого, но и дала конкретные рекомендации на будущее. Очень тёплая и душевная беседа.'
    },
    {
      id: 2,
      author: 'Дмитрий В.',
      avatar: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
      rating: 5,
      date: '10 января 2025',
      serviceName: 'Прогноз совместимости партнеров',
      text: 'Обратились с женой за анализом совместимости. Мария очень подробно всё разобрала, объяснила наши сильные и слабые стороны в паре. Теперь понимаем друг друга гораздо лучше. Спасибо огромное!'
    },
    {
      id: 3,
      author: 'Елена М.',
      avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      rating: 5,
      date: '3 января 2025',
      serviceName: 'Астрологический прогноз на год',
      text: 'Прогноз на год оказался очень точным! Мария предупредила о сложном периоде в апреле, и действительно, именно тогда возникли проблемы на работе. Благодаря её советам смогла подготовиться заранее.'
    },
    {
      id: 4,
      author: 'Ольга С.',
      avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      rating: 5,
      date: '28 декабря 2024',
      serviceName: 'Натальная карта + консультация',
      text: 'Работать с Марией — одно удовольствие! Профессионал высочайшего уровня, всегда на связи, отвечает на все вопросы. Консультация помогла мне разобраться в себе и найти своё предназначение.'
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

  const handleSubmitReview = () => {
    if (reviewRating > 0 && reviewText.trim()) {
      console.log('Отправка отзыва:', { rating: reviewRating, text: reviewText });
      setReviewRating(0);
      setReviewText('');
      setShowReviewDialog(false);
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
                <Icon name="ShoppingBag" size={16} className="mr-2" />
                Услуги
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

      <div className="relative bg-gradient-to-br from-mystic-purple/20 via-background to-mystic-deep/30 py-12 px-4 border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative">
              <Avatar className="w-32 h-32 border-4 border-accent">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback className="bg-accent/10 text-accent text-4xl">
                  {author.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              {author.isOnline && (
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-background rounded-full" />
              )}
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {author.name}
                  </h1>
                  <p className="text-xl text-muted-foreground mb-3">{author.specialty}</p>
                </div>
                {author.isOnline ? (
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-3 md:mb-0">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                    Онлайн
                  </Badge>
                ) : (
                  <Badge variant="outline" className="bg-muted/10 text-muted-foreground border-muted/30 mb-3 md:mb-0">
                    Не в сети
                  </Badge>
                )}
              </div>

              <p className="text-muted-foreground mb-6 max-w-3xl">
                {author.shortBio}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-6">
                <div className="flex items-center">
                  <Icon name="Star" className="text-accent fill-accent mr-2" size={20} />
                  <span className="text-xl font-bold text-accent mr-2">{author.rating}</span>
                  <span className="text-muted-foreground">({author.reviewsCount} отзывов)</span>
                </div>
                <Separator orientation="vertical" className="h-6 hidden md:block" />
                <div className="flex items-center text-muted-foreground">
                  <Icon name="Briefcase" size={18} className="mr-2" />
                  <span>{author.services} услуг</span>
                </div>
                <Separator orientation="vertical" className="h-6 hidden md:block" />
                <div className="flex items-center text-muted-foreground">
                  <Icon name="ShoppingBag" size={18} className="mr-2" />
                  <span>{author.totalSales} продаж</span>
                </div>
                <Separator orientation="vertical" className="h-6 hidden md:block" />
                <div className="flex items-center text-muted-foreground">
                  <Icon name="Users" size={18} className="mr-2" />
                  <span>{author.clients} клиентов</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {author.hasPurchasedServices && (
                  <Link to="/chat">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      Написать в чат
                    </Button>
                  </Link>
                )}
                <Button size="lg" variant="outline">
                  <Icon name="Heart" size={20} className="mr-2" />
                  В избранное
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                О себе
              </h2>
              <Card className="bg-card/50 border-border">
                <CardContent className="p-6">
                  <p className="text-foreground leading-relaxed whitespace-pre-line">
                    {author.about}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Услуги автора
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <Link key={service.id} to={`/service/${service.id}`}>
                    <Card className="group overflow-hidden bg-card/50 border-border hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
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

                      <CardFooter className="pt-0 flex items-center justify-between mt-auto">
                        <div className="flex items-center">
                          <Icon name="Star" className="text-accent fill-accent" size={14} />
                          <span className="text-sm font-bold text-accent ml-1">{service.rating}</span>
                          <span className="text-sm text-muted-foreground ml-2">({service.reviews})</span>
                        </div>
                        <p className="text-xl font-bold text-accent">{service.price}</p>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Отзывы о специалисте
                  </h2>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Icon name="Star" className="text-accent fill-accent" size={20} />
                      <span className="text-xl font-bold text-accent ml-2">{author.rating}</span>
                    </div>
                    <span className="text-muted-foreground">на основе {author.reviewsCount} отзывов</span>
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
                      <DialogTitle>Написать отзыв о специалисте</DialogTitle>
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
                          placeholder="Расскажите о вашем опыте работы со специалистом..."
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
                      <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/30">
                        {review.serviceName}
                      </Badge>
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
          </div>

          <div>
            <Card className="bg-card/50 border-border sticky top-24">
              <CardHeader>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  График работы
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {author.workSchedule.map((schedule, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{schedule.day}</span>
                      <span className={`text-sm font-medium ${schedule.hours === 'Выходной' ? 'text-muted-foreground' : 'text-foreground'}`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <Separator className="my-4" />
                <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                  <Icon name="Info" size={16} className="mt-0.5 flex-shrink-0" />
                  <p>Время указано по московскому часовому поясу (МСК)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
