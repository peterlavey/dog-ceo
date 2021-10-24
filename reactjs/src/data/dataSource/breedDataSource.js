import axios from "axios";


export const getBreedsNames = ()=> {
    return axios.get('https://dog.ceo/api/breeds/list/all').then((res)=> res.data.message);
};

export const getBreedImage = (breed)=> {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images/random`).then((res)=> res.data.message);
};

export const getSubBreedImage = (breed, subBreed)=> {
    return axios.get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`).then((res)=> res.data.message);
}