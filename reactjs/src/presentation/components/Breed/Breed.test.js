import Breed from "./index";
import {mount} from "enzyme";

const initialState = {
    name: "Name Test",
    srcImage: "http://test.png"
};

describe('When Breed is instantiated', ()=> {
    let component;
    let textName = ()=> component.find('.MuiTypography-h5').at(0);
    let img = ()=> component.find('img');

    beforeAll(()=> {
        component = mount(<Breed {...initialState}/>);
    });

    it('shows name passed by prop', ()=> {
        expect(textName().text()).toBe(initialState.name);
    });

    it('shows image source passed by prop', ()=> {
        expect(img().prop('src')).toBe(initialState.srcImage);
    });
});