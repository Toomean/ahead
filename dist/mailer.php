<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
		$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $phone = strip_tags(trim($_POST["phone"]));
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($email) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            //http_response_code(400);
            header("HTTP/1.1 400 Bad request");
            echo "Похоже, вы заполнили не все поля. Попробуйте еще раз.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "at@grapheme.ru";

        // Set the email subject.
        $subject = "Новое сообщение от $name";

        // Build the email content.
        $email_content = "Имя: $name\n";
        $email_content .= "Телефон: $phone\n\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Сообщение:\n$message\n";

        // Build the email headers.
        $email_headers = "Письмо от: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            //http_response_code(200);
            header("HTTP/1.1 200 OK");
            echo "Ваше сообщение отправлено";
        } else {
            // Set a 500 (internal server error) response code.
            //http_response_code(500);
            header("HTTP/1.1 500 Internal server error");
            echo "Произошла ошибка с отправкой. Поздравляем, вы застали это редкое явление! Заполните форму еще раз.(500)";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        //http_response_code(403);
        header("HTTP/1.1 500 Access denied");
        echo "Произошла ошибка с отправкой. Поздравляем, вы застали это редкое явление! Заполните форму еще раз.(403)";
    }

?>