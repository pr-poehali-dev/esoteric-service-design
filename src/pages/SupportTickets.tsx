import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import FadeIn from '@/components/ui/fade-in';

interface Ticket {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  orderNumber?: string;
  ticketType: string;
  status: string;
  response?: string;
  createdAt: string;
  respondedAt?: string;
}

export default function SupportTickets() {
  const [tickets, setTickets] = useState<Ticket[]>([
    {
      id: 1,
      name: 'Мария Иванова',
      email: 'maria@example.com',
      subject: 'Вопрос о доставке заказа',
      message: 'Здравствуйте! Хотела бы уточнить, когда будет доставлен мой заказ #12345. Прошло уже 5 дней с момента оплаты.',
      orderNumber: '12345',
      ticketType: 'order',
      status: 'answered',
      response: 'Добрый день! Ваш заказ находится в пути и будет доставлен завтра до 18:00. Трек-номер для отслеживания: RU123456789.',
      createdAt: '2024-01-15T10:30:00',
      respondedAt: '2024-01-15T14:20:00'
    },
    {
      id: 2,
      name: 'Мария Иванова',
      email: 'maria@example.com',
      subject: 'Консультация по услуге',
      message: 'Интересует консультация по таро. Сколько длится сеанс и какая стоимость?',
      ticketType: 'service',
      status: 'pending',
      createdAt: '2024-01-16T09:15:00'
    },
    {
      id: 3,
      name: 'Мария Иванова',
      email: 'maria@example.com',
      subject: 'Возврат товара',
      message: 'Получила товар, но он не подошел по размеру. Можно ли оформить возврат?',
      orderNumber: '12346',
      ticketType: 'return',
      status: 'answered',
      response: 'Конечно! Для оформления возврата, пожалуйста, заполните форму возврата в личном кабинете в разделе "Мои заказы". Возврат средств осуществляется в течение 7 рабочих дней.',
      createdAt: '2024-01-10T16:45:00',
      respondedAt: '2024-01-10T18:30:00'
    }
  ]);

  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'answered':
        return <Badge className="bg-green-500 hover:bg-green-600">Отвечено</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">В обработке</Badge>;
      case 'closed':
        return <Badge className="bg-gray-500 hover:bg-gray-600">Закрыто</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getTicketTypeLabel = (type: string) => {
    switch (type) {
      case 'order':
        return 'Заказ';
      case 'service':
        return 'Услуга';
      case 'return':
        return 'Возврат';
      case 'general':
        return 'Общий вопрос';
      case 'technical':
        return 'Технический вопрос';
      default:
        return type;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
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
              <Link to="/contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
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
        <section className="relative py-12 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-background"></div>
          <div className="container mx-auto px-4 relative z-10">
            <FadeIn>
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <Link to="/profile">
                    <Button variant="ghost" size="icon">
                      <Icon name="ArrowLeft" size={24} />
                    </Button>
                  </Link>
                  <div>
                    <h1 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Мои обращения
                    </h1>
                    <p className="text-muted-foreground mt-2">
                      История ваших обращений в службу поддержки
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 mb-8">
                  <Link to="/contact" className="flex-1">
                    <Button className="w-full">
                      <Icon name="Plus" className="mr-2" size={20} />
                      Новое обращение
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {tickets.length === 0 ? (
                <FadeIn>
                  <Card className="text-center py-12">
                    <CardContent>
                      <Icon name="Inbox" className="mx-auto text-muted-foreground mb-4" size={64} />
                      <h3 className="text-xl font-semibold mb-2">Нет обращений</h3>
                      <p className="text-muted-foreground mb-6">
                        У вас пока нет обращений в службу поддержки
                      </p>
                      <Link to="/contact">
                        <Button>
                          <Icon name="Plus" className="mr-2" size={20} />
                          Создать обращение
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </FadeIn>
              ) : (
                <div className="space-y-4">
                  {tickets.map((ticket, index) => (
                    <FadeIn key={ticket.id} delay={index * 0.1}>
                      <Card 
                        className="cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => setSelectedTicket(selectedTicket?.id === ticket.id ? null : ticket)}
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <CardTitle className="text-lg">{ticket.subject}</CardTitle>
                                {getStatusBadge(ticket.status)}
                              </div>
                              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Icon name="Tag" size={16} />
                                  {getTicketTypeLabel(ticket.ticketType)}
                                </span>
                                {ticket.orderNumber && (
                                  <span className="flex items-center gap-1">
                                    <Icon name="Package" size={16} />
                                    Заказ #{ticket.orderNumber}
                                  </span>
                                )}
                                <span className="flex items-center gap-1">
                                  <Icon name="Calendar" size={16} />
                                  {formatDate(ticket.createdAt)}
                                </span>
                              </div>
                            </div>
                            <Icon 
                              name={selectedTicket?.id === ticket.id ? "ChevronUp" : "ChevronDown"} 
                              size={24}
                              className="text-muted-foreground"
                            />
                          </div>
                        </CardHeader>

                        {selectedTicket?.id === ticket.id && (
                          <CardContent className="pt-0 space-y-6">
                            <div className="border-t pt-6">
                              <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                  <Icon name="User" size={20} className="text-accent" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="font-semibold">{ticket.name}</span>
                                    <span className="text-sm text-muted-foreground">
                                      {formatDate(ticket.createdAt)}
                                    </span>
                                  </div>
                                  <p className="text-muted-foreground whitespace-pre-wrap">
                                    {ticket.message}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {ticket.response && (
                              <div className="border-t pt-6">
                                <div className="flex items-start gap-3">
                                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                    <Icon name="Headphones" size={20} className="text-green-600" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="font-semibold">Служба поддержки</span>
                                      {ticket.respondedAt && (
                                        <span className="text-sm text-muted-foreground">
                                          {formatDate(ticket.respondedAt)}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-muted-foreground whitespace-pre-wrap">
                                      {ticket.response}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}

                            {!ticket.response && ticket.status === 'pending' && (
                              <div className="border-t pt-6">
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center gap-3">
                                  <Icon name="Clock" size={24} className="text-yellow-600 flex-shrink-0" />
                                  <p className="text-sm text-yellow-800">
                                    Ваше обращение находится в обработке. Мы ответим в течение 24 часов.
                                  </p>
                                </div>
                              </div>
                            )}
                          </CardContent>
                        )}
                      </Card>
                    </FadeIn>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
