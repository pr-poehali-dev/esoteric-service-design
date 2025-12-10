import { useState } from 'react';
import { Card } from '@/components/ui/card';
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

interface ChatMessagesProps {
  messages: Message[];
}

export default function ChatMessages({ messages }: ChatMessagesProps) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <>
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4 max-w-4xl mx-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'client' ? 'justify-end' : 'justify-start'}`}
            >
              <Card
                className={`max-w-[70%] p-4 ${
                  message.sender === 'client'
                    ? 'bg-accent/20 border-accent/30'
                    : 'bg-card'
                } ${message.isNew ? 'animate-pulse' : ''}`}
              >
                <p className="text-sm whitespace-pre-wrap break-words">{message.text}</p>

                {message.attachments && message.attachments.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {message.attachments.map((attachment, index) => (
                      <div key={index}>
                        {attachment.type === 'image' ? (
                          <img
                            src={attachment.url}
                            alt={attachment.name}
                            className="rounded-lg max-w-full cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => setPreviewImage(attachment.url)}
                          />
                        ) : (
                          <div className="flex items-center space-x-2 p-2 bg-muted/20 rounded-lg">
                            <Icon name="File" size={20} className="text-accent" />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">{attachment.name}</p>
                              <p className="text-xs text-muted-foreground">{attachment.size}</p>
                            </div>
                            <Icon name="Download" size={16} className="text-muted-foreground cursor-pointer" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                  {message.sender === 'client' && (
                    <Icon
                      name={message.isRead ? "CheckCheck" : "Check"}
                      size={16}
                      className={message.isRead ? "text-accent" : "text-muted-foreground"}
                    />
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </ScrollArea>

      <Dialog open={!!previewImage} onOpenChange={() => setPreviewImage(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Просмотр изображения</DialogTitle>
          </DialogHeader>
          {previewImage && (
            <img src={previewImage} alt="Preview" className="w-full rounded-lg" />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
