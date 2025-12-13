import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface EditOrderMessageModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  orderId: string;
  currentMessage?: string;
  onSave: (message: string) => void;
}

export default function EditOrderMessageModal({ 
  open, 
  onOpenChange, 
  orderId, 
  currentMessage = '',
  onSave 
}: EditOrderMessageModalProps) {
  const [message, setMessage] = useState(currentMessage);

  useEffect(() => {
    if (open) {
      setMessage(currentMessage);
    }
  }, [open, currentMessage]);

  const handleSave = () => {
    onSave(message);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Редактировать сообщение для автора</DialogTitle>
          <DialogDescription>
            Заказ #{orderId}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="message">Сообщение</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Опишите детали вашего заказа..."
              rows={6}
              className="resize-none"
            />
            <p className="text-sm text-muted-foreground">
              {message.length} / 1000 символов
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Icon name="Info" size={20} className="text-blue-600 mt-0.5 shrink-0" />
              <div className="text-sm text-blue-900">
                <p className="font-medium mb-1">Совет:</p>
                <p>Чем подробнее вы опишете свои пожелания, тем лучше автор сможет выполнить заказ.</p>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Отмена
          </Button>
          <Button
            onClick={handleSave}
            disabled={!message.trim() || message.length > 1000}
          >
            <Icon name="Save" size={16} className="mr-2" />
            Сохранить
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
