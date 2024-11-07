import { useQuery } from "@tanstack/react-query";
import { Pokemon } from "../types/pokemon";
import PokemonRow from "./PokemonRow";
import React from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Image from "next/image";

interface PokedexTableProps {
  pokemonArray: string[];
}

function PokedexTable({pokemonArray}: PokedexTableProps){
  console.log('data at PokedexTable is', pokemonArray)

  function generateUrl(pokemonArray: string[]): string {
    const baseUrl = "http://localhost:3000/api/pokemons";
    const queryParams = pokemonArray.map((name, index) => `name[${index}]=${encodeURIComponent(name)}`).join("&");
    return `${baseUrl}?${queryParams}`;
  }

  const getData = async (pokemonArray: string[]): Promise<Pokemon[]> => {
    const url = generateUrl(pokemonArray)
    console.log('url generated is', url)
    const response = await fetch(
      url,
    )
    const data = await response.json()
    console.log('getData after api return', data)
    return data
  }

  const { isPending, error, data: pokemons } = useQuery({
    queryKey: ['pokemonsData'],
    queryFn: () => (getData(pokemonArray)),
    });
  
  if (isPending) {
    return <div>'Loading...'</div>;
  }

  if  (error) {
    return 'An error has occurred: ' + error.message;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell>Pokemon ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Sprite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemons.map((pokemon) => (
            <TableRow
              key={pokemon.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {pokemon.id}
              </TableCell>
              <TableCell align="right">{pokemon.name}</TableCell>
              <TableCell align="right">{pokemon.type}</TableCell>
              <TableCell align="right">
                <Image width={130} height={110} src={pokemon.sprite} alt={`${pokemon.name}'s Image`} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default React.memo(PokedexTable)