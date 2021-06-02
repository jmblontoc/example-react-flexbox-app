import { RANDOMIZE_COLORS } from "./types";
import { randomizeWidgetColors } from "../../utils/colors";

const INITIAL_STATE = {
    widgetColors: {
        widget1: "#2C88D9",
        widget2: "#D3455B",
        widget3: "#897A5F",
        widget4: "#AC6363",
        widget5: "#730FC3",
        widget6: "#1AAE9F",
        widget7: "#207868",
        widget8: "#6558F5",
        widget9: "#4B5C6B",
    },
};

const layoutReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RANDOMIZE_COLORS:
            return {
                ...state,
                widgetColors: randomizeWidgetColors(state.widgetColors),
            };
        default:
            return state;
    }
};

export default layoutReducer;
