import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import NotificationCenter from '@/components/notifications/NotificationCenter';
import ChatSidebar from '@/components/chat/ChatSidebar';
import ChatHeader from '@/components/chat/ChatHeader';
import ChatMessages from '@/components/chat/ChatMessages';
import ChatInput from '@/components/chat/ChatInput';

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
            <img src="https://cdn.poehali.dev/projects/c12b3f43-75dd-4704-be69-05b102369318/files/94bb61a2-8a70-485d-ad4a-3d8ae17e25bb.jpg" alt="Мистический мир" className="w-10 h-10 object-contain" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-accent via-mystic-violet to-accent bg-clip-text text-transparent animate-gradient" style={{ fontFamily: 'Playfair Display, serif' }}>
              Мистический мир
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
            <NotificationCenter />
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
        <ChatSidebar
          chats={chats}
          selectedChatId={selectedChatId}
          onSelectChat={setSelectedChatId}
        />

        <div className="flex-1 flex flex-col">
          {selectedChat && (
            <>
              <ChatHeader
                author={selectedChat.author}
                serviceName={selectedChat.serviceName}
              />
              <ChatMessages messages={currentMessages} />
              <ChatInput
                messageText={messageText}
                setMessageText={setMessageText}
                attachments={attachments}
                onFileSelect={handleFileSelect}
                onRemoveAttachment={handleRemoveAttachment}
                onSendMessage={handleSendMessage}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}