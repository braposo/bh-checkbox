import React from "react";
import { render } from "react-dom";
import CheckboxController from "./CheckboxController";

// Let's start with a very simple toggle with the CheckboxController
// This is testing if it's rendering correctly.
const Checkbox = props => (
    <CheckboxController {...props}>
        {({ checked, disabled, toggle }) => <div onClick={toggle}>{checked ? "yes" : "no"}</div>}
    </CheckboxController>
);

// So now we can use the same logic to build a native
// checkbox with a label.
const CheckboxNative = props => (
    <CheckboxController {...props}>
        {({ checked, disabled, toggle }) => (
            <div>
                <label htmlFor="native-checkbox">
                    <input
                        type="checkbox"
                        id="native-checkbox"
                        checked={checked}
                        onChange={toggle}
                        disabled={disabled}
                    />
                    Label
                </label>
            </div>
        )}
    </CheckboxController>
);

const App = () => (
    <div>
        <Checkbox />
        <CheckboxNative />
    </div>
);

render(<App />, document.getElementById("root"));
