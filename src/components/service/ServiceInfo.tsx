import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface ServiceInfoProps {
  service: {
    name: string;
    shortDescription: string;
    rating: number;
    reviews: number;
    sales: number;
    duration: string;
    deliveryTime: string;
    price: string;
    author: {
      name: string;
      avatar: string;
      about: string;
      rating: number;
      services: number;
      totalSales: number;
    };
  };
}

export default function ServiceInfo({ service }: ServiceInfoProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
        {service.name}
      </h1>
      
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center">
          <Icon name="Star" className="text-accent fill-accent" size={20} />
          <span className="text-xl font-bold text-accent ml-2">{service.rating}</span>
          <span className="text-muted-foreground ml-2">({service.reviews} отзывов)</span>
        </div>
        <Separator orientation="vertical" className="h-6" />
        <div className="flex items-center text-muted-foreground">
          <Icon name="ShoppingBag" size={18} className="mr-2" />
          <span>{service.sales} продаж</span>
        </div>
      </div>

      <p className="text-lg text-muted-foreground mb-6">
        {service.shortDescription}
      </p>

      <Card className="bg-card/50 border-accent/30 mb-6">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-muted-foreground">
                <Icon name="Clock" size={18} className="mr-2" />
                <span>Длительность</span>
              </div>
              <span className="font-semibold">{service.duration}</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex items-center text-muted-foreground">
                <Icon name="Timer" size={18} className="mr-2" />
                <span>Срок выполнения</span>
              </div>
              <span className="font-semibold">{service.deliveryTime}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Цена</p>
          <p className="text-4xl font-bold text-accent">{service.price}</p>
        </div>
        <div className="flex space-x-3">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Icon name="ShoppingCart" size={20} className="mr-2" />
            Заказать
          </Button>
          <Link to="/chat">
            <Button size="lg" variant="outline">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать
            </Button>
          </Link>
        </div>
      </div>

      <Separator className="my-6" />

      <div>
        <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Об авторе
        </h3>
        <Card className="bg-card/50 border-border hover:border-accent/50 transition-all">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Avatar className="w-20 h-20 border-4 border-accent/30">
                <AvatarImage src={service.author.avatar} alt={service.author.name} />
                <AvatarFallback className="bg-accent/10 text-accent text-2xl">
                  {service.author.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2">{service.author.name}</h4>
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center">
                    <Icon name="Star" className="text-accent fill-accent" size={16} />
                    <span className="text-lg font-bold text-accent ml-1">{service.author.rating}</span>
                  </div>
                  <Separator orientation="vertical" className="h-4" />
                  <span className="text-sm text-muted-foreground">{service.author.services} услуг</span>
                  <Separator orientation="vertical" className="h-4" />
                  <span className="text-sm text-muted-foreground">{service.author.totalSales} продаж</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.author.about}
                </p>
                <Button variant="outline" size="sm" className="mt-4">
                  <Icon name="User" size={16} className="mr-2" />
                  Профиль автора
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
