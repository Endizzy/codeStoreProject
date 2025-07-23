FROM php:8.1-apache

# Устанавливаем необходимые расширения PHP
RUN docker-php-ext-install pdo pdo_mysql mysqli

# Устанавливаем composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Копируем код из папки php-api в контейнер
COPY php-api/ /var/www/html/

# Устанавливаем зависимости composer
RUN composer install

# Назначаем владельца файлов (важно для Apache)
RUN chown -R www-data:www-data /var/www/html/

EXPOSE 80

CMD ["apache2-foreground"]
