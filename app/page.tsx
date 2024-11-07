import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import PokedexTable from "./components/PokedexTable";
import PokemonRow from "./components/PokemonRow";
import styles from "./page.module.css";
import PokemonForm from "./components/PokemonForm";
import AutoComplete from "./components/SelectPokemon";
import SelectPokemon from "./components/SelectPokemon";

const queryClient = new QueryClient()


export default async function Home() {
  return (
    <>
      <PokemonForm />
    </>
  );

  /* return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  ); */

  /* const pokemon = {
    id: 2,
    name: "Ivysaur",
    type: "Grass",
    sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png",
  };
  const pokemonArray = [pokemon, pokemon, pokemon, pokemon, pokemon];
  return (
    <>
        <PokemonRow pokemon={pokemon}/>
        <PokedexTable pokemonArray={pokemonArray}/>
    </>
  ); */


    /* <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing
          <code className={styles.code}>app/page.tsx</code>
        </p>
      </div>
    </main> */
}

function Example() {
  const { isPending, error, data } = useQuery({
    queryKey: ['pokemonData'],
    queryFn: async () => {
      const response = await fetch(
        'api/getPokemons?name[0]=Ivysaur&name[1]=Squirtle&name[2]=Caterpie',
      )
      return await response.json() 
    }
  })

  if (isPending) return 'Loading...'

  if  (error) return 'An error has occurred: ' + error.message

  return (
    <>
      <PokedexTable pokemonArray={data}/>
    </>
  )
}
