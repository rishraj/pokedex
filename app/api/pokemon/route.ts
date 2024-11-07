import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try{
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const pokemon = await prisma.pokemon.findUnique({
      where: {
        name: searchParams.get('name')!,
      },
    })
    return NextResponse.json(
      pokemon,
      { status: 200}
    );
  }catch(error){
    return NextResponse.json(
      { message: 'Could not get Pokemon' },
      { status: 500}
    );
  }
}