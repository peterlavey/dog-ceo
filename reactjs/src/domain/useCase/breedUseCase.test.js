import Breed from "../../domain/entity/Breed";
import BreedUseCase from "./breedUseCase";
import BreedsToSearchBreedsViewModelMapper from "./mappers/breedsToSearchBreedsViewModelMapper";
import BreedModel from "../../presentation/models/breedModel";
import SearchBreedsViewModel from "../../presentation/views/SearchBreeds/SearchBreedsViewModel";


const repository = {
    getBreeds: ()=> new Promise((resolve => resolve(getBreedsMock))),
};

describe('When BreedUseCase is instantiated', ()=> {
    let useCase;
    beforeAll(()=> {
        useCase = BreedUseCase(
            repository,
            BreedsToSearchBreedsViewModelMapper
        )
    });

    it('and "getBreeds" its called return a SearchBreedsViewModel', async ()=> {
        const result = await useCase.getBreeds()
        expect(result).toStrictEqual(expected);
    });
});

const getBreedImageMock = "http://image/of/breed.png";

const getSubBreedImageMock = "http://image/of/sub/breed.png";

const getBreedsMock = [
    new Breed("beagle", getBreedImageMock),
    new Breed("bulldog", getBreedImageMock),
    new Breed("bulldog frances", getSubBreedImageMock),
    new Breed("poodle", getBreedImageMock),
    new Breed("poodle miniature", getSubBreedImageMock),
    new Breed("poodle toy", getSubBreedImageMock),
];

const expected = new SearchBreedsViewModel([
    new BreedModel("Beagle", "beagle", getBreedImageMock),
    new BreedModel("Bulldog", "bulldog", getBreedImageMock),
    new BreedModel("Bulldog Frances", "bulldog frances", getSubBreedImageMock),
    new BreedModel("Poodle", "poodle", getBreedImageMock),
    new BreedModel("Poodle Miniature", "poodle miniature", getSubBreedImageMock),
    new BreedModel("Poodle Toy", "poodle toy", getSubBreedImageMock),
]);