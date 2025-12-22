import {
    LocationProvider,
    Router,
    Route,
    hydrate,
    prerender as ssr,
} from "preact-iso";
import { NotFound } from "./pages/_404.jsx";
import "./style.css";
import Home from "./pages/Home.js";
import { signal } from "@preact/signals";
import SoftwareEngineeringPage from "./pages/SoftwareEngineering.js";
import VideoProductionPage from "./pages/VideoProduction.js";
import GraphicDesignPage from "./pages/GraphicDesign.js";
import ThemeButton from "./components/buttons/ThemeButton.js";
import PhotographyPage from "./pages/Photography.js";
import MenuButton from "./components/buttons/MenuButton.js";
import React from "preact/compat";
import CVButton from "./components/buttons/CVButton.js";
import { LazyMotion } from "motion/react";
import * as m from "motion/react-m";

export const Theme = signal(true);

const loadFeatures = () => import("motion/react").then((res) => res.domMax);

function getUserTheme(): void {
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
        ? (Theme.value = false)
        : (Theme.value = true);
}

getUserTheme();

export function App(): React.JSX.Element {
    document.body.style.backgroundColor = Theme.value ? "white" : "black";
    document.body.style.color = Theme.value ? "black" : "white";

    return (
        <LocationProvider>
            <main>
                <LazyMotion features={loadFeatures}>
                    <m.div id="cornerDiv">
                        <CVButton />
                        <ThemeButton />
                        <MenuButton />
                    </m.div>
                    <Router>
                        <Route path="/" component={Home} />
                        <Route path="/SE" component={SoftwareEngineeringPage} />
                        <Route path="/VP" component={VideoProductionPage} />
                        <Route path="GD" component={GraphicDesignPage} />
                        <Route path="PH" component={PhotographyPage} />
                        <Route default component={NotFound} />
                    </Router>
                </LazyMotion>
            </main>
        </LocationProvider>
    );
}

if (typeof window !== "undefined") {
    hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
    return await ssr(<App {...data} />);
}
