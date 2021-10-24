import {TextField} from "@mui/material";
import PropTypes from "prop-types";


const FilterInput = ({value, handleChange, onAddFilter})=> {
    const onPressEnter = ({key})=> {
        if (key === 'Enter') {
            onAddFilter();
        }
    };

    return (
        <TextField
            fullWidth
            autoFocus
            id="standard-search"
            label="Breed filter"
            placeholder="Ej: poodle"
            type="search"
            variant="standard"
            margin="dense"
            value={value}
            onChange={handleChange}
            onKeyDown={onPressEnter}
        />
    );
};

FilterInput.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    onAddFilter: PropTypes.func.isRequired
};

export default FilterInput;