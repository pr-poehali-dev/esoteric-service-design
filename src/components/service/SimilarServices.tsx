import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface SimilarService {
  id: number;
  name: string;
  description: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  rating: number;
  reviews: number;
  price: string;
  subscription: string;
}

interface SimilarServicesProps {
  services: SimilarService[];
  getSubscriptionColor: (subscription: string) => string;
}

export default function SimilarServices({ services, getSubscriptionColor }: SimilarServicesProps) {
  return (
    <div id="similar-services">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
          Похожие услуги
        </h2>
        <Link to="/services">
          <Button variant="outline">
            Все услуги
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link key={service.id} to={`/service/${service.id}`}>
            <Card className="group overflow-hidden bg-card/50 border-border hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <Badge className={`absolute top-3 right-3 ${getSubscriptionColor(service.subscription)}`}>
                  {service.subscription}
                </Badge>
              </div>

              <CardHeader className="pb-3">
                <h3 className="text-lg font-bold mb-2 line-clamp-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="pb-3 flex-1 flex flex-col justify-between">
                <div className="flex items-center space-x-2 mb-3">
                  <Avatar className="w-8 h-8 border border-accent/30">
                    <AvatarImage src={service.author.avatar} alt={service.author.name} />
                    <AvatarFallback className="bg-accent/10 text-accent text-xs">
                      {service.author.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-foreground truncate">{service.author.name}</p>
                    <div className="flex items-center">
                      <Icon name="Star" className="text-accent fill-accent" size={12} />
                      <span className="text-xs font-bold text-accent ml-1">{service.rating}</span>
                      <span className="text-xs text-muted-foreground ml-2">({service.reviews})</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <p className="text-xl font-bold text-accent">{service.price}</p>
                  <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Смотреть
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}