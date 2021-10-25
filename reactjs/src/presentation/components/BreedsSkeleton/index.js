import {Card, CardActionArea, CardContent, Grid, Skeleton} from "@mui/material";

const BreedsSkeleton = ({quantity})=> {
    return (
        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
            {
                [...Array(quantity).keys()].map((el)=> (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={`skeleton-${el}`}>
                        <Card>
                            <CardActionArea>
                                <Skeleton variant="rectangular" height={140} />
                                <CardContent>
                                    <Skeleton variant="text"/>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    );
};

export default BreedsSkeleton;