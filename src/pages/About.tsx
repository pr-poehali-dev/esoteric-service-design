import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import FadeIn from '@/components/ui/fade-in';

export default function About() {
  const stats = [
    { icon: 'Users', value: '500+', label: 'Мастеров' },
    { icon: 'Star', value: '10 000+', label: 'Консультаций' },
    { icon: 'Heart', value: '98%', label: 'Довольных клиентов' },
    { icon: 'Globe', value: '50+', label: 'Стран' }
  ];

  const values = [
    {
      icon: 'Shield',
      title: 'Проверенные мастера',
      description: 'Каждый специалист проходит тщательную верификацию. Мы проверяем документы, опыт работы и проводим тестовые консультации.'
    },
    {
      icon: 'Lock',
      title: 'Конфиденциальность',
      description: 'Ваши личные данные и информация из консультаций защищены. Мастера подписывают соглашение о неразглашении.'
    },
    {
      icon: 'Award',
      title: 'Качество услуг',
      description: 'Мы следим за рейтингом каждого мастера, анализируем отзывы и гарантируем высокое качество всех консультаций.'
    },
    {
      icon: 'Sparkles',
      title: 'Индивидуальный подход',
      description: 'Каждый клиент получает персонализированную консультацию с учетом его запроса, ситуации и энергетики.'
    }
  ];

  const team = [
    {
      name: 'Анастасия Лунная',
      role: 'Главный астролог',
      image: 'https://cdn.poehali.dev/fakeimg/400x400/?text=AL&font=bebas',
      description: '15 лет опыта в ведической астрологии'
    },
    {
      name: 'Виктор Рунный',
      role: 'Мастер рун',
      image: 'https://cdn.poehali.dev/fakeimg/400x400/?text=VR&font=bebas',
      description: 'Эксперт по древнегерманским рунам'
    },
    {
      name: 'Мария Таро',
      role: 'Специалист по Таро',
      image: 'https://cdn.poehali.dev/fakeimg/400x400/?text=MT&font=bebas',
      description: 'Более 2000 проведенных раскладов'
    },
    {
      name: 'Дмитрий Звездный',
      role: 'Нумеролог',
      image: 'https://cdn.poehali.dev/fakeimg/400x400/?text=DZ&font=bebas',
      description: 'Специализация на матрице судьбы'
    }
  ];

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
              <Link to="/about" className="text-sm font-medium text-accent border-b-2 border-accent">
                О нас
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

      <main className="flex-1">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-background"></div>
          <div className="container mx-auto px-4 relative z-10">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
                  <Icon name="Sparkles" className="text-accent" size={40} />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  О нас
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Мы создали платформу, которая объединяет лучших эзотерических мастеров 
                  с теми, кто ищет ответы, поддержку и духовное развитие
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 border-y border-border bg-card/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <FadeIn key={stat.label} delay={index * 100}>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-3">
                      <Icon name={stat.icon} className="text-accent" size={24} />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-accent mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Наша миссия
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Мы верим, что каждый человек заслуживает доступа к качественным эзотерическим консультациям. 
                    Наша платформа создана для того, чтобы сделать древние практики и знания доступными в современном мире.
                  </p>
                </div>
              </FadeIn>

              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <FadeIn key={value.title} delay={index * 100}>
                    <Card className="bg-card/50 border-border hover:border-accent/30 transition-all h-full">
                      <CardContent className="p-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                          <Icon name={value.icon} className="text-accent" size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  История проекта
                </h2>
                <div className="max-w-3xl mx-auto text-muted-foreground leading-relaxed space-y-4 text-left">
                  <p>
                    <strong className="text-foreground">Мистерия</strong> родилась из простой идеи: сделать эзотерические знания 
                    доступными каждому. В 2020 году, когда мир стал более цифровым, мы поняли, что многие люди 
                    ищут духовной поддержки, но не знают, где найти проверенных мастеров.
                  </p>
                  <p>
                    Мы начали с небольшой команды из 5 мастеров и за три года выросли до платформы с более чем 
                    500 специалистами из разных стран. Каждый месяц мы помогаем тысячам людей найти ответы на 
                    важные жизненные вопросы.
                  </p>
                  <p>
                    Сегодня <strong className="text-foreground">Мистерия</strong> — это не просто маркетплейс. 
                    Это комьюнити единомышленников, где знания передаются с уважением к традициям, а технологии 
                    помогают людям находить своего мастера в любой точке мира.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Наша команда
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Опытные мастера, которые стоят за качеством каждой консультации на платформе
                </p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <FadeIn key={member.name} delay={index * 100}>
                  <Card className="bg-card/50 border-border hover:border-accent/30 transition-all group">
                    <CardContent className="p-6 text-center">
                      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-accent/10 group-hover:ring-4 ring-accent/20 transition-all">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {member.name}
                      </h3>
                      <p className="text-accent font-medium mb-2 text-sm">
                        {member.role}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {member.description}
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-accent/5 to-accent/10">
          <div className="container mx-auto px-4">
            <FadeIn>
              <Card className="bg-card/80 backdrop-blur border-accent/30 max-w-4xl mx-auto">
                <CardContent className="p-8 md:p-12 text-center">
                  <Icon name="Users" className="text-accent mx-auto mb-6" size={48} />
                  <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Присоединяйтесь к нам
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Станьте частью нашего комьюнити. Если вы мастер эзотерических практик — 
                    мы будем рады видеть вас на платформе.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/services">
                      <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Icon name="Sparkles" size={20} className="mr-2" />
                        Найти мастера
                      </Button>
                    </Link>
                    <Link to="/chat">
                      <Button size="lg" variant="outline">
                        <Icon name="Briefcase" size={20} className="mr-2" />
                        Стать мастером
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
