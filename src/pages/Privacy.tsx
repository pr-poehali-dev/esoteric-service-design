import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
          Назад
        </Button>

        <div className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold mb-6">Политика обработки персональных данных</h1>
          
          <p className="text-muted-foreground mb-6">
            Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Общие положения</h2>
            <p className="text-muted-foreground mb-4">
              Настоящая Политика обработки персональных данных определяет порядок обработки персональных данных
              и меры по обеспечению безопасности персональных данных на нашем сайте.
            </p>
            <p className="text-muted-foreground">
              Использование сайта означает безоговорочное согласие пользователя с настоящей Политикой
              и указанными в ней условиями обработки его персональных данных.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Персональные данные</h2>
            <p className="text-muted-foreground mb-4">
              Персональные данные — это любая информация, относящаяся к прямо или косвенно определенному
              или определяемому физическому лицу (субъекту персональных данных).
            </p>
            <p className="text-muted-foreground mb-4">
              Мы можем собирать следующие персональные данные:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Фамилия, имя, отчество</li>
              <li>Контактный телефон</li>
              <li>Адрес электронной почты</li>
              <li>Дата рождения</li>
              <li>Адрес доставки</li>
              <li>Данные об активности на сайте</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Цели обработки персональных данных</h2>
            <p className="text-muted-foreground mb-4">
              Персональные данные используются для следующих целей:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Регистрация пользователей на сайте</li>
              <li>Обработка и выполнение заказов</li>
              <li>Связь с пользователями по вопросам предоставления услуг</li>
              <li>Улучшение качества сервиса и пользовательского опыта</li>
              <li>Проведение статистических и маркетинговых исследований</li>
              <li>Информирование о новых продуктах и специальных предложениях</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Использование cookies</h2>
            <p className="text-muted-foreground mb-4">
              Наш сайт использует файлы cookie для обеспечения функциональности сайта и улучшения
              пользовательского опыта.
            </p>
            <p className="text-muted-foreground mb-4">
              Cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении сайта.
            </p>
            <p className="text-muted-foreground">
              Вы можете настроить свой браузер для отказа от всех файлов cookie или для уведомления
              о их отправке. Однако в этом случае некоторые функции сайта могут быть недоступны.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Защита персональных данных</h2>
            <p className="text-muted-foreground mb-4">
              Мы принимаем необходимые организационные и технические меры для защиты персональных данных
              от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования,
              распространения, а также от иных неправомерных действий.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Права субъектов персональных данных</h2>
            <p className="text-muted-foreground mb-4">
              Пользователь имеет право:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Получать информацию, касающуюся обработки его персональных данных</li>
              <li>Требовать уточнения, блокирования или уничтожения своих персональных данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
              <li>Обжаловать действия или бездействие оператора в уполномоченный орган</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Изменение политики конфиденциальности</h2>
            <p className="text-muted-foreground">
              Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности.
              При внесении изменений дата последнего обновления указывается в верхней части документа.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Контактная информация</h2>
            <p className="text-muted-foreground">
              По всем вопросам, связанным с обработкой персональных данных, вы можете обращаться
              по электронной почте или через форму обратной связи на сайте.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
