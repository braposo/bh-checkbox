import React from "react";
import styled from "react-emotion";

export const styles = {
    colors: {
        primary: "#400199",
        secondary: "#13C5C6",
    },
    sizes: {
        small: 10,
        medium: 15,
        big: 20,
    },
    scale: [4, 8, 16, 24, 32, 40, 72, 120],
};

export const Main = styled("div")({
    padding: styles.scale[2],
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
});

const AcessibleCheckbox = ({ checked, disabled, ...rest }) => (
    <div role="checkbox" aria-checked={checked} aria-disabled={disabled} tabIndex="0" {...rest} />
);

const CheckboxBase = styled(AcessibleCheckbox)(({ checked, disabled }) => {
    return [
        {
            width: styles.sizes.medium,
            height: styles.sizes.medium,
            display: "inline-block",
            verticalAlign: "top",
            position: "relative",
            background: "currentColor",
            marginRight: styles.scale[0],
            ":before": {
                content: "''",
                position: "absolute",
                background: "#fff",
                top: 1,
                left: 1,
                right: 1,
                bottom: 1,
                transition: "transform 100ms linear",
            },
            ":after": {
                content: "'✓'",
                position: "absolute",
                fontSize: 10,
                lineHeight: `${styles.sizes.medium}px`,
                width: styles.sizes.medium,
                height: styles.sizes.medium,
                textAlign: "center",
                display: "none",
                color: "currentColor",
            },
        },
        !disabled && {
            ":hover:after": {
                display: "block",
                opacity: 0.5,
            },
            ":hover:before": {
                transform: "scale(0.9)",
            },
        },
        disabled && {
            opacity: 0.8,
            cursor: "not-allowed",
        },
        checked && {
            ":before": {
                background: "currentColor",
            },
            ":after": {
                color: "white",
                display: "block",
            },
        },
    ];
});

const LabelBase = styled("div")(({ checked, disabled }) => {
    return [
        {
            display: "inline-block",
            color: "currentColor",
            lineHeight: `${styles.sizes.medium}px`,
            verticalAlign: "top",
            fontSize: 14,
            cursor: "default",
        },
        disabled && {
            opacity: 0.5,
            cursor: "not-allowed",
        },
    ];
});

export const Checkbox = styled(CheckboxBase)(({ color = "currentColor" }) => ({ color }));
export const Label = styled(LabelBase)(({ color = "currentColor" }) => ({ color }));
