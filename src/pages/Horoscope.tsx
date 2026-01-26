import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import NotificationCenter from '@/components/notifications/NotificationCenter';
import Footer from '@/components/Footer';
import FadeIn from '@/components/ui/fade-in';
import MobileNav from '@/components/MobileNav';

const zodiacSigns = [
  { id: 1, name: 'Овен', icon: '♈', period: '21.03 - 19.04', element: 'Огонь' },
  { id: 2, name: 'Телец', icon: '♉', period: '20.04 - 20.05', element: 'Земля' },
  { id: 3, name: 'Близнецы', icon: '♊', period: '21.05 - 20.06', element: 'Воздух' },
  { id: 4, name: 'Рак', icon: '♋', period: '21.06 - 22.07', element: 'Вода' },
  { id: 5, name: 'Лев', icon: '♌', period: '23.07 - 22.08', element: 'Огонь' },
  { id: 6, name: 'Дева', icon: '♍', period: '23.08 - 22.09', element: 'Земля' },
  { id: 7, name: 'Весы', icon: '♎', period: '23.09 - 22.10', element: 'Воздух' },
  { id: 8, name: 'Скорпион', icon: '♏', period: '23.10 - 21.11', element: 'Вода' },
  { id: 9, name: 'Стрелец', icon: '♐', period: '22.11 - 21.12', element: 'Огонь' },
  { id: 10, name: 'Козерог', icon: '♑', period: '22.12 - 19.01', element: 'Земля' },
  { id: 11, name: 'Водолей', icon: '♒', period: '20.01 - 18.02', element: 'Воздух' },
  { id: 12, name: 'Рыбы', icon: '♓', period: '19.02 - 20.03', element: 'Вода' },
];

const horoscopeData: Record<string, { text: string; luckyNumber: number; luckyColor: string }> = {
  'Овен': {
    text: 'Сегодня вы полны энергии и готовы к новым свершениям. Звёзды благоприятствуют началу важных проектов. Не бойтесь рисковать, но помните о мере. В личных отношениях возможны интересные знакомства.',
    luckyNumber: 7,
    luckyColor: 'Красный'
  },
  'Телец': {
    text: 'День благоприятен для финансовых решений и карьерного роста. Ваша настойчивость принесёт плоды. Уделите внимание близким людям — они нуждаются в вашей поддержке. Вечер проведите в спокойной обстановке.',
    luckyNumber: 3,
    luckyColor: 'Зелёный'
  },
  'Близнецы': {
    text: 'Отличный день для общения и новых знакомств. Ваша коммуникабельность откроет неожиданные возможности. Не распыляйтесь на мелочи — сосредоточьтесь на главном. Творческие идеи найдут воплощение.',
    luckyNumber: 5,
    luckyColor: 'Жёлтый'
  },
  'Рак': {
    text: 'Прислушайтесь к своей интуиции — она не подведёт. Семья и дом требуют вашего внимания. Возможны приятные сюрпризы от близких. Избегайте конфликтов на работе, проявите дипломатичность.',
    luckyNumber: 2,
    luckyColor: 'Серебристый'
  },
  'Лев': {
    text: 'Ваша харизма сегодня на высоте! Используйте это для достижения целей. Возможен успех в творческих начинаниях. В отношениях будьте внимательнее к партнёру. Вечер посвятите себе и своим увлечениям.',
    luckyNumber: 1,
    luckyColor: 'Золотой'
  },
  'Дева': {
    text: 'Ваша внимательность к деталям принесёт результаты. Хороший день для завершения начатых дел. Не перегружайте себя — научитесь делегировать. Здоровье требует внимания, больше отдыхайте.',
    luckyNumber: 6,
    luckyColor: 'Бежевый'
  },
  'Весы': {
    text: 'Гармония и баланс — ваши главные помощники сегодня. Удачный день для переговоров и заключения договоров. В личной жизни возможны романтические моменты. Доверьтесь своему чувству прекрасного.',
    luckyNumber: 9,
    luckyColor: 'Розовый'
  },
  'Скорпион': {
    text: 'День насыщен событиями и эмоциями. Ваша проницательность поможет разобраться в сложных ситуациях. Возможны важные открытия. Будьте осторожны в словах — они имеют особую силу сегодня.',
    luckyNumber: 8,
    luckyColor: 'Бордовый'
  },
  'Стрелец': {
    text: 'Расширяйте горизонты! Отличный день для обучения и путешествий. Ваш оптимизм заразителен. Новые знакомства могут перерасти в крепкую дружбу. Доверяйте своему внутреннему компасу.',
    luckyNumber: 4,
    luckyColor: 'Синий'
  },
  'Козерог': {
    text: 'Ваша целеустремлённость приносит плоды. Продолжайте двигаться к цели уверенными шагами. Руководство оценит вашу работу. Найдите время для близких — они скучают. Вечер проведите в кругу семьи.',
    luckyNumber: 10,
    luckyColor: 'Коричневый'
  },
  'Водолей': {
    text: 'Ваша оригинальность и нестандартное мышление сегодня особенно ценны. Не бойтесь быть собой. Возможны неожиданные повороты событий — воспринимайте их как возможности. Друзья поддержат в трудную минуту.',
    luckyNumber: 11,
    luckyColor: 'Бирюзовый'
  },
  'Рыбы': {
    text: 'Следуйте за своими мечтами — они ближе, чем кажется. Ваша чувствительность помогает понимать людей. Творческие проекты обретают форму. Медитация и духовные практики принесут гармонию.',
    luckyNumber: 12,
    luckyColor: 'Фиолетовый'
  },
};

export default function Horoscope() {
  const [selectedSign, setSelectedSign] = useState<string>('Рыбы');

  const currentHoroscope = horoscopeData[selectedSign];

  const getElementColor = (element: string) => {
    switch (element) {
      case 'Огонь': return 'text-red-400';
      case 'Земля': return 'text-green-400';
      case 'Воздух': return 'text-blue-400';
      case 'Вода': return 'text-cyan-400';
      default: return 'text-accent';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Sparkles" className="text-accent" size={32} />
            <h1 className="text-2xl font-bold text-accent" style={{ fontFamily: 'Playfair Display, serif' }}>
              Мистерия
            </h1>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <Icon name="Home" size={16} className="mr-2" />
                Главная
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="ghost" size="sm">
                <Icon name="ShoppingBag" size={16} className="mr-2" />
                Услуги
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
          <MobileNav />
        </div>
      </nav>

      <div className="flex-1">
        <div className="relative overflow-hidden py-16 px-4 bg-gradient-to-br from-mystic-purple/20 via-background to-mystic-deep/30">
          <div className="container mx-auto text-center relative z-10">
            <FadeIn>
              <div className="flex items-center justify-center mb-4">
                <Icon name="Stars" className="text-accent mr-3" size={48} />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-accent via-mystic-violet to-accent bg-clip-text text-transparent" 
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                Гороскоп
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Узнайте, что приготовили для вас звёзды сегодня
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <FadeIn delay={200}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                Выберите свой знак зодиака
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
                {zodiacSigns.map((sign, index) => (
                  <FadeIn key={sign.id} delay={300 + index * 50}>
                    <Card
                      className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                        selectedSign === sign.name
                          ? 'border-accent bg-accent/10 shadow-lg shadow-accent/20'
                          : 'border-border hover:border-accent/50 bg-card/50'
                      }`}
                      onClick={() => setSelectedSign(sign.name)}
                    >
                      <CardContent className="p-4 text-center">
                        <div className="text-4xl mb-2">{sign.icon}</div>
                        <h3 className="font-bold text-sm mb-1">{sign.name}</h3>
                        <p className="text-xs text-muted-foreground mb-1">{sign.period}</p>
                        <p className={`text-xs font-medium ${getElementColor(sign.element)}`}>
                          {sign.element}
                        </p>
                      </CardContent>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="max-w-3xl mx-auto">
              <Card className="bg-gradient-to-br from-card/80 to-card/50 border-accent/30 shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl">
                        {zodiacSigns.find(s => s.name === selectedSign)?.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-accent" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {selectedSign}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          {new Date().toLocaleDateString('ru-RU', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </p>
                      </div>
                    </div>
                    <Icon name="Sparkles" className="text-accent" size={32} />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed text-lg mb-6">
                    {currentHoroscope.text}
                  </p>
                  <div className="flex items-center gap-6 text-sm flex-wrap">
                    <div className="flex items-center gap-2">
                      <Icon name="Hash" size={16} className="text-accent" />
                      <span className="text-muted-foreground">Число дня:</span>
                      <span className="font-bold text-accent text-lg">{currentHoroscope.luckyNumber}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Palette" size={16} className="text-accent" />
                      <span className="text-muted-foreground">Цвет дня:</span>
                      <span className="font-medium">{currentHoroscope.luckyColor}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Хотите узнать больше о своей судьбе?
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/services">
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Icon name="Star" size={18} className="mr-2" />
                      Заказать персональный гороскоп
                    </Button>
                  </Link>
                  <Link to="/dreambook">
                    <Button variant="outline">
                      <Icon name="Moon" size={18} className="mr-2" />
                      Толкование снов
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <Footer />
    </div>
  );
}
