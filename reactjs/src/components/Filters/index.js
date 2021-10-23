import {Chip} from "@mui/material";

const Filters = ({filters, remove})=> {
    return (
        <div>
            {
                filters.map((filter, index)=> (
                    <Chip
                        key={`${filter}-${index}`}
                        label={filter}
                        variant="outlined"
                        onDelete={()=> remove(filter)}
                        sx={{ mx: .5, mb: 1 }}
                    />
                ))
            }
        </div>
    );
};

export default Filters;