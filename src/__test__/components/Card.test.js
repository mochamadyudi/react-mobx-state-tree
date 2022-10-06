import React from 'react'
import '@testing-library/jest-dom/extend-expect';
import { render as testingRender,screen,fireEvent } from '@testing-library/react';
import { render,unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import CardAnalytics from "../../components/shared-components/card/card-analytics";
// test("Component - Card Test", function(){
//     render(<CardAnalytics title={'Testing'}/>)
//     const linkElement = screen.getByTitle(/Testing/i)
//     expect(linkElement).toBe();
// })
describe('Component - Card Test', () => {

    let container = null;
    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });


    it('should contains the title 1', () => {
        act(() => {
            render(<CardAnalytics title={'Testing'}/>, container);
        });
        expect(container.textContent).toBe("Testing");

        testingRender(<CardAnalytics title={'Testing'} subTitle={'total testing'} total={10} testId={10} />);
        const heading = screen.getByTestId(/10/i);
        expect(heading)

        // const baseDom = testingRender(<CardAnalytics title={'Testing'} subTitle={'total testing'} total={10}  testId={1}/>);
        // const heading = screen.getByText(/Testing/i);
        // expect(heading).toBeInTheDocument()
        // // fireEvent.mouseOver(baseDom.getByTitle("Testing"));
        //
        // expect(
        //      baseDom.findByText("Testing")
        // ).toBeInTheDocument();

    });
});