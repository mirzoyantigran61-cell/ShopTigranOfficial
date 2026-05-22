# Детальная установка

## Backend Deployment (Render)

1. Создайте аккаунт на [Render](https://render.com)
2. Нажмите "New +" → "Web Service"
3. Подключите GitHub репозиторий
4. Настройки:
   - Name: shop-platform-api
   - Environment: Node
   - Build Command: `cd server && npm install && npm run build`
   - Start Command: `cd server && npm start`
5. Добавьте переменные окружения из .env.example
6. Нажмите "Create Web Service"

## Frontend Deployment (Vercel)

1. Установите Vercel CLI: `npm i -g vercel`
2. В папке client: `vercel`
3. Следуйте инструкциям
4. Добавьте переменные окружения в Vercel Dashboard

## MongoDB Atlas Setup

1. Создайте кластер (бесплатный tier)
2. В Network Access добавьте 0.0.0.0/0
3. В Database Access создайте пользователя
4. Получите connection string
5. Добавьте в .env
