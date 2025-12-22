import React from "preact/compat";
import text from "../assets/json/se.json";
import IconDisplay from "../components/displays/IconDisplay";
import * as m from "motion/react-m";
import { beforePageOpen, pageOpen } from "../logic/animations";

export default function SoftwareEngineeringPage(): React.JSX.Element {
    // for some reason frameworks have wrong size
    return (
        <m.div id="page" initial={beforePageOpen} animate={pageOpen}>
            <m.h2>Languages</m.h2>
            <m.div id="iconDiv">
                {text.languages.map((lang, index) => (
                    <IconDisplay text={lang} key={index} />
                ))}
            </m.div>
            <m.h2>Frameworks</m.h2>
            <m.div id="iconDiv">
                {text.frameworks.map((fw, index) => (
                    <IconDisplay text={fw} key={index} />
                ))}
            </m.div>
            <m.h2>Tools</m.h2>
            <m.div id="iconDiv">
                {text.tools.map((tool, index) => (
                    <IconDisplay text={tool} key={index} />
                ))}
            </m.div>
        </m.div>
    );
}
