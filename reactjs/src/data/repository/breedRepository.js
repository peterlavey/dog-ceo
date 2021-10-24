import {sortAscBy} from "../../utils";
import {getBreedImage, getBreedsNames, getSubBreedImage} from "../dataSource/breedDataSource";
import Breed from "../../domain/entity/Breed";


export const getBreeds = async ()=> {
    const breedsObject = await getBreedsNames();

    const breedNames = Object.keys(breedsObject);
    const subBreedsNames = breedNames
        .filter((breed)=> breedsObject[breed].length)
        .flatMap((breed)=> breedsObject[breed]);

    const breedImagePromises = breedNames
        .map((breed)=> getBreedImage(breed));

    const subBreedImagePromises = breedNames
        .filter((breed)=> breedsObject[breed].length)
        .flatMap((breed)=> breedsObject[breed]
            .flatMap((subBreed)=> getSubBreedImage(breed, subBreed)));

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
};