import React from "react";
// enzyme allows me to render one component to standalone without context or the rest of the application
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "./Home.js";
import renderer from "react-test-renderer";

configure({adapter: new Adapter()});

describe("<Home />", () =>{

    let wrapper;
    // beforeEach takes a function as an arguement - it executes this function before every "it" jest test
    beforeEach(() => {
        wrapper = shallow(<Home/>);
    });

    it("should render the Home component", () =>
    {
        // The code below is the expectation of the test
        expect(wrapper.find(Home));
    });


    it("matches the snapshot", () => {
        const tree = renderer.create(<Home/>).toJSON();

        expect(tree).toMatchSnapshot()
    })

});
