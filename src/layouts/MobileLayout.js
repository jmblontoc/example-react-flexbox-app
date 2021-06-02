import { useDispatch } from "react-redux";
import Widget from "../components/Widget";
import { randomizeColorsAction } from "../redux/layout/actions";

const MobileLayout = (props) => {
    const dispatch = useDispatch();
    const handleWidgetClick = () => {
        dispatch(randomizeColorsAction());
    };
    return (
        <Widget isFullHeight flexDirection="column">
            <Widget
                color={props.widgetColors.widget1}
                onClick={handleWidgetClick}
                marginAround={8}
            >
                <div className="text">1</div>
            </Widget>
            <Widget flexDirection="row">
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
            <Widget
                color={props.widgetColors.widget2}
                onClick={handleWidgetClick}
                marginAround={8}
            >
                <div className="text">2</div>
            </Widget>
            <Widget
                color={props.widgetColors.widget7}
                onClick={handleWidgetClick}
                marginAround={8}
            >
                <div className="text">7</div>
            </Widget>
            <Widget flexDirection="row">
                <Widget
                    color={props.widgetColors.widget5}
                    onClick={handleWidgetClick}
                    marginAround={8}
                >
                    <div className="text">5</div>
                </Widget>
                <Widget
                    color={props.widgetColors.widget8}
                    onClick={handleWidgetClick}
                    marginAround={8}
                >
                    <div className="text">8</div>
                </Widget>
            </Widget>
            <Widget flexDirection="row">
                <Widget
                    color={props.widgetColors.widget6}
                    onClick={handleWidgetClick}
                    marginAround={8}
                >
                    <div className="text">6</div>
                </Widget>
                <Widget
                    color={props.widgetColors.widget9}
                    onClick={handleWidgetClick}
                    marginAround={8}
                >
                    <div className="text">9</div>
                </Widget>
            </Widget>
        </Widget>
    );
};

export default MobileLayout;
