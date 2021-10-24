import BreedRepository from "./breedRepository";
import Breed from "../../domain/entity/Breed";


const dataSource = {
    getBreedsNames: ()=> new Promise((resolve => resolve(getBreedsNamesMock))),
    getBreedImage: (breed)=> new Promise((resolve => resolve(getBreedImageMock))),
    getSubBreedImage: (breed, subBreed)=> new Promise((resolve => resolve(getSubBreedImageMock)))
};

describe('When BreedRepository is instantiated', ()=> {
    let repository;
    beforeAll(()=> {
        repository = BreedRepository(dataSource);
    });

    it('and "getBreeds" its called return an array of breeds & sub breeds ordered by name', async ()=> {
        const result = await repository.getBreeds()
        expect(result).toStrictEqual(expected);
    });
});

const getBreedsNamesMock = {
    poodle: [
        "miniature",
        "toy"
    ],
    beagle: [],
    bulldog: [
        "frances"
    ]

};

const getBreedImageMock = "http://image/of/breed.png";

const getSubBreedImageMock = "http://image/of/sub/breed.png";

const expected = [
    new Breed("beagle", getBreedImageMock),
    new Breed("bulldog", getBreedImageMock),
    new Breed("bulldog frances", getSubBreedImageMock),
    new Breed("poodle", getBreedImageMock),
    new Breed("poodle miniature", getSubBreedImageMock),
    new Breed("poodle toy", getSubBreedImageMock),
];