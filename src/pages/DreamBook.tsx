import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Footer from '@/components/Footer';
import FadeIn from '@/components/ui/fade-in';
import MobileNav from '@/components/MobileNav';

export default function DreamBook() {
  const [dreamText, setDreamText] = useState('');
  const [interpretation, setInterpretation] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeDream = () => {
    if (!dreamText.trim()) return;
    
    setIsAnalyzing(true);
    
    setTimeout(() => {
      const interpretations = [
        {
          title: '🌟 Общее толкование',
          text: 'Ваш сон указывает на внутренние изменения и трансформацию личности. Символы, которые вы видели, говорят о готовности к новому этапу жизни.'
        },
        {
          title: '💫 Эмоциональный аспект',
          text: 'Сновидение отражает ваше текущее эмоциональное состояние. Обратите внимание на чувства, которые вы испытывали во сне - они являются ключом к пониманию ситуации.'
        },
        {
          title: '🔮 Предсказание',
          text: 'В ближайшее время возможны неожиданные, но приятные события. Сон предвещает позитивные перемены в личной жизни или карьере.'
        },
        {
          title: '✨ Совет',
          text: 'Доверьтесь своей интуиции и не бойтесь делать шаги навстречу переменам. Вселенная посылает вам знаки - будьте внимательны к деталям.'
        }
      ];

      const randomInterpretation = interpretations[Math.floor(Math.random() * interpretations.length)];
      setInterpretation(`${randomInterpretation.title}\n\n${randomInterpretation.text}`);
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-mystic-purple/5 to-background">
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="text-2xl">✨</div>
            <span className="font-bold text-xl bg-gradient-to-r from-accent to-mystic-violet bg-clip-text text-transparent" 
                  style={{ fontFamily: 'Playfair Display, serif' }}>
              MysticHub
            </span>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm">
              <Icon name="Home" size={16} className="mr-2" />
              На главную
            </Button>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <FadeIn delay={0}>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Icon name="Moon" className="text-accent animate-pulse" size={56} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-accent via-mystic-violet to-mystic-deep bg-clip-text text-transparent" 
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Сонник
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Узнайте значение ваших снов с помощью древних знаний и мистической мудрости
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-mystic-purple/10 via-card/90 to-mystic-violet/10 border-accent/30">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <Icon name="Sparkles" className="text-accent" size={24} />
                <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Расскажите свой сон
                </h2>
              </div>
              <p className="text-muted-foreground">
                Опишите детали вашего сновидения, и мы поможем раскрыть его тайный смысл
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <Textarea 
                placeholder="Например: Мне приснилось, что я иду по лесу и вижу яркий свет между деревьями..."
                className="min-h-[200px] text-lg bg-background/50 border-border focus:border-accent resize-none"
                value={dreamText}
                onChange={(e) => setDreamText(e.target.value)}
              />
              
              <Button 
                onClick={analyzeDream}
                disabled={!dreamText.trim() || isAnalyzing}
                className="w-full py-6 text-lg bg-accent hover:bg-accent/90 text-accent-foreground"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                    Анализируем сон...
                  </>
                ) : (
                  <>
                    <Icon name="Sparkles" size={20} className="mr-2" />
                    Узнать толкование
                  </>
                )}
              </Button>

              {interpretation && (
                <FadeIn delay={0}>
                  <Card className="bg-gradient-to-br from-accent/10 to-mystic-violet/10 border-accent/50">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-3 mb-4">
                        <Icon name="BookOpen" className="text-accent mt-1" size={24} />
                        <h3 className="text-xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                          Толкование сна
                        </h3>
                      </div>
                      <p className="text-lg leading-relaxed whitespace-pre-line">
                        {interpretation}
                      </p>
                      <div className="mt-6 pt-6 border-t border-border/50">
                        <p className="text-sm text-muted-foreground italic">
                          💫 Помните: сны индивидуальны, и их толкование зависит от вашего личного опыта и жизненной ситуации
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              )}
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-mystic-deep/20 to-mystic-purple/20 border-accent/30">
              <CardContent className="p-8">
                <Icon name="Star" className="text-accent mx-auto mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Хотите глубокое толкование?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Наши профессиональные толкователи снов помогут вам понять скрытый смысл любого сновидения
                </p>
                <Link to="/">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Icon name="Users" size={20} className="mr-2" />
                    Консультация специалиста
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </div>

      <Footer />
      <MobileNav />
    </div>
  );
}
