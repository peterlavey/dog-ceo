import SearchBreedsPresenter from "./searchBreedsPresenter";
import SearchBreedsViewModel from "./SearchBreedsViewModel";
import BreedModel from "../../models/breedModel";
import {mount} from "enzyme";
import {act} from "react-dom/test-utils";


const useCase = {
    getBreeds: ()=> Promise.resolve(getBreedsMock)
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

jest.setTimeout(15000);

describe('When SearchBreedsPresenter is instantiated and its started', ()=> {
    let presenter;
    const currentState = ()=> presenter.find('Switch').prop('value');
    const filterInput = ()=> presenter.find('FilterInput input');
    const filters = ()=> presenter.find('Filters ForwardRef(Chip)');
    const removeFilterBtn = (index)=> filters().at(index).find('ForwardRef(CancelIcon)');
    const breeds = ()=> presenter.find('Breed');
    const noMatches = ()=> presenter.find('NoMatches h2');

    beforeAll( async ()=> {
        await act(async () => {
            presenter = mount(<SearchBreedsPresenter useCase={useCase}/>);
        });

        presenter.update();
    });

    it('the component its defined', ()=> {
        expect(presenter).toBeDefined()
    })

    it('the current state its "MATCHES_FOUND"', ()=> {
        expect(currentState()).toBe("MATCHES_FOUND")
    });

    it('shows breeds', ()=> {
        expect(breeds().length).toBe(getBreedsMock.breeds.length);
    });

    describe('and when an existing breed its put like filter', ()=> {
        beforeAll(()=> {
            filterInput().simulate('change', {
                target: {
                    value: 'poodle'
                }
            });
            filterInput().simulate('keydown', {key: 'Enter'});
        });

        it('shows the filter added', ()=> {
            expect(filters().at(0).text()).toBe('poodle');
        });

        it('shows filtered breeds', ()=> {
            expect(breeds().length).toBe(3);
        });

        describe('and when an unexisting breed its put like filter', ()=> {
            beforeAll(()=> {
                filterInput().simulate('change', {
                    target: {
                        value: 'unknown'
                    }
                });
                filterInput().simulate('keydown', {key: 'Enter'});
            });

            it('shows previous filtered breeds', ()=> {
                expect(breeds().length).toBe(3);
            });

            describe('and when the existing breed filter its removed', ()=> {
                beforeAll(()=> {
                    removeFilterBtn(0).simulate('click');
                });

                it('does not show breeds', ()=> {
                    expect(breeds().length).toBe(0);
                });

                it('the current state its "NO_MATCHES"', ()=> {
                    expect(currentState()).toBe("NO_MATCHES")
                });

                it('shows message "No matches found"', ()=> {
                    expect(noMatches().text()).toBe('No matches found');
                });

                describe('and when the last filter its removed', ()=> {
                    beforeAll(()=> {
                        removeFilterBtn(0).simulate('click');
                    });

                    it('shows all the breeds again', ()=> {
                        expect(breeds().length).toBe(getBreedsMock.breeds.length);
                    });

                    it('the current state its "MATCHES_FOUND"', ()=> {
                        expect(currentState()).toBe("MATCHES_FOUND")
                    });
                });
            });
        });
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