import React from "react";

const Case = ({type, value, children})=> {
    const hasMatch = type === value;
    return hasMatch ? <>{children}</> : <></>
};

export default Case;