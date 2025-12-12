import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import FadeIn from '@/components/ui/fade-in';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки формы
    setTimeout(() => {
      toast({
        title: 'Сообщение отправлено!',
        description: 'Мы свяжемся с вами в ближайшее время.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'support@misteria.ru',
      link: 'mailto:support@misteria.ru'
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      link: 'tel:+74951234567'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'Москва, ул. Звездная, 42',
      link: 'https://maps.google.com'
    },
    {
      icon: 'Clock',
      title: 'Часы работы',
      value: 'Пн-Вс: 9:00 - 21:00',
      link: null
    }
  ];

  const socialLinks = [
    { icon: 'MessageCircle', name: 'Telegram', link: 'https://t.me/misteria' },
    { icon: 'Phone', name: 'WhatsApp', link: 'https://wa.me/74951234567' },
    { icon: 'Mail', name: 'VK', link: 'https://vk.com/misteria' },
    { icon: 'Share2', name: 'Instagram', link: 'https://instagram.com/misteria' }
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
              <Link to="/contact" className="text-sm font-medium text-accent border-b-2 border-accent">
                Контакты
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
                  <Icon name="MessageCircle" className="text-accent" size={40} />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Свяжитесь с нами
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Мы всегда рады помочь вам с любыми вопросами о наших услугах
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <FadeIn>
                <div>
                  <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Напишите нам
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Заполните форму, и мы свяжемся с вами в течение 24 часов
                  </p>

                  <Card className="bg-card/50 border-border">
                    <CardContent className="p-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Ваше имя</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Иван Иванов"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="bg-background"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="ivan@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-background"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">Тема сообщения</Label>
                          <Input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="Вопрос о консультации"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="bg-background"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Сообщение</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Расскажите подробнее о вашем вопросе..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="bg-background resize-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                              Отправка...
                            </>
                          ) : (
                            <>
                              <Icon name="Send" size={20} className="mr-2" />
                              Отправить сообщение
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div>
                  <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Контактная информация
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Выберите удобный способ связи
                  </p>

                  <div className="space-y-4 mb-8">
                    {contactInfo.map((item, index) => (
                      <FadeIn key={item.title} delay={index * 100}>
                        <Card className="bg-card/50 border-border hover:border-accent/30 transition-all">
                          <CardContent className="p-6">
                            {item.link ? (
                              <a
                                href={item.link}
                                target={item.link.startsWith('http') ? '_blank' : undefined}
                                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="flex items-start gap-4 group"
                              >
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                  <Icon name={item.icon} className="text-accent" size={24} />
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-semibold mb-1 text-foreground group-hover:text-accent transition-colors">
                                    {item.title}
                                  </h3>
                                  <p className="text-muted-foreground">
                                    {item.value}
                                  </p>
                                </div>
                                {item.link.startsWith('http') && (
                                  <Icon name="ExternalLink" size={16} className="text-muted-foreground" />
                                )}
                              </a>
                            ) : (
                              <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                                  <Icon name={item.icon} className="text-accent" size={24} />
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-semibold mb-1 text-foreground">
                                    {item.title}
                                  </h3>
                                  <p className="text-muted-foreground">
                                    {item.value}
                                  </p>
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </FadeIn>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Мы в соцсетях
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {socialLinks.map((social, index) => (
                        <FadeIn key={social.name} delay={index * 50}>
                          <a
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border hover:border-accent/50 hover:bg-accent/5 transition-all group"
                          >
                            <Icon name={social.icon} className="text-accent" size={20} />
                            <span className="font-medium text-sm group-hover:text-accent transition-colors">
                              {social.name}
                            </span>
                          </a>
                        </FadeIn>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Часто задаваемые вопросы
                </h2>
                <p className="text-center text-muted-foreground mb-8">
                  Возможно, ответ на ваш вопрос уже есть в нашей базе знаний
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Card className="bg-card/50 border-border hover:border-accent/30 transition-all">
                    <CardContent className="p-6">
                      <Icon name="HelpCircle" className="text-accent mb-4" size={32} />
                      <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        База знаний
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        Ответы на самые популярные вопросы о платформе и услугах
                      </p>
                      <Link to="/faq">
                        <Button variant="outline" size="sm" className="w-full">
                          Перейти к FAQ
                          <Icon name="ArrowRight" size={16} className="ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/50 border-border hover:border-accent/30 transition-all">
                    <CardContent className="p-6">
                      <Icon name="MessageCircle" className="text-accent mb-4" size={32} />
                      <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Онлайн-чат
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        Получите мгновенную помощь от нашей службы поддержки
                      </p>
                      <Link to="/chat">
                        <Button variant="outline" size="sm" className="w-full">
                          Открыть чат
                          <Icon name="ArrowRight" size={16} className="ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
