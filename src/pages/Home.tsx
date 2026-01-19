import React from "preact/compat";
import * as m from "motion/react-m";
import AboutMe from "../components/displays/AboutMe";
import "./pageStyle.css";
import PageButton from "../components/buttons/PageButton";
import { beforePageOpen, pageOpen } from "../logic/animations";
import { BrowserView, MobileView } from "react-device-detect";
import { internalLinkNames } from "../components/buttons/LinkButton";

export default function Home(): React.JSX.Element {
    return (
        <>
            <BrowserView>
                <m.div id="page" initial={beforePageOpen} animate={pageOpen}>
                    <h1>Charlie Slorick</h1>
                    <m.div initial={{ x: "100%", y: "50%" }} id="btnDiv">
                        {internalLinkNames.map((item, index) => (
                            <PageButton text={item} key={index} />
                        ))}
                    </m.div>
                    <AboutMe />
                </m.div>
            </BrowserView>
            <MobileView>
                <m.div
                    id="mobilePage"
                    initial={beforePageOpen}
                    animate={pageOpen}
                >
                    <m.div id="mobileHomeDiv" initial={{ y: "50%" }}>
                        {internalLinkNames.map((page, index) => (
                            <PageButton text={page} key={index} />
                        ))}
                    </m.div>
                </m.div>
            </MobileView>
        </>
    );
}
