import React from "preact/compat";
import * as m from "motion/react-m";
import AboutMe from "../components/displays/AboutMe";
import "./pageStyle.css";
import PageButton from "../components/buttons/PageButton";
import { beforePageOpen, pageOpen } from "../logic/animations";
import { pages } from "../logic/assetManagement";
import { BrowserView, MobileView } from "react-device-detect";

export default function Home(): React.JSX.Element {
    return (
        <>
            <BrowserView>
                <m.div id="page" initial={beforePageOpen} animate={pageOpen}>
                    <h1>Charlie Slorick</h1>
                    <m.div initial={{ x: "100%", y: "50%" }} id="btnDiv">
                        {pages.map((item, index) => (
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
                        {pages.map((page, index) => (
                            <PageButton text={page} key={index} />
                        ))}
                    </m.div>
                </m.div>
            </MobileView>
        </>
    );
}
