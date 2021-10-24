import {mount} from "enzyme";
import FilterInput from "./index";
import {act} from "react-dom/test-utils";

let handleChangeCalled = false;
const handleChange = ()=> handleChangeCalled = true;

let initialState = {
    value: "poodle",
    handleChange,
    onAddFilter: jest.fn()
};

describe('When FilterInput is instantiated', ()=> {
    let component;
    let input = ()=> component.find('input');

    beforeAll(()=> {
        component = mount(<FilterInput {...initialState}/>);
    });

    it('shows value passed by prop', ()=> {
        console.log(component)
        expect(input().prop('value')).toBe(initialState.value);
    });

    describe('and when the value of the input its updated', ()=> {
        const NEW_VALUE_EVENT = {
            target: {
                value: "New value"
            }
        };

        beforeAll(()=> {
            act(()=> {
                input().simulate('change', NEW_VALUE_EVENT);
            });
        });

        it('calls handleChange method', ()=> {
            expect(handleChangeCalled).toBeTruthy();
        });
    });
});