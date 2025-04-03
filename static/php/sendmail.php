<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Получаем JSON-данные из тела запроса
    $json = file_get_contents('php://input');

    // Преобразуем JSON в ассоциативный массив
    $data = json_decode($json, true);

    if ($data) {

        // Валидация обязательных полей
        if (empty($data['name']) || empty($data['email'])) {
            echo "Ошибка: имя и email обязательны!";
            exit;
        }

        // Проверяем обязательные поля
        $name = !empty($data['name']) ? htmlspecialchars(trim($data['name'])) : 'Не указано';
        $email = !empty($data['email']) ? htmlspecialchars(trim($data['email'])) : 'Не указано';
        $phone = !empty($data['phone']) ? htmlspecialchars(trim($data['phone'])) : 'Не указано';
        $message = !empty($data['message']) ? htmlspecialchars(trim($data['message'])) : 'Не указано';

        // Список email-адресов, куда нужно отправить письмо
        $recipients = [
            "felipsesolaris@gmail.com",
         
        ];

        // Формируем сообщение
        $subject = "Новая заявка с сайта metamorph";
        $body = "Имя: $name\nEmail: $email\nТелефон: $phone\nСообщение: $message";
        $headers = "From: no-reply@metamorph.com";

        // Флаг для отслеживания успешной отправки
        $allSent = true;

        // Отправка письма каждому получателю
        foreach ($recipients as $to) {
            if (!mail($to, $subject, $body, $headers)) {
                $allSent = false;
            }
        }

        // Результат отправки
        if ($allSent) {
            echo 'Письма успешно отправлены';
        } else {
            echo 'Ошибка при отправке писем';
        }
    } else {
        // Обработка ошибок, если JSON некорректный
        echo 'Некорректные данные';
    }
}
?>
