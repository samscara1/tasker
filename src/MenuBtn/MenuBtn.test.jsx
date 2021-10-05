import React from "react";
import { render, screen } from "@testing-library/react";
import { MenuBtn } from "./MenuBtn";
// import { Router } from 'react-router-dom'
// import { createMemoryHistory } from 'history'  

describe('MenuBtn component', ()=> {
    test('button renders', ()=> {
        render(
            <MenuBtn/>
        );
        expect(screen.getByRole('button'))
    })
})