import React, {useState} from "react";
import PropTypes from "prop-types";


const Switch = ({value, children})=> {
    const [hasMatch, setHasMatch] = useState(false);
    const onMatchFound = ()=> setHasMatch(true);

    return React.Children.map(children, (child)=> {
        return React.cloneElement(child, {value, onMatchFound, hasMatch});
    });
};

Switch.propTypes = {
    value: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default Switch;