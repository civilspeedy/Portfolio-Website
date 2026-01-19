import React, { useEffect } from "preact/compat";
import * as m from "motion/react-m";
import { Theme } from "../..";
import "./displayStyles.css";
import { animate } from "motion";
import LinkButton, {
    externalLinkNames,
    internalLinkNames,
} from "../buttons/LinkButton";

type Props = { state: boolean };

export default function Menu({ state }: Props): React.JSX.Element {
    useEffect(() => {
        if (state) {
            animate("#sideMenu", { x: -2, opacity: 1 });
        } else {
            animate("#sideMenu", { x: "100%", opacity: 0 });
        }
    }, [state]);

    return (
        <m.div
            id="sideMenu"
            initial={{ x: "100%", opacity: 0 }}
            style={{
                backgroundColor: Theme.value ? "black" : "white",
            }}
        >
            {internalLinkNames.map((page, index) => (
                <LinkButton text={page} key={index} />
            ))}
            {externalLinkNames.map((page, index) => (
                <LinkButton text={page} key={index} />
            ))}
        </m.div>
    );
}
