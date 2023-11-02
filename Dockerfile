# Указываем язык програмирования
FROM "node:18.18"

# Указываем папку где открывать терминал
WORKDIR /social_media

#Копируем все файлы в Докер
COPY . /social_media

#Установка зависимостей
RUN npm install

#указываем порт для работы
EXPOSE 3000


CMD [ "npm", "start" ]


#docker run -p 3000:3000 pay_system