import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { PokemonSeeker } from "../seeker/PokemonSeeker";
import { fetchBasicPokemons, fetchMorePokemons, pokemons, findPokemonByName } from "./homeSlice";
import { PokemonList } from "../pokemonList/PokemonList";
import { Alert } from "@material-ui/lab";

function Home() {
  const dispatch = useAppDispatch();
  const pokemonsData = useAppSelector(pokemons);

  useEffect(() => {
    resetPokemonList()
  }, []);

  const onClickSearchPokemon = (pokemon: string) => {
    dispatch(findPokemonByName(pokemon));
  };

  const fetchPokemons = () => {
    dispatch(fetchMorePokemons())
  }

  const resetPokemonList = () => {
    dispatch(fetchBasicPokemons());
  }

  window.onscroll = function(ev: Event) {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight + 14) && !pokemonsData.fetching && !pokemonsData.fetchingMorePoke && !pokemonsData.firstUpdate) {
      fetchPokemons()
    }
  };

  return (
    <div className="App">
      <PokemonSeeker onClickSearchPokemon={onClickSearchPokemon} resetListOfPokemons={resetPokemonList} />
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
