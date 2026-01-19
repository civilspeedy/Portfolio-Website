import React, { useEffect, useState } from "preact/compat";
import * as m from "motion/react-m";
import { Theme } from "../..";

type Props = { text: string };

export const InternalLinks = {
    Home: "/",
    "Software Engineering": "SoftwareEngineering",
    "Video Production": "VideoProduction",
    "Graphic Design": "GraphicDesign",
    Photography: "Photography",
} as const;

type InternalLinkKey = keyof typeof InternalLinks;

export const internalLinkNames = Object.keys(
    InternalLinks,
) as readonly InternalLinkKey[];

export const ExternalLinks = {
    Email: "Y2hhcmxpZXNsb3JpY2tAb3V0bG9vay5jb20=",
    Linkedin: "https://www.linkedin.com/in/charlie-slorick/",
    Github: "https://github.com/civilspeedy",
    "Thing-2-Thing": "https://thing-2-thing.vercel.app/",
} as const;

type ExternalLinkKey = keyof typeof ExternalLinks;

export const externalLinkNames = Object.keys(
    ExternalLinks,
) as readonly ExternalLinkKey[];

export default function LinkButton({ text }: Props): React.JSX.Element {
    const [target, setTarget] = useState("_self");
    const [link, setLink] = useState("");

    useEffect(() => {
        if (text === "Email") {
            setTarget("_blank");
            setLink("mailto:" + atob(ExternalLinks["Email"]));
        } else if (text in InternalLinks) {
            setTarget("_self");
            setLink(InternalLinks[text as InternalLinkKey]);
        } else if (text in ExternalLinks) {
            setTarget("_blank");
            setLink(ExternalLinks[text as ExternalLinkKey]);
        }
    }, [text]);

    return (
        <m.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={link}
            style={{ color: Theme.value ? "white" : "black" }}
            target={target}
        >
            {text}
        </m.a>
    );
}
