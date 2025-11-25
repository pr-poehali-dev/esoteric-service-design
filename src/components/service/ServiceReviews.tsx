import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

interface ServiceReviewsProps {
  reviews: Review[];
  serviceRating: number;
  serviceReviewsCount: number;
}

export default function ServiceReviews({ reviews, serviceRating, serviceReviewsCount }: ServiceReviewsProps) {
  const navigate = useNavigate();
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [showReviewDialog, setShowReviewDialog] = useState(false);

  const handleSubmitReview = () => {
    if (reviewRating > 0 && reviewText.trim()) {
      console.log('Отправка отзыва:', { rating: reviewRating, text: reviewText });
      setReviewRating(0);
      setReviewText('');
      setShowReviewDialog(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Отзывы клиентов
          </h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Icon name="Star" className="text-accent fill-accent" size={20} />
              <span className="text-xl font-bold text-accent ml-2">{serviceRating}</span>
            </div>
            <span className="text-muted-foreground">на основе {serviceReviewsCount} отзывов</span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            onClick={() => navigate('/reviews')}
            className="border-accent text-accent hover:bg-accent/10"
          >
            Все отзывы
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
          <Dialog open={showReviewDialog} onOpenChange={setShowReviewDialog}>
            <DialogTrigger asChild>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Icon name="Plus" size={18} className="mr-2" />
                Оставить отзыв
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Написать отзыв</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Ваша оценка</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setReviewRating(star)}
                      className="transition-transform hover:scale-110"
                    >
                      <Icon
                        name="Star"
                        size={32}
                        className={`${
                          star <= reviewRating
                            ? 'text-accent fill-accent'
                            : 'text-muted-foreground'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Ваш отзыв</label>
                <Textarea
                  placeholder="Расскажите о вашем опыте использования услуги..."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  rows={6}
                  className="resize-none"
                />
              </div>
              <Button
                onClick={handleSubmitReview}
                disabled={reviewRating === 0 || !reviewText.trim()}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Отправить отзыв
              </Button>
            </div>
          </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <Card key={review.id} className="bg-card/50 border-border">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12 border-2 border-accent/30">
                    <AvatarImage src={review.avatar} alt={review.author} />
                    <AvatarFallback className="bg-accent/10 text-accent">
                      {review.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold">{review.author}</h4>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
                <div className="flex">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Icon key={i} name="Star" className="text-accent fill-accent" size={16} />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {review.text}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}