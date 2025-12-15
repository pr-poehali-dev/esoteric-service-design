import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mystic-deep via-mystic-purple to-mystic-deep flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMCA0aDJ2Mmgtdi0yem0wLTRoMnYyaC0ydi0yem0tMiAwdjJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMCA0aDJ2Mmgtdi0yem0wLTRoMnYyaC0ydi0yem0tNC00djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMCA0aDJ2Mmgtdi0yem0wLTRoMnYyaC0ydi0yem0tMiAwdjJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMCA0aDJ2Mmgtdi0yem0wLTRoMnYyaC0ydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
      
      <Card className="w-full max-w-md bg-background/95 backdrop-blur shadow-2xl relative">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/auth')}
          className="absolute top-4 right-4"
        >
          <Icon name="X" size={20} />
        </Button>

        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
              <Icon name="KeyRound" className="text-accent" size={32} />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold">Восстановление пароля</CardTitle>
          <CardDescription>
            {isSubmitted 
              ? 'Инструкции отправлены на вашу почту' 
              : 'Введите email для восстановления доступа'}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Icon name="Mail" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="ваш@email.ru" 
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                <Icon name="Send" size={18} className="mr-2" />
                Восстановить пароль
              </Button>

              <div className="text-center">
                <Button 
                  variant="link" 
                  onClick={() => navigate('/auth')}
                  className="text-sm text-muted-foreground"
                >
                  <Icon name="ArrowLeft" size={16} className="mr-2" />
                  Вернуться к авторизации
                </Button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 space-y-2">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-accent mt-0.5" size={20} />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Письмо отправлено!</p>
                    <p className="text-sm text-muted-foreground">
                      Мы отправили инструкции по восстановлению пароля на {email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-start gap-2">
                  <Icon name="Info" size={16} className="mt-0.5 flex-shrink-0" />
                  <span>Проверьте папку "Спам", если письмо не пришло в течение 5 минут</span>
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="Clock" size={16} className="mt-0.5 flex-shrink-0" />
                  <span>Ссылка для восстановления действительна 24 часа</span>
                </p>
              </div>

              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  onClick={() => setIsSubmitted(false)}
                  className="w-full"
                >
                  <Icon name="RefreshCw" size={18} className="mr-2" />
                  Отправить повторно
                </Button>

                <Button 
                  variant="ghost"
                  onClick={() => navigate('/auth')}
                  className="w-full"
                >
                  <Icon name="ArrowLeft" size={18} className="mr-2" />
                  Вернуться к авторизации
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
