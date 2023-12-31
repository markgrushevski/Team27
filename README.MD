# Команда 27

## Участники
- Леонид @bonky_ou - фронтенд
- Алексей @amrylnikov - бекэнд
- Кирилл @KKorolevDev - дизайн

## Проект

### Стек

Frontend: HTML/CSS, Vue, Scss, vite, prettier, JS, UI/UX-дизайн
Backend: Python, Django, Postgresql, API, poetry

### Реализованные фичи + скрины

- Каждый раунд начинается с новой позиции карточек.
- Возможность открывать карточки.
- Непарные карточки автоматически закрываются, парные остаются открытыми.
- Ведется подсчет количества сделанных ходов.
- Предоставляется возможность начать игру заново после завершения предыдущей.
- После успешного завершения игры появляется экран поздравления.


### Инструкция по игре

1. Зайти на сайт проекта: [Memory Game](https://memory-27.vercel.app/)
2. Выбрать имя игрока и сложность.
![Form](https://github.com/markgrushevski/Team27/blob/main/backend/demonstration/3.png?raw=true)

3. Нажать кропку "Начать новую игру"
4. Начать игру, открывая карточки по очереди.
![Field](https://github.com/markgrushevski/Team27/blob/main/backend/demonstration/6.png?raw=true)

5. При обнаружении пары, они останутся открытыми.

![Correct](https://github.com/markgrushevski/Team27/blob/main/backend/demonstration/1.png?raw=true)

6. Если карточки не совпадают, они окрасятся в красный и закроются.

![Incorrect](https://github.com/markgrushevski/Team27/blob/main/backend/demonstration/2.png?raw=true)

7. Открыть все карточки для завершения игры.

## Инструкция по локальной развёртке

[Шаги по локальной установке и развёртке проекта]

1. Клонируем проект к себе
2. Запускаем консоль для сервера бэкэнда
3. Из папки бэкенда устанавливаем зависимости и запускаем командой:
    ```sh
    pip install --upgrade poetry && poetry build && poetry install && python3 manage.py runserver 8888
    ```
4. Запускаем вторую консоль для сервера фронтенда
5. Из папки фронтенда устанавливаем зависимости и запускаем командой: 
    ```sh
    npm ci && npm run build:local && npm run preview:local
    ```
6. Проект доступен по адресу, указанному в консоли фронтенда: http://localhost:4173/
7. (Опционально) Также запуск фронтенда локально в режиме разработки:
    ```sh 
   npm run dev:local 
   ```

## Ссылка на деплой
https://memory-27.vercel.app/

## Ссылка на проект в Figma
https://www.figma.com/file/4KsvT2mvKPWwtnhc4gKgLI/Jun-Hackathon?type=design&node-id=0%3A1&mode=design&t=ERF1T4H8JQBiZWUN-1
