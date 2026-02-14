import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Footer from '@/components/Footer';
import FadeIn from '@/components/ui/fade-in';
import MobileNav from '@/components/MobileNav';

const angelNumbers: Record<string, { meaning: string; message: string; area: string }> = {
  '00:00': {
    meaning: 'Бесконечность и единство с Вселенной',
    message: 'Вы находитесь в точке абсолютного начала. Вселенная обнуляет старое и открывает путь к чему-то совершенно новому. Доверьтесь потоку жизни.',
    area: 'Духовность'
  },
  '01:01': {
    meaning: 'Новые начинания и свежий старт',
    message: 'Ангелы говорят, что пришло время начать что-то новое. Ваши мысли сейчас обладают особой силой — направьте их в позитивное русло.',
    area: 'Новые начинания'
  },
  '02:02': {
    meaning: 'Вера и терпение',
    message: 'Не торопите события. Всё развивается так, как нужно. Ангелы просят вас сохранять веру, даже если результаты пока не видны.',
    area: 'Терпение'
  },
  '03:03': {
    meaning: 'Поддержка Вознесённых Мастеров',
    message: 'Высшие силы рядом с вами и помогают в реализации ваших планов. Прислушайтесь к внутреннему голосу — он ведёт вас правильным путём.',
    area: 'Духовность'
  },
  '04:04': {
    meaning: 'Защита и стабильность',
    message: 'Ангелы окружают вас защитой. Вы находитесь в безопасности. Сейчас важно выстроить прочный фундамент для будущих достижений.',
    area: 'Защита'
  },
  '05:05': {
    meaning: 'Значительные перемены впереди',
    message: 'Готовьтесь к важным переменам в жизни. Ангелы просят не бояться изменений — они ведут вас к лучшему варианту вашей судьбы.',
    area: 'Перемены'
  },
  '06:06': {
    meaning: 'Гармония материального и духовного',
    message: 'Пришло время уравновесить материальные заботы с духовным развитием. Не зацикливайтесь на финансах — доверьтесь Вселенной.',
    area: 'Баланс'
  },
  '07:07': {
    meaning: 'Вы на правильном пути',
    message: 'Ангелы подтверждают, что ваш выбор верен. Продолжайте двигаться в том же направлении. Духовное развитие принесёт удивительные плоды.',
    area: 'Путь'
  },
  '08:08': {
    meaning: 'Изобилие и финансовый поток',
    message: 'Вселенная открывает для вас каналы изобилия. Ожидайте улучшения финансовой ситуации. Будьте благодарны за то, что уже имеете.',
    area: 'Финансы'
  },
  '09:09': {
    meaning: 'Завершение важного этапа',
    message: 'Один цикл вашей жизни подходит к концу. Отпустите то, что больше не служит вашему высшему благу. Впереди — новая глава.',
    area: 'Завершение'
  },
  '10:10': {
    meaning: 'Божественное руководство',
    message: 'Вы получаете прямые подсказки от ангелов. Обратите внимание на повторяющиеся знаки и совпадения — в них скрыт важный посыл.',
    area: 'Знаки'
  },
  '11:11': {
    meaning: 'Портал возможностей и духовное пробуждение',
    message: 'Это самое мощное ангельское число! Ваши мысли мгновенно материализуются. Следите за тем, о чём думаете, и формируйте намерения осознанно.',
    area: 'Пробуждение'
  },
  '12:12': {
    meaning: 'Оптимизм и вера в лучшее',
    message: 'Ангелы просят сохранять позитивный настрой. Ваши мечты близки к реализации. Не сдавайтесь на последнем шаге!',
    area: 'Оптимизм'
  },
  '13:13': {
    meaning: 'Трансформация и перерождение',
    message: 'Не бойтесь перемен — за ними скрывается ваш истинный потенциал. Ангелы помогают пройти через трансформацию с лёгкостью.',
    area: 'Трансформация'
  },
  '14:14': {
    meaning: 'Ангелы исполняют ваши желания',
    message: 'Ваши молитвы услышаны. Ангелы работают над исполнением ваших желаний. Сохраняйте терпение и продолжайте визуализировать свои цели.',
    area: 'Желания'
  },
  '15:15': {
    meaning: 'Позитивные перемены в жизни',
    message: 'Грядущие изменения принесут много радости. Ангелы рекомендуют отпустить старые привычки и открыться новому опыту.',
    area: 'Перемены'
  },
  '16:16': {
    meaning: 'Сила мысли и намерения',
    message: 'Ваши мысли сейчас обладают огромной силой. Контролируйте свой внутренний диалог и направляйте энергию на созидание.',
    area: 'Сила мысли'
  },
  '17:17': {
    meaning: 'Вы вдохновляете других',
    message: 'Ангелы говорят, что ваш свет помогает окружающим. Продолжайте делиться мудростью и добротой — это ваша миссия.',
    area: 'Миссия'
  },
  '18:18': {
    meaning: 'Завершение финансовых трудностей',
    message: 'Период материальных испытаний подходит к концу. Ангелы открывают новые источники дохода и возможностей для процветания.',
    area: 'Финансы'
  },
  '19:19': {
    meaning: 'Достижение целей',
    message: 'Вы на финишной прямой! Ангелы подтверждают, что ваши усилия скоро принесут результат. Не останавливайтесь.',
    area: 'Цели'
  },
  '20:20': {
    meaning: 'Божественное терпение',
    message: 'Вселенная просит вас набраться терпения. Всё происходит в идеальное время. Доверьтесь божественному плану.',
    area: 'Терпение'
  },
  '21:21': {
    meaning: 'Ваши мечты сбываются',
    message: 'Ангелы приближают исполнение ваших самых заветных желаний. Продолжайте верить и действовать — результат не заставит себя ждать.',
    area: 'Мечты'
  },
  '22:22': {
    meaning: 'Мастер-число: реализация грандиозных планов',
    message: 'Вы обладаете силой превращать мечты в реальность. Ангелы просят мыслить масштабно и не ограничивать себя. Всё возможно!',
    area: 'Реализация'
  },
  '23:23': {
    meaning: 'Вознесённые Мастера помогают вам',
    message: 'Духовные наставники направляют вас. Сохраняйте веру и следуйте своему сердцу — вас ведут к истинному предназначению.',
    area: 'Духовность'
  },
};

const getAreaColor = (area: string) => {
  const colors: Record<string, string> = {
    'Духовность': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    'Новые начинания': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Терпение': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Защита': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    'Перемены': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    'Баланс': 'bg-teal-500/20 text-teal-400 border-teal-500/30',
    'Путь': 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
    'Финансы': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    'Завершение': 'bg-rose-500/20 text-rose-400 border-rose-500/30',
    'Знаки': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    'Пробуждение': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'Оптимизм': 'bg-lime-500/20 text-lime-400 border-lime-500/30',
    'Трансформация': 'bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30',
    'Желания': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
    'Сила мысли': 'bg-violet-500/20 text-violet-400 border-violet-500/30',
    'Миссия': 'bg-sky-500/20 text-sky-400 border-sky-500/30',
    'Цели': 'bg-red-500/20 text-red-400 border-red-500/30',
    'Мечты': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
    'Реализация': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  };
  return colors[area] || 'bg-accent/20 text-accent border-accent/30';
};

export default function AngelNumbers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNumber, setSelectedNumber] = useState<string | null>(null);

  const filteredNumbers = Object.entries(angelNumbers).filter(([time]) =>
    time.includes(searchQuery.replace('.', ':').replace('-', ':'))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-mystic-purple/5 to-background pb-20 md:pb-0">
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="text-2xl">✨</div>
            <span className="font-bold text-xl bg-gradient-to-r from-accent to-mystic-violet bg-clip-text text-transparent" 
                  style={{ fontFamily: 'Playfair Display, serif' }}>
              MysticHub
            </span>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm">
              <Icon name="Home" size={16} className="mr-2" />
              На главную
            </Button>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <FadeIn delay={0}>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full animate-pulse" />
                <div className="relative text-6xl">👼</div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-accent via-mystic-violet to-mystic-deep bg-clip-text text-transparent" 
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Ангельская нумерология
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Узнайте, какое послание несут одинаковые числа на часах
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="max-w-md mx-auto mb-10">
            <div className="relative">
              <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Введите время, например 11:11"
                className="pl-12 py-6 text-lg bg-card/50 border-border focus:border-accent text-center"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedNumber(null);
                }}
              />
            </div>
          </div>
        </FadeIn>

        {selectedNumber && angelNumbers[selectedNumber] && (
          <FadeIn delay={0}>
            <Card className="max-w-3xl mx-auto mb-12 bg-gradient-to-br from-accent/10 via-mystic-purple/10 to-mystic-violet/10 border-accent/40 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl font-bold text-accent font-mono">{selectedNumber}</div>
                    <div>
                      <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {angelNumbers[selectedNumber].meaning}
                      </h2>
                      <Badge className={`mt-2 ${getAreaColor(angelNumbers[selectedNumber].area)}`}>
                        {angelNumbers[selectedNumber].area}
                      </Badge>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedNumber(null)}>
                    <Icon name="X" size={18} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-lg leading-relaxed">{angelNumbers[selectedNumber].message}</p>
                <div className="mt-6 pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground italic">
                    👼 Если вы видите это число регулярно — ангелы настойчиво пытаются донести до вас это послание
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        )}

        <FadeIn delay={200}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredNumbers.map(([time, data], index) => (
              <FadeIn key={time} delay={index * 30}>
                <Card
                  className={`cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:border-accent/50 ${
                    selectedNumber === time
                      ? 'bg-gradient-to-br from-accent/15 to-mystic-violet/15 border-accent/50 shadow-lg shadow-accent/10'
                      : 'bg-card/50 border-border'
                  }`}
                  onClick={() => setSelectedNumber(selectedNumber === time ? null : time)}
                >
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl font-bold font-mono text-accent">{time}</span>
                      <Badge variant="outline" className={getAreaColor(data.area)}>
                        {data.area}
                      </Badge>
                    </div>
                    <h3 className="font-semibold mb-2 line-clamp-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {data.meaning}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{data.message}</p>
                    <div className="mt-3 flex items-center text-xs text-accent">
                      <Icon name="ChevronRight" size={14} className="mr-1" />
                      Подробнее
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        {filteredNumbers.length === 0 && (
          <FadeIn delay={0}>
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Число не найдено</h3>
              <p className="text-muted-foreground">Попробуйте ввести время в формате ЧЧ:ЧЧ, например 11:11</p>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={300}>
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-mystic-deep/20 to-mystic-purple/20 border-accent/30">
              <CardContent className="p-8">
                <Icon name="Star" className="text-accent mx-auto mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Хотите персональную консультацию?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Наши нумерологи составят подробный анализ чисел вашей судьбы
                </p>
                <Link to="/services">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Icon name="Users" size={20} className="mr-2" />
                    Консультация нумеролога
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </div>

      <Footer />
      <MobileNav />
    </div>
  );
}
