import React from "react";
import { render } from "react-dom";
import { Toggle } from "react-powerplug";
import { Main } from "./UI";
import {
    CheckboxText,
    CheckboxNative,
    CheckboxPrimary,
    CheckboxSecondary,
    CheckboxCustom,
} from "./Checkbox";

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
        <CheckboxCustom label="Custom label" />
    </Main>
);

render(<App />, document.getElementById("root"));
