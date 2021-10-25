import ENDPOINT from "./endpoints";

const BreedDataSource = (request)=> {
    return {
        getBreedsNames: ()=> {
            return request.get(ENDPOINT.BREED_NAMES)
                .then((res)=> res.data.message);
        },
        getBreedImage: (breed)=> {
            return request.get(`${ENDPOINT.BREED_IMAGE.BASEPATH}/${breed}/${ENDPOINT.BREED_IMAGE.PATH}`)
                .then((res)=> res.data.message);
        },
        getSubBreedImage: (breed, subBreed)=> {
            return request.get(`${ENDPOINT.BREED_IMAGE.BASEPATH}/${breed}/${subBreed}/${ENDPOINT.BREED_IMAGE.PATH}`)
                .then((res)=> res.data.message);
        }
    };
};

export default BreedDataSource;