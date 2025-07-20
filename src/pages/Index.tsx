import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={20} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 font-serif">
              Мистерия
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Услуги
            </a>
            <a href="#plans" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Тарифы
            </a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              О нас
            </a>
            <Button onClick={() => setChatOpen(true)} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 text-base">
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Консультация
            </Button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button onClick={() => setChatOpen(true)} size="sm" className="bg-purple-600 hover:bg-purple-700">
              <Icon name="MessageCircle" size={16} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-lavender-50">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif leading-tight">
              Откройте тайны <br />
              <span className="text-purple-600">вашего будущего</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Профессиональные эзотерические консультации онлайн. Гадание на картах Таро, 
              астрологические прогнозы и рунические расклады от опытных специалистов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-medium">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Получить прогноз
              </Button>
              <Button size="lg" variant="outline" onClick={() => setChatOpen(true)} className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Задать вопрос
              </Button>
            </div>
          </div>
          
          {/* Hero Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" className="text-purple-600" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Точные прогнозы</h3>
              <p className="text-gray-600">Персональные предсказания с высокой точностью</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="text-purple-600" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Быстрый ответ</h3>
              <p className="text-gray-600">Получите консультацию в течение 15 минут</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="text-purple-600" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Конфиденциально</h3>
              <p className="text-gray-600">Ваши данные и вопросы в полной безопасности</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите способ получения ответов на волнующие вас вопросы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tarot */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-purple-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-6 w-24 h-24 rounded-xl overflow-hidden">
                  <img 
                    src="/img/ee27e39a-59b8-4207-905b-71828884f3a5.jpg" 
                    alt="Гадание на Таро" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 font-serif">
                  Гадание на Таро
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Древние карты Таро раскроют тайны вашей судьбы и помогут найти ответы на важные вопросы
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-700">
                    <Icon name="Check" size={16} className="text-green-500 mr-3 flex-shrink-0" />
                    Расклады на любовь и отношения
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Icon name="Check" size={16} className="text-green-500 mr-3 flex-shrink-0" />
                    Карьера и финансовое благополучие
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Icon name="Check" size={16} className="text-green-500 mr-3 flex-shrink-0" />
                    Личностное развитие и духовный рост
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-purple-600">от 1500₽</span>
                    <span className="text-sm text-gray-500 ml-1">за сеанс</span>
                  </div>
                  <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                    Выбрать
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Runes */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-purple-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-6 w-24 h-24 rounded-xl overflow-hidden">
                  <img 
                    src="/img/d08b5e55-63fe-4017-b51a-71f7c26d465a.jpg" 
                    alt="Гадание на рунах" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 font-serif">
                  Гадание на рунах
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Древние скандинавские руны дадут четкие и конкретные ответы на ваши вопросы
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-700">
                    <Icon name="Check" size={16} className="text-green-500 mr-3 flex-shrink-0" />
                    Принятие важных решений
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Icon name="Check" size={16} className="text-green-500 mr-3 flex-shrink-0" />
                    Защита и создание оберегов
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Icon name="Check" size={16} className="text-green-500 mr-3 flex-shrink-0" />
                    Поиск духовного пути
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-purple-600">от 1200₽</span>
                    <span className="text-sm text-gray-500 ml-1">за сеанс</span>
                  </div>
                  <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                    Выбрать
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Astrology */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-purple-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-6 w-24 h-24 rounded-xl overflow-hidden">
                  <img 
                    src="/img/a95dfbc0-f741-45e1-b6d8-b416cfc6639c.jpg" 
                    alt="Астрология" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 font-serif">
                  Астрология
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Персональный гороскоп и натальная карта раскроют ваше предназначение и скрытые таланты
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-700">
                    <Icon name="Check" size={16} className="text-green-500 mr-3 flex-shrink-0" />
                    Составление натальной карты
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Icon name="Check" size={16} className="text-green-500 mr-3 flex-shrink-0" />
                    Совместимость партнеров
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Icon name="Check" size={16} className="text-green-500 mr-3 flex-shrink-0" />
                    Прогнозы на месяц и год
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-purple-600">от 2500₽</span>
                    <span className="text-sm text-gray-500 ml-1">за сеанс</span>
                  </div>
                  <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                    Выбрать
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="plans" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              Тарифные планы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий план для регулярных консультаций и получите больше возможностей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="border-gray-200 hover:border-purple-300 transition-colors bg-white">
              <CardHeader className="text-center pb-6">
                <Badge variant="secondary" className="w-fit mx-auto mb-4 bg-gray-100 text-gray-700">
                  Базовый
                </Badge>
                <CardTitle className="text-2xl font-bold text-gray-900 font-serif mb-2">
                  Искатель
                </CardTitle>
                <div className="text-3xl font-bold text-purple-600">990₽</div>
                <div className="text-sm text-gray-500">в месяц</div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">2 консультации в месяц</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Доступ к чату поддержки</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Еженедельные прогнозы</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Базовые расклады Таро</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" size="lg">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="border-purple-500 bg-white shadow-lg transform scale-105">
              <CardHeader className="text-center pb-6">
                <Badge className="w-fit mx-auto mb-4 bg-purple-600 text-white">
                  Популярный
                </Badge>
                <CardTitle className="text-2xl font-bold text-gray-900 font-serif mb-2">
                  Мудрец
                </CardTitle>
                <div className="text-3xl font-bold text-purple-600">1990₽</div>
                <div className="text-sm text-gray-500">в месяц</div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">5 консультаций в месяц</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Приоритетная поддержка</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Персональные прогнозы</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Все виды раскладов</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Базовая натальная карта</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" size="lg">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            {/* VIP Plan */}
            <Card className="border-gray-200 hover:border-purple-300 transition-colors bg-white">
              <CardHeader className="text-center pb-6">
                <Badge variant="secondary" className="w-fit mx-auto mb-4 bg-amber-100 text-amber-700">
                  VIP
                </Badge>
                <CardTitle className="text-2xl font-bold text-gray-900 font-serif mb-2">
                  Архимаг
                </CardTitle>
                <div className="text-3xl font-bold text-purple-600">3990₽</div>
                <div className="text-sm text-gray-500">в месяц</div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Безлимитные консультации</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Личный эзотерик 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Эксклюзивные ритуалы</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Персональные обереги</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Полная натальная карта</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" size="lg">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Более 10 лет помогаем людям найти ответы на важные жизненные вопросы
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Users" className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Опытные специалисты</h3>
                <p className="text-gray-600">Сертифицированные эзотерики с многолетним опытом работы</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Heart" className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Индивидуальный подход</h3>
                <p className="text-gray-600">Персональные консультации с учетом ваших особенностей</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Award" className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Проверенные методики</h3>
                <p className="text-gray-600">Используем только проверенные временем эзотерические практики</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Lock" className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Полная конфиденциальность</h3>
                <p className="text-gray-600">Ваши данные и информация надежно защищены</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Modal */}
      <Dialog open={chatOpen} onOpenChange={setChatOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center text-xl font-semibold">
              <Icon name="MessageCircle" className="mr-3 text-purple-600" size={24} />
              Консультация эзотерика
            </DialogTitle>
          </DialogHeader>
          <Tabs defaultValue="quick" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="quick" className="text-sm">Быстрый вопрос</TabsTrigger>
              <TabsTrigger value="detailed" className="text-sm">Подробная консультация</TabsTrigger>
            </TabsList>
            
            <TabsContent value="quick" className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-3 block">
                  Ваш вопрос
                </label>
                <Textarea 
                  placeholder="Опишите ваш вопрос подробно..." 
                  className="min-h-[120px] text-base border-gray-300 focus:border-purple-500"
                />
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-base">
                <Icon name="Send" size={18} className="mr-2" />
                Отправить вопрос
              </Button>
              <p className="text-sm text-gray-500 text-center">
                Ответ в течение 15 минут • Стоимость от 500₽
              </p>
            </TabsContent>
            
            <TabsContent value="detailed" className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-3 block">
                  Ваше имя
                </label>
                <Input placeholder="Введите ваше имя" className="text-base border-gray-300 focus:border-purple-500" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-3 block">
                  Дата рождения
                </label>
                <Input 
                  type="date" 
                  className="text-base border-gray-300 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-3 block">
                  Подробное описание вопроса
                </label>
                <Textarea 
                  placeholder="Расскажите о вашей ситуации максимально подробно..." 
                  className="min-h-[120px] text-base border-gray-300 focus:border-purple-500"
                />
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-base">
                <Icon name="Calendar" size={18} className="mr-2" />
                Записаться на консультацию
              </Button>
              <p className="text-sm text-gray-500 text-center">
                Индивидуальная консультация • 60 минут • от 2000₽
              </p>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={20} />
              </div>
              <h3 className="text-2xl font-bold font-serif">Мистерия</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Профессиональные эзотерические консультации онлайн. 
              Откройте дверь в мир тайн и получите ответы на важные вопросы.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Гадание на Таро</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гадание на рунах</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Астрология</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Нумерология</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Центр помощи</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Часто задаваемые вопросы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Связаться с нами</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Условия использования</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Публичная оферта</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Мистерия. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}