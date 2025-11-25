import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function AllReviews() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const allReviews = [
    {
      id: 1,
      author: 'Анна К.',
      avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      rating: 5,
      date: '15 января 2025',
      text: 'Невероятно точный и глубокий разбор! Мария смогла объяснить многие моменты моей жизни, которые я не понимала. Консультация длилась больше 3 часов, и я получила ответы на все свои вопросы. Письменный отчёт очень подробный, буду перечитывать. Рекомендую!',
      service: 'Натальная карта + консультация',
      serviceImage: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg'
    },
    {
      id: 2,
      author: 'Дмитрий В.',
      avatar: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
      rating: 5,
      date: '10 января 2025',
      text: 'Обратился к Марии за консультацией по карьере. Она не только рассказала о моих талантах и предназначении, но и дала конкретные рекомендации по времени для важных решений. Уже вижу результаты! Спасибо!',
      service: 'Натальная карта + консультация',
      serviceImage: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg'
    },
    {
      id: 3,
      author: 'Елена М.',
      avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      rating: 5,
      date: '3 января 2025',
      text: 'Мария — настоящий профессионал! Разбор натальной карты помог мне понять свои отношения с близкими людьми и найти пути решения давних конфликтов. Консультация прошла в очень тёплой атмосфере, чувствовалась искренняя забота.',
      service: 'Натальная карта + консультация',
      serviceImage: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg'
    },
    {
      id: 4,
      author: 'Ольга С.',
      avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      rating: 4,
      date: '28 декабря 2024',
      text: 'Это была моя первая консультация у астролога, и я очень довольна! Мария всё объяснила простым языком, без сложных терминов. После консультации появилось ясное понимание своих сильных сторон и направления развития.',
      service: 'Натальная карта + консультация',
      serviceImage: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg'
    },
    {
      id: 5,
      author: 'Светлана Р.',
      avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      rating: 5,
      date: '20 декабря 2024',
      text: 'Расклад Таро превзошёл все ожидания! Анна очень точно описала мою ситуацию и дала ценные рекомендации. Особенно впечатлило, как детально она объяснила значение каждой карты и их взаимосвязи.',
      service: 'Расклад Таро "Кельтский крест"',
      serviceImage: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg'
    },
    {
      id: 6,
      author: 'Максим П.',
      avatar: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
      rating: 4,
      date: '15 декабря 2024',
      text: 'Хороший расклад, помог разобраться в сложной ситуации. Анна очень внимательная и тактичная. Единственное — хотелось бы чуть больше времени на вопросы.',
      service: 'Расклад Таро "Кельтский крест"',
      serviceImage: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg'
    },
    {
      id: 7,
      author: 'Ирина В.',
      avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      rating: 5,
      date: '10 декабря 2024',
      text: 'Гадание на рунах помогло мне принять важное решение! Ответ был очень конкретным и понятным. Спасибо за профессионализм!',
      service: 'Гадание на рунах "Один"',
      serviceImage: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg'
    },
    {
      id: 8,
      author: 'Александр К.',
      avatar: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
      rating: 3,
      date: '5 декабря 2024',
      text: 'В целом неплохо, но ожидал большей детализации. Возможно, для быстрого ответа этого достаточно, но мне хотелось больше информации.',
      service: 'Гадание на рунах "Один"',
      serviceImage: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg'
    },
    {
      id: 9,
      author: 'Наталья С.',
      avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      rating: 5,
      date: '1 декабря 2024',
      text: 'Потрясающая консультация! Я получила ответы на все свои вопросы о совместимости с партнером. Мария очень деликатно и профессионально всё объяснила.',
      service: 'Прогноз совместимости партнеров',
      serviceImage: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg'
    },
    {
      id: 10,
      author: 'Виктор Л.',
      avatar: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
      rating: 4,
      date: '25 ноября 2024',
      text: 'Очень интересный и полезный анализ. Многое совпало с реальностью. Рекомендую всем, кто хочет лучше понять свои отношения.',
      service: 'Прогноз совместимости партнеров',
      serviceImage: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg'
    },
  ];

  const filteredReviews = selectedRating
    ? allReviews.filter(review => review.rating === selectedRating)
    : allReviews;

  const ratingCounts = {
    5: allReviews.filter(r => r.rating === 5).length,
    4: allReviews.filter(r => r.rating === 4).length,
    3: allReviews.filter(r => r.rating === 3).length,
    2: allReviews.filter(r => r.rating === 2).length,
    1: allReviews.filter(r => r.rating === 1).length,
  };

  const averageRating = (allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length).toFixed(1);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <Link to="/services" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад к услугам
          </Link>
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Все отзывы
          </h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Icon name="Star" className="text-accent fill-accent" size={24} />
              <span className="text-2xl font-bold text-accent ml-2">{averageRating}</span>
            </div>
            <span className="text-muted-foreground">на основе {allReviews.length} отзывов</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <h3 className="font-bold text-lg">Фильтр по оценке</h3>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={selectedRating === null ? "default" : "outline"}
                  className={`w-full justify-between ${selectedRating === null ? 'bg-accent text-accent-foreground' : ''}`}
                  onClick={() => setSelectedRating(null)}
                >
                  <span>Все отзывы</span>
                  <Badge variant="secondary">{allReviews.length}</Badge>
                </Button>
                {[5, 4, 3, 2, 1].map((rating) => (
                  <Button
                    key={rating}
                    variant={selectedRating === rating ? "default" : "outline"}
                    className={`w-full justify-between ${selectedRating === rating ? 'bg-accent text-accent-foreground' : ''}`}
                    onClick={() => setSelectedRating(rating)}
                  >
                    <div className="flex items-center">
                      {Array.from({ length: rating }).map((_, i) => (
                        <Icon key={i} name="Star" className="text-accent fill-accent" size={14} />
                      ))}
                    </div>
                    <Badge variant="secondary">{ratingCounts[rating as keyof typeof ratingCounts]}</Badge>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-4">
              {filteredReviews.map((review) => (
                <Card key={review.id} className="bg-card/50 border-border hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-4">
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
                    <div className="flex items-center space-x-3 bg-accent/5 p-3 rounded-lg">
                      <img 
                        src={review.serviceImage} 
                        alt={review.service}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div>
                        <p className="text-xs text-muted-foreground">Услуга</p>
                        <p className="text-sm font-medium">{review.service}</p>
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
        </div>
      </div>
    </div>
  );
}
