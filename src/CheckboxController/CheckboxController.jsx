import React from "react";
import PropTypes from "prop-types";

class CheckboxController extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checked: this.isChecked({ checked: props.defaultChecked }) };
    }

    // Check if checkbox is checked based on whether it's a controlled
    // component or not. If it is gets value from props, if not gets
    // value from internal state
    isChecked(state = this.state, props = this.props) {
        return this.isControlled() ? props.checked : state.checked;
    }

    // Check if checked prop is defined, meaning it's a controlled component
    isControlled() {
        return this.props.checked !== undefined;
    }

    // Check if it's disabled
    isDisabled() {
        return this.props.disabled === true;
    }

    // Toggle checkbox state
    toggleCheckbox = () => {
        // Change internal state if isn't disabled
        if (!this.isDisabled()) {
            const newState = !this.isChecked();
            console.log("changing", newState);
            this.setState({ checked: newState }, this.props.onChange(newState));
        }
    };

    // Using render props pattern to send current checked state,
    // disable prop and toggle function to be called by children
    // to change the state
    render() {
        return this.props.children({
            checked: this.isChecked(),
            disabled: this.isDisabled(),
            toggle: this.toggleCheckbox,
        });
    }
}

CheckboxController.propTypes = {
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.array]).isRequired,
};

CheckboxController.defaultProps = {
    defaultChecked: false,
    onChange: () => {}, //need this noop to avoid error in toggleCheckbox
};

export default CheckboxController;
