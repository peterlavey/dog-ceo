import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import PropTypes from 'prop-types';

const Breed = ({name, srcImage})=> {
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
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

Breed.propTypes = {
    name: PropTypes.string.isRequired,
    srcImage: PropTypes.string.isRequired
}

export default Breed;