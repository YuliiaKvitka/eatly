// src/app/api/save-users.js

import path from 'path';
import fs from 'fs';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const usersData = await request.json();
        const filePath = path.join(process.cwd(), 'src/data/users.json');

        fs.writeFileSync(filePath, usersData, 'utf-8');

        return NextResponse.json({ message: 'Данные успешно сохранены' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Ошибка сохранения данных' }, { status: 500 });
    }
}
