import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import FadeIn from '@/components/ui/fade-in';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: 'Как заказать консультацию у мастера?',
      answer: 'Выберите интересующую услугу в каталоге, нажмите кнопку "Заказать", заполните необходимую информацию (дата рождения, время, вопрос) и подтвердите заказ. После оплаты мастер свяжется с вами в течение 24 часов для согласования времени консультации.',
      category: 'Заказы'
    },
    {
      id: 2,
      question: 'Какие способы оплаты доступны?',
      answer: 'Мы принимаем банковские карты (Visa, MasterCard, МИР), электронные кошельки (ЮMoney, QIWI) и переводы по СБП. Все платежи проходят через защищенный шлюз с шифрованием данных.',
      category: 'Оплата'
    },
    {
      id: 3,
      question: 'Можно ли вернуть деньги, если консультация не состоялась?',
      answer: 'Да, если консультация не состоялась по вине мастера, мы вернем 100% стоимости услуги в течение 5 рабочих дней. Если вы отменили заказ за 24 часа до консультации, возврат составит 80%. При отмене менее чем за 24 часа возврат не предусмотрен.',
      category: 'Возврат'
    },
    {
      id: 4,
      question: 'Как проходит онлайн-консультация?',
      answer: 'Консультации проводятся в видеоформате через встроенный чат платформы или по согласованию с мастером в удобном для вас мессенджере (Telegram, WhatsApp, Zoom). После оплаты вы получите инструкцию по подключению.',
      category: 'Консультации'
    },
    {
      id: 5,
      question: 'Что нужно подготовить к консультации по астрологии?',
      answer: 'Для астрологической консультации необходимы точные данные: дата рождения, время (желательно с точностью до минут) и место рождения. Также подготовьте конкретные вопросы, на которые хотите получить ответы.',
      category: 'Консультации'
    },
    {
      id: 6,
      question: 'Как выбрать подходящего мастера?',
      answer: 'Обратите внимание на рейтинг, количество отзывов и специализацию мастера. Прочитайте отзывы других клиентов. В профиле каждого мастера указан опыт работы и направления, в которых он специализируется. Вы также можете написать вопрос мастеру перед заказом.',
      category: 'Мастера'
    },
    {
      id: 7,
      question: 'Сколько длится консультация?',
      answer: 'Стандартная продолжительность консультации — 60 минут. Некоторые мастера предлагают короткие консультации на 30 минут или расширенные сессии на 90-120 минут. Точное время указано в описании каждой услуги.',
      category: 'Консультации'
    },
    {
      id: 8,
      question: 'Что такое подписка Премиум?',
      answer: 'Подписка Премиум дает доступ к эксклюзивным услугам топовых мастеров, приоритетную запись на консультации, скидку 10% на все услуги и бесплатный персональный гороскоп каждый месяц. Стоимость подписки — 990₽/месяц.',
      category: 'Подписки'
    },
    {
      id: 9,
      question: 'Могу ли я получить запись консультации?',
      answer: 'Да, запись видео- или аудио-консультации предоставляется автоматически после её завершения. Она будет доступна в разделе "Мои заказы" в течение 30 дней.',
      category: 'Консультации'
    },
    {
      id: 10,
      question: 'Как стать мастером на платформе?',
      answer: 'Для регистрации в качестве мастера заполните анкету в разделе "Стать мастером", укажите ваш опыт, специализацию и загрузите документы, подтверждающие квалификацию (сертификаты, дипломы). После проверки модератором вы получите доступ к размещению услуг.',
      category: 'Мастера'
    },
    {
      id: 11,
      question: 'Гарантируется ли конфиденциальность?',
      answer: 'Абсолютно. Все личные данные и информация, полученная во время консультаций, защищены политикой конфиденциальности. Мастера подписывают соглашение о неразглашении. Записи консультаций доступны только вам.',
      category: 'Безопасность'
    },
    {
      id: 12,
      question: 'Что делать, если я не удовлетворен консультацией?',
      answer: 'Мы дорожим качеством услуг. Если консультация не оправдала ожиданий, напишите в службу поддержки в течение 48 часов с описанием проблемы. Мы рассмотрим вашу ситуацию и предложим компенсацию или возможность повторной консультации с другим мастером.',
      category: 'Поддержка'
    },
    {
      id: 13,
      question: 'Можно ли задать дополнительные вопросы после консультации?',
      answer: 'Да, в течение 7 дней после консультации вы можете написать мастеру дополнительные вопросы в чате. Короткие уточняющие вопросы мастера отвечают бесплатно. Для развернутой консультации потребуется новый заказ.',
      category: 'Консультации'
    },
    {
      id: 14,
      question: 'Как проверяется квалификация мастеров?',
      answer: 'Все мастера проходят верификацию: проверка документов об образовании, анализ портфолио, тестовая консультация с экспертом платформы. Мы также следим за рейтингом и отзывами — мастера с низким рейтингом проходят повторную проверку.',
      category: 'Мастера'
    },
    {
      id: 15,
      question: 'Что такое рунический расклад и чем он отличается от Таро?',
      answer: 'Рунический расклад использует древнегерманские символы — руны для получения ответов. Таро работает с колодой из 78 карт-архетипов. Руны дают более прямые, конкретные ответы, Таро — глубинный психологический анализ. Выбор зависит от ваших предпочтений и типа вопроса.',
      category: 'Услуги'
    }
  ];

  const categories = Array.from(new Set(faqData.map(item => item.category)));

  const filteredFAQ = faqData.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Заказы': 'ShoppingCart',
      'Оплата': 'CreditCard',
      'Возврат': 'Undo2',
      'Консультации': 'MessageCircle',
      'Мастера': 'Users',
      'Подписки': 'Star',
      'Безопасность': 'Shield',
      'Поддержка': 'HelpCircle',
      'Услуги': 'Sparkles'
    };
    return icons[category] || 'HelpCircle';
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Icon name="Sparkles" className="text-accent" size={32} />
              <h1 className="text-2xl font-bold text-accent" style={{ fontFamily: 'Playfair Display, serif' }}>
                Мистерия
              </h1>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/services" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Услуги
              </Link>
              <Link to="/authors" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Мастера
              </Link>
              <Link to="/products" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Товары
              </Link>
              <Link to="/faq" className="text-sm font-medium text-accent border-b-2 border-accent">
                FAQ
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-2">
              <Link to="/favorites">
                <Button variant="ghost" size="icon">
                  <Icon name="Heart" size={20} />
                </Button>
              </Link>
              <Link to="/cart">
                <Button variant="ghost" size="icon">
                  <Icon name="ShoppingCart" size={20} />
                </Button>
              </Link>
              <Link to="/profile">
                <Button variant="ghost" size="icon">
                  <Icon name="User" size={20} />
                </Button>
              </Link>
            </div>

            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <FadeIn>
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
              <Icon name="HelpCircle" className="text-accent" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Часто задаваемые вопросы
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Найдите ответы на самые популярные вопросы о нашем сервисе
            </p>

            <div className="relative max-w-2xl mx-auto">
              <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Поиск по вопросам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-base bg-card/50"
              />
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {categories.map((category, index) => (
            <FadeIn key={category} delay={index * 50}>
              <Card className="bg-card/50 border-border hover:border-accent/50 transition-all cursor-pointer hover:scale-105">
                <CardContent className="p-4 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-3">
                    <Icon name={getCategoryIcon(category)} className="text-accent" size={24} />
                  </div>
                  <h3 className="font-semibold text-sm">{category}</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {faqData.filter(item => item.category === category).length} вопросов
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQ.map((item, index) => (
            <FadeIn key={item.id} delay={index * 30}>
              <Card className="bg-card/50 border-border hover:border-accent/30 transition-all">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name={getCategoryIcon(item.category)} className="text-accent" size={16} />
                      <span className="text-xs font-medium text-accent">{item.category}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {item.question}
                    </h3>
                  </div>
                  <div className={`transition-transform duration-300 ${openItems.includes(item.id) ? 'rotate-180' : ''}`}>
                    <Icon name="ChevronDown" className="text-muted-foreground" size={24} />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openItems.includes(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>

        {filteredFAQ.length === 0 && (
          <FadeIn>
            <Card className="bg-card/50 border-border p-12 text-center max-w-2xl mx-auto">
              <Icon name="Search" className="text-muted-foreground mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
              <p className="text-muted-foreground mb-6">
                Попробуйте изменить поисковый запрос или выберите категорию
              </p>
              <Button onClick={() => setSearchQuery('')} variant="outline">
                Очистить поиск
              </Button>
            </Card>
          </FadeIn>
        )}

        <FadeIn delay={200}>
          <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/30 mt-12 max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <Icon name="MessageCircle" className="text-accent mx-auto mb-4" size={40} />
              <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Не нашли ответ на свой вопрос?
              </h2>
              <p className="text-muted-foreground mb-6">
                Наша служба поддержки всегда готова помочь вам
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/chat">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Icon name="MessageCircle" size={18} className="mr-2" />
                    Написать в поддержку
                  </Button>
                </Link>
                <Button variant="outline">
                  <Icon name="Mail" size={18} className="mr-2" />
                  support@misteria.ru
                </Button>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </main>

      <Footer />
    </div>
  );
}
