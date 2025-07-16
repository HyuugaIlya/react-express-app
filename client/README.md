# README.md для React проекта на Vite + TypeScript

## 🚀 Обзор проекта

Этот проект создан с использованием:
- [Vite](https://vitejs.dev/) - современный инструмент для сборки фронтенд-приложений
- [React](https://react.dev/) - библиотека для построения пользовательских интерфейсов
- [TypeScript](https://www.typescriptlang.org/) - типизированное надмножество JavaScript
- [Yarn](https://yarnpkg.com/) - менеджер пакетов

## 📦 Установка

1. Убедитесь, что у вас установлен [Node.js](https://nodejs.org/) (версия 20+)
2. Установите Yarn глобально (если ещё не установлен):
   ```bash
   npm install -g yarn
   ```
3. Установите зависимости:
   ```bash
   yarn install
   ```

## 🛠 Команды

- `yarn dev` - запуск development сервера
- `yarn build` - сборка production версии
- `yarn preview` - локальный просмотр production сборки
- `yarn lint` - проверка кода с ESLint

## 🏗 Структура проекта

```
src/
├── api/            # API приложения
├── components/     # Компоненты приложения
├── context/        # Контекст для хука useContext
├── hooks/          # Кастомные хуки
├── layouts/        # Лейауты приложения
├── providers/      # Провайдеры для хука useContext
├── App.tsx         # Главный компонент приложения
├── main.tsx        # Точка входа
├──vite-env.d.ts    # Типы Vite
```

## 🔧 Конфигурация

- `vite.config.ts` - конфигурация Vite
- `tsconfig.json` - конфигурация TypeScript
- `.eslintrc.cjs` - конфигурация ESLint
- `yarn.lock` - версии зависимостей
