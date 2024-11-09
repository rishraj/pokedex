import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import PokedexTable from "./components/PokedexTable";
import PokemonRow from "./components/PokemonRow";
import styles from "./page.module.css";
import PokemonForm from "./components/PokemonForm";
import AutoComplete from "./components/SelectPokemon";
import SelectPokemon from "./components/SelectPokemon";

const queryClient = new QueryClient()


export default async function Home() {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return (
      <>
        <PokemonForm />
      </>
    );
  }
  else{
    return <p>Base URL is empty</p>
  }
}
