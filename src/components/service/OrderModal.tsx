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
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    name: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    author: {
      name: string;
      avatar: string;
    };
  };
}

export default function OrderModal({ isOpen, onClose, service }: OrderModalProps) {
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [usePoints, setUsePoints] = useState(false);
  
  const userPoints = 350;
  const basePrice = service.price;
  const maxPointsToUse = Math.floor(basePrice * 0.5);
  const pointsToUse = usePoints ? Math.min(userPoints, maxPointsToUse) : 0;
  const finalPrice = basePrice - pointsToUse;

  const handleOrder = (paymentMethod: 'card' | 'sbp') => {
    console.log('Оплата методом:', paymentMethod);
    console.log('Дополнительная информация:', additionalInfo);
    onClose();
  };

  const fillFromProfile = () => {
    // Получаем данные из localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        const profileData = `Имя: ${user.name || ''}
Email: ${user.email || ''}
Телефон: ${user.phone || ''}
Дата рождения: ${user.birthDate || ''}
Место: ${user.location || ''}`;
        setAdditionalInfo(profileData.trim());
      } catch (error) {
        console.error('Ошибка загрузки данных профиля:', error);
      }
    }
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
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium">
                Сообщение для автора
              </label>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={fillFromProfile}
                className="text-xs h-auto py-1 px-2"
              >
                <Icon name="User" size={14} className="mr-1" />
                Заполнить из профиля
              </Button>
            </div>
            <Textarea
              placeholder="Укажите дополнительную информацию: дату рождения, время, место, конкретные вопросы..."
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              className="min-h-[120px] bg-background/50 border-border focus:border-accent"
            />
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-3 bg-accent/5 rounded-lg">
              <Checkbox 
                id="use-points"
                checked={usePoints}
                onCheckedChange={(checked) => setUsePoints(checked as boolean)}
                className="mt-1"
              />
              <div className="flex-1">
                <label 
                  htmlFor="use-points" 
                  className="text-sm font-medium cursor-pointer flex items-center"
                >
                  <Icon name="Coins" size={16} className="mr-2 text-accent" />
                  Списать бонусные баллы
                </label>
                <p className="text-xs text-muted-foreground mt-1">
                  Доступно: {userPoints} баллов (макс. {maxPointsToUse} на этот заказ)
                </p>
                {usePoints && (
                  <p className="text-sm text-accent font-medium mt-2">
                    Будет списано: {pointsToUse} баллов
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              {usePoints && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Стоимость услуги:</span>
                  <span className="text-foreground">{basePrice}₽</span>
                </div>
              )}
              {usePoints && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Скидка баллами:</span>
                  <span className="text-accent">-{pointsToUse}₽</span>
                </div>
              )}
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">Итого:</span>
                <span className="text-2xl font-bold text-accent">{finalPrice}₽</span>
              </div>
            </div>
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