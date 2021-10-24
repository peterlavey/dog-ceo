import SearchBreedsPresenter from "./searchBreedsPresenter";
import SearchBreedsViewModel from "./SearchBreedsViewModel";
import BreedModel from "../../models/breedModel";
import {mount} from "enzyme";
import {act} from "react-dom/test-utils";


const useCase = {
    getBreeds: ()=> new Promise((resolve => resolve(getBreedsMock)))
};

describe('When SearchBreedsPresenter is instantiated and its loading', ()=> {
    let presenter;
    const currentState = ()=> presenter.find('Switch').prop('value');

    beforeAll(()=> {
        presenter = mount(<SearchBreedsPresenter useCase={useCase}/>);
    });

    it('the current state its "LOADING"', ()=> {
        expect(currentState()).toBe("LOADING")
    });
});

describe('When SearchBreedsPresenter is instantiated and its started', ()=> {
    let presenter;
    const currentState = ()=> presenter.find('Switch').prop('value');

    it("asd", async ()=> {
        presenter = mount(<SearchBreedsPresenter useCase={useCase}/>);
        await act(async () => {
            setTimeout(async ()=> {
                await Promise.resolve(presenter);
                await new Promise(resolve => setImmediate(resolve));
                presenter.update();
            }, 2000)
        });
    });

    it('the current state its "LOADING"', ()=> {
        expect(currentState()).toBe("LOADING")
    });
});

const getBreedImageMock = "http://image/of/breed.png";
const getSubBreedImageMock = "http://image/of/sub/breed.png";
const getBreedsMock = new SearchBreedsViewModel([
    new BreedModel("Beagle", "beagle", getBreedImageMock),
    new BreedModel("Bulldog", "bulldog", getBreedImageMock),
    new BreedModel("Bulldog Frances", "bulldog frances", getSubBreedImageMock),
    new BreedModel("Poodle", "poodle", getBreedImageMock),
    new BreedModel("Poodle Miniature", "poodle miniature", getSubBreedImageMock),
    new BreedModel("Poodle Toy", "poodle toy", getSubBreedImageMock),
]);