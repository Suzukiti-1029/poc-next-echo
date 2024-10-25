FROM mysql:8.0.39

EXPOSE 3306

COPY ./etc/my.cnf /etc/mysql/conf.d/my.cnf
RUN chmod go-w /etc/mysql/conf.d/my.cnf
RUN chmod -R go-w /etc/mysql/conf.d/
