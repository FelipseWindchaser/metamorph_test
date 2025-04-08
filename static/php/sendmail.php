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
            "vvx@metamorph.group",
            "avk@metamorph.group",
            "snr@metamorph.group"
        ];

        // Формируем сообщение
        $subject = "=?UTF-8?B?".base64_encode("Новая заявка с сайта metamorph")."?=";
        
        // Формируем тело письма в HTML формате
        $body = "
        <html>
        <head>
            <title>Новая заявка с сайта metamorph</title>
        </head>
        <body>
            <p><strong>Новая заявка с сайта metamorph</strong></p>
            <p><strong>Имя:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Телефон:</strong> $phone</p>
            <p><strong>Сообщение:</strong> $message</p>
        </body>
        </html>";

        // Расширенные заголовки
        $headers = array(
            'MIME-Version: 1.0',
            'Content-Type: text/html; charset=UTF-8',
            'From: Metamorph <no-reply@metamorph.com>',
            'Reply-To: ' . $email,
            'X-Mailer: PHP/' . phpversion(),
            'X-Priority: 1',
        );

        // Преобразуем массив заголовков в строку
        $headers = implode("\r\n", $headers);

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
            echo 'Данные успешно отправлены';
        } else {
            echo 'Ошибка при отправке данных';
        }
    } else {
        // Обработка ошибок, если JSON некорректный
        echo 'Некорректные данные';
    }
}
?>
