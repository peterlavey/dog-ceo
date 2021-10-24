import {mount} from "enzyme";
import Switch from "../Switch";
import Case from "../Switch/Case";


const STATE = {
    LOADING: "LOADING",
    START: "START"
};

const initialState = {
    currentState: STATE.LOADING
};

describe('When Switch & Case are instantiated', ()=> {
    let component;
    let message = ()=> component.find('h1');

    beforeAll(()=> {
        component = mount(
            <Switch value={initialState.currentState}>
                <Case type={STATE.LOADING}>
                    <h1>Loading...</h1>
                </Case>
                <Case type={STATE.START}>
                    <h1>Hello world!</h1>
                </Case>
            </Switch>
        );
    });

    it('shows the content of "LOADING" state', ()=> {
        expect(message().text()).toBe("Loading...");
    });

    describe('and when the state is changed to "START"', ()=> {
        beforeAll(()=> {
            component.setProps({value: STATE.START});
        });

        it('shows the content of "START" state', ()=> {
            expect(message().text()).toBe("Hello world!");
        });
    });
});