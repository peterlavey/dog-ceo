import {shallow} from "enzyme";
import Breeds from "./index";

const initialState = {
    breeds: [
        {
            displayName: "Breed 1",
            name: "breed 1",
            srcImage: "http://test1.png"
        },
        {
            displayName: "Breed 2",
            name: "breed 2",
            srcImage: "http://test2.png"
        },
        {
            displayName: "Breed 3",
            name: "breed 3",
            srcImage: "http://test3.png"
        }
    ]
};

describe('When Breeds is instantiated', ()=> {
    let component;
    let breedCards = ()=> component.find('Breed');

    beforeAll(()=> {
        component = shallow(<Breeds {...initialState}/>);
    });

    it('show three items', ()=> {
        expect(breedCards().length).toBe(initialState.breeds.length);
    });
});