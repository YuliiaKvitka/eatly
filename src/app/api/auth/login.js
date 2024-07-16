// src/app/api/auth/login.js

import { NextResponse } from 'next/server';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/data/users.json');

export async function POST(request) {
    const { email, password } = await request.json();

    try {
        const fileData = require(filePath);
        const users = JSON.parse(fileData);

        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            return NextResponse.json({ message: 'Login successful' });
        } else {
            return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
        }
    } catch (error) {
        console.error('Error reading users file:', error);
        return NextResponse.json({ error: 'Error reading users file' }, { status: 500 });
    }
}
