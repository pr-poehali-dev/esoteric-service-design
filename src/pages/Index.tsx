import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Sparkles" className="text-accent" size={32} />
            <h1 className="text-2xl font-bold text-accent" style={{ fontFamily: 'Playfair Display, serif' }}>
              Мистерия
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
            <a href="#subscriptions" className="hover:text-accent transition-colors">Подписки</a>
            <Button onClick={() => setChatOpen(true)} variant="outline">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Чат
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-mystic-purple/20 via-background to-mystic-deep/30" />
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent via-mystic-violet to-accent bg-clip-text text-transparent" 
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Раскройте тайны судьбы
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Профессиональные эзотерические консультации: гадание на картах Таро, рунах и астрология. 
              Получите ответы на важные вопросы и найдите свой путь.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Начать гадание
              </Button>
              <Button size="lg" variant="outline" onClick={() => setChatOpen(true)}>
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Консультация
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-10 left-10 animate-pulse">
          <Icon name="Star" className="text-accent/30" size={24} />
        </div>
        <div className="absolute bottom-20 right-20 animate-pulse">
          <Icon name="Moon" className="text-mystic-violet/40" size={32} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Эзотерические услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите способ познания будущего, который откликается вашей душе
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tarot Card */}
            <Card className="group hover:scale-105 transition-all duration-300 bg-card/50 border-border hover:border-accent/50">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center">
                  <img 
                    src="/img/bfba9552-d826-4988-b161-355884e82a28.jpg" 
                    alt="Таро" 
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Гадание на Таро
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Древняя система предсказаний поможет раскрыть тайны прошлого, настоящего и будущего
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-accent mr-2" />
                    Расклады на любовь
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-accent mr-2" />
                    Карьера и финансы
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-accent mr-2" />
                    Личностное развитие
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent">от 1500₽</span>
                  <Button variant="outline" size="sm">Выбрать</Button>
                </div>
              </CardContent>
            </Card>

            {/* Runes Card */}
            <Card className="group hover:scale-105 transition-all duration-300 bg-card/50 border-border hover:border-accent/50">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center">
                  <img 
                    src="/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg" 
                    alt="Руны" 
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Гадание на рунах
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Северная мудрость древних викингов даст четкие ответы на ваши вопросы
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-accent mr-2" />
                    Принятие решений
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-accent mr-2" />
                    Защита и оберег
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-accent mr-2" />
                    Духовный путь
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent">от 1200₽</span>
                  <Button variant="outline" size="sm">Выбрать</Button>
                </div>
              </CardContent>
            </Card>

            {/* Astrology Card */}
            <Card className="group hover:scale-105 transition-all duration-300 bg-card/50 border-border hover:border-accent/50">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center">
                  <img 
                    src="/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg" 
                    alt="Астрология" 
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Астрология
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Персональный гороскоп и натальная карта раскроют ваши скрытые таланты и предназначение
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-accent mr-2" />
                    Натальная карта
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-accent mr-2" />
                    Совместимость
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-accent mr-2" />
                    Прогнозы на год
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent">от 2000₽</span>
                  <Button variant="outline" size="sm">Выбрать</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subscriptions Section */}
      <section id="subscriptions" className="py-20 px-4 bg-card/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Планы подписки
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите план, который подходит для вашего духовного развития
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <Card className="border-border hover:border-accent/50 transition-colors">
              <CardHeader className="text-center">
                <Badge variant="secondary" className="w-fit mx-auto mb-2">Базовый</Badge>
                <CardTitle className="text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Искатель
                </CardTitle>
                <div className="text-3xl font-bold text-accent mt-4">990₽/мес</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-accent mr-3" />
                    2 консультации в месяц
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-accent mr-3" />
                    Доступ к чату
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-accent mr-3" />
                    Еженедельные прогнозы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-accent mr-3" />
                    Базовые расклады
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="border-accent bg-accent/5 scale-105">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-2 bg-accent text-accent-foreground">Популярный</Badge>
                <CardTitle className="text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Мудрец
                </CardTitle>
                <div className="text-3xl font-bold text-accent mt-4">1990₽/мес</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-accent mr-3" />
                    5 консультаций в месяц
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-accent mr-3" />
                    Приоритет в чате
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-accent mr-3" />
                    Персональные прогнозы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-accent mr-3" />
                    Все виды раскладов
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-accent mr-3" />
                    Натальная карта
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-accent hover:bg-accent/90">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            {/* VIP Plan */}
            <Card className="border-border hover:border-accent/50 transition-colors">
              <CardHeader className="text-center">
                <Badge variant="secondary" className="w-fit mx-auto mb-2">VIP</Badge>
                <CardTitle className="text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Архимаг
                </CardTitle>
                <div className="text-3xl font-bold text-accent mt-4">3990₽/мес</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-accent mr-3" />
                    Безлимитные консультации
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-accent mr-3" />
                    Личный эзотерик 24/7
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-accent mr-3" />
                    Эксклюзивные ритуалы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-accent mr-3" />
                    Индивидуальные обереги
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-accent mr-3" />
                    Годовой прогноз
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Категории гаданий
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Найдите ответы на волнующие вас вопросы в разных сферах жизни
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: 'Heart', title: 'Любовь', description: 'Отношения и чувства' },
              { icon: 'Briefcase', title: 'Карьера', description: 'Работа и успех' },
              { icon: 'DollarSign', title: 'Финансы', description: 'Деньги и богатство' },
              { icon: 'Users', title: 'Семья', description: 'Родные и близкие' },
              { icon: 'Shield', title: 'Здоровье', description: 'Физическое состояние' },
              { icon: 'Home', title: 'Дом', description: 'Быт и недвижимость' },
              { icon: 'Compass', title: 'Путешествия', description: 'Поездки и переезды' },
              { icon: 'Star', title: 'Судьба', description: 'Предназначение' }
            ].map((category, index) => (
              <Card key={index} className="text-center p-6 hover:scale-105 transition-all duration-300 bg-card/50 border-border hover:border-accent/50">
                <Icon name={category.icon as any} className="text-accent mx-auto mb-3" size={32} />
                <h3 className="font-semibold mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Dialog */}
      <Dialog open={chatOpen} onOpenChange={setChatOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Icon name="MessageCircle" className="mr-2 text-accent" />
              Консультация эзотерика
            </DialogTitle>
          </DialogHeader>
          <Tabs defaultValue="quick" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="quick">Быстрый вопрос</TabsTrigger>
              <TabsTrigger value="detailed">Подробная консультация</TabsTrigger>
            </TabsList>
            <TabsContent value="quick" className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Ваш вопрос</label>
                <Textarea placeholder="Опишите ваш вопрос..." className="min-h-[100px]" />
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90">
                <Icon name="Send" size={16} className="mr-2" />
                Отправить вопрос
              </Button>
            </TabsContent>
            <TabsContent value="detailed" className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Имя</label>
                <Input placeholder="Ваше имя" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Дата рождения</label>
                <Input type="date" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Вопрос</label>
                <Textarea placeholder="Подробно опишите ваш вопрос..." className="min-h-[100px]" />
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90">
                <Icon name="Calendar" size={16} className="mr-2" />
                Записаться на консультацию
              </Button>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Icon name="Sparkles" className="text-accent" size={28} />
            <h3 className="text-xl font-bold text-accent" style={{ fontFamily: 'Playfair Display, serif' }}>
              Мистерия
            </h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Откройте дверь в мир эзотерики и получите ответы на самые важные вопросы вашей жизни
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-accent transition-colors">Условия использования</a>
            <a href="#" className="hover:text-accent transition-colors">Контакты</a>
          </div>
          <div className="mt-6 pt-6 border-t border-border text-sm text-muted-foreground">
            © 2024 Мистерия. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}