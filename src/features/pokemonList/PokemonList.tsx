import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    CircularProgress,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import { useAppSelector } from "../../app/hooks";
import { URI_SRC_IMG } from "../../utils/constants";
import { capitalizeFirstLetter } from "../../utils/utils";
import { pokemons } from "../home/homeSlice";
interface Pokemon {
    name: string;
    url: string;
}
const useStyles = makeStyles({
    media: {
        height: 200,
    },
    cardContent: {
        textAlign: 'center'
    }
});

function PokemonList() {
    const pokemonsData = useAppSelector(pokemons);
    const { data, fetching } = pokemonsData;
    const classes = useStyles();

    const renderItem = (item: Pokemon, index: number) => {
        const uriPokemon = `${URI_SRC_IMG}${index + 1}.png`;

        return (
            <Grid item xs={11} sm={6} md={4} lg={3} key={index}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={uriPokemon}
                            title="Contemplative Reptile"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {capitalizeFirstLetter(item.name)}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        );
    };

    return (
        <Grid container spacing={4} justifyContent="center">
            {fetching ? (
                <Grid item>
                    <CircularProgress />
                </Grid>
            ) : (
                data.map(renderItem)
            )}
        </Grid>
    );
}

export { PokemonList };
