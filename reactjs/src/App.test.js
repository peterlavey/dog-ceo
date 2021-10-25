import {shallow} from "enzyme";
import App from "./App";

describe('When App is instantiated', ()=> {
    let component;

    beforeAll(()=> {
        component = shallow(<App/>);
    });

    it('its shows correctly', ()=> {
        expect(component).toBeDefined();
    });
});