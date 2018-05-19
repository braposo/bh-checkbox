import React from "react";
import { render } from "react-dom";
import CheckboxController from "./CheckboxController";

const Checkbox = props => (
    <CheckboxController {...props}>
        {({ checked, disabled, toggle }) => <div onClick={toggle}>{checked ? "yes" : "no"}</div>}
    </CheckboxController>
);

const App = () => <Checkbox />;

render(<App />, document.getElementById("root"));
