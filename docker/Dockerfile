FROM node:8.11.4-stretch

RUN apt-get update && apt-get install -y \
  mysql-client \
  cron \
  dos2unix
WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY ./docker/entrypoint.sh /tmp/entrypoint.sh
RUN chmod +x /tmp/entrypoint.sh

RUN dos2unix /tmp/entrypoint.sh

ENTRYPOINT ["/tmp/entrypoint.sh"]

COPY ./docker/run.sh /tmp/run.sh
RUN  chmod +x /tmp/run.sh

# COPY docker/run_test.sh /tmp/run_test.sh
# RUN chmod +x /tmp/run_test.sh
RUN dos2unix /tmp/run.sh

CMD /tmp/run.sh
