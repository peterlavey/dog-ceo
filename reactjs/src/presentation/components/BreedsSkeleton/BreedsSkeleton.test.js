import {shallow} from "enzyme";
import BreedsSkeleton from "./index";

const initialState = {
    quantity: 15
};

describe('When BreedsSkeleton is instantiated', ()=> {
    let component;
    let skeletonCards = ()=> component.find('ForwardRef(Card)');

    beforeAll(()=> {
        component = shallow(<BreedsSkeleton {...initialState}/>);
    });

    it('shows quantity of items passed by prop', ()=> {
        expect(skeletonCards().length).toBe(initialState.quantity);
    });
});