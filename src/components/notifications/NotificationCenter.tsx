import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

interface OrderNotification {
  id: number;
  type: 'order';
  orderId: number;
  serviceName: string;
  status: 'new' | 'in_progress' | 'completed';
  message: string;
  time: string;
  isRead: boolean;
}

interface ChatNotification {
  id: number;
  type: 'chat';
  chatId: number;
  senderName: string;
  senderAvatar: string;
  message: string;
  time: string;
  isRead: boolean;
}

type Notification = OrderNotification | ChatNotification;

export default function NotificationCenter() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'order',
      orderId: 3,
      serviceName: 'Натальная карта + консультация',
      status: 'in_progress',
      message: 'Заказ взят в работу',
      time: '2 часа назад',
      isRead: false
    },
    {
      id: 2,
      type: 'chat',
      chatId: 1,
      senderName: 'Мария Звездная',
      senderAvatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      message: 'Здравствуйте! Я начала работу над вашей натальной картой...',
      time: '3 часа назад',
      isRead: false
    },
    {
      id: 3,
      type: 'order',
      orderId: 2,
      serviceName: 'Натальная карта + консультация',
      status: 'completed',
      message: 'Заказ выполнен! Файлы доступны для скачивания',
      time: '1 день назад',
      isRead: true
    },
    {
      id: 4,
      type: 'chat',
      chatId: 2,
      senderName: 'Анна Волкова',
      senderAvatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      message: 'Спасибо за заказ! Приступаю к работе',
      time: '2 дня назад',
      isRead: true
    },
    {
      id: 5,
      type: 'order',
      orderId: 1,
      serviceName: 'Прогноз совместимости партнеров',
      status: 'completed',
      message: 'Заказ выполнен! Файлы доступны для скачивания',
      time: '3 дня назад',
      isRead: true
    }
  ]);

  const orderNotifications = notifications.filter(n => n.type === 'order') as OrderNotification[];
  const chatNotifications = notifications.filter(n => n.type === 'chat') as ChatNotification[];
  
  const unreadCount = notifications.filter(n => !n.isRead).length;

  const getOrderStatusIcon = (status: string) => {
    switch (status) {
      case 'new':
        return 'ShoppingBag';
      case 'in_progress':
        return 'Clock';
      case 'completed':
        return 'CheckCircle';
      default:
        return 'Package';
    }
  };

  const getOrderStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'text-blue-400';
      case 'in_progress':
        return 'text-yellow-400';
      case 'completed':
        return 'text-green-400';
      default:
        return 'text-muted-foreground';
    }
  };

  const handleNotificationClick = (notification: Notification) => {
    // Отметить как прочитанное
    setNotifications(prev =>
      prev.map(n => n.id === notification.id ? { ...n, isRead: true } : n)
    );

    // Перейти к соответствующей странице
    if (notification.type === 'order') {
      navigate(`/service/${notification.orderId}`);
    } else {
      navigate(`/chat/${notification.chatId}`);
    }
    
    setOpen(false);
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Icon name="Bell" size={20} />
          {unreadCount > 0 && (
            <Badge 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent text-accent-foreground text-xs"
            >
              {unreadCount > 9 ? '9+' : unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-0" align="end">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="font-semibold text-lg">Уведомления</h3>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={markAllAsRead}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Отметить все
            </Button>
          )}
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full grid grid-cols-3 rounded-none border-b border-border bg-transparent h-auto p-0">
            <TabsTrigger 
              value="all" 
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-accent"
            >
              Все ({notifications.length})
            </TabsTrigger>
            <TabsTrigger 
              value="orders"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-accent"
            >
              Заказы ({orderNotifications.length})
            </TabsTrigger>
            <TabsTrigger 
              value="chats"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-accent"
            >
              Чаты ({chatNotifications.length})
            </TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[400px]">
            <TabsContent value="all" className="m-0">
              {notifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Icon name="Bell" size={48} className="text-muted-foreground mb-3" />
                  <p className="text-muted-foreground">Нет уведомлений</p>
                </div>
              ) : (
                <div className="divide-y divide-border">
                  {notifications.map(notification => (
                    <button
                      key={notification.id}
                      onClick={() => handleNotificationClick(notification)}
                      className={`w-full p-4 text-left hover:bg-accent/5 transition-colors ${
                        !notification.isRead ? 'bg-accent/10' : ''
                      }`}
                    >
                      {notification.type === 'order' ? (
                        <div className="flex gap-3">
                          <div className={`flex-shrink-0 ${getOrderStatusColor(notification.status)}`}>
                            <Icon name={getOrderStatusIcon(notification.status)} size={20} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm mb-1">{notification.serviceName}</p>
                            <p className="text-sm text-muted-foreground mb-1">{notification.message}</p>
                            <p className="text-xs text-muted-foreground">{notification.time}</p>
                          </div>
                          {!notification.isRead && (
                            <div className="flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-accent" />
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="flex gap-3">
                          <img
                            src={notification.senderAvatar}
                            alt={notification.senderName}
                            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm mb-1">{notification.senderName}</p>
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-1">
                              {notification.message}
                            </p>
                            <p className="text-xs text-muted-foreground">{notification.time}</p>
                          </div>
                          {!notification.isRead && (
                            <div className="flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-accent" />
                            </div>
                          )}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="orders" className="m-0">
              {orderNotifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Icon name="Package" size={48} className="text-muted-foreground mb-3" />
                  <p className="text-muted-foreground">Нет уведомлений о заказах</p>
                </div>
              ) : (
                <div className="divide-y divide-border">
                  {orderNotifications.map(notification => (
                    <button
                      key={notification.id}
                      onClick={() => handleNotificationClick(notification)}
                      className={`w-full p-4 text-left hover:bg-accent/5 transition-colors ${
                        !notification.isRead ? 'bg-accent/10' : ''
                      }`}
                    >
                      <div className="flex gap-3">
                        <div className={`flex-shrink-0 ${getOrderStatusColor(notification.status)}`}>
                          <Icon name={getOrderStatusIcon(notification.status)} size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm mb-1">{notification.serviceName}</p>
                          <p className="text-sm text-muted-foreground mb-1">{notification.message}</p>
                          <p className="text-xs text-muted-foreground">{notification.time}</p>
                        </div>
                        {!notification.isRead && (
                          <div className="flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="chats" className="m-0">
              {chatNotifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Icon name="MessageSquare" size={48} className="text-muted-foreground mb-3" />
                  <p className="text-muted-foreground">Нет сообщений</p>
                </div>
              ) : (
                <div className="divide-y divide-border">
                  {chatNotifications.map(notification => (
                    <button
                      key={notification.id}
                      onClick={() => handleNotificationClick(notification)}
                      className={`w-full p-4 text-left hover:bg-accent/5 transition-colors ${
                        !notification.isRead ? 'bg-accent/10' : ''
                      }`}
                    >
                      <div className="flex gap-3">
                        <img
                          src={notification.senderAvatar}
                          alt={notification.senderName}
                          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm mb-1">{notification.senderName}</p>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-muted-foreground">{notification.time}</p>
                        </div>
                        {!notification.isRead && (
                          <div className="flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
}
