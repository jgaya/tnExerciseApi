#!/bin/bash

echo "Starting tests..."

mysql -hasmsapi_dev_mysql -uroot -p$MYSQL_ROOT_PASSWORD -e "CREATE DATABASE IF NOT EXISTS ${MYSQL_DATABASE}_test;"

if [[ "watch" = "$1" ]]; then
  cmd="npm run test:watch"
elif [[ "coverage" = "$1" ]]; then
  cmd="npm run coverage"
else
  cmd="npm run test"
fi

echo "Running $cmd"

exec $cmd
