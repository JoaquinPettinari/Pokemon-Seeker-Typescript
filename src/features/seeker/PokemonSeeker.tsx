import { Grid, TextField, Button } from "@material-ui/core";
import { useState } from "react";

interface Props{
   onClickSearchPokemon: (pokemon: string) => void;
   resetListOfPokemons: () => void;
}

function PokemonSeeker(props : Props ) {
   const { onClickSearchPokemon, resetListOfPokemons } = props
   const [ pokemonSearched, setPokemonSearched ] = useState<string>('');

   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPokemonSearched(event.target.value)
   }

   return (
      <Grid container spacing={4} alignItems="center" justifyContent="center">
         <Grid item xs={10} sm={5}>
               <TextField
                  id="pokemon-seracher"
                  label="Search your pokemon"
                  fullWidth
                  variant="outlined"
                  onChange={onChange}
               />
         </Grid>
         <Grid item xs={10} sm={5}>
            <Button onClick={() => onClickSearchPokemon(pokemonSearched)} variant="contained">
               Search Pokemon
            </Button>
            <Button color="secondary" variant="contained" style={{ marginLeft: '10px'}} onClick={resetListOfPokemons}>
               Reset
            </Button>
         </Grid>
      </Grid>
   );
}

export { PokemonSeeker };
