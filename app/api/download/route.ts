import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const filePath = path.join(process.cwd(), 'files', 'warranty.pdf');
    const fileBuffer = fs.readFileSync(filePath);

    console.log(filePath)
    console.log(fileBuffer);

    return new NextResponse(fileBuffer, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="warranty.pdf"',
        },
    });
}

