import React from 'react'
import '@testing-library/jest-dom/extend-expect';
import { render,unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Container from "../../components/layout-components/Container";

describe("Component - Container", ()=> {
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

    it("Container - toBeInTheDocument", ()=> {

        act(() => {
            render(<Container size={'xl'}/>, container);
        });
        expect(container).toBeInTheDocument();
    })
})