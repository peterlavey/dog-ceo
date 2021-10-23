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

    const breeds = breedNames.map((breed, index)=> {
        return {
            name: breed,
            srcImage: breedImages[index],
        }
    });

    const subBreeds = breedNames.filter((breed)=> breedsObject[breed].length).flatMap((breed, index)=> {
        return breedsObject[breed].map((subBreed)=> {
            return {
                name: `${breed} ${subBreed}`,
                srcImage: subBreedImagesObj[subBreed]
            }
        });
    });

    return [...breeds, ...subBreeds].sort(sortAscBy("name"));
};

const sortAscBy = (prop)=> {
    return (a,b) => (a[prop] > b[prop]) ? 1 : ((b[prop] > a[prop]) ? -1 : 0)
}

const GETBreeds = ()=> {
    return axios.get('https://dog.ceo/api/breeds/list/all').then((res)=> res.data.message);
};

const GETBreedImage = (breed)=> {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images/random`).then((res)=> res.data.message);
};

const GETSubBreedImage = (breed, subBreed)=> {
    return axios.get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`).then((res)=> res.data.message);
}