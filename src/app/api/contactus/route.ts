'use server';

import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const response = await prisma.message.create({
      data: {
        email: data.email,
        name: data.name,
        message: data.message,
        sujet: data.subject, 
      },
    });

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
