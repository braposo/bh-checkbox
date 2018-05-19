import React from "react";
import { render } from "react-dom";
import CheckboxController from "./CheckboxController";
import { Checkbox, Label, Main, styles } from "./UI";
import { Toggle } from "react-powerplug";

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
    <Main>
        <h5>Text version</h5>
        <CheckboxText />
        <h5>Native checkbox</h5>
        <CheckboxNative />
        <label htmlFor="real-native-checkbox">
            <input type="checkbox" id="real-native-checkbox" />
            Real native
        </label>
        <h5>Primary checkbox</h5>
        <CheckboxPrimary />
        <h5>Secondary checkbox</h5>
        <CheckboxSecondary />
        <h5>Checkbox disabled</h5>
        <CheckboxPrimary disabled={true} />
        <h5>Checkbox checked by default</h5>
        <CheckboxSecondary defaultChecked={true} />
        <h5>Controlled checkbox</h5>
        <Toggle initial={true}>
            {({ on, toggle }) => <CheckboxSecondary checked={on} onChange={toggle} />}
        </Toggle>
    </Main>
);

render(<App />, document.getElementById("root"));
