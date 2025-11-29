import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import NotificationCenter from '@/components/notifications/NotificationCenter';

interface CartItem {
  id: number;
  productId: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  quantity: number;
  stock: number;
  seller: string;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      productId: 1,
      name: 'Таро "Золотое сияние"',
      image: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      price: 2890,
      oldPrice: 3490,
      quantity: 1,
      stock: 15,
      seller: 'Мария Звездная'
    },
    {
      id: 2,
      productId: 2,
      name: 'Набор рунических камней',
      image: '/img/bfba9552-d826-4988-b161-355884e82a28.jpg',
      price: 1590,
      quantity: 2,
      stock: 23,
      seller: 'Олег Рунный'
    },
    {
      id: 3,
      productId: 3,
      name: 'Оракул "Лунный свет"',
      image: '/img/ce36f202-a4c1-46a2-9733-f447707ec162.jpg',
      price: 2490,
      oldPrice: 2990,
      quantity: 1,
      stock: 8,
      seller: 'Елена Лунная'
    },
    {
      id: 4,
      productId: 4,
      name: 'Кристалл аметиста',
      image: '/img/ce1b75d6-d236-4e34-a342-4391f5c746f0.jpg',
      price: 790,
      quantity: 3,
      stock: 45,
      seller: 'Мария Звездная'
    }
  ]);

  const [selectedItems, setSelectedItems] = useState<number[]>([1, 2, 3, 4]);

  const handleSelectAll = () => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map(item => item.id));
    }
  };

  const handleSelectItem = (itemId: number) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleQuantityChange = (itemId: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === itemId) {
        const newQuantity = Math.max(1, Math.min(item.stock, item.quantity + delta));
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const handleRemoveItem = (itemId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
    setSelectedItems(prev => prev.filter(id => id !== itemId));
  };

  const calculateTotal = () => {
    return cartItems
      .filter(item => selectedItems.includes(item.id))
      .reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const calculateOldTotal = () => {
    return cartItems
      .filter(item => selectedItems.includes(item.id))
      .reduce((sum, item) => sum + ((item.oldPrice || item.price) * item.quantity), 0);
  };

  const selectedCount = selectedItems.length;
  const totalAmount = calculateTotal();
  const oldTotalAmount = calculateOldTotal();
  const savings = oldTotalAmount - totalAmount;

  const handleCheckout = () => {
    if (selectedItems.length === 0) {
      alert('Выберите товары для оформления заказа');
      return;
    }
    const selectedProducts = cartItems.filter(item => selectedItems.includes(item.id));
    console.log('Оформление заказа:', selectedProducts);
    alert(`Переход к оформлению заказа на сумму ${totalAmount}₽`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
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
                <Icon name="Briefcase" size={16} className="mr-2" />
                Услуги
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="ghost" size="sm">
                <Icon name="ShoppingBag" size={16} className="mr-2" />
                Товары
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="relative">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Корзина
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 bg-accent text-accent-foreground px-1.5 py-0.5 text-xs">
                    {cartItems.length}
                  </Badge>
                )}
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

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Корзина
          </h1>
          <p className="text-muted-foreground">
            {cartItems.length === 0 
              ? 'Корзина пуста' 
              : `${cartItems.length} ${cartItems.length === 1 ? 'товар' : cartItems.length < 5 ? 'товара' : 'товаров'} в корзине`
            }
          </p>
        </div>

        {cartItems.length === 0 ? (
          <Card className="bg-card/50 border-border text-center py-16">
            <CardContent>
              <Icon name="ShoppingCart" size={64} className="text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Ваша корзина пуста</h2>
              <p className="text-muted-foreground mb-6">Добавьте товары, чтобы продолжить покупки</p>
              <Link to="/products">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Icon name="ShoppingBag" size={18} className="mr-2" />
                  Перейти к товарам
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="bg-card/50 border-border mb-4">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="select-all"
                        checked={selectedItems.length === cartItems.length && cartItems.length > 0}
                        onCheckedChange={handleSelectAll}
                        className="data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                      />
                      <label
                        htmlFor="select-all"
                        className="text-sm font-medium cursor-pointer select-none"
                      >
                        Выбрать все ({cartItems.length})
                      </label>
                    </div>
                    {selectedItems.length > 0 && selectedItems.length < cartItems.length && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedItems([])}
                      >
                        Отменить выбор
                      </Button>
                    )}
                  </div>
                </CardHeader>
              </Card>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="bg-card/50 border-border overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex items-start p-6 gap-6">
                        <div className="flex items-start space-x-4 flex-1">
                          <Checkbox
                            id={`item-${item.id}`}
                            checked={selectedItems.includes(item.id)}
                            onCheckedChange={() => handleSelectItem(item.id)}
                            className="mt-1 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                          />
                          
                          <Link to={`/product/${item.productId}`} className="flex-shrink-0">
                            <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-border hover:border-accent transition-colors">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </Link>

                          <div className="flex-1 min-w-0">
                            <Link 
                              to={`/product/${item.productId}`}
                              className="block hover:text-accent transition-colors"
                            >
                              <h3 className="text-lg font-bold mb-2 line-clamp-2">
                                {item.name}
                              </h3>
                            </Link>
                            <p className="text-sm text-muted-foreground mb-3">
                              Продавец: {item.seller}
                            </p>
                            
                            <div className="flex items-center space-x-4 mb-3">
                              <div className="flex items-center space-x-2">
                                <span className="text-2xl font-bold text-accent">{item.price}₽</span>
                                {item.oldPrice && (
                                  <>
                                    <span className="text-sm text-muted-foreground line-through">{item.oldPrice}₽</span>
                                    <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs">
                                      -{Math.round((1 - item.price / item.oldPrice) * 100)}%
                                    </Badge>
                                  </>
                                )}
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center border border-border rounded-lg">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleQuantityChange(item.id, -1)}
                                  disabled={item.quantity <= 1}
                                  className="rounded-r-none h-8 w-8"
                                >
                                  <Icon name="Minus" size={14} />
                                </Button>
                                <span className="px-4 py-1 font-bold text-sm min-w-[40px] text-center">
                                  {item.quantity}
                                </span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleQuantityChange(item.id, 1)}
                                  disabled={item.quantity >= item.stock}
                                  className="rounded-l-none h-8 w-8"
                                >
                                  <Icon name="Plus" size={14} />
                                </Button>
                              </div>
                              
                              <div className="flex items-center space-x-2">
                                <span className="text-sm text-muted-foreground">
                                  В наличии: {item.stock} шт
                                </span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleRemoveItem(item.id)}
                                  className="text-muted-foreground hover:text-red-400"
                                >
                                  <Icon name="Trash2" size={18} />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-2xl font-bold text-accent">
                            {(item.price * item.quantity).toLocaleString()}₽
                          </p>
                          {item.oldPrice && (
                            <p className="text-sm text-muted-foreground line-through">
                              {(item.oldPrice * item.quantity).toLocaleString()}₽
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-card/50 border-border sticky top-24">
                <CardHeader>
                  <h2 className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Итого
                  </h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Выбрано товаров:</span>
                    <span className="font-bold">{selectedCount}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Товары на сумму:</span>
                    <span className="font-bold">
                      {oldTotalAmount !== totalAmount 
                        ? <span className="text-muted-foreground line-through">{oldTotalAmount.toLocaleString()}₽</span>
                        : <span>{totalAmount.toLocaleString()}₽</span>
                      }
                    </span>
                  </div>

                  {savings > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-green-400">Скидка:</span>
                      <span className="font-bold text-green-400">
                        −{savings.toLocaleString()}₽
                      </span>
                    </div>
                  )}

                  <Separator />

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Итого к оплате:</span>
                    <span className="text-3xl font-bold text-accent">
                      {totalAmount.toLocaleString()}₽
                    </span>
                  </div>

                  {selectedCount > 0 && (
                    <div className="text-xs text-muted-foreground">
                      <Icon name="Info" size={12} className="inline mr-1" />
                      Цены окончательные, включают все налоги
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex-col gap-3">
                  <Button
                    onClick={handleCheckout}
                    disabled={selectedCount === 0}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    size="lg"
                  >
                    <Icon name="CreditCard" size={20} className="mr-2" />
                    Оформить заказ
                  </Button>
                  <Link to="/products" className="w-full">
                    <Button
                      variant="outline"
                      className="w-full"
                      size="lg"
                    >
                      <Icon name="ShoppingBag" size={20} className="mr-2" />
                      Продолжить покупки
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="bg-card/50 border-border mt-6 border-accent/30">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="ShieldCheck" className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div className="text-sm">
                      <p className="font-bold mb-1">Безопасная покупка</p>
                      <p className="text-muted-foreground text-xs">
                        Гарантия возврата средств и защита покупателя
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}