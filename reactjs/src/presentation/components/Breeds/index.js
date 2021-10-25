import Breed from "../Breed";
import {Grid} from "@mui/material";
import PropTypes from "prop-types";
import {BreedModelPropType} from "../../models/breedModel";

const Breeds = ({breeds})=> {
    return (
        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
            {
                breeds.map((breed, index)=> (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={`${breed.name}-${index}`}>
                        <Breed {...breed}/>
                    </Grid>
                ))
            }
        </Grid>
    )
};

Breeds.propTypes = {
    breeds: PropTypes.arrayOf(PropTypes.shape(BreedModelPropType))
}

export default Breeds;