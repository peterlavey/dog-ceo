import Breed from "../Breed";
import {Grid} from "@mui/material";

const Breeds = ({breeds})=> {
    return (
        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
            {
                breeds.map((breed, index)=> (
                    <Grid item xs={3} key={`${breed.name}-${index}`}>
                        <Breed {...breed}/>
                    </Grid>
                ))
            }
        </Grid>
    )
};

export default Breeds;