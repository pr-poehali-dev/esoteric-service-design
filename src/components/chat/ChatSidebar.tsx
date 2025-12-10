import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

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

interface ChatSidebarProps {
  chats: Chat[];
  selectedChatId: number;
  onSelectChat: (chatId: number) => void;
}

export default function ChatSidebar({ chats, selectedChatId, onSelectChat }: ChatSidebarProps) {
  return (
    <div className="w-full md:w-96 border-r border-border bg-card/50 flex flex-col">
      <div className="p-4 border-b border-border">
        <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
          Мои чаты
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          {chats.filter(c => c.unreadCount > 0).length} непрочитанных
        </p>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2 space-y-2">
          {chats.map((chat) => (
            <Card
              key={chat.id}
              className={`p-4 cursor-pointer transition-all hover:bg-card ${
                selectedChatId === chat.id ? 'bg-card border-accent' : 'bg-card/50'
              }`}
              onClick={() => onSelectChat(chat.id)}
            >
              <div className="flex items-start space-x-3">
                <div className="relative">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={chat.author.avatar} alt={chat.author.name} />
                    <AvatarFallback>{chat.author.name[0]}</AvatarFallback>
                  </Avatar>
                  {chat.author.isOnline && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-card rounded-full"></span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold text-sm truncate">{chat.serviceName}</h3>
                    {chat.unreadCount > 0 && (
                      <Badge variant="default" className="ml-2 bg-accent text-accent-foreground">
                        {chat.unreadCount}
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{chat.author.name}</p>
                  <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                  <p className="text-xs text-muted-foreground mt-1">{chat.lastMessageTime}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
