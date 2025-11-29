import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface OrderFile {
  id: number;
  name: string;
  size: string;
  url: string;
}

interface Order {
  id: number;
  date: string;
  status: 'new' | 'in_progress' | 'completed';
  completedDate?: string;
  files?: OrderFile[];
}

interface ServiceOrdersProps {
  orders: Order[];
}

export default function ServiceOrders({ orders }: ServiceOrdersProps) {
  const [selectedFiles, setSelectedFiles] = useState<OrderFile[]>([]);
  const [showFilesDialog, setShowFilesDialog] = useState(false);

  const getStatusText = (status: string) => {
    switch (status) {
      case 'new':
        return 'Новый';
      case 'in_progress':
        return 'В работе';
      case 'completed':
        return 'Выполнен';
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'in_progress':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const getProgressValue = (status: string) => {
    switch (status) {
      case 'new':
        return 20;
      case 'in_progress':
        return 60;
      case 'completed':
        return 100;
      default:
        return 0;
    }
  };

  const handleShowFiles = (files: OrderFile[]) => {
    setSelectedFiles(files);
    setShowFilesDialog(true);
  };

  const handleDownloadFile = (url: string, name: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (orders.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
        Мои заказы
      </h2>
      
      <div className="space-y-4">
        {orders.map((order) => (
          <Card key={order.id} className="bg-card/50 border-border">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Calendar" size={18} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Создан: {order.date}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Badge 
                      variant="outline" 
                      className={`${getStatusColor(order.status)} border`}
                    >
                      {getStatusText(order.status)}
                    </Badge>
                    <div className="flex-1 max-w-xs">
                      <Progress 
                        value={getProgressValue(order.status)} 
                        className="h-2"
                      />
                    </div>
                  </div>

                  {order.status === 'completed' && order.completedDate && (
                    <div className="flex items-center gap-3">
                      <Icon name="CheckCircle" size={18} className="text-green-400" />
                      <span className="text-sm text-green-400">
                        Выполнен: {order.completedDate}
                      </span>
                    </div>
                  )}
                </div>

                {order.status === 'completed' && order.files && order.files.length > 0 && (
                  <Dialog open={showFilesDialog} onOpenChange={setShowFilesDialog}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        onClick={() => handleShowFiles(order.files!)}
                        className="border-accent text-accent hover:bg-accent/10"
                      >
                        <Icon name="FileText" size={18} className="mr-2" />
                        Файлы ({order.files.length})
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Приложенные файлы</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-3 py-4">
                        {selectedFiles.map((file) => (
                          <div
                            key={file.id}
                            className="flex items-center justify-between p-3 rounded-lg bg-card/50 border border-border hover:border-accent/50 transition-colors"
                          >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <Icon name="File" size={20} className="text-accent flex-shrink-0" />
                              <div className="min-w-0">
                                <p className="font-medium truncate">{file.name}</p>
                                <p className="text-xs text-muted-foreground">{file.size}</p>
                              </div>
                            </div>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleDownloadFile(file.url, file.name)}
                              className="flex-shrink-0"
                            >
                              <Icon name="Download" size={16} />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
