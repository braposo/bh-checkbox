import React from "react";
import { render, Simulate } from "react-testing-library";
import CheckboxController from "./CheckboxController";

describe("CheckboxController", () => {
    it("renders child components", () => {
        const Checkbox = props => (
            <CheckboxController {...props}>
                {({ checked, disabled, toggle }) => <div data-testid="checkbox-child">Hello</div>}
            </CheckboxController>
        );

        const { getByTestId } = render(<Checkbox />);
        expect(getByTestId("checkbox-child")).not.toBeNull();
    });

    it("sends checked value to child component", () => {
        const Checkbox = props => (
            <CheckboxController {...props}>
                {({ checked, disabled, toggle }) => (
                    <div data-testid="checkbox-child" checked={checked}>
                        Hello
                    </div>
                )}
            </CheckboxController>
        );

        const { getByTestId } = render(<Checkbox />);
        expect(getByTestId("checkbox-child")).toHaveProperty("checked");
    });

    it("updates checked value with toggle function", () => {
        const Checkbox = props => (
            <CheckboxController {...props}>
                {({ checked, disabled, toggle }) => (
                    <div data-testid="checkbox-child" checked={checked} onClick={toggle}>
                        Hello
                    </div>
                )}
            </CheckboxController>
        );

        const { getByTestId } = render(<Checkbox />);
        const childComponent = getByTestId("checkbox-child");
        expect(childComponent).toHaveProperty("checked", false);
        Simulate.click(childComponent);
        expect(childComponent).toHaveProperty("checked", true);
    });
});
