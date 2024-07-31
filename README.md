# Eatly

[Go to site -->](https://eatly-nu.vercel.app/)

 _Это современное веб-приложение, разработанное с использованием Next.js 14, которое предлагает пользователям широкий выбор ресторанов и блюд. Этот проект создан с целью предоставить пользователям удобный и интуитивно понятный интерфейс для поиска и заказа еды онлайн._

## Основные особенности

- __Кроссбраузерная поддержка:__ 
_сайт корректно отображается во всех современных браузерах._

- __Мобильная адаптивность:__ 
_все страницы адаптированы для мобильных устройств._

- __Модальные окна:__ 
_реализованы для авторизации, регистрации и восстановления пароля._

- __Реактивный интерфейс:__ 
_Использование современных технологий, таких как React и Framer Motion, обеспечивает плавные анимации и отличную производительность._

<!-- Фильтрация и сортировка: Пользователи могут легко находить рестораны и блюда, используя различные фильтры и параметры сортировки. -->

- __Блог:__
_Секция блога предоставляет пользователям полезную информацию и новости о кулинарии и ресторанах._

- __Аутентификация:__ 
_Пользователи могут регистрироваться, входить в систему и восстанавливать пароли с помощью удобных модальных окон._

<!-- Администрирование: Панель администратора позволяет управлять контентом сайта, включая добавление и редактирование ресторанов и блюд. -->

- __Мобильное меню:__ 
_Удобное мобильное меню для навигации на мобильных устройствах._

- __"Хлебные крошки":__ 
_навигационная цепочка, отображающая текущий путь пользователя на сайте. Названия страниц автоматически преобразуются в заглавные буквы для улучшения читаемости и удобства использования._

- __Оптимизация изображений:__ 
_используется next/image для загрузки и оптимизации изображений._

## Технологии

- __Next.js 14:__ 
_современная версия фреймворка для серверного рендеринга и статической генерации страниц._

- __React:__ 
_Библиотека для создания пользовательских интерфейсов._

- __SCSS:__ 
_используется для написания стилей, обеспечивая поддержку вложенности, переменных и миксинов._

- __Sass:__ 
_Библиотека для расширенных возможностей стилизации._

- __PostCSS:__ 
_Инструмент для преобразования стилей с использованием JavaScript плагинов._

- __Prettier:__ 
_Инструмент для форматирования кода, обеспечивающий его единообразие._

- __Flexbox:__ 
_Технология для создания гибких и адаптивных макетов._

- __Framer Motion:__ 
_Библиотека для анимации React-компонентов._

- __React Intersection Observer:__ 
_Библиотека для отслеживания видимости элементов на экране._

- __ClassNames:__ 
_Утилита для условного присвоения классов._

- __Семантическая вёрстка:__ 
_Использование семантических HTML-тегов для улучшения SEO и доступности._

- __Слайдеры:__ 
_Реализация интерактивных слайдеров для навигации и презентации контента._

- __Форма обратной связи:__ 
_Возможность отправки сообщений пользователями через форму на сайте._

- __Отделение данных:__ 
_Все списки данных вынесены в отдельные файлы в папку data._

- __Многостраничный сайт:__ 
_Приложение включает несколько страниц для разных разделов и функционала._

- __Компонент Аккордеон:__ 
_Включает аккордеон для удобного отображения и скрытия информации._

- __Мобильное меню:__ 
_Удобное мобильное меню для навигации на мобильных устройствах._

- __Разделение на компоненты:__ 
_Приложение построено на основе компонентов для упрощения разработки и поддержки кода._

## Структура проекта
<!-- src/app/layout.js: Главный файл макета приложения.
src/data/combinedPosts.js: Файл данных для блога.
src/app/blog/[id]/page.jsx: Компонент страницы блога.
src/app/api/auth/register.js: Файл API для регистрации пользователей. -->
- _Главная страница_

- _Menu_

- _Blog_

- _Страница поста Blog_

- _Pricing_

- _Contact_

- _Auth_
