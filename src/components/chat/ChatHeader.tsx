import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface ChatHeaderProps {
  author: {
    name: string;
    avatar: string;
    isOnline: boolean;
  };
  serviceName: string;
}

export default function ChatHeader({ author, serviceName }: ChatHeaderProps) {
  return (
    <div className="p-4 border-b border-border bg-card/50 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Avatar className="w-10 h-10">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name[0]}</AvatarFallback>
          </Avatar>
          {author.isOnline && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-card rounded-full"></span>
          )}
        </div>
        <div>
          <h3 className="font-semibold">{author.name}</h3>
          <p className="text-xs text-muted-foreground">{serviceName}</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm">
          <Icon name="Phone" size={16} />
        </Button>
        <Button variant="ghost" size="sm">
          <Icon name="Video" size={16} />
        </Button>
        <Link to="/services">
          <Button variant="ghost" size="sm">
            <Icon name="ShoppingBag" size={16} />
          </Button>
        </Link>
      </div>
    </div>
  );
}
