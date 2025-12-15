import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Custom404 = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-mystic-deep via-mystic-purple to-mystic-deep flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMCA0aDJ2Mmgtdi0yem0wLTRoMnYyaC0ydi0yem0tMiAwdjJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMCA0aDJ2Mmgtdi0yem0wLTRoMnYyaC0ydi0yem0tNC00djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMCA0aDJ2Mmgtdi0yem0wLTRoMnYyaC0ydi0yem0tMiAwdjJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMCA0aDJ2Mmgtdi0yem0wLTRoMnYyaC0ydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-mystic-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '500ms' }} />
      </div>

      <Card className="w-full max-w-2xl bg-background/95 backdrop-blur shadow-2xl relative z-10">
        <CardContent className="pt-12 pb-12 text-center space-y-8">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse" />
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-mystic-purple/20 flex items-center justify-center border-2 border-accent/30">
                <Icon name="SearchX" className="text-accent" size={64} />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative inline-block">
              <h1 
                className="text-8xl font-bold bg-gradient-to-r from-accent via-mystic-purple to-accent bg-clip-text text-transparent animate-pulse"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                404
              </h1>
              <div className="absolute -top-4 -right-4">
                <Icon name="Sparkles" className="text-accent" size={24} style={{ animation: 'spin 3s linear infinite' }} />
              </div>
              <div className="absolute -bottom-2 -left-4">
                <Icon name="Star" className="text-mystic-purple animate-pulse" size={20} />
              </div>
            </div>

            <h2 
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Страница потерялась в астрале
            </h2>
            
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              К сожалению, страница которую вы ищете не существует или была перемещена в другое измерение
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              onClick={() => navigate('/')}
              size="lg"
              className="bg-accent hover:bg-accent/90 gap-2"
            >
              <Icon name="Home" size={20} />
              Вернуться на главную
            </Button>

            <Button 
              onClick={() => navigate(-1)}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <Icon name="ArrowLeft" size={20} />
              Назад
            </Button>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Возможно, вас заинтересует:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/services')}
                className="gap-2"
              >
                <Icon name="Briefcase" size={16} />
                Услуги
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/products')}
                className="gap-2"
              >
                <Icon name="ShoppingBag" size={16} />
                Товары
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/authors')}
                className="gap-2"
              >
                <Icon name="Users" size={16} />
                Авторы
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/faq')}
                className="gap-2"
              >
                <Icon name="HelpCircle" size={16} />
                Помощь
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Custom404;
