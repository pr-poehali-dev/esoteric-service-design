import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';

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

const calculatePasswordStrength = (password: string): { strength: number; label: string; color: string } => {
  let strength = 0;
  
  if (password.length >= 8) strength++;
  if (password.length >= 12) strength++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[^a-zA-Z0-9]/.test(password)) strength++;
  
  if (strength <= 1) return { strength: 1, label: 'Слабый', color: 'bg-red-500' };
  if (strength <= 3) return { strength: 2, label: 'Средний', color: 'bg-yellow-500' };
  return { strength: 3, label: 'Сильный', color: 'bg-green-500' };
};

export default function Auth() {
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState<'password' | 'code'>('password');
  const [avatarPreview, setAvatarPreview] = useState<string>('');
  const [birthDate, setBirthDate] = useState<Date>();
  const [codeSent, setCodeSent] = useState(false);
  const [registerPassword, setRegisterPassword] = useState('');

  const zodiacSign = getZodiacSign(birthDate);
  const passwordStrength = calculatePasswordStrength(registerPassword);

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

  const handleSendCode = (method: 'email' | 'phone') => {
    setCodeSent(true);
    setTimeout(() => setCodeSent(false), 60000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mystic-deep via-mystic-purple to-mystic-deep flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMCA0aDJ2Mmgtdi0yem0wLTRoMnYyaC0ydi0yem0tMiAwdjJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMCA0aDJ2Mmgtdi0yem0wLTRoMnYyaC0ydi0yem0tNC00djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMCA0aDJ2Mmgtdi0yem0wLTRoMnYyaC0ydi0yem0tMiAwdjJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMCA0aDJ2Mmgtdi0yem0wLTRoMnYyaC0ydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
      
      <Card className="w-full max-w-4xl bg-background/95 backdrop-blur shadow-2xl relative">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/')}
          className="absolute top-4 right-4"
        >
          <Icon name="X" size={20} />
        </Button>

        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center mb-4">
            <Icon name="Sparkles" className="text-accent" size={40} />
          </div>
          <CardTitle className="text-3xl font-bold">Добро пожаловать</CardTitle>
          <CardDescription>Войдите или создайте новый аккаунт</CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Вход</TabsTrigger>
              <TabsTrigger value="register">Регистрация</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-6">
              <div className="flex justify-center mb-6">
                <div className="inline-flex rounded-lg border p-1 bg-muted">
                  <Button
                    variant={loginMethod === 'password' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setLoginMethod('password')}
                    className={loginMethod === 'password' ? 'bg-accent' : ''}
                  >
                    <Icon name="Lock" size={16} className="mr-2" />
                    По паролю
                  </Button>
                  <Button
                    variant={loginMethod === 'code' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setLoginMethod('code')}
                    className={loginMethod === 'code' ? 'bg-accent' : ''}
                  >
                    <Icon name="Smartphone" size={16} className="mr-2" />
                    По коду
                  </Button>
                </div>
              </div>

              {loginMethod === 'password' ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <div className="relative">
                      <Icon name="Mail" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <Input id="login-email" type="email" placeholder="ваш@email.ru" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="login-password">Пароль</Label>
                    <div className="relative">
                      <Icon name="Lock" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <Input id="login-password" type="password" placeholder="••••••••" className="pl-10" />
                    </div>
                  </div>

                  <Button className="w-full bg-accent hover:bg-accent/90">
                    <Icon name="LogIn" size={18} className="mr-2" />
                    Войти
                  </Button>

                  <Button variant="link" className="w-full text-sm text-muted-foreground">
                    Забыли пароль?
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <Tabs defaultValue="email" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-4">
                      <TabsTrigger value="email">По Email</TabsTrigger>
                      <TabsTrigger value="phone">По SMS</TabsTrigger>
                    </TabsList>

                    <TabsContent value="email" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="code-email">Email</Label>
                        <div className="relative">
                          <Icon name="Mail" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <Input id="code-email" type="email" placeholder="ваш@email.ru" className="pl-10" />
                        </div>
                      </div>

                      {!codeSent ? (
                        <Button 
                          className="w-full bg-accent hover:bg-accent/90"
                          onClick={() => handleSendCode('email')}
                        >
                          <Icon name="Send" size={18} className="mr-2" />
                          Отправить код
                        </Button>
                      ) : (
                        <>
                          <div className="space-y-2">
                            <Label htmlFor="email-code">Код из письма</Label>
                            <Input id="email-code" placeholder="123456" maxLength={6} />
                          </div>
                          <Button className="w-full bg-accent hover:bg-accent/90">
                            <Icon name="LogIn" size={18} className="mr-2" />
                            Войти
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => handleSendCode('email')}
                            disabled={codeSent}
                          >
                            Отправить код повторно
                          </Button>
                        </>
                      )}
                    </TabsContent>

                    <TabsContent value="phone" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="code-phone">Телефон</Label>
                        <div className="relative">
                          <Icon name="Phone" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <Input id="code-phone" type="tel" placeholder="+7 (999) 123-45-67" className="pl-10" />
                        </div>
                      </div>

                      {!codeSent ? (
                        <Button 
                          className="w-full bg-accent hover:bg-accent/90"
                          onClick={() => handleSendCode('phone')}
                        >
                          <Icon name="Send" size={18} className="mr-2" />
                          Отправить код
                        </Button>
                      ) : (
                        <>
                          <div className="space-y-2">
                            <Label htmlFor="sms-code">Код из SMS</Label>
                            <Input id="sms-code" placeholder="123456" maxLength={6} />
                          </div>
                          <Button className="w-full bg-accent hover:bg-accent/90">
                            <Icon name="LogIn" size={18} className="mr-2" />
                            Войти
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => handleSendCode('phone')}
                            disabled={codeSent}
                          >
                            Отправить код повторно
                          </Button>
                        </>
                      )}
                    </TabsContent>
                  </Tabs>
                </div>
              )}
            </TabsContent>

            <TabsContent value="register" className="space-y-6">
              <div className="space-y-6">
                <div className="flex flex-col items-center space-y-4">
                  <Label>Фото профиля</Label>
                  <div className="relative group">
                    <Avatar className="w-24 h-24 border-4 border-accent/20">
                      <AvatarImage src={avatarPreview} />
                      <AvatarFallback>
                        <Icon name="User" size={40} className="text-muted-foreground" />
                      </AvatarFallback>
                    </Avatar>
                    <label htmlFor="avatar-upload" className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
                      <Icon name="Camera" size={24} className="text-white" />
                    </label>
                    <input
                      id="avatar-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleAvatarChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Фамилия</Label>
                    <Input id="lastName" placeholder="Иванов" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Имя</Label>
                    <Input id="firstName" placeholder="Иван" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="middleName">Отчество</Label>
                    <Input id="middleName" placeholder="Иванович" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="username">Никнейм</Label>
                  <div className="relative">
                    <Icon name="AtSign" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input id="username" placeholder="mysticaluser" className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <div className="relative">
                    <Icon name="Mail" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input id="register-email" type="email" placeholder="ваш@email.ru" className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-password">Пароль</Label>
                  <div className="relative">
                    <Icon name="Lock" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      id="register-password" 
                      type="password" 
                      placeholder="Минимум 8 символов" 
                      className="pl-10"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                    />
                  </div>
                  {registerPassword && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Сложность пароля:</span>
                        <span className={`font-semibold ${
                          passwordStrength.strength === 1 ? 'text-red-500' : 
                          passwordStrength.strength === 2 ? 'text-yellow-500' : 
                          'text-green-500'
                        }`}>
                          {passwordStrength.label}
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <div className={`h-1.5 flex-1 rounded-full transition-colors ${
                          passwordStrength.strength >= 1 ? passwordStrength.color : 'bg-muted'
                        }`} />
                        <div className={`h-1.5 flex-1 rounded-full transition-colors ${
                          passwordStrength.strength >= 2 ? passwordStrength.color : 'bg-muted'
                        }`} />
                        <div className={`h-1.5 flex-1 rounded-full transition-colors ${
                          passwordStrength.strength >= 3 ? passwordStrength.color : 'bg-muted'
                        }`} />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Используйте буквы, цифры и спецсимволы для надёжного пароля
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <div className="relative">
                    <Icon name="Phone" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" className="pl-10" />
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
                        {birthDate ? format(birthDate, 'PPP', { locale: ru }) : 'Выберите дату'}
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
                    <Input id="birthTime" type="time" className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="birthPlace">Место рождения</Label>
                  <div className="relative">
                    <Icon name="MapPin" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input id="birthPlace" placeholder="Город, страна" className="pl-10" />
                  </div>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90">
                  <Icon name="UserPlus" size={18} className="mr-2" />
                  Зарегистрироваться
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}