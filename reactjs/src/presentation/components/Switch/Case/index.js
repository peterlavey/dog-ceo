import React, {useEffect} from "react";
import PropTypes from "prop-types";


const Case = ({type, value, onMatchFound, children})=> {
    const hasMatch = type === value;
    useEffect(()=> {
        if(hasMatch) onMatchFound();
    }, [hasMatch, onMatchFound]);
    return hasMatch ? <>{children}</> : <></>
};

Case.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    onMatchFound: PropTypes.func,
    children: PropTypes.element
}

export default Case;