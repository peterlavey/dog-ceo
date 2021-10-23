import React, {useState} from "react";

const Switch = ({value, children})=> {
    const [hasMatch, setHasMatch] = useState(false);
    const onMatchFound = ()=> setHasMatch(true);

   /*return children.map((child)=> {
        return React.cloneElement(child, {value, onMatchFound, hasMatch});
    })*/

    return React.Children.map(children, (child)=> {
        return React.cloneElement(child, {value, onMatchFound, hasMatch});
    });
};

export default Switch;