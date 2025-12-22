import React from "preact/compat";
import "./pageStyle.css";
import text from "../assets/json/ph.json";
import IconDisplay from "../components/displays/IconDisplay";
import { Images } from "../logic/assetManagement";
import * as m from "motion/react-m";
import { beforePageOpen, pageOpen } from "../logic/animations";

export default function PhotographyPage(): React.JSX.Element {
    return (
        <m.div id="page" initial={beforePageOpen} animate={pageOpen}>
            <m.h2>Tools</m.h2>
            <m.div id="iconDiv">
                {text.tools.map((tool, index) => (
                    <IconDisplay text={tool} key={index} />
                ))}
            </m.div>
            <m.div id="imageDiv">
                {Images.p.map((image, index) => (
                    <m.img id="image" src={image} key={index} loading="eager" />
                ))}
            </m.div>
        </m.div>
    );
}
