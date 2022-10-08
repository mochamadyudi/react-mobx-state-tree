import React from 'react'
import '@testing-library/jest-dom/extend-expect';
import { render as testingRender,screen,fireEvent } from '@testing-library/react';
import { render,unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Utils from "../../utils";


describe("Utils - Best Practice test", function(){

    it("function - get max width tailwind ", ()=> {
        expect(Utils.getMaxWidth('xs')).toBe("max-w-[320px]")
    })
    it("Menus Length", ()=> {
        expect(Utils.menus.length > 0).toBe(true)
    })
    it("Menus - Home", ()=> {
        expect(Utils.menus.filter((item)=> item.key === "home").length > 0).toBe(true)
    })
    it("Menus - People", ()=> {
        expect(Utils.menus.filter((item)=> item.key === "people").length > 0).toBe(true)
    })
    it("Menus - starship", ()=> {
        expect(Utils.menus.filter((item)=> item.key === "starship").length > 0).toBe(true)
    })
    it("Menus - planet", ()=> {
        expect(Utils.menus.filter((item)=> item.key === "planet").length > 0).toBe(true)
    })

})