import React from "react";
import { useDispatch } from "react-redux";
import Widget from "../components/Widget";
import { randomizeColorsAction } from "../redux/layout/actions";

const DesktopLayout = (props) => {
    const dispatch = useDispatch();
    const handleWidgetClick = () => {
        dispatch(randomizeColorsAction());
    };
    return (
        <Widget flexDirection="column" isFullHeight>
            <Widget flex={3}>
                <Widget
                    color={props.widgetColors.widget1}
                    onClick={handleWidgetClick}
                    marginAround={8}
                >
                    <div className="text">1</div>
                </Widget>
                <Widget flexDirection="column">
                    <Widget
                        color={props.widgetColors.widget2}
                        onClick={handleWidgetClick}
                        marginAround={8}
                    >
                        <div className="text">2</div>
                    </Widget>
                    <Widget>
                        <Widget
                            color={props.widgetColors.widget3}
                            onClick={handleWidgetClick}
                            marginAround={8}
                        >
                            <div className="text">3</div>
                        </Widget>
                        <Widget
                            color={props.widgetColors.widget4}
                            onClick={handleWidgetClick}
                            marginAround={8}
                        >
                            <div className="text">4</div>
                        </Widget>
                    </Widget>
                </Widget>
            </Widget>
            <Widget flex={2}>
                <Widget flexDirection="column" flex={2}>
                    <Widget
                        color={props.widgetColors.widget5}
                        flex={2}
                        onClick={handleWidgetClick}
                        marginAround={8}
                    >
                        <div className="text">5</div>
                    </Widget>
                    <Widget
                        color={props.widgetColors.widget6}
                        flex={3}
                        onClick={handleWidgetClick}
                        marginAround={8}
                    >
                        <div className="text">6</div>
                    </Widget>
                </Widget>
                <Widget
                    color={props.widgetColors.widget7}
                    flex={3}
                    onClick={handleWidgetClick}
                    marginAround={8}
                >
                    <div className="text">7</div>
                </Widget>
                <Widget flexDirection="column" flex={2}>
                    <Widget
                        color={props.widgetColors.widget8}
                        flex={3}
                        onClick={handleWidgetClick}
                        marginAround={8}
                    >
                        <div className="text">8</div>
                    </Widget>
                    <Widget
                        color={props.widgetColors.widget9}
                        flex={2}
                        onClick={handleWidgetClick}
                        marginAround={8}
                    >
                        <div className="text">9</div>
                    </Widget>
                </Widget>
            </Widget>
        </Widget>
    );
};

export default DesktopLayout;
