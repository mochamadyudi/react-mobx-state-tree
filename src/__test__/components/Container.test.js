import React from 'react'
import '@testing-library/jest-dom/extend-expect';
import { render as testingRender,screen,fireEvent } from '@testing-library/react';
import { render,unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Container from "../../components/layout-components/Container";
import CardAnalytics from "../../components/shared-components/card/card-analytics";

describe("Component - Container", ()=> {
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

    it("Container - toBeInTheDocument", ()=> {

        act(() => {
            render(<Container size={'xl'}/>, container);
        });
        expect(container).toBeInTheDocument();
    })
})