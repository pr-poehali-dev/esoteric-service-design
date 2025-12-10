import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface Attachment {
  type: 'image' | 'file';
  url: string;
  name: string;
  size?: string;
}

interface ChatInputProps {
  messageText: string;
  setMessageText: (text: string) => void;
  attachments: Attachment[];
  onFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveAttachment: (index: number) => void;
  onSendMessage: () => void;
}

export default function ChatInput({
  messageText,
  setMessageText,
  attachments,
  onFileSelect,
  onRemoveAttachment,
  onSendMessage
}: ChatInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSendMessage();
    }
  };

  return (
    <div className="p-4 border-t border-border bg-card/50">
      {attachments.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {attachments.map((attachment, index) => (
            <div key={index} className="relative group">
              {attachment.type === 'image' ? (
                <div className="relative">
                  <img
                    src={attachment.url}
                    alt={attachment.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => onRemoveAttachment(index)}
                    className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Icon name="X" size={14} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2 p-2 bg-muted/20 rounded-lg group-hover:bg-muted/30 transition-colors">
                  <Icon name="File" size={16} className="text-accent" />
                  <div className="flex-1 min-w-0 max-w-[120px]">
                    <p className="text-xs font-medium truncate">{attachment.name}</p>
                    <p className="text-xs text-muted-foreground">{attachment.size}</p>
                  </div>
                  <button
                    onClick={() => onRemoveAttachment(index)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Icon name="X" size={14} className="text-destructive" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="flex items-end space-x-2">
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={onFileSelect}
          accept="image/*,.pdf,.doc,.docx,.txt"
        />
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => fileInputRef.current?.click()}
          className="shrink-0"
        >
          <Icon name="Paperclip" size={20} />
        </Button>

        <Input
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Напишите сообщение..."
          className="flex-1 bg-input border-border"
        />

        <Button
          onClick={onSendMessage}
          disabled={!messageText.trim() && attachments.length === 0}
          className="shrink-0 bg-accent text-accent-foreground hover:bg-accent/90"
        >
          <Icon name="Send" size={20} />
        </Button>
      </div>

      <p className="text-xs text-muted-foreground mt-2">
        Нажмите Enter для отправки, Shift+Enter для новой строки
      </p>
    </div>
  );
}
