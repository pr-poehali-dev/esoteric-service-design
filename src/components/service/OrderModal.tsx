import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    name: string;
    price: string;
    author: {
      name: string;
      avatar: string;
    };
  };
}

export default function OrderModal({ isOpen, onClose, service }: OrderModalProps) {
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleOrder = (paymentMethod: 'card' | 'sbp') => {
    console.log('Оплата методом:', paymentMethod);
    console.log('Дополнительная информация:', additionalInfo);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
            Оформление заказа
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Заполните дополнительную информацию для автора
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-center space-x-4 p-4 bg-muted/20 rounded-lg">
            <Avatar className="w-16 h-16 border-2 border-accent/30">
              <AvatarImage src={service.author.avatar} alt={service.author.name} />
              <AvatarFallback className="bg-accent/10 text-accent">
                {service.author.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h4 className="font-semibold">{service.author.name}</h4>
              <p className="text-sm text-muted-foreground">{service.name}</p>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Сообщение для автора
            </label>
            <Textarea
              placeholder="Укажите дополнительную информацию: дату рождения, время, место, конкретные вопросы..."
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              className="min-h-[120px] bg-background/50 border-border focus:border-accent"
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Итого:</span>
            <span className="text-2xl font-bold text-accent">{service.price}</span>
          </div>

          <div className="space-y-3">
            <Button 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              size="lg"
              onClick={() => handleOrder('card')}
            >
              <Icon name="CreditCard" size={20} className="mr-2" />
              Оплатить картой
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              size="lg"
              onClick={() => handleOrder('sbp')}
            >
              <Icon name="Smartphone" size={20} className="mr-2" />
              Оплатить через СБП
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
