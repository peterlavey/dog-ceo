import PropTypes from "prop-types";

export default class Breed {
    constructor(name, srcImage){
        this.name = name;
        this.srcImage = srcImage;
    }
};

export const BreedPropType = {
    name: PropTypes.string.isRequired,
    srcImage: PropTypes.string.isRequired
};