import {Chip} from "@mui/material";
import PropTypes from "prop-types";

const Filters = ({filters, onRemove})=> {
    return (
        <div>
            {
                filters.map((filter, index)=> (
                    <Chip
                        key={`${filter}-${index}`}
                        label={filter}
                        variant="outlined"
                        onDelete={()=> onRemove(filter)}
                        sx={{ mx: .5, mb: 1 }}
                    />
                ))
            }
        </div>
    );
};

Filters.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string),
    onRemove: PropTypes.func
}

export default Filters;