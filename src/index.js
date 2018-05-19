import React from "react";
import { render } from "react-dom";
import CheckboxController from "./CheckboxController";
import { Checkbox, Label, styles } from "./UI";

// Let's start with a very simple toggle with the CheckboxController
// This is testing if it's rendering correctly.
const CheckboxText = props => (
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

// Ready for some styling? Time to import some UI components!
// This will be our base component to create the styled checkboxes.
// It also highlights the benefits of using the render props pattern
// as we can easily swap the rendered checkbox and label by other
// components in the future, keep all the logic intact.
const CheckboxBase = ({ color, ...rest }) => (
    <CheckboxController {...rest}>
        {({ checked, disabled, toggle }) => (
            <React.Fragment>
                <Checkbox color={color} checked={checked} onClick={toggle} disabled={disabled} />
                <Label color={color} onClick={toggle} disabled={disabled}>
                    Label
                </Label>
            </React.Fragment>
        )}
    </CheckboxController>
);

// Using our base component we can easily create themed components.
// Here's one with the primary colour.
const CheckboxPrimary = props => <CheckboxBase color={styles.colors.primary} {...props} />;

// And here's another one with the secondary colour.
const CheckboxSecondary = props => <CheckboxBase color={styles.colors.secondary} {...props} />;

const App = () => (
    <div>
        <CheckboxText />
        <CheckboxNative />
        <CheckboxPrimary />
        <CheckboxSecondary />
    </div>
);

render(<App />, document.getElementById("root"));
