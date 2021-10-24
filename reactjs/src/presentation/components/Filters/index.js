import {Chip} from "@mui/material";
import PropTypes from "prop-types";

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

Filters.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string),
    remove: PropTypes.func
}

export default Filters;