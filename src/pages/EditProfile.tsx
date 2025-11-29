import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';
import NotificationCenter from '@/components/notifications/NotificationCenter';

const zodiacSigns = [
  { name: 'Овен', start: [3, 21], end: [4, 19], icon: '♈' },
  { name: 'Телец', start: [4, 20], end: [5, 20], icon: '♉' },
  { name: 'Близнецы', start: [5, 21], end: [6, 20], icon: '♊' },
  { name: 'Рак', start: [6, 21], end: [7, 22], icon: '♋' },
  { name: 'Лев', start: [7, 23], end: [8, 22], icon: '♌' },
  { name: 'Дева', start: [8, 23], end: [9, 22], icon: '♍' },
  { name: 'Весы', start: [9, 23], end: [10, 22], icon: '♎' },
  { name: 'Скорпион', start: [10, 23], end: [11, 21], icon: '♏' },
  { name: 'Стрелец', start: [11, 22], end: [12, 21], icon: '♐' },
  { name: 'Козерог', start: [12, 22], end: [1, 19], icon: '♑' },
  { name: 'Водолей', start: [1, 20], end: [2, 18], icon: '♒' },
  { name: 'Рыбы', start: [2, 19], end: [3, 20], icon: '♓' },
];

const getZodiacSign = (date: Date | undefined) => {
  if (!date) return null;
  
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  for (const sign of zodiacSigns) {
    const [startMonth, startDay] = sign.start;
    const [endMonth, endDay] = sign.end;
    
    if (startMonth === endMonth) {
      if (month === startMonth && day >= startDay && day <= endDay) {
        return sign;
      }
    } else {
      if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
        return sign;
      }
    }
  }
  
  return null;
};

export default function EditProfile() {
  const navigate = useNavigate();
  
  const [avatarPreview, setAvatarPreview] = useState<string>('/img/bfba9552-d826-4988-b161-355884e82a28.jpg');
  const [lastName, setLastName] = useState<string>('Волкова');
  const [firstName, setFirstName] = useState<string>('Анна');
  const [middleName, setMiddleName] = useState<string>('Мария');
  const [username, setUsername] = useState<string>('annavolkova');
  const [email, setEmail] = useState<string>('anna@example.com');
  const [phone, setPhone] = useState<string>('+7 (999) 123-45-67');
  const [birthDate, setBirthDate] = useState<Date | undefined>(new Date(1990, 2, 15));
  const [birthTime, setBirthTime] = useState<string>('14:30');
  const [birthPlace, setBirthPlace] = useState<string>('Москва, Россия');

  const zodiacSign = getZodiacSign(birthDate);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Sparkles" className="text-accent" size={32} />
            <h1 className="text-2xl font-bold text-accent" style={{ fontFamily: 'Playfair Display, serif' }}>
              Мистерия
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
              <Icon name="Home" size={16} className="mr-2" />
              Главная
            </Button>
            <NotificationCenter />
            <Button variant="ghost" size="sm" onClick={() => navigate('/profile')}>
              <Icon name="User" size={16} className="mr-2" />
              Профиль
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Icon name="Settings" className="text-accent mr-3" size={32} />
            <h1 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
              Редактирование профиля
            </h1>
          </div>

          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Личная информация</CardTitle>
              <CardDescription>Обновите свои данные. Все поля необязательны.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center space-y-4">
                <Label>Фото профиля</Label>
                <div className="relative group">
                  <Avatar className="w-32 h-32 border-4 border-accent/20">
                    <AvatarImage src={avatarPreview} />
                    <AvatarFallback>
                      <Icon name="User" size={48} className="text-muted-foreground" />
                    </AvatarFallback>
                  </Avatar>
                  <label htmlFor="avatar-upload" className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
                    <Icon name="Camera" size={32} className="text-white" />
                  </label>
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleAvatarChange}
                  />
                </div>
                <p className="text-sm text-muted-foreground">Нажмите на фото для изменения</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="lastName">Фамилия</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Не указано" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="firstName">Имя</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Не указано" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="middleName">Отчество</Label>
                  <Input 
                    id="middleName" 
                    placeholder="Не указано" 
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Никнейм</Label>
                <div className="relative">
                  <Icon name="AtSign" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="username" 
                    placeholder="Не указано" 
                    className="pl-10" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Icon name="Mail" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Не указано" 
                    className="pl-10" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <div className="relative">
                  <Icon name="Phone" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Не указано" 
                    className="pl-10" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Дата рождения</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <Icon name="Calendar" size={18} className="mr-2" />
                      {birthDate ? format(birthDate, 'PPP', { locale: ru }) : 'Не указано'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={birthDate}
                      onSelect={setBirthDate}
                      disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {zodiacSign && (
                  <div className="flex items-center space-x-2 p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <span className="text-3xl">{zodiacSign.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-accent">Знак зодиака</p>
                      <p className="text-sm text-muted-foreground">{zodiacSign.name}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthTime">Время рождения</Label>
                <div className="relative">
                  <Icon name="Clock" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="birthTime" 
                    type="time" 
                    className="pl-10" 
                    value={birthTime}
                    onChange={(e) => setBirthTime(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthPlace">Место рождения</Label>
                <div className="relative">
                  <Icon name="MapPin" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="birthPlace" 
                    placeholder="Не указано" 
                    className="pl-10" 
                    value={birthPlace}
                    onChange={(e) => setBirthPlace(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Изменить пароль</Label>
                <div className="relative">
                  <Icon name="Lock" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Оставьте пустым, чтобы не менять" 
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <Button 
                  className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={handleSave}
                >
                  <Icon name="Save" size={18} className="mr-2" />
                  Сохранить изменения
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => navigate('/profile')}
                >
                  <Icon name="X" size={18} className="mr-2" />
                  Отмена
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border mt-6 border-destructive/50">
            <CardHeader>
              <CardTitle className="text-xl text-destructive">Опасная зона</CardTitle>
              <CardDescription>Необратимые действия с аккаунтом</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="destructive" className="w-full">
                <Icon name="Trash2" size={18} className="mr-2" />
                Удалить аккаунт
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}