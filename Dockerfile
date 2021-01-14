FROM node:14

WORKDIR /app

COPY app .

EXPOSE 80

COPY ./start.sh /etc/start.sh

RUN chmod +x /etc/start.sh

RUN npm install

RUN npm i -g @adonisjs/cli

CMD ["/etc/start.sh"]