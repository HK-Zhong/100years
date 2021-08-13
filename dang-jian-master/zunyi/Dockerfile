FROM nginx
COPY ./dist /dist
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN mkdir /etc/nginx/temp/ /etc/nginx/logs/
CMD nginx
