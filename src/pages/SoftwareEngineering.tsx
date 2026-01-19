import React from "preact/compat";
import text from "../assets/json/se.json";
import IconDisplay from "../components/displays/IconDisplay";
import * as m from "motion/react-m";
import { beforePageOpen, pageOpen } from "../logic/animations";
import { ExternalLinks } from "../components/buttons/LinkButton";

export default function SoftwareEngineeringPage(): React.JSX.Element {
    // for some reason frameworks have wrong size
    return (
        <m.div id="page" initial={beforePageOpen} animate={pageOpen}>
            <a
                style={{ fontSize: 20 }}
                href={ExternalLinks["Github"]}
                target={"_blank"}
            >
                GitHub
            </a>
            <h2>Languages</h2>
            <div id="iconDiv">
                {text.languages.map((lang, index) => (
                    <IconDisplay text={lang} key={index} />
                ))}
            </div>
            <h2>Frameworks</h2>
            <div id="iconDiv">
                {text.frameworks.map((fw, index) => (
                    <IconDisplay text={fw} key={index} />
                ))}
            </div>
            <h2>Tools</h2>
            <div id="iconDiv">
                {text.tools.map((tool, index) => (
                    <IconDisplay text={tool} key={index} />
                ))}
            </div>
        </m.div>
    );
}
