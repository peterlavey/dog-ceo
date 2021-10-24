import {render} from "enzyme";
import BreedsSkeleton from "./index";

const initialState = {
    quantity: 15
};

describe('When BreedsSkeleton is instantiated', ()=> {
    let component;
    let skeletonCards = ()=> component.find('.MuiGrid-item');

    beforeAll(()=> {
        component = render(<BreedsSkeleton {...initialState}/>);
    });

    it('shows quantity of items passed by prop', ()=> {
        expect(skeletonCards().length).toBe(initialState.quantity);
    });
});