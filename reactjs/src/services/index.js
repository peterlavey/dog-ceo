import axios from "axios";

export const GETBreedsImages = async ()=> {
    const breedsObject = await GETBreeds();

    const breedNames = Object.keys(breedsObject);
    const subBreedsNames = breedNames.filter((breed)=> breedsObject[breed].length).flatMap((breed)=> breedsObject[breed]);

    const breedImagePromises = breedNames.map((breed)=> GETBreedImage(breed));
    const subBreedImagePromises = breedNames.filter((breed)=> breedsObject[breed].length).flatMap((breed)=> breedsObject[breed].flatMap((subBreed)=> GETSubBreedImage(breed, subBreed)));

    const breedImages = await Promise.all(breedImagePromises);
    const subBreedImages = await Promise.all(subBreedImagePromises);

    const subBreedImagesObj = {};
    subBreedsNames.forEach((subBreed, index)=> subBreedImagesObj[subBreed] = subBreedImages[index]);

    return breedNames.map((breed, index)=> {
        return {
            name: breed,
            srcImage: breedImages[index],
            subBreed: breedsObject[breed].map((subBreed)=> {
                return {
                    name: subBreed,
                    srcImage: subBreedImagesObj[subBreed]
                }
            })
        }
    });
};

const GETBreeds = ()=> {
    return axios.get('https://dog.ceo/api/breeds/list/all').then((res)=> res.data.message);
};

const GETBreedImage = (breed)=> {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images/random`).then((res)=> res.data.message);
};

const GETSubBreedImage = (breed, subBreed)=> {
    return axios.get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`).then((res)=> res.data.message);
}