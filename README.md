## bh-checkbox

A custom checkbox implementation

---

## How to use

`bh-checkbox` comes with a couple of pre-styled components based on primary and secondary colours.

Here's how you can use it:

### Code

```jsx
import { CheckboxPrimary, CheckboxSeconday } from "./Checkbox";

const App = () => (
    <div>
        <CheckboxPrimary label="My primary label" />
        <CheckboxSecondary label="My secondary label" />
    </div>
);
```

### Props

| Prop           | Type            | Default                           | Definition                                                                                                                                    |
| -------------- | --------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| label          | string          | "Label"                           | The label you want to show for that checkbox.                                                                                                 |
| defaultChecked | boolean         | `false`                           | The default value for the checkbox, mostly used if it's an uncontrolled component                                                             |
| checked        | boolean         | undefined                         | The value for the checkbox. When defined it means that it's a controlled component so state comes from its parent                             |
| onChange       | function        | undefined                         | The function that is called when values change                                                                                                |


## Advanced use

You can also use `bh-checkbox` with your own UI library. For that you can import `CheckboxController` instead.

Let's see how:

```jsx
import CheckboxController from "./CheckboxController";
import { Checkbox } from "my-custom-ui-library";

const CheckboxCustom = ({ label, ...rest }) => (
    <CheckboxController {...rest}>
        {({ checked, disabled, toggle }) => (
            <React.Fragment>
                <Checkbox checked={checked} onChange={toggle} disabled={disabled}>
                    {label}
                </Checkbox>
            </React.Fragment>
        )}
    </CheckboxController>
);

const App = () => (
    <div>
        <CheckboxCustom label="My custom label" />
    </div>
);
```

This is particularly helpful for the cases that you want to keep the logic provided by `bh-checkbox` but want to display something different than the default styles.
