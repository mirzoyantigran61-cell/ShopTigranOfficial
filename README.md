# 🛍️ Full Stack Shop Platform

Современная маркетплейс-платформа уровня Facebook Marketplace + Telegram Mini App

## 🚀 Быстрый старт

### Prerequisites
- Node.js 18+
- MongoDB Atlas аккаунт
- Cloudinary аккаунт

### Установка

1. **Клонирование репозитория**
\`\`\`bash
git clone https://github.com/your-repo/shop-platform.git
cd shop-platform
\`\`\`

2. **Установка зависимостей**
\`\`\`bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
\`\`\`

3. **Настройка окружения**
\`\`\`bash
cp .env.example .env
# Заполните переменные в .env файле
\`\`\`

4. **Запуск в development режиме**
\`\`\`bash
# Backend (порт 5000)
cd server
npm run dev

# Frontend (порт 3000)
cd client
npm run dev
\`\`\`

5. **Docker запуск**
\`\`\`bash
docker-compose up
\`\`\`

## 📱 Основные функции

- ✅ **Аутентификация** - JWT, persistent login, email verification
- ✅ **Посты** - Создание, редактирование, удаление объявлений
- ✅ **Чат** - Real-time messaging с Socket.IO
- ✅ **Поиск** - Расширенный поиск с фильтрами
- ✅ **Админ панель** - Полное управление платформой
- ✅ **Уведомления** - Push notifications + email
- ✅ **Профили** - Пользовательские профили с верификацией
- ✅ **Медиа** - Загрузка фото/видео через Cloudinary

## 🏗️ Архитектура
