import React from "preact/compat";
import "./buttonStyles.css";
import { themeSwitch } from "../../logic/styleManagement";
import * as m from "motion/react-m";
import { Theme } from "../..";
import { InternalLinks } from "./LinkButton";

type Props = { text: string };
export default function PageButton({ text }: Props): React.JSX.Element {
    return (
        <m.a
            href={"/" + InternalLinks[text]}
            style={{ color: themeSwitch(!Theme.value) }}
            id="pageButton"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
        >
            {text}
        </m.a>
    );
}
