import React from "react";
import { render } from "react-dom";
import CheckboxController from "./CheckboxController";
import { Checkbox, Label, Main, styles } from "./UI";
import { Toggle } from "react-powerplug";
import { Checkbox as AntCheckbox } from "antd";
import "antd/dist/antd.css";

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
const CheckboxBase = ({ color, label = "Label", ...rest }) => (
    <CheckboxController {...rest}>
        {({ checked, disabled, toggle }) => (
            <React.Fragment>
                <Checkbox color={color} checked={checked} onClick={toggle} disabled={disabled} />
                <Label color={color} onClick={toggle} disabled={disabled}>
                    {label}
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

// It also works if we want to use some UI library component
// instead. The logic is still in the CheckboxController, but
// we're rendering other UI elements instead.
const CheckboxCustom = ({ color, ...rest }) => (
    <CheckboxController {...rest}>
        {({ checked, disabled, toggle }) => (
            <React.Fragment>
                <AntCheckbox checked={checked} onChange={toggle} disabled={disabled} label="Label">
                    Label
                </AntCheckbox>
            </React.Fragment>
        )}
    </CheckboxController>
);

const App = () => (
    <Main>
        <h4>Text version</h4>
        <CheckboxText />
        <h4>Native checkbox</h4>
        <CheckboxNative />
        <label htmlFor="real-native-checkbox">
            <input type="checkbox" id="real-native-checkbox" />
            Real native
        </label>
        <h4>Primary checkbox</h4>
        <CheckboxPrimary />
        <h4>Secondary checkbox</h4>
        <CheckboxSecondary />
        <h4>Checkbox disabled</h4>
        <CheckboxPrimary disabled={true} label="Primary Checkbox" />
        <h4>Checkbox checked by default</h4>
        <CheckboxSecondary defaultChecked={true} />
        <h4>Controlled checkbox</h4>
        <Toggle initial={true}>
            {({ on, toggle }) => <CheckboxPrimary checked={on} onChange={toggle} />}
        </Toggle>
        <h4>Custom checkbox</h4>
        <CheckboxCustom />
    </Main>
);

render(<App />, document.getElementById("root"));
