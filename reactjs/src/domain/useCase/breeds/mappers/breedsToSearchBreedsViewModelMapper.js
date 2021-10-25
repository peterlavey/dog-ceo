import SearchBreedsViewModel from "../../../../presentation/views/SearchBreeds/SearchBreedsViewModel";
import BreedModel from "../../../../presentation/models/breedModel";
import {capitalize} from "../../../../utils";


const breedToBreedModel = (breed)=> {
    return new BreedModel(capitalize(breed.name), breed.name, breed.srcImage);
};

const BreedsToSearchBreedsViewModelMapper = {
    map: (breeds)=> {
        const breedsModel = breeds.map(breedToBreedModel);
        return new SearchBreedsViewModel(breedsModel);
    }
};

export default BreedsToSearchBreedsViewModelMapper;

