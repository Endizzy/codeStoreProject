<?php
class Database {
    private static $pdo = null;

    public static function getConnection() {
        if (self::$pdo === null) {
            $host = '127.0.0.1';
            $db = 'codestore';
            $user = 'root';       // или другой пользователь MySQL
            $pass = '';           // пароль, если есть
            $charset = 'utf8mb4';

            $dsn = "mysql:host=$host;dbname=$db;charset=$charset";

            $options = [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => false,
            ];

            try {
                self::$pdo = new PDO($dsn, $user, $pass, $options);
            } catch (PDOException $e) {
                throw new RuntimeException('Ошибка подключения к БД: ' . $e->getMessage());
            }
        }
        return self::$pdo;
    }
}
