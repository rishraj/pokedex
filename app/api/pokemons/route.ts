import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try{
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.searchParams);
    console.log('searchParams is', searchParams)
    let response = []
    for (let [_, value] of searchParams.entries()){
      const pokemon = await prisma.pokemon.findUnique({
        where: {
          name: value!,
        },
      })
      response.push(pokemon)
    }
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
}