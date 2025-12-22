import { Theme } from "../..";
import text from "../../assets/json/aboutMe.json";
import React from "preact/compat";
import "./displayStyles.css";
import { themeSwitch } from "../../logic/styleManagement";

export default function AboutMe(): React.JSX.Element {
    // for some reason position moves on render
    return (
        <div
            style={{
                backgroundColor: themeSwitch(Theme.value),
                color: themeSwitch(!Theme.value),
            }}
            id="aboutMeDiv"
        >
            <h2>About Me</h2>
            <p style={{ textWrap: "pretty" }}>{text.bio}</p>

            {text.education.map((edu, index) => (
                <div key={index}>
                    <h2>{edu.name}</h2>
                    <ul>
                        {edu.subjects.map((sub, subIndex) => (
                            <li key={subIndex}>
                                {sub.subject}: {sub.grade}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
