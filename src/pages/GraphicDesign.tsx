import React from "preact/compat";
import text from "../assets/json/gd.json";
import IconDisplay from "../components/displays/IconDisplay";
import "./pageStyle.css";
import { Images } from "../logic/assetManagement";
import * as m from "motion/react-m";
import { beforePageOpen, pageOpen } from "../logic/animations";

export default function GraphicDesignPage(): React.JSX.Element {
    return (
        <m.div id="page" initial={beforePageOpen} animate={pageOpen}>
            <m.h2>Tools</m.h2>
            <m.div id="iconDiv">
                {text.tools.map((tool, index) => (
                    <IconDisplay text={tool} key={index} />
                ))}
            </m.div>
            <m.h2>Projects</m.h2>
            <m.div id="imageDiv">
                {Images.gd.map((image, index) => (
                    <m.img id="image" src={image} key={index} loading="eager" />
                ))}
            </m.div>
        </m.div>
    );
}
