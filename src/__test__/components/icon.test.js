import React from 'react'
import '@testing-library/jest-dom/extend-expect';
import { render,unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {MaleIcons,FemaleIcons,PlusIcons,TrashIcon} from "../../components/shared-components/icon";

describe('Component - Icon', function(){
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

    it("Icon Gender - Male", ()=> {
        act(()=> {
            render(<MaleIcons/>,container)
        })
        expect(container).toBeInTheDocument();
    })
    it("Icon Gender - Female", ()=> {
        act(()=> {
            render(<FemaleIcons/>,container)
        })
        expect(container).toBeInTheDocument();
    })
    it("Icon - Trash", ()=> {
        act(()=> {
            render(<TrashIcon/>,container)
        })
        expect(container).toBeInTheDocument();
    })
    it("Icon - Plus", ()=> {
        act(()=> {
            render(<PlusIcons/>,container)
        })
        expect(container).toBeInTheDocument();
    })

})