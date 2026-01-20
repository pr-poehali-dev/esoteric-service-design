import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReferralModal({ isOpen, onClose }: ReferralModalProps) {
  const [copied, setCopied] = useState(false);
  const referralLink = `https://mysteria.app/ref/${Math.random().toString(36).substring(7)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
            Пригласить друга
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Поделитесь ссылкой и получите бонусные баллы за каждого приглашенного друга
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-accent/5 rounded-lg p-4 space-y-3">
            <div className="flex items-start space-x-3">
              <Icon name="Gift" className="text-accent mt-1" size={20} />
              <div>
                <p className="font-semibold text-foreground">Вы получите 100 баллов</p>
                <p className="text-sm text-muted-foreground">За каждого друга, который зарегистрируется по вашей ссылке</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Icon name="Sparkles" className="text-accent mt-1" size={20} />
              <div>
                <p className="font-semibold text-foreground">Друг получит 50 баллов</p>
                <p className="text-sm text-muted-foreground">На первый заказ в качестве приветственного бонуса</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Ваша реферальная ссылка</label>
            <div className="flex gap-2">
              <Input
                readOnly
                value={referralLink}
                className="bg-background/50 border-border font-mono text-sm"
              />
              <Button
                onClick={handleCopy}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shrink-0"
              >
                {copied ? (
                  <>
                    <Icon name="Check" size={16} className="mr-2" />
                    Скопировано
                  </>
                ) : (
                  <>
                    <Icon name="Copy" size={16} className="mr-2" />
                    Копировать
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
