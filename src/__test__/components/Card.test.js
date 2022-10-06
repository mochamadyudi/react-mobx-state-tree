import React from 'react'
import '@testing-library/jest-dom/extend-expect';
import { render as testingRender,screen,fireEvent } from '@testing-library/react';
import { render,unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import CardAnalytics from "../../components/shared-components/card/card-analytics";

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


    it('should contains {{title}} = Testing', () => {
        act(() => {
            render(<CardAnalytics title={'Testing'} subTitle={'total testing'} total={10} testId={10}/>, container);
        });
        expect(container.textContent).toBe("Testing");
    });

    it("should contains {{testId}} = 10", ()=> {
        testingRender(<CardAnalytics title={'Testing'} subTitle={'total testing'} total={10} testId={10} />);
        const heading = screen.getByTestId(/10/i);
        expect(heading)
    })
});