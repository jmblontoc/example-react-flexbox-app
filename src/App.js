import React, { useEffect, useState } from "react";
import useWindowWidth from "./hooks/useWindowWidth";
import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";
import "./components/Widget/index.css";
import { useSelector } from "react-redux";

function App() {
    const BREAKPOINT = 600;
    const [currentLayout, setCurrentLayout] = useState();

    const layoutState = useSelector((state) => state.layout);
    const { widgetColors } = layoutState;

    const renderLayout = () => {
        switch (currentLayout) {
            case "desktop":
                return <DesktopLayout widgetColors={widgetColors} />;
            case "mobile":
                return <MobileLayout widgetColors={widgetColors} />;
            default:
                return <React.Fragment />;
        }
    };

    const windowWidth = useWindowWidth();

    useEffect(() => {
        if (windowWidth > BREAKPOINT) {
            setCurrentLayout("desktop");
        } else {
            setCurrentLayout("mobile");
        }
    }, [windowWidth]);

    return renderLayout();
}

export default App;
