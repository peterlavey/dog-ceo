export const sortAscBy = (prop)=> {
    return (a,b) => (a[prop] > b[prop]) ? 1 : ((b[prop] > a[prop]) ? -1 : 0)
};

export const capitalize = (str)=> {
    const SPACE_SEPARATOR = ' ';
    const words = str.toLowerCase().split(SPACE_SEPARATOR);
    return words
        .map((word)=> `${word.charAt(0).toUpperCase()}${word.substring(1)}`)
        .join(SPACE_SEPARATOR);
}