const BreedDataSource = (request)=> {
    return {
        getBreedsNames: ()=> {
            return request.get('/breeds/list/all').then((res)=> res.data.message);
        },
        getBreedImage: (breed)=> {
            return request.get(`/breed/${breed}/images/random`).then((res)=> res.data.message);
        },
        getSubBreedImage: (breed, subBreed)=> {
            return request.get(`/breed/${breed}/${subBreed}/images/random`).then((res)=> res.data.message);
        }
    };
};

export default BreedDataSource;