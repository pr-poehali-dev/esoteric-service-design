import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Attachment {
  type: 'image' | 'file';
  url: string;
  name: string;
  size?: string;
}

interface Message {
  id: number;
  text: string;
  sender: 'client' | 'author';
  timestamp: string;
  isRead: boolean;
  isNew: boolean;
  attachments?: Attachment[];
}

interface Chat {
  id: number;
  serviceName: string;
  author: {
    name: string;
    avatar: string;
    isOnline: boolean;
  };
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
}

export default function Chat() {
  const [selectedChatId, setSelectedChatId] = useState(1);
  const [messageText, setMessageText] = useState('');
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const chats: Chat[] = [
    {
      id: 1,
      serviceName: 'Натальная карта + консультация',
      author: {
        name: 'Мария Звездная',
        avatar: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
        isOnline: true
      },
      lastMessage: 'Спасибо за информацию! Начинаю анализ вашей карты...',
      lastMessageTime: '14:23',
      unreadCount: 2
    },
    {
      id: 2,
      serviceName: 'Расклад Таро "Кельтский крест"',
      author: {
        name: 'Анна Волкова',
        avatar: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
        isOnline: false
      },
      lastMessage: 'Расклад готов, высылаю вам результаты',
      lastMessageTime: 'Вчера',
      unreadCount: 0
    },
    {
      id: 3,
      serviceName: 'Гадание на рунах "Один"',
      author: {
        name: 'Виктор Рунов',
        avatar: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
        isOnline: true
      },
      lastMessage: 'Руны указывают на позитивные изменения в вашей жизни',
      lastMessageTime: '2 дня назад',
      unreadCount: 0
    }
  ];

  const messages: Record<number, Message[]> = {
    1: [
      {
        id: 1,
        text: 'Добрый день! Я готов провести анализ вашей натальной карты. Пожалуйста, подтвердите дату, время и место вашего рождения.',
        sender: 'author',
        timestamp: '13:45',
        isRead: true,
        isNew: false
      },
      {
        id: 2,
        text: 'Здравствуйте! Да, всё верно: 15 марта 1990 года, 08:30, Москва',
        sender: 'client',
        timestamp: '13:52',
        isRead: true,
        isNew: false
      },
      {
        id: 3,
        text: 'Отлично! Также мне нужно знать, есть ли у вас конкретные вопросы или области жизни, на которых вы хотите сосредоточиться?',
        sender: 'author',
        timestamp: '13:55',
        isRead: true,
        isNew: false
      },
      {
        id: 4,
        text: 'Меня интересует карьера и личные отношения',
        sender: 'client',
        timestamp: '14:10',
        isRead: true,
        isNew: false
      },
      {
        id: 5,
        text: 'Спасибо за информацию! Начинаю анализ вашей карты. Через 2-3 часа пришлю вам подробный разбор 🌟',
        sender: 'author',
        timestamp: '14:23',
        isRead: false,
        isNew: true
      },
      {
        id: 6,
        text: 'Также обращу особое внимание на транзиты планет в текущий период',
        sender: 'author',
        timestamp: '14:23',
        isRead: false,
        isNew: true
      },
      {
        id: 7,
        text: 'Вот моя натальная карта из другого источника для сравнения',
        sender: 'client',
        timestamp: '14:35',
        isRead: true,
        isNew: false,
        attachments: [
          {
            type: 'image',
            url: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
            name: 'natal-chart.jpg',
            size: '1.2 MB'
          }
        ]
      },
      {
        id: 8,
        text: 'Отлично! Это поможет мне в анализе',
        sender: 'author',
        timestamp: '14:40',
        isRead: true,
        isNew: false
      }
    ],
    2: [
      {
        id: 1,
        text: 'Добрый вечер! Я провела расклад на вашу ситуацию. Карты показали интересную картину...',
        sender: 'author',
        timestamp: 'Вчера 19:20',
        isRead: true,
        isNew: false
      },
      {
        id: 2,
        text: 'Расклад готов, высылаю вам результаты',
        sender: 'author',
        timestamp: 'Вчера 19:45',
        isRead: true,
        isNew: false
      }
    ],
    3: [
      {
        id: 1,
        text: 'Руны указывают на позитивные изменения в вашей жизни',
        sender: 'author',
        timestamp: '2 дня назад',
        isRead: true,
        isNew: false
      }
    ]
  };

  const selectedChat = chats.find(chat => chat.id === selectedChatId);
  const currentMessages = messages[selectedChatId] || [];

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newAttachments: Attachment[] = [];
    
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const url = e.target?.result as string;
        const isImage = file.type.startsWith('image/');
        
        newAttachments.push({
          type: isImage ? 'image' : 'file',
          url: url,
          name: file.name,
          size: (file.size / 1024 / 1024).toFixed(2) + ' MB'
        });

        if (newAttachments.length === files.length) {
          setAttachments(prev => [...prev, ...newAttachments]);
        }
      };
      reader.readAsDataURL(file);
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemoveAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const handleSendMessage = () => {
    if (messageText.trim() || attachments.length > 0) {
      console.log('Отправка сообщения:', messageText, 'Файлы:', attachments);
      setMessageText('');
      setAttachments([]);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Sparkles" className="text-accent" size={32} />
            <h1 className="text-2xl font-bold text-accent" style={{ fontFamily: 'Playfair Display, serif' }}>
              Мистерия
            </h1>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/services">
              <Button variant="ghost" size="sm">
                <Icon name="ShoppingBag" size={16} className="mr-2" />
                Услуги
              </Button>
            </Link>
            <Link to="/chat">
              <Button variant="ghost" size="sm" className="text-accent">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Чаты
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Профиль
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex overflow-hidden">
        <div className="w-full md:w-96 border-r border-border bg-card/30 flex flex-col">
          <div className="p-4 border-b border-border">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Мои чаты
            </h2>
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                placeholder="Поиск чатов..."
                className="pl-10 bg-background/50"
              />
            </div>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-2">
              {chats.map((chat) => (
                <Card
                  key={chat.id}
                  className={`mb-2 p-4 cursor-pointer transition-all duration-200 ${
                    selectedChatId === chat.id
                      ? 'bg-accent/10 border-accent/50'
                      : 'bg-card/50 border-border hover:bg-card hover:border-accent/30'
                  }`}
                  onClick={() => setSelectedChatId(chat.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <Avatar className="w-12 h-12 border-2 border-accent/30">
                        <AvatarImage src={chat.author.avatar} alt={chat.author.name} />
                        <AvatarFallback className="bg-accent/10 text-accent">
                          {chat.author.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      {chat.author.isOnline && (
                        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 border-2 border-background rounded-full" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <div className="flex-1 min-w-0 mr-2">
                          <h3 className="font-bold text-sm truncate">{chat.author.name}</h3>
                          <p className="text-xs text-muted-foreground truncate">{chat.serviceName}</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-xs text-muted-foreground whitespace-nowrap">{chat.lastMessageTime}</span>
                          {chat.unreadCount > 0 && (
                            <Badge className="bg-accent text-accent-foreground mt-1 h-5 min-w-[20px] flex items-center justify-center text-xs">
                              {chat.unreadCount}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-1">{chat.lastMessage}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="flex-1 flex flex-col">
          {selectedChat ? (
            <>
              <div className="p-4 border-b border-border bg-card/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="w-12 h-12 border-2 border-accent/30">
                        <AvatarImage src={selectedChat.author.avatar} alt={selectedChat.author.name} />
                        <AvatarFallback className="bg-accent/10 text-accent">
                          {selectedChat.author.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      {selectedChat.author.isOnline && (
                        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 border-2 border-background rounded-full" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{selectedChat.author.name}</h3>
                      <div className="flex items-center space-x-2">
                        <p className="text-sm text-muted-foreground">{selectedChat.serviceName}</p>
                        {selectedChat.author.isOnline ? (
                          <Badge variant="outline" className="text-xs bg-green-500/10 text-green-500 border-green-500/30">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-1" />
                            Онлайн
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-xs bg-muted/10 text-muted-foreground border-muted/30">
                            Не в сети
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Icon name="MoreVertical" size={20} />
                  </Button>
                </div>
              </div>

              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4 max-w-4xl mx-auto">
                  {currentMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'client' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-3 max-w-[70%] ${message.sender === 'client' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <Avatar className="w-10 h-10 border-2 border-accent/30 flex-shrink-0">
                          <AvatarImage 
                            src={message.sender === 'author' ? selectedChat.author.avatar : undefined} 
                            alt={message.sender === 'author' ? selectedChat.author.name : 'Вы'} 
                          />
                          <AvatarFallback className="bg-accent/10 text-accent">
                            {message.sender === 'author' 
                              ? selectedChat.author.name.split(' ').map(n => n[0]).join('')
                              : 'Я'
                            }
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          <div className={`flex items-center space-x-2 mb-1 ${message.sender === 'client' ? 'justify-end' : ''}`}>
                            <span className="text-xs font-semibold">
                              {message.sender === 'author' ? selectedChat.author.name : 'Вы'}
                            </span>
                            <Badge 
                              variant="outline" 
                              className={`text-[10px] h-4 ${
                                message.sender === 'author' 
                                  ? 'bg-purple-500/10 text-purple-400 border-purple-500/30' 
                                  : 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                              }`}
                            >
                              {message.sender === 'author' ? 'Автор' : 'Клиент'}
                            </Badge>
                            {message.isNew && (
                              <Badge className="bg-accent text-accent-foreground text-[10px] h-4">
                                Новое
                              </Badge>
                            )}
                          </div>

                          <Card 
                            className={`p-3 ${
                              message.sender === 'client'
                                ? 'bg-accent/20 border-accent/30'
                                : 'bg-card/50 border-border'
                            }`}
                          >
                            {message.text && <p className="text-sm mb-2">{message.text}</p>}
                            
                            {message.attachments && message.attachments.length > 0 && (
                              <div className="space-y-2 mt-2">
                                {message.attachments.map((attachment, index) => (
                                  <div key={index}>
                                    {attachment.type === 'image' ? (
                                      <div 
                                        className="relative rounded-lg overflow-hidden cursor-pointer group max-w-xs"
                                        onClick={() => setPreviewImage(attachment.url)}
                                      >
                                        <img 
                                          src={attachment.url} 
                                          alt={attachment.name}
                                          className="w-full h-auto rounded-lg"
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                          <Icon name="ZoomIn" className="text-white" size={32} />
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="flex items-center space-x-3 p-3 bg-background/50 rounded-lg border border-border">
                                        <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                          <Icon name="FileText" className="text-accent" size={20} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <p className="text-sm font-medium truncate">{attachment.name}</p>
                                          {attachment.size && (
                                            <p className="text-xs text-muted-foreground">{attachment.size}</p>
                                          )}
                                        </div>
                                        <Button variant="ghost" size="icon">
                                          <Icon name="Download" size={16} />
                                        </Button>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </Card>

                          <div className={`flex items-center space-x-2 mt-1 text-xs text-muted-foreground ${message.sender === 'client' ? 'justify-end' : ''}`}>
                            <span>{message.timestamp}</span>
                            {message.sender === 'client' && (
                              <div className="flex items-center">
                                {message.isRead ? (
                                  <>
                                    <Icon name="CheckCheck" className="text-accent" size={14} />
                                    <span className="ml-1 text-accent">Прочитано</span>
                                  </>
                                ) : (
                                  <>
                                    <Icon name="Check" className="text-muted-foreground" size={14} />
                                    <span className="ml-1">Доставлено</span>
                                  </>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="p-4 border-t border-border bg-card/30">
                {attachments.length > 0 && (
                  <div className="max-w-4xl mx-auto mb-3">
                    <div className="flex flex-wrap gap-2">
                      {attachments.map((attachment, index) => (
                        <div key={index} className="relative group">
                          {attachment.type === 'image' ? (
                            <div className="relative w-20 h-20 rounded-lg overflow-hidden border-2 border-accent/30">
                              <img 
                                src={attachment.url} 
                                alt={attachment.name}
                                className="w-full h-full object-cover"
                              />
                              <button
                                onClick={() => handleRemoveAttachment(index)}
                                className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Icon name="X" size={14} />
                              </button>
                            </div>
                          ) : (
                            <div className="flex items-center space-x-2 p-2 bg-card border border-border rounded-lg">
                              <Icon name="FileText" className="text-accent" size={16} />
                              <span className="text-xs font-medium max-w-[100px] truncate">{attachment.name}</span>
                              <button
                                onClick={() => handleRemoveAttachment(index)}
                                className="w-5 h-5 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center"
                              >
                                <Icon name="X" size={12} />
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex items-end space-x-2 max-w-4xl mx-auto">
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*,.pdf,.doc,.docx,.txt"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="flex-shrink-0"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Icon name="Paperclip" size={20} />
                  </Button>
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Введите сообщение..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="pr-10 bg-background/50"
                    />
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="absolute right-1 top-1/2 -translate-y-1/2"
                    >
                      <Icon name="Smile" size={20} />
                    </Button>
                  </div>
                  <Button 
                    onClick={handleSendMessage}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground flex-shrink-0"
                    disabled={!messageText.trim() && attachments.length === 0}
                  >
                    <Icon name="Send" size={20} />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-center p-8">
              <div>
                <Icon name="MessageCircle" className="text-muted-foreground mx-auto mb-4" size={64} />
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Выберите чат
                </h3>
                <p className="text-muted-foreground">
                  Выберите чат из списка слева, чтобы начать общение
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Dialog open={!!previewImage} onOpenChange={() => setPreviewImage(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Просмотр изображения</DialogTitle>
          </DialogHeader>
          {previewImage && (
            <div className="relative">
              <img 
                src={previewImage} 
                alt="Preview"
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}