import {request} from "../../httpRequest";


export const getBreedsNames = ()=> {
    return request.get('/breeds/list/all').then((res)=> res.data.message);
};

export const getBreedImage = (breed)=> {
    return request.get(`/breed/${breed}/images/random`).then((res)=> res.data.message);
};

export const getSubBreedImage = (breed, subBreed)=> {
    return request.get(`/breed/${breed}/${subBreed}/images/random`).then((res)=> res.data.message);
}