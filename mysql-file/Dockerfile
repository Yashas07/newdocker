FROM mysql:5.7
MAINTAINER yashas gcyashu1997@gmail.com
ENV MYSQL_DATABASE=newtest \
    MYSQL_ROOT_PASSWORD=password
COPY ./test-dump.sql /docker-entrypoint-initdb.d/