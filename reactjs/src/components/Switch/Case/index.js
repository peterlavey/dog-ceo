import React, {useEffect} from "react";

const Case = ({type, value, onMatchFound, children})=> {
    const hasMatch = type === value;
    useEffect(()=> {
        if(hasMatch) onMatchFound();
    }, []);
    return hasMatch ? <>{children}</> : <></>
};

export default Case;