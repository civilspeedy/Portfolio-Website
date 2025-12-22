import React from "preact/compat";
import text from "../assets/json/vp.json";
import IconDisplay from "../components/displays/IconDisplay";
import VideoDisplay from "../components/displays/VideoDisplay";
import "./pageStyle.css";
import * as m from "motion/react-m";
import { beforePageOpen, pageOpen } from "../logic/animations";

export default function VideoProductionPage(): React.JSX.Element {
    // need onscroll for windows users

    addEventListener("scroll", () => console.log("scroll"));

    return (
        <m.div id="page" initial={beforePageOpen} animate={pageOpen}>
            <m.h2>Tools</m.h2>
            <m.div id="iconDiv">
                {text.tools.map((tool, index) => (
                    <IconDisplay text={tool} key={index} />
                ))}
            </m.div>
            <m.h2>Projects</m.h2>
            <m.div id="videoDiv">
                {text.projects.map((proj, index) => (
                    <VideoDisplay link={proj.link} key={index} />
                ))}
            </m.div>
        </m.div>
    );
}
