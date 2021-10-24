import {render} from "enzyme";
import Breeds from "./index";

const initialState = {
    breeds: [
        {
            name: "Breed 1",
            srcImage: "http://test1.png"
        },
        {
            name: "Breed 2",
            srcImage: "http://test2.png"
        },
        {
            name: "Breed 3",
            srcImage: "http://test3.png"
        }
    ]
};

describe('When Breeds is instantiated', ()=> {
    let component;
    let breedCards = ()=> component.find('.MuiGrid-item');

    beforeAll(()=> {
        component = render(<Breeds {...initialState}/>);
    });

    it('show three items', ()=> {
        expect(breedCards().length).toBe(initialState.breeds.length);
    });
});