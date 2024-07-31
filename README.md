# Eatly

https://eatly-nu.vercel.app/

### Eatly - _это современное веб-приложение, разработанное с использованием Next.js 14, которое предлагает пользователям широкий выбор ресторанов и блюд. Этот проект создан с целью предоставить пользователям удобный и интуитивно понятный интерфейс для поиска и заказа еды онлайн._

## Основные особенности

### Кроссбраузерная поддержка: _сайт корректно отображается во всех современных браузерах._

### Мобильная адаптивность: _все страницы адаптированы для мобильных устройств._

### Модальные окна: _реализованы для авторизации, регистрации и восстановления пароля._

### Реактивный интерфейс: Использование современных технологий, таких как React и Framer Motion, обеспечивает плавные анимации и отличную производительность.

<!-- Фильтрация и сортировка: Пользователи могут легко находить рестораны и блюда, используя различные фильтры и параметры сортировки. -->

### Блог: Секция блога предоставляет пользователям полезную информацию и новости о кулинарии и ресторанах.

### Аутентификация: Пользователи могут регистрироваться, входить в систему и восстанавливать пароли с помощью удобных модальных окон.

<!-- Администрирование: Панель администратора позволяет управлять контентом сайта, включая добавление и редактирование ресторанов и блюд. -->

### Мобильное меню: Удобное мобильное меню для навигации на мобильных устройствах.

### "Хлебные крошки": навигационная цепочка, отображающая текущий путь пользователя на сайте. Названия страниц автоматически преобразуются в заглавные буквы для улучшения читаемости и удобства использования.

### Оптимизация изображений: используется next/image для загрузки и оптимизации изображений.

## Технологии

### Next.js 14: современная версия фреймворка для серверного рендеринга и статической генерации страниц.

### React: Библиотека для создания пользовательских интерфейсов.

### SCSS: используется для написания стилей, обеспечивая поддержку вложенности, переменных и миксинов.

### Sass: Библиотека для расширенных возможностей стилизации.

### PostCSS: Инструмент для преобразования стилей с использованием JavaScript плагинов.

### Prettier: Инструмент для форматирования кода, обеспечивающий его единообразие.

### Flexbox: Технология для создания гибких и адаптивных макетов.

### Framer Motion: Библиотека для анимации React-компонентов.

### React Intersection Observer: Библиотека для отслеживания видимости элементов на экране.

### ClassNames: Утилита для условного присвоения классов.

### Семантическая вёрстка: Использование семантических HTML-тегов для улучшения SEO и доступности.

### Слайдеры: Реализация интерактивных слайдеров для навигации и презентации контента.

### Форма обратной связи: Возможность отправки сообщений пользователями через форму на сайте.

### Отделение данных: Все списки данных вынесены в отдельные файлы в папку data.

### Многостраничный сайт: Приложение включает несколько страниц для разных разделов и функционала.

### Компонент Аккордеон: Включает аккордеон для удобного отображения и скрытия информации.

### Мобильное меню: Удобное мобильное меню для навигации на мобильных устройствах.

### Разделение на компоненты: Приложение построено на основе компонентов для упрощения разработки и поддержки кода.

## Структура проекта
<!-- src/app/layout.js: Главный файл макета приложения.
src/data/combinedPosts.js: Файл данных для блога.
src/app/blog/[id]/page.jsx: Компонент страницы блога.
src/app/api/auth/register.js: Файл API для регистрации пользователей. -->
### Главная страница

### Menu

### Blog

### Страница поста Blog

### Pricing

### Contact

### Auth
