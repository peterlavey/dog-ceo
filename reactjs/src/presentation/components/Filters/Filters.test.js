import {mount} from "enzyme";
import Filters from "./index";

let onRemoveCalled = false;
const onRemove = ()=> onRemoveCalled = true;

const initialState = {
    filters: ["filter1", "filter2", "filter3", "filter4"],
    onRemove
};

describe('When Filters is instantiated', ()=> {
    let component;
    let chips = ()=> component.find('MuiChipRoot');
    let chipRemoveBtn = (index)=> chips().at(index).find('.MuiChip-deleteIcon').at(0);

    beforeAll(()=> {
        component = mount(<Filters {...initialState}/>);
    });

    it('shows a chip by each filter passed', ()=> {
        expect(chips().length).toBe(initialState.filters.length);
    });

    describe('and when the remove button of the third chip its clicked', ()=> {
        beforeAll(()=> {
            chipRemoveBtn(2).simulate('click');
        });

        it('calls onRemove method', ()=> {
            expect(onRemoveCalled).toBeTruthy();
        });
    });
});