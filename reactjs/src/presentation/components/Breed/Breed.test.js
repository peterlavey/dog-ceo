import Breed from "./index";
import {shallow} from "enzyme";

const initialState = {
    displayName: "Name Test",
    name: "name test",
    srcImage: "http://test.png"
};

describe('When Breed is instantiated', ()=> {
    let component;
    let textName = ()=> component.find('ForwardRef(Typography)');
    let img = ()=> component.find('ForwardRef(CardMedia)');

    beforeAll(()=> {
        component = shallow(<Breed {...initialState}/>);
    });

    it('shows name passed by prop', ()=> {
        expect(textName().text()).toBe(initialState.displayName);
    });

    it('shows image source passed by prop', ()=> {
        expect(img().prop('image')).toBe(initialState.srcImage);
    });
});