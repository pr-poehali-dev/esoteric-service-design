import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PaymentError = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="mb-6 inline-block">
              <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center animate-scale-in">
                <Icon name="XCircle" size={64} className="text-red-600" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ошибка оплаты
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              К сожалению, не удалось завершить оплату. Попробуйте еще раз.
            </p>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Icon name="AlertCircle" size={24} className="text-red-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Что могло пойти не так?
                </h2>
              </div>
              <ul className="text-gray-700 text-left space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Недостаточно средств на карте</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Неверные данные карты</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Технический сбой в банке</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Превышен лимит по карте</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={() => navigate("/cart")}
                className="w-full text-lg h-12"
                size="lg"
              >
                Попробовать снова
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>

              <Button 
                onClick={() => navigate("/")}
                variant="outline"
                className="w-full text-lg h-12"
                size="lg"
              >
                Вернуться на главную
              </Button>

              <Link 
                to="/products"
                className="block text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Продолжить покупки →
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              Нужна помощь? <Link to="/contact" className="text-primary hover:underline">Свяжитесь с поддержкой</Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        @keyframes scale-in {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PaymentError;
