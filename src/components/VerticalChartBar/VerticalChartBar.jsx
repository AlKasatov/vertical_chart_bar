import s from "./VerticalChartBar.module.css";

export default function VerticalChartBar({
    color,
    values,
    height,
    width,
    gap,
}) {
    const maxValue = values.reduce((acc, curr) => {
        if (curr > acc) acc = curr;
        return acc;
    }, 0);

    return (
        <div className={s.wrapper}>
            <svg width={(width + gap) * values.length - gap} height={height}>
                {values.map((value, i) => {
                    return (
                        <rect
                            className={s.bar}
                            key={i}
                            x={i * (width + gap)}
                            y={height - (height / maxValue) * value}
                            width={width}
                            height={(height / maxValue) * value}
                            fill={color}
                        />
                    );
                })}
            </svg>
        </div>
    );
}
