const fs = require("fs");

function createComponent(name) {
    let jsContent = `
import s from './${name}.module.css'

export default function ${name}(){

    return(
        <div className={s.wrapper}>
            ${name}
        </div>
    )
}
`;
    let cssContent = `
.wrapper{

}
`;
    //create folder
    fs.mkdirSync(`src/components/${name}`);
    //create js
    fs.writeFileSync(`src/components/${name}/${name}.jsx`, jsContent);
    //create css
    fs.writeFileSync(`src/components/${name}/${name}.module.css`, cssContent);
}

//COMPONENTS

const components = ["VerticalChartBar", "VisualizationDataContainer"];

for (let i = 0; i < components.length; i++) {
    createComponent(components[i]);
}
