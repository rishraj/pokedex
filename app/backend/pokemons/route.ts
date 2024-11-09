/* import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try{
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.searchParams);
    console.log('searchParams is', searchParams)
  
    const names = []
    for (let [_, value] of searchParams.entries()){
      names.push(value!)
    }

    const response = await prisma.pokemon.findMany({
      where: {
          name: { in: names },
      }
    })

    return NextResponse.json(
      response,
      { status: 200}
    );
  }catch(error){
    return NextResponse.json(
      { message: 'Could not get Pokemons' },
      { status: 500}
    );
  }
} */