import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try{
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const pokemons = await prisma.pokemon.findMany({
      where: {
        type: {
          equals: searchParams.get('type')!,
        },
      },
    })
    return NextResponse.json(
      pokemons,
      { status: 200}
    );
  }catch(error){
    return NextResponse.json(
      { message: 'Could not get Pokemon Type' },
      { status: 500}
    );
  }
}