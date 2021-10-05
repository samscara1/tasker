import React from "react";
import { render, screen } from "@testing-library/react";
import { NewTask } from "./NewTask";
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'  

describe('NewTask component', ()=> {
    test('text area renders', ()=> {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <NewTask/>
            </Router>
            );
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    })
    test('buttons render', ()=> {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <NewTask/>
            </Router>
            );
        expect(screen.getByRole('button', {name: /cancel/i}))
        expect(screen.getByRole('button', {name: /done/i}))
    })
})