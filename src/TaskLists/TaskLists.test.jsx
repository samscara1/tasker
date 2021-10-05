import React from "react";
import { render, screen } from "@testing-library/react";
import { TaskLists } from "./TaskLists";

describe('TaskLosts component', ()=> {
    test('section renders', ()=> {
        render(
            <TaskLists/>
        );
        expect(screen.getByText('Lists'))
    })
})