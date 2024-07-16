//src/app//api/auth.js

import fs from 'fs'; //npm install fs
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    // Путь к файлу, куда будем сохранять данные
    const filePath = path.join(process.cwd(), 'data', 'users.json');

    // Чтение текущего содержимого файла
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const users = JSON.parse(fileData);

    // Добавление новых данных
    users.push({ name, email, password });

    // Запись обновленных данных обратно в файл
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    res.status(200).json({ message: 'User added successfully!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
