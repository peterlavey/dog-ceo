import React from "react";

const Default = ({hasMatch, children})=> {
    return hasMatch ? <></> : <>{children}</>
};

export default Default;