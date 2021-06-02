import React from "react";
import PropTypes from "prop-types";
import { COLORS } from "../../utils/colors";

const Widget = (props) => {
    return (
        <div
            style={{
                flex: props.flex,
                backgroundColor: props.color,
                display: "flex",
                flexDirection: props.flexDirection,
                justifyContent: "center",
                height: props.isFullHeight ? "100vh" : "auto",
                margin: `${props.marginAround}px`,
                ...props.otherStyles,
            }}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );
};

Widget.propTypes = {
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    flex: PropTypes.number.isRequired,
    flexDirection: PropTypes.string.isRequired,
    isFullHeight: PropTypes.bool,
    otherStyles: PropTypes.object,
    marginAround: PropTypes.number,
};

Widget.defaultProps = {
    color: COLORS.defaultBg,
    onClick: () => {},
    flex: 1,
    flexDirection: "row",
    otherStyles: {},
    marginAround: 0,
};

export default Widget;
