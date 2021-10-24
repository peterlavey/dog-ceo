import {sortAscBy} from "../../utils";
import Breed from "../../domain/entity/Breed";


const BreedRepository = (BreedDataSource)=> {
    return {
        getBreeds: async ()=> {
            const breedsObject = await BreedDataSource.getBreedsNames();

            const breedNames = Object.keys(breedsObject);
            const subBreedsNames = breedNames
                .filter((breed)=> breedsObject[breed].length)
                .flatMap((breed)=> breedsObject[breed]);

            const breedImagePromises = breedNames
                .map((breed)=> BreedDataSource.getBreedImage(breed));

            const subBreedImagePromises = breedNames
                .filter((breed)=> breedsObject[breed].length)
                .flatMap((breed)=> breedsObject[breed]
                    .flatMap((subBreed)=> BreedDataSource.getSubBreedImage(breed, subBreed)));

            const breedImages = await Promise.all(breedImagePromises);
            const subBreedImages = await Promise.all(subBreedImagePromises);

            const subBreedImagesObj = {};
            subBreedsNames
                .forEach((subBreed, index)=> subBreedImagesObj[subBreed] = subBreedImages[index]);

            const breeds = breedNames
                .map((breed, index)=> new Breed(breed, breedImages[index]));

            const subBreeds = breedNames
                .filter((breed)=> breedsObject[breed].length)
                .flatMap((breed, index)=> breedsObject[breed]
                    .map((subBreed)=> new Breed(`${breed} ${subBreed}`, subBreedImagesObj[subBreed]))
                );

            return [...breeds, ...subBreeds].sort(sortAscBy("name"));
        }
    };
};

export default BreedRepository;