import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useNavigate, useSearchParams } from 'react-router-dom';

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

export default function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const passwordStrength = calculatePasswordStrength(password);
  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0;
  const passwordsDontMatch = confirmPassword.length > 0 && password !== confirmPassword;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password.length < 8) {
      setError('Пароль должен содержать минимум 8 символов');
      return;
    }

    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    if (passwordStrength.strength < 2) {
      setError('Пароль слишком слабый. Используйте буквы, цифры и спецсимволы');
      return;
    }

    setIsSubmitted(true);
    setTimeout(() => {
      navigate('/auth');
    }, 3000);
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-mystic-deep via-mystic-purple to-mystic-deep flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMCA0aDJ2Mmgtdi0yem0wLTRoMnYyaC0ydi0yem0tMiAwdjJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMCA0aDJ2Mmgtdi0yem0wLTRoMnYyaC0ydi0yem0tNC00djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMCA0aDJ2Mmgtdi0yem0wLTRoMnYyaC0ydi0yem0tMiAwdjJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMCA0aDJ2Mmgtdi0yem0wLTRoMnYyaC0ydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <Card className="w-full max-w-md bg-background/95 backdrop-blur shadow-2xl">
          <CardHeader className="text-center pb-4">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
                <Icon name="AlertCircle" className="text-red-500" size={32} />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold">Недействительная ссылка</CardTitle>
            <CardDescription>
              Ссылка для восстановления пароля недействительна или устарела
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              <Button 
                onClick={() => navigate('/forgot-password')}
                className="w-full bg-accent hover:bg-accent/90"
              >
                <Icon name="RefreshCw" size={18} className="mr-2" />
                Запросить новую ссылку
              </Button>

              <Button 
                variant="ghost"
                onClick={() => navigate('/auth')}
                className="w-full"
              >
                <Icon name="ArrowLeft" size={18} className="mr-2" />
                Вернуться к авторизации
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-mystic-deep via-mystic-purple to-mystic-deep flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMCA0aDJ2Mmgtdi0yem0wLTRoMnYyaC0ydi0yem0tMiAwdjJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMCA0aDJ2Mmgtdi0yem0wLTRoMnYyaC0ydi0yem0tNC00djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMCA0aDJ2Mmgtdi0yem0wLTRoMnYyaC0ydi0yem0tMiAwdjJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMCA0aDJ2Mmgtdi0yem0wLTRoMnYyaC0ydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
      
      <Card className="w-full max-w-md bg-background/95 backdrop-blur shadow-2xl relative">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/auth')}
          className="absolute top-4 right-4"
        >
          <Icon name="X" size={20} />
        </Button>

        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
              <Icon name="Lock" className="text-accent" size={32} />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold">Новый пароль</CardTitle>
          <CardDescription>
            {isSubmitted 
              ? 'Пароль успешно изменён' 
              : 'Создайте надёжный пароль для вашего аккаунта'}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="password">Новый пароль</Label>
                <div className="relative">
                  <Icon name="Lock" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Минимум 8 символов" 
                    className="pl-10 pr-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon name={showPassword ? "EyeOff" : "Eye"} size={18} />
                  </button>
                </div>
                
                {password && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Надёжность пароля:</span>
                      <span className={`font-medium ${
                        passwordStrength.strength === 1 ? 'text-red-500' : 
                        passwordStrength.strength === 2 ? 'text-yellow-500' : 
                        'text-green-500'
                      }`}>
                        {passwordStrength.label}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${passwordStrength.color}`}
                        style={{ width: `${(passwordStrength.strength / 3) * 100}%` }}
                      />
                    </div>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p className={password.length >= 8 ? 'text-green-500' : ''}>
                        {password.length >= 8 ? '✓' : '○'} Минимум 8 символов
                      </p>
                      <p className={/[a-z]/.test(password) && /[A-Z]/.test(password) ? 'text-green-500' : ''}>
                        {/[a-z]/.test(password) && /[A-Z]/.test(password) ? '✓' : '○'} Заглавные и строчные буквы
                      </p>
                      <p className={/\d/.test(password) ? 'text-green-500' : ''}>
                        {/\d/.test(password) ? '✓' : '○'} Цифры
                      </p>
                      <p className={/[^a-zA-Z0-9]/.test(password) ? 'text-green-500' : ''}>
                        {/[^a-zA-Z0-9]/.test(password) ? '✓' : '○'} Специальные символы
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Повторите пароль</Label>
                <div className="relative">
                  <Icon name="Lock" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="confirmPassword" 
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="Введите пароль ещё раз" 
                    className={`pl-10 pr-10 ${
                      passwordsMatch ? 'border-green-500' : 
                      passwordsDontMatch ? 'border-red-500' : ''
                    }`}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon name={showConfirmPassword ? "EyeOff" : "Eye"} size={18} />
                  </button>
                </div>
                
                {passwordsMatch && (
                  <p className="text-sm text-green-500 flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} />
                    Пароли совпадают
                  </p>
                )}
                
                {passwordsDontMatch && (
                  <p className="text-sm text-red-500 flex items-center gap-2">
                    <Icon name="XCircle" size={16} />
                    Пароли не совпадают
                  </p>
                )}
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-start gap-2">
                  <Icon name="AlertCircle" className="text-red-500 mt-0.5 flex-shrink-0" size={18} />
                  <p className="text-sm text-red-500">{error}</p>
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90"
                disabled={!passwordsMatch || password.length < 8}
              >
                <Icon name="Check" size={18} className="mr-2" />
                Сохранить новый пароль
              </Button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 space-y-2">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-accent mt-0.5" size={24} />
                  <div className="flex-1 space-y-1">
                    <p className="font-medium">Пароль успешно изменён!</p>
                    <p className="text-sm text-muted-foreground">
                      Сейчас вы будете перенаправлены на страницу входа
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => navigate('/auth')}
                className="w-full bg-accent hover:bg-accent/90"
              >
                <Icon name="LogIn" size={18} className="mr-2" />
                Перейти к авторизации
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
