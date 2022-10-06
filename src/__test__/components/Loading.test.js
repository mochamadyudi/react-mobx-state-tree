import React from 'react'
import '@testing-library/jest-dom/extend-expect';
import { render as testingRender,screen,fireEvent } from '@testing-library/react';
import { render,unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import CardAnalytics from "../../components/shared-components/card/card-analytics";
import Loading from "../../components/shared-components/loading";

describe('Component - Card Test', () => {

    let container = null;
    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it("should contains {{testId}} = 1", ()=> {
        testingRender(<Loading cover={'size'}/>);
        const heading = screen.getByTestId(/1/i);
        expect(heading)
    })
    it("should contains {{title}} = loading-{{dynamic}}", ()=> {
        testingRender(<Loading cover={'page'}/>);
        const heading = screen.getByTitle(/loading-page/i);
        expect(heading)
    })
});