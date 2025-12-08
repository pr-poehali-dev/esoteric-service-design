import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';

type OrderStatus = 'pending' | 'in_progress' | 'completed' | 'cancelled';

interface Order {
  id: number;
  serviceId: number;
  serviceName: string;
  serviceImage: string;
  status: OrderStatus;
  price: number;
  orderDate: string;
  completedDate?: string;
  attachedFiles?: Array<{
    name: string;
    url: string;
    type: 'image' | 'document' | 'archive';
  }>;
}

const mockOrders: Order[] = [
  {
    id: 1,
    serviceId: 1,
    serviceName: 'Персональный гороскоп',
    serviceImage: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=500',
    status: 'completed',
    price: 2999,
    orderDate: '2024-11-15',
    completedDate: '2024-11-20',
    attachedFiles: [
      { name: 'Гороскоп_2024.pdf', url: '#', type: 'document' },
      { name: 'Натальная_карта.png', url: '#', type: 'image' }
    ]
  },
  {
    id: 2,
    serviceId: 2,
    serviceName: 'Таро-расклад на любовь',
    serviceImage: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=500',
    status: 'in_progress',
    price: 1500,
    orderDate: '2024-12-01',
  },
  {
    id: 3,
    serviceId: 3,
    serviceName: 'Нумерологический анализ',
    serviceImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500',
    status: 'pending',
    price: 2000,
    orderDate: '2024-12-05',
  },
  {
    id: 4,
    serviceId: 1,
    serviceName: 'Персональный гороскоп',
    serviceImage: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=500',
    status: 'completed',
    price: 2999,
    orderDate: '2024-10-10',
    completedDate: '2024-10-15',
    attachedFiles: [
      { name: 'Прогноз_октябрь.pdf', url: '#', type: 'document' }
    ]
  },
  {
    id: 5,
    serviceId: 4,
    serviceName: 'Руническая консультация',
    serviceImage: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=500',
    status: 'cancelled',
    price: 3500,
    orderDate: '2024-11-25',
  }
];

const statusConfig: Record<OrderStatus, { label: string; color: string; icon: string }> = {
  pending: { label: 'Ожидает', color: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20', icon: 'Clock' },
  in_progress: { label: 'В работе', color: 'bg-blue-500/10 text-blue-600 border-blue-500/20', icon: 'Loader' },
  completed: { label: 'Выполнен', color: 'bg-green-500/10 text-green-600 border-green-500/20', icon: 'CheckCircle' },
  cancelled: { label: 'Отменён', color: 'bg-red-500/10 text-red-600 border-red-500/20', icon: 'XCircle' }
};

const fileTypeIcons: Record<string, string> = {
  image: 'Image',
  document: 'FileText',
  archive: 'Archive'
};

export default function Orders() {
  const [orders] = useState<Order[]>(mockOrders);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [serviceFilter, setServiceFilter] = useState<string>('all');
  const [dateFrom, setDateFrom] = useState<string>('');
  const [dateTo, setDateTo] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Получаем уникальные услуги для фильтра
  const uniqueServices = Array.from(new Set(orders.map(o => o.serviceName)));

  // Фильтрация
  const filteredOrders = orders.filter(order => {
    const matchStatus = statusFilter === 'all' || order.status === statusFilter;
    const matchService = serviceFilter === 'all' || order.serviceName === serviceFilter;
    const matchDateFrom = !dateFrom || new Date(order.orderDate) >= new Date(dateFrom);
    const matchDateTo = !dateTo || new Date(order.orderDate) <= new Date(dateTo);
    
    return matchStatus && matchService && matchDateFrom && matchDateTo;
  });

  // Пагинация
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

  const resetFilters = () => {
    setStatusFilter('all');
    setServiceFilter('all');
    setDateFrom('');
    setDateTo('');
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 md:pb-0">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Sparkles" className="text-accent" size={28} />
            <span className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
              Мистика
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <Icon name="User" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Мои заказы
          </h1>
          <p className="text-muted-foreground">
            История и статус всех ваших заказов
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {/* Status Filter */}
              <div>
                <label className="text-sm font-medium mb-2 block">Статус</label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Все статусы" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все статусы</SelectItem>
                    <SelectItem value="pending">Ожидает</SelectItem>
                    <SelectItem value="in_progress">В работе</SelectItem>
                    <SelectItem value="completed">Выполнен</SelectItem>
                    <SelectItem value="cancelled">Отменён</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Service Filter */}
              <div>
                <label className="text-sm font-medium mb-2 block">Услуга</label>
                <Select value={serviceFilter} onValueChange={setServiceFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Все услуги" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все услуги</SelectItem>
                    {uniqueServices.map(service => (
                      <SelectItem key={service} value={service}>{service}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date From */}
              <div>
                <label className="text-sm font-medium mb-2 block">Дата от</label>
                <Input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                />
              </div>

              {/* Date To */}
              <div>
                <label className="text-sm font-medium mb-2 block">Дата до</label>
                <Input
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Найдено заказов: <span className="font-semibold">{filteredOrders.length}</span>
              </p>
              <Button variant="outline" size="sm" onClick={resetFilters}>
                <Icon name="RotateCcw" size={16} className="mr-2" />
                Сбросить фильтры
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Orders List */}
        <div className="space-y-4 mb-8">
          {paginatedOrders.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <Icon name="PackageOpen" size={64} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Заказы не найдены</h3>
                <p className="text-muted-foreground mb-6">
                  Попробуйте изменить параметры фильтрации
                </p>
                <Button onClick={resetFilters}>
                  Сбросить фильтры
                </Button>
              </CardContent>
            </Card>
          ) : (
            paginatedOrders.map(order => {
              const statusInfo = statusConfig[order.status];
              return (
                <Card key={order.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Service Image */}
                      <Link to={`/service/${order.serviceId}`} className="shrink-0">
                        <img
                          src={order.serviceImage}
                          alt={order.serviceName}
                          className="w-full md:w-32 h-32 object-cover rounded-lg hover:opacity-80 transition-opacity"
                        />
                      </Link>

                      {/* Order Info */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                          <div>
                            <Link 
                              to={`/service/${order.serviceId}`}
                              className="text-xl font-semibold hover:text-accent transition-colors mb-2 inline-block"
                            >
                              {order.serviceName}
                            </Link>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Icon name="Calendar" size={14} />
                                Заказ: {new Date(order.orderDate).toLocaleDateString('ru-RU')}
                              </span>
                              {order.completedDate && (
                                <span className="flex items-center gap-1">
                                  <Icon name="CheckCircle" size={14} />
                                  Выполнен: {new Date(order.completedDate).toLocaleDateString('ru-RU')}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col items-start md:items-end gap-2">
                            <Badge className={statusInfo.color} variant="outline">
                              <Icon name={statusInfo.icon as any} size={14} className="mr-1" />
                              {statusInfo.label}
                            </Badge>
                            <p className="text-xl font-bold">{order.price.toLocaleString('ru-RU')} ₽</p>
                          </div>
                        </div>

                        {/* Attached Files */}
                        {order.status === 'completed' && order.attachedFiles && order.attachedFiles.length > 0 && (
                          <div className="mt-4 p-4 bg-accent/5 rounded-lg border border-accent/20">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Icon name="Paperclip" size={16} />
                              Приложенные файлы
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {order.attachedFiles.map((file, idx) => (
                                <a
                                  key={idx}
                                  href={file.url}
                                  download
                                  className="flex items-center gap-3 p-3 bg-card rounded-lg hover:bg-accent/10 transition-colors group"
                                >
                                  <Icon 
                                    name={fileTypeIcons[file.type] as any} 
                                    size={20} 
                                    className="text-accent"
                                  />
                                  <span className="text-sm flex-1 group-hover:text-accent transition-colors">
                                    {file.name}
                                  </span>
                                  <Icon 
                                    name="Download" 
                                    size={16} 
                                    className="text-muted-foreground group-hover:text-accent transition-colors"
                                  />
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          <Link to={`/service/${order.serviceId}`}>
                            <Button variant="outline" size="sm">
                              <Icon name="Eye" size={16} className="mr-2" />
                              Подробнее об услуге
                            </Button>
                          </Link>
                          {order.status === 'completed' && (
                            <Link to="/chat">
                              <Button variant="outline" size="sm">
                                <Icon name="MessageCircle" size={16} className="mr-2" />
                                Связаться с автором
                              </Button>
                            </Link>
                          )}
                          {order.status === 'pending' && (
                            <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
                              <Icon name="XCircle" size={16} className="mr-2" />
                              Отменить заказ
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Страница {currentPage} из {totalPages}
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    <Icon name="ChevronLeft" size={16} className="mr-1" />
                    Назад
                  </Button>
                  
                  <div className="hidden md:flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <Button
                        key={page}
                        variant={page === currentPage ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className="w-10"
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Вперёд
                    <Icon name="ChevronRight" size={16} className="ml-1" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <Footer />
      <MobileNav />
    </div>
  );
}
