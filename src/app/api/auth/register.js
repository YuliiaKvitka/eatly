// src/app/api/auth/register.js


import path from 'path';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { name, email, password } = req.body;

            // Логика сохранения данных, например, в базу данных или файл
            // В данном примере, данные выводятся в консоль
            console.log(`Received registration request: ${name}, ${email}`);

            // Ваша логика сохранения данных, например, в базу данных
            // В данном примере, просто возвращаем успешное сообщение
            res.status(200).json({ message: 'Пользователь успешно зарегистрирован' });
        } catch (error) {
            console.error('Ошибка регистрации:', error);
            res.status(500).json({ error: 'Ошибка обработки регистрации' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Метод ${req.method} не разрешен. Используйте POST.`);
    }
}

