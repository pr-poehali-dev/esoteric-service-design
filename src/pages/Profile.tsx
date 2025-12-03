import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import NotificationCenter from '@/components/notifications/NotificationCenter';

export default function Profile() {
  const navigate = useNavigate();
  const [user] = useState({
    fullName: 'Анна Мария Волкова',
    avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
    birthDate: '15 марта 1990',
    birthTime: '14:30',
    birthPlace: 'Москва, Россия',
    subscription: {
      type: 'Премиум',
      validUntil: '15.12.2024',
      status: 'active'
    }
  });

  const services = [
    {
      id: 1,
      name: 'Гадание на Таро',
      date: '10.11.2024',
      status: 'completed',
      price: '1500₽',
      icon: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg'
    },
    {
      id: 2,
      name: 'Натальная карта',
      date: '25.10.2024',
      status: 'completed',
      price: '3000₽',
      icon: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg'
    },
    {
      id: 3,
      name: 'Гадание на рунах',
      date: '05.10.2024',
      status: 'completed',
      price: '1200₽',
      icon: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg'
    },
    {
      id: 4,
      name: 'Консультация астролога',
      date: '12.12.2024',
      status: 'upcoming',
      price: '2500₽',
      icon: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Sparkles" className="text-accent" size={32} />
            <h1 className="text-2xl font-bold text-accent" style={{ fontFamily: 'Playfair Display, serif' }}>
              Мистерия
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Icon name="Home" size={16} className="mr-2" />
              Главная
            </Button>
            <NotificationCenter />
            <Button variant="ghost" size="sm">
              <Icon name="User" size={16} className="mr-2" />
              Профиль
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Icon name="User" className="text-accent mr-3" size={32} />
            <h1 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
              Личный кабинет
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-1 bg-card/50 border-border">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <Avatar className="w-32 h-32 border-4 border-accent/30">
                    <AvatarImage src={user.avatar} alt={user.fullName} />
                    <AvatarFallback className="text-4xl bg-accent/10 text-accent">
                      {user.fullName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {user.fullName}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center text-muted-foreground text-sm mb-2">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Дата рождения
                  </div>
                  <p className="text-foreground font-medium">{user.birthDate}</p>
                </div>

                <Separator />

                <div>
                  <div className="flex items-center text-muted-foreground text-sm mb-2">
                    <Icon name="Clock" size={16} className="mr-2" />
                    Время рождения
                  </div>
                  <p className="text-foreground font-medium">{user.birthTime}</p>
                </div>

                <Separator />

                <div>
                  <div className="flex items-center text-muted-foreground text-sm mb-2">
                    <Icon name="MapPin" size={16} className="mr-2" />
                    Место рождения
                  </div>
                  <p className="text-foreground font-medium">{user.birthPlace}</p>
                </div>

                <Separator />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-muted-foreground text-sm">Подписка</span>
                    <Badge className="bg-accent/20 text-accent border-accent/30">
                      {user.subscription.type}
                    </Badge>
                  </div>
                  <div className="bg-accent/5 rounded-lg p-3 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Статус</span>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-foreground">Активна</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Действует до</span>
                      <span className="text-foreground font-medium">{user.subscription.validUntil}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => navigate('/profile/edit')}
                >
                  <Icon name="Settings" size={16} className="mr-2" />
                  Редактировать профиль
                </Button>

                <Button 
                  variant="outline"
                  className="w-full border-destructive/30 text-destructive hover:bg-destructive/10"
                  onClick={() => navigate('/auth')}
                >
                  <Icon name="LogOut" size={16} className="mr-2" />
                  Выйти из аккаунта
                </Button>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2 bg-card/50 border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                    История услуг
                  </CardTitle>
                  <Badge variant="outline" className="text-muted-foreground">
                    {services.length} записей
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border hover:border-accent/30 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center overflow-hidden">
                          <img 
                            src={service.icon} 
                            alt={service.name}
                            className="w-8 h-8 object-cover rounded"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{service.name}</h3>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Icon name="Calendar" size={14} className="mr-1" />
                            {service.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-accent font-bold">{service.price}</span>
                        {service.status === 'completed' ? (
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                            <Icon name="CheckCircle" size={14} className="mr-1" />
                            Выполнено
                          </Badge>
                        ) : (
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                            <Icon name="Clock" size={14} className="mr-1" />
                            Запланировано
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                <div className="flex items-center justify-between bg-accent/5 rounded-lg p-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Общая сумма</p>
                    <p className="text-2xl font-bold text-accent">8200₽</p>
                  </div>
                  <Button variant="outline">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать историю
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-mystic-purple/20 to-mystic-deep/20 border-accent/30">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-accent/10 rounded-full">
                    <Icon name="Star" className="text-accent" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Получите бонусы за активность
                    </h3>
                    <p className="text-muted-foreground">
                      Пригласите друга и получите скидку 20% на следующую консультацию
                    </p>
                  </div>
                </div>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Icon name="Gift" size={20} className="mr-2" />
                  Пригласить друга
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}