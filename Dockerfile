FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
COPY README.md /usr/share/nginx/html/README.md
COPY config.js /usr/share/nginx/html/config.js
