export const COLORS = {
    defaultBg: "white",
};

const getRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

export const randomizeWidgetColors = (state) => {
    const copy = { ...state };
    for (let key in copy) {
        copy[key] = getRandomColor();
    }
    return copy;
};
