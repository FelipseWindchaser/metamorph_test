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

    //    $subject = htmlspecialchars(trim($data['subject'])) == "Вопрос" ? "Новый вопрос с сайта metamorph" ? "Новая заявка с сайта metamorph"

       // Формируем сообщение
       $to = "halocost1@gmail.com"; // Кому отправляем
       $subject = "Новая заявка с сайта metamorph";
       $body = "Имя: $name\nEmail: $email\nТелефон: $phone\nСообщение: $message";
       $headers = "From: no-reply@metamorph.com";

       // Отправка письма
       if (mail($to, $subject, $body, $headers)) {
           echo 'Письмо успешно отправлено';
       } else {
           echo 'Ошибка при отправке письма';
       }
    } else {
        // Обработка ошибок, если JSON некорректный
        echo 'Некорректные данные';
    }
}
?>
