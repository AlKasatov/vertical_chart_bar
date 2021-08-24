import s from "./VisualizationDataContainer.module.css";
import VerticalChartBar from "../VerticalChartBar/VerticalChartBar";
import { useState } from "react";

export default function VisualizationDataContainer() {
    const [values, setValues] = useState([2, 4, 35, 14, 3, 5, 15, 3]);

    const options = {
        color: "#99e",
        values: values,
        height: 200,
        width: 20,
        gap: 5,
    };

    const createRandomData = () => {
        const data = new Array(randomInteger(10, 100)).fill(0);
        setValues(
            data.map(() => {
                return randomInteger(1, 100);
            })
        );
    };

    const randomInteger = (min, max) => {
        return Math.floor(min + Math.random() * (max + 1 - min));
    };

    return (
        <>
            <div className={s.wrapper}>
                <VerticalChartBar {...options} />
            </div>
            <button className={s.button} onClick={createRandomData}>
                Create random data
            </button>
        </>
    );
}
