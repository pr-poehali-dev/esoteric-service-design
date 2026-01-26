import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import ServiceGallery from '@/components/service/ServiceGallery';
import ServiceInfo from '@/components/service/ServiceInfo';
import ServiceReviews from '@/components/service/ServiceReviews';
import ServiceOrders from '@/components/service/ServiceOrders';
import SimilarServices from '@/components/service/SimilarServices';
import NotificationCenter from '@/components/notifications/NotificationCenter';

export default function ServiceDetail() {
  const [mainImage, setMainImage] = useState('/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg');
  
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
    price: 3000,
    originalPrice: 4500,
    discount: 33,
    discountEndsIn: 1,
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
      text: 'Невероятно точный и глубокий разбор! Мария смогла объяснить многие моменты моей жизни, которые я не понимала. Консультация длилась больше 3 часов, и я получила ответы на все свои вопросы. Письменный отчёт очень подробный, буду перечитывать. Рекомендую!',
      isCurrentUser: true,
      moderationStatus: 'approved' as const
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
      rating: 4,
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
    },
    {
      id: 5,
      author: 'Анна К.',
      avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      rating: 3,
      date: '2 февраля 2025',
      text: 'Решила заказать ещё одну консультацию по другому вопросу. Надеюсь, будет так же интересно!',
      isCurrentUser: true,
      moderationStatus: 'pending' as const
    },
    {
      id: 6,
      author: 'Анна К.',
      avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      rating: 2,
      date: '1 февраля 2025',
      text: 'Это явно спам и ругательства!',
      isCurrentUser: true,
      moderationStatus: 'rejected' as const,
      rejectionReason: 'Нарушение правил: недопустимый контент'
    }
  ];

  const userOrders = [
    {
      id: 1,
      date: '20 января 2025',
      status: 'completed' as const,
      completedDate: '22 января 2025',
      files: [
        {
          id: 1,
          name: 'Натальная_карта_полный_разбор.pdf',
          size: '2.4 МБ',
          url: '/files/natal_chart_1.pdf'
        },
        {
          id: 2,
          name: 'Рекомендации_по_транзитам.pdf',
          size: '1.1 МБ',
          url: '/files/transits_1.pdf'
        }
      ]
    },
    {
      id: 2,
      date: '10 января 2025',
      status: 'completed' as const,
      completedDate: '11 января 2025',
      files: [
        {
          id: 3,
          name: 'Консультация_запись.pdf',
          size: '890 КБ',
          url: '/files/consultation_2.pdf'
        }
      ]
    },
    {
      id: 3,
      date: '28 января 2025',
      status: 'in_progress' as const
    },
    {
      id: 4,
      date: '29 января 2025',
      status: 'new' as const
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
          <div className="flex items-center space-x-2">
            <Link to="/services">
              <Button variant="ghost" size="sm">
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                К услугам
              </Button>
            </Link>
            <NotificationCenter />
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
          <ServiceGallery
            mainImage={mainImage}
            additionalImages={service.additionalImages}
            serviceName={service.name}
            subscription={service.subscription}
            onImageChange={setMainImage}
            getSubscriptionColor={getSubscriptionColor}
          />

          <ServiceInfo service={service} />
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

        <ServiceOrders orders={userOrders} />

        <Separator className="my-12" />

        <ServiceReviews
          reviews={reviews}
          serviceRating={service.rating}
          serviceReviewsCount={service.reviews}
        />

        <Separator className="my-12" />

        <SimilarServices
          services={similarServices}
          getSubscriptionColor={getSubscriptionColor}
        />
      </div>
    </div>
  );
}