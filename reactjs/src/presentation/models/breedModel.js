import PropTypes from "prop-types";

class BreedModel {
    constructor(displayName, name, srcImage) {
        this.displayName = displayName;
        this.name = name;
        this.srcImage = srcImage;
    }
}

export const BreedModelPropType = {
    displayName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    srcImage: PropTypes.string.isRequired
};

export default BreedModel;