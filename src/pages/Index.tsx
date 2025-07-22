import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Home" size={24} className="text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900">Тверь-комплект</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Услуги</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">О нас</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Качественные окна ПВХ 
                <span className="text-blue-600"> от производителя</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Профессиональная установка пластиковых окон с гарантией качества до 10 лет. 
                Бесплатный замер и консультация.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                  <Icon name="Calculator" size={16} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/cc2a3290-7c78-43f1-a939-78bb8cebabcc.jpg" 
                  alt="Современные пластиковые окна ПВХ" 
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный спектр работ с пластиковыми окнами</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Icon name="Wrench" size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Установка окон</h3>
                <p className="text-gray-600 mb-6">Профессиональный монтаж окон ПВХ с соблюдением всех технологий</p>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Icon name="Settings" size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ремонт окон</h3>
                <p className="text-gray-600 mb-6">Быстрый ремонт и регулировка пластиковых окон любой сложности</p>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Icon name="Shield" size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Гарантийное обслуживание</h3>
                <p className="text-gray-600 mb-6">Полное гарантийное и постгарантийное обслуживание</p>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600">15 лет опыта и тысячи довольных клиентов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                15
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Лет опыта</h3>
              <p className="text-gray-600">На рынке оконных услуг</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                10
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Лет гарантии</h3>
              <p className="text-gray-600">На все наши работы</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Award" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Сертификаты</h3>
              <p className="text-gray-600">Официальные партнеры производителей</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Clock" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 поддержка</h3>
              <p className="text-gray-600">Круглосуточная консультация</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы установить качественные окна?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Получите бесплатную консультацию и расчет стоимости прямо сейчас
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 px-8">
              <Icon name="Calculator" size={16} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Заказать консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Home" size={24} className="text-blue-400" />
                <h3 className="text-xl font-bold">Тверь-комплект</h3>
              </div>
              <p className="text-gray-400">
                Профессиональная установка окон ПВХ с гарантией качества
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Установка окон</li>
                <li>Ремонт окон</li>
                <li>Замена стеклопакетов</li>
                <li>Регулировка фурнитуры</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@tver-komplekt.ru
                </p>
                <p className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  г. Тверь, ул. Советская, д. 45
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-gray-400">
                <p>Пн-Пт: 9:00 - 20:00</p>
                <p>Сб-Вс: 10:00 - 18:00</p>
                <p>Консультации: 24/7</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ООО "Тверь-комплект". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;