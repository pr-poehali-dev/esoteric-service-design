import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import FadeIn from '@/components/ui/fade-in';

interface DailyRewardPopupProps {
  onClose: () => void;
}

export default function DailyRewardPopup({ onClose }: DailyRewardPopupProps) {
  const [claimed, setClaimed] = useState(false);

  const rewards = [
    { day: 'Вчера', bonus: 50, icon: 'Coins', claimed: true },
    { day: 'Сегодня', bonus: 100, icon: 'Gift', claimed: false },
    { day: 'Завтра', bonus: 150, icon: 'Star', claimed: false }
  ];

  const handleClaim = () => {
    setClaimed(true);
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 duration-500">
      <FadeIn>
        <Card className="w-[400px] bg-card/95 backdrop-blur-xl border-accent/30 shadow-2xl shadow-accent/20">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold bg-gradient-to-r from-accent to-mystic-violet bg-clip-text text-transparent" style={{ fontFamily: 'Playfair Display, serif' }}>
                Ежедневная награда
              </CardTitle>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onClose}
                className="h-8 w-8 p-0"
              >
                <Icon name="X" size={16} />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              {rewards.map((reward, index) => {
                const isToday = reward.day === 'Сегодня';
                const isClaimed = reward.claimed || (isToday && claimed);

                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center transition-all duration-300 ${
                      isToday ? 'scale-125' : 'scale-90 opacity-60'
                    }`}
                  >
                    <div className="text-xs text-muted-foreground mb-2 font-medium">
                      {reward.day}
                    </div>
                    
                    <div className={`relative ${isToday ? 'mb-3' : 'mb-2'}`}>
                      {isToday && !claimed && (
                        <div className="absolute inset-0 bg-accent/30 blur-xl rounded-full animate-pulse" />
                      )}
                      
                      <div
                        className={`relative rounded-2xl border-2 flex flex-col items-center justify-center transition-all duration-300 ${
                          isToday
                            ? 'w-24 h-24 border-accent/50 bg-gradient-to-br from-accent/20 to-mystic-violet/20'
                            : 'w-16 h-16 border-border bg-card/50'
                        } ${isClaimed ? 'opacity-40' : ''}`}
                      >
                        {isClaimed && (
                          <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-2xl">
                            <Icon name="Check" size={isToday ? 32 : 24} className="text-green-500" />
                          </div>
                        )}
                        
                        <Icon 
                          name={reward.icon as any} 
                          size={isToday ? 32 : 24} 
                          className={isToday ? 'text-accent mb-1' : 'text-muted-foreground mb-1'} 
                        />
                        <span className={`font-bold ${isToday ? 'text-lg text-accent' : 'text-sm'}`}>
                          +{reward.bonus}
                        </span>
                      </div>
                    </div>

                    {isToday && claimed && (
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-in zoom-in duration-300">
                        <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                          Получено! 🎉
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Icon name="TrendingUp" size={16} className="text-accent" />
                <span>Заходите каждый день, чтобы не потерять прогресс!</span>
              </div>

              {!claimed ? (
                <Button 
                  onClick={handleClaim}
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-300 hover:scale-105"
                >
                  <Icon name="Gift" size={20} className="mr-2" />
                  Получить +100 бонусов
                </Button>
              ) : (
                <Button 
                  size="lg"
                  disabled
                  className="w-full bg-green-500/20 text-green-500 border-2 border-green-500/30"
                >
                  <Icon name="Check" size={20} className="mr-2" />
                  Награда получена
                </Button>
              )}
            </div>

            <div className="pt-3 border-t border-border/50">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="Flame" size={14} className="text-orange-500" />
                  <span>Серия: <strong className="text-foreground">3 дня</strong></span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Coins" size={14} className="text-accent" />
                  <span>Баланс: <strong className="text-foreground">750</strong></span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}
