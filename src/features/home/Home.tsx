import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { PokemonSeeker } from "../seeker/PokemonSeeker";
import { fetchAllPokemons, pokemons, findPokemonByName } from "./homeSlice";
import { PokemonList } from "../pokemonList/PokemonList";
import { Alert } from "@material-ui/lab";

function Home() {
  const dispatch = useAppDispatch();
  const pokemonsData = useAppSelector(pokemons);
  const [ limit, setLimit ] = useState(20)

  useEffect(() => {
    dispatch(fetchAllPokemons(limit));
    setLimit(limit + 20)
  }, []);

  const onClickSearchPokemon = (pokemon: string) => {
    dispatch(findPokemonByName(pokemon));
  };

  const resetListOfPokemons = () => {
    const newLimit = 0
    dispatch(fetchAllPokemons(newLimit))
    setLimit(newLimit)
  }

  window.onscroll = function(ev: Event) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log("Im on bottom")
    }
  };

  return (
    <div className="App">
      <PokemonSeeker onClickSearchPokemon={onClickSearchPokemon} resetListOfPokemons={resetListOfPokemons} />
      {pokemonsData.error ? (
        <Alert severity="error" style={{ marginTop: "20px" }}>
          Something was wrong
        </Alert>
      ) : (
        <PokemonList />
      )}
    </div>
  );
}

export { Home };
