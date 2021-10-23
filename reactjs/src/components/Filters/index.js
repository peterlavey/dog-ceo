import {Chip} from "@mui/material";

const Filters = ({filters, remove})=> {
    return (
        <div>
            {
                filters.map((filter)=> (
                    <Chip label={filter} variant="outlined" onDelete={()=> remove(filter)} />
                ))
            }
        </div>
    );
};

export default Filters;