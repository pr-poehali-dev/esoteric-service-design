import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import EditOrderMessageModal from '@/components/EditOrderMessageModal';
import NotificationCenter from '@/components/notifications/NotificationCenter';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface OrderDetail {
  id: number;
  serviceId: number;
  serviceName: string;
  serviceImage: string;
  authorName: string;
  authorAvatar: string;
  status: 'pending' | 'needs_clarification' | 'in_progress' | 'completed' | 'cancelled';
  message: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  authorMessage?: string;
  resultFiles?: Array<{ name: string; url: string; type: string }>;
  resultText?: string;
}

const statusConfig = {
  pending: { label: 'Новый заказ', color: 'bg-blue-100 text-blue-800', icon: 'Clock' },
  needs_clarification: { label: 'Требуется уточнение', color: 'bg-orange-100 text-orange-800', icon: 'MessageCircle' },
  in_progress: { label: 'В работе', color: 'bg-yellow-100 text-yellow-800', icon: 'Loader' },
  completed: { label: 'Выполнен', color: 'bg-green-100 text-green-800', icon: 'CheckCircle2' },
  cancelled: { label: 'Отменён', color: 'bg-gray-100 text-gray-800', icon: 'XCircle' },
};

export default function OrderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState<OrderDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    // Mock data - replace with API call
    setTimeout(() => {
      const mockOrder: OrderDetail = {
        id: parseInt(id || '1'),
        serviceId: 1,
        serviceName: 'Дизайн логотипа',
        serviceImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400',
        authorName: 'Анна Иванова',
        authorAvatar: 'https://i.pravatar.cc/150?img=1',
        status: parseInt(id || '1') === 4 ? 'needs_clarification' : parseInt(id || '1') === 5 ? 'completed' : 'in_progress',
        message: 'Мне нужен логотип для кофейни. Стиль минималистичный, цвета - коричневый и бежевый. Название кофейни "Sunrise Coffee".',
        price: 5000,
        createdAt: '2024-01-15T10:30:00',
        updatedAt: '2024-01-16T14:20:00',
        authorMessage: parseInt(id || '1') === 4 
          ? 'Уточните, пожалуйста, какой формат файла вам нужен и где будет использоваться логотип?' 
          : parseInt(id || '1') === 5 
          ? 'Логотип готов! Создал 3 варианта в разных форматах. Все файлы в архиве.'
          : undefined,
        resultFiles: parseInt(id || '1') === 5 ? [
          { name: 'logo_v1.svg', url: '#', type: 'image/svg+xml' },
          { name: 'logo_v2.png', url: '#', type: 'image/png' },
          { name: 'logo_v3.ai', url: '#', type: 'application/postscript' },
          { name: 'brand_guide.pdf', url: '#', type: 'application/pdf' },
        ] : undefined,
        resultText: parseInt(id || '1') === 5 
          ? 'Разработал 3 варианта логотипа в минималистичном стиле. Основная концепция - восходящее солнце над чашкой кофе. Использованы запрошенные цвета и современная типографика.'
          : undefined,
      };
      setOrder(mockOrder);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleEditMessage = () => {
    setEditModalOpen(true);
  };

  const handleSaveMessage = (newMessage: string) => {
    if (order) {
      setOrder({ ...order, message: newMessage, updatedAt: new Date().toISOString() });
    }
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return 'Image';
    if (type === 'application/pdf') return 'FileText';
    if (type.includes('zip') || type.includes('archive')) return 'Archive';
    return 'File';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center">
        <Icon name="Loader" size={48} className="animate-spin text-primary" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://cdn.poehali.dev/projects/c12b3f43-75dd-4704-be69-05b102369318/files/94bb61a2-8a70-485d-ad4a-3d8ae17e25bb.jpg" alt="Мистический мир" className="w-10 h-10 object-contain" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-accent via-mystic-violet to-accent bg-clip-text text-transparent" style={{ fontFamily: 'Playfair Display, serif' }}>
                Мистический мир
              </h1>
            </Link>
            <div className="flex items-center space-x-2">
              <NotificationCenter />
              <Link to="/profile">
                <Button variant="ghost" size="sm">
                  <Icon name="User" size={16} className="md:mr-2" />
                  <span className="hidden md:inline">Профиль</span>
                </Button>
              </Link>
            </div>
          </div>
        </nav>
        <div className="container mx-auto px-4 py-8 text-center">
          <Icon name="AlertCircle" size={64} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Заказ не найден</h2>
          <Button onClick={() => navigate('/orders')}>Вернуться к заказам</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const status = statusConfig[order.status];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 pb-24 md:pb-8">
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://cdn.poehali.dev/projects/c12b3f43-75dd-4704-be69-05b102369318/files/94bb61a2-8a70-485d-ad4a-3d8ae17e25bb.jpg" alt="Мистический мир" className="w-10 h-10 object-contain" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-accent via-mystic-violet to-accent bg-clip-text text-transparent" style={{ fontFamily: 'Playfair Display, serif' }}>
              Мистический мир
            </h1>
          </Link>
          <div className="flex items-center space-x-2">
            <NotificationCenter />
            <Link to="/profile">
              <Button variant="ghost" size="sm">
                <Icon name="User" size={16} className="md:mr-2" />
                <span className="hidden md:inline">Профиль</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/orders')}
          className="mb-4"
        >
          <Icon name="ArrowLeft" size={16} className="mr-2" />
          Назад к заказам
        </Button>

        {/* Order Header */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold mb-2">Заказ #{order.id}</h1>
                <Badge className={`${status.color} flex items-center gap-1 w-fit`}>
                  <Icon name={status.icon as any} size={14} />
                  {status.label}
                </Badge>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">{order.price} ₽</div>
                <div className="text-sm text-muted-foreground">
                  Создан: {new Date(order.createdAt).toLocaleDateString('ru-RU')}
                </div>
              </div>
            </div>

            {/* Service & Author Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-secondary/20 rounded-lg">
                <img 
                  src={order.serviceImage} 
                  alt={order.serviceName}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Услуга</div>
                  <div className="font-semibold">{order.serviceName}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-secondary/20 rounded-lg">
                <img 
                  src={order.authorAvatar} 
                  alt={order.authorName}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Автор</div>
                  <div className="font-semibold">{order.authorName}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Message */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Icon name="MessageSquare" size={20} />
                Ваше сообщение
              </h2>
              {(order.status === 'pending' || order.status === 'needs_clarification') && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleEditMessage}
                >
                  <Icon name="Edit" size={16} className="mr-2" />
                  Редактировать
                </Button>
              )}
            </div>
            <p className="text-muted-foreground whitespace-pre-wrap">{order.message}</p>
            <div className="text-xs text-muted-foreground mt-2">
              Обновлено: {new Date(order.updatedAt).toLocaleString('ru-RU')}
            </div>
          </CardContent>
        </Card>

        {/* Author Message */}
        {order.authorMessage && (
          <Card className="mb-6 border-orange-200 bg-orange-50/50">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <Icon name="MessageCircle" size={20} className="text-orange-600" />
                Сообщение от автора
              </h2>
              <p className="text-muted-foreground whitespace-pre-wrap">{order.authorMessage}</p>
            </CardContent>
          </Card>
        )}

        {/* Result Section (for completed orders) */}
        {order.status === 'completed' && (
          <Card className="border-green-200 bg-green-50/50">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <Icon name="CheckCircle2" size={20} className="text-green-600" />
                Результат работы
              </h2>

              {order.resultText && (
                <>
                  <p className="text-muted-foreground whitespace-pre-wrap mb-4">{order.resultText}</p>
                  <Separator className="my-4" />
                </>
              )}

              {order.resultFiles && order.resultFiles.length > 0 && (
                <div>
                  <h3 className="font-medium mb-3 flex items-center gap-2">
                    <Icon name="Paperclip" size={18} />
                    Файлы ({order.resultFiles.length})
                  </h3>
                  <div className="grid gap-2">
                    {order.resultFiles.map((file, index) => (
                      <a
                        key={index}
                        href={file.url}
                        download
                        className="flex items-center gap-3 p-3 bg-white rounded-lg border hover:border-green-300 transition-colors"
                      >
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <Icon name={getFileIcon(file.type) as any} size={20} className="text-green-600" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{file.name}</div>
                          <div className="text-xs text-muted-foreground">{file.type}</div>
                        </div>
                        <Icon name="Download" size={20} className="text-green-600" />
                      </a>
                    ))}
                  </div>
                  <Button className="w-full mt-4" variant="default">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать все файлы
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Actions */}
        {order.status === 'completed' && (
          <div className="flex gap-3 mt-6">
            <Button variant="outline" className="flex-1">
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Связаться с автором
            </Button>
            <Button variant="outline" className="flex-1">
              <Icon name="Star" size={16} className="mr-2" />
              Оставить отзыв
            </Button>
          </div>
        )}

        {(order.status === 'pending' || order.status === 'in_progress') && (
          <div className="flex gap-3 mt-6">
            <Button variant="outline" className="flex-1">
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Написать автору
            </Button>
            <Button variant="outline" className="flex-1 text-red-600 border-red-600 hover:bg-red-50">
              <Icon name="XCircle" size={16} className="mr-2" />
              Отменить заказ
            </Button>
          </div>
        )}
      </div>

      <Footer />
      <MobileNav />

      <EditOrderMessageModal
        open={editModalOpen}
        onOpenChange={setEditModalOpen}
        orderId={order.id.toString()}
        currentMessage={order.message}
        onSave={handleSaveMessage}
      />
    </div>
  );
}