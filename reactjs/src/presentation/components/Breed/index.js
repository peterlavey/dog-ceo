import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {BreedModelPropType} from "../../models/breedModel";

const Breed = ({displayName, name, srcImage})=> {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={srcImage}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {displayName}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

Breed.propTypes = BreedModelPropType;

export default Breed;