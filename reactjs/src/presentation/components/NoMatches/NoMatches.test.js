import {mount} from "enzyme";
import NoMatches from "./index";


describe('When NoMatches is instantiated', ()=> {
    let component;
    let text = ()=> component.find('h2');

    beforeAll(()=> {
        component = mount(<NoMatches/>);
    });

    it('shows the message "No matches found"', ()=> {
        expect(text().text()).toBe("No matches found");
    });
});