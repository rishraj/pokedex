/* import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  console.log('url which reached API is', url)
  try{
    console.log('url is', url)
    const searchParams = new URLSearchParams(url.searchParams);
    console.log('searchParams is', searchParams)
    const pokemon = await prisma.pokemon.findUnique({
      where: {
        name: searchParams.get('name')!,
      },
    })
    console.log('data after prisma query is', pokemon)
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
} */