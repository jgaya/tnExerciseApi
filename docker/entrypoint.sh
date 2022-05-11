#!/bin/bash
set -e
cmd="$@"

echo "Checking MySQL..."

until mysql -htn_mysql -uroot -p$MYSQL_ROOT_PASSWORD -e 'status' &> /dev/null; do
  echo "MySQL is unavailable - sleeping..."
  sleep 2
done

echo "MySQL is up - executing command"

exec $cmd
