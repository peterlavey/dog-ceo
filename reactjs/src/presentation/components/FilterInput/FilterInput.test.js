import {mount} from "enzyme";
import FilterInput from "./index";
import {act} from "react-dom/test-utils";

let handleChangeCalled = false;
let onAddFilterCalled = false;

const handleChange = ()=> handleChangeCalled = true;
const onAddFilter = ()=> onAddFilterCalled = true;

let initialState = {
    value: "poodle",
    handleChange,
    onAddFilter
};

describe('When FilterInput is instantiated', ()=> {
    let component;
    let input = ()=> component.find('input');

    beforeAll(()=> {
        component = mount(<FilterInput {...initialState}/>);
    });

    it('shows value passed by prop', ()=> {
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

        describe('and when enter key its pressed', ()=> {
            beforeAll(()=> {
                input().simulate('keydown', {key: 'Enter'});
            });

            it('calls onAddFilter method', ()=> {
                expect(onAddFilterCalled).toBeTruthy();
            });
        })
    });
});