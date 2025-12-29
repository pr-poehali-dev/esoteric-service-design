import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PaymentSuccess = () => {
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
              <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center animate-scale-in">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Оплата успешно завершена!
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Спасибо за ваш заказ. Мы уже начали его обработку.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Package className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Что дальше?
                </h2>
              </div>
              <p className="text-gray-700">
                Информация о заказе отправлена на вашу электронную почту. 
                Вы можете отследить статус заказа в личном кабинете.
              </p>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={() => navigate("/orders")}
                className="w-full text-lg h-12"
                size="lg"
              >
                Мои заказы
                <ArrowRight className="ml-2 w-5 h-5" />
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
              Возникли вопросы? <Link to="/contact" className="text-primary hover:underline">Свяжитесь с нами</Link>
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

export default PaymentSuccess;
