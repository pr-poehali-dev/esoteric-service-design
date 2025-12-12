import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface FeedbackModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  orderId?: string;
  defaultType?: 'error' | 'suggestion' | 'question' | 'complaint';
}

export default function FeedbackModal({
  open,
  onOpenChange,
  orderId,
  defaultType = 'question',
}: FeedbackModalProps) {
  const { toast } = useToast();
  const [type, setType] = useState<string>(defaultType);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const feedbackTypes = [
    { value: 'error', label: 'Ошибка', icon: 'AlertCircle' },
    { value: 'suggestion', label: 'Пожелание', icon: 'Lightbulb' },
    { value: 'question', label: 'Вопрос', icon: 'HelpCircle' },
    { value: 'complaint', label: 'Жалоба на выполнение услуги', icon: 'MessageSquareWarning' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, опишите ваше обращение',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Имитация отправки
    setTimeout(() => {
      toast({
        title: 'Обращение отправлено',
        description: 'Мы рассмотрим ваше обращение в ближайшее время',
      });
      setMessage('');
      setType(defaultType);
      onOpenChange(false);
      setIsSubmitting(false);
    }, 1000);
  };

  const selectedType = feedbackTypes.find((t) => t.value === type);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
            Обратная связь
          </DialogTitle>
          <DialogDescription>
            Опишите вашу проблему или предложение, и мы свяжемся с вами
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {orderId && (
            <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
              <span className="font-medium">Заказ:</span> #{orderId}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="type">Тип обращения</Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger id="type" className="w-full">
                <SelectValue>
                  {selectedType && (
                    <div className="flex items-center gap-2">
                      <Icon name={selectedType.icon} size={16} className="text-accent" />
                      <span>{selectedType.label}</span>
                    </div>
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {feedbackTypes.map((feedbackType) => (
                  <SelectItem key={feedbackType.value} value={feedbackType.value}>
                    <div className="flex items-center gap-2">
                      <Icon name={feedbackType.icon} size={16} className="text-accent" />
                      <span>{feedbackType.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Текст обращения</Label>
            <Textarea
              id="message"
              placeholder="Опишите детали вашего обращения..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              required
              className="resize-none"
            />
            <p className="text-xs text-muted-foreground">
              Минимум 10 символов
            </p>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
              className="flex-1"
            >
              Отмена
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || message.trim().length < 10}
              className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              {isSubmitting ? (
                <>
                  <Icon name="Loader2" size={18} className="mr-2 animate-spin" />
                  Отправка...
                </>
              ) : (
                <>
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
