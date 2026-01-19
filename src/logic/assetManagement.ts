import CSS from "../assets/icons/seIcons/languageIcons/css3-svgrepo-com.svg";
import Go from "../assets/icons/seIcons/languageIcons/Go_Logo_Blue.svg.png";
import HTML from "../assets/icons/seIcons/languageIcons/html-5-svgrepo-com.svg";
import Java from "../assets/icons/seIcons/languageIcons/java-svgrepo-com.svg";
import JavaScript from "../assets/icons/seIcons/languageIcons/javascript-logo-svgrepo-com.svg";
import SQL from "../assets/icons/seIcons/languageIcons/sql-svgrepo-com.svg";
import Python from "../assets/icons/seIcons/languageIcons/python-svgrepo-com.svg";
import Bun from "../assets/icons/seIcons/frameworkIcons/bun.svg";
import Expo from "../assets/icons/seIcons/frameworkIcons/expo-icon-svgrepo-com.svg";
import Flask from "../assets/icons/seIcons/frameworkIcons/flask-svgrepo-com.svg";
import Node from "../assets/icons/seIcons/frameworkIcons/node-svgrepo-com.svg";
import Preact from "../assets/icons/seIcons/frameworkIcons/preact-svgrepo-com.svg";
import React from "../assets/icons/seIcons/frameworkIcons/react-svgrepo-com.svg";
import Sqlite from "../assets/icons/seIcons/frameworkIcons/sqlite-svgrepo-com.svg";
import Zed from "../assets/icons/seIcons/toolIcons/stable-app-logo.9b5f959f.svg";
import Jetbrains from "../assets/icons/seIcons/toolIcons/jetbrains-svgrepo-com.svg";
import VScode from "../assets/icons/seIcons/toolIcons/vscode-svgrepo-com.svg";
import Git from "../assets/icons/seIcons/toolIcons/git-svgrepo-com.svg";
import GitHub from "../assets/icons/seIcons/toolIcons/github-142-svgrepo-com.svg";
import GitHubLight from "../assets/icons/seIcons/toolIcons/github-light.svg";
import ExpoLight from "../assets/icons/seIcons/frameworkIcons/expo-light.svg";
import FlaskLight from "../assets/icons/seIcons/frameworkIcons/flask-light.svg";
import JetbrainsLight from "../assets/icons/seIcons/toolIcons/jetbrains-light.svg";
import { Theme } from "..";
import PremierPro from "../assets/icons/vpIcons/adobepremierepro-svgrepo-com.svg";
import PremierProLight from "../assets/icons/vpIcons/adobepremierepro-lite.svg";
import Vegas from "../assets/icons/vpIcons/Vegas_Pro_19_Icon_V2.svg";
import Designer from "../assets/icons/gdIcons/affinity-designer-svgrepo-com.svg";
import DesignerLight from "../assets/icons/gdIcons/affinity-designer-light.svg";
import Photo from "../assets/icons/phIcons/affinity-photo-svgrepo-com.svg";
import PhotoLight from "../assets/icons/phIcons/affinity-photo-light.svg";
import Publisher from "../assets/icons/gdIcons/affinity-publisher-svgrepo-com.svg";
import PublisherLight from "../assets/icons/gdIcons/affinity-publisher-light.svg";
import PhotoShop from "../assets/icons/gdIcons/photoshop-svgrepo-com.svg";
import PhotoShopLight from "../assets/icons/gdIcons/photoshop-light.svg";
import DrawIO from "../assets/icons/gdIcons/drawio-svgrepo-com.svg";
import A2 from "../assets/images/gdImages/A2.jpg";
import DutyCalls from "../assets/images/gdImages/duty calls.jpg";
import Lockdown from "../assets/images/gdImages/lockdown.jpg";
import Silhouette from "../assets/images/gdImages/silhouette.jpg";
import TheEye from "../assets/images/gdImages/theEye.jpg";
import TheHand from "../assets/images/gdImages/theHand.jpg";
import Wallpaper from "../assets/images/gdImages/wallpaper.jpg";
import Lightroom from "../assets/icons/phIcons/lightroom-svgrepo-com.svg";
import LightroomLight from "../assets/icons/phIcons/lightroom-light.svg";
import Orchid1 from "../assets/images/pImages/bw orchid.jpg";
import Orchid2 from "../assets/images/pImages/bw orchid 2.jpg";
import Orchid3 from "../assets/images/pImages/bw orchid 3.jpg";
import CloseUp from "../assets/images/pImages/close up splash.jpg";
import Contrast from "../assets/images/pImages/contrast splash.jpg";
import Purple from "../assets/images/pImages/purple splash.jpg";
import Ring from "../assets/images/pImages/ring splash.jpg";
import Skull from "../assets/images/pImages/skull roots.jpg";
import Sunset from "../assets/images/pImages/sunset beach.jpg";
import Surfer from "../assets/images/pImages/sunset surfer.jpg";
import Vibrant from "../assets/images/pImages/vibrant drop.jpg";
import Wood from "../assets/images/pImages/wood.jpg";
import BangkokMonk from "../assets/images/pImages/bangkokMonkHouse.jpg";
import HoChiMinh from "../assets/images/pImages/HoChiMinh.jpg";
import SouthamptonSun from "../assets/images/pImages/SouthamptonSunset.jpg";
import Yakshas from "../assets/images/pImages/Yakshas.jpg";
import SapSkyline from "../assets/images/pImages/SapSkyline.jpg";
import SapSkyline2 from "../assets/images/pImages/SapSkyline2.jpg";
import TokTemple from "../assets/images/pImages/TokTemple.jpg";
import TempleGuy from "../assets/images/pImages/TempleGuy.jpg";
import SmallWorlds from "../assets/images/pImages/SmallWorlds.jpg";
import TokTower from "../assets/images/pImages/TokTower.jpg";
import TempleEngrave from "../assets/images/pImages/TempleEngrave.jpg";
import Fuji from "../assets/images/pImages/Fuji.jpg";

export function getIcon(name: string): string {
    const icons = {
        "Type/JavaScript": JavaScript,
        CSS,
        HTML,
        Java,
        SQL,
        Go,
        Python,
        Bun,
        Expo: !Theme.value ? ExpoLight : Expo,
        Flask: !Theme.value ? FlaskLight : Flask,
        Node,
        Preact,
        "React & React-Native": React,
        Sqlite,
        Tkinter: Python,
        Zed,
        "Jetbrains Toolbox": Theme.value ? JetbrainsLight : Jetbrains,
        VScode,
        Git,
        GitHub: !Theme.value ? GitHubLight : GitHub,
        "Adobe Premier Pro": Theme.value ? PremierProLight : PremierPro,
        "Vegas Pro 19": Vegas,
        "Affinity Designer 2": Theme.value ? Designer : DesignerLight,
        "Affinity Publisher 2": Theme.value ? Publisher : PublisherLight,
        "Adobe Photoshop": Theme.value ? PhotoShopLight : PhotoShop,
        "Draw.io": DrawIO,
        "Affinity Photo 2": Theme.value ? Photo : PhotoLight,
        "Adobe Lightroom": Theme.value ? LightroomLight : Lightroom,
    } as const;
    return icons[name];
}

export const Images = {
    gd: [A2, DutyCalls, Lockdown, Silhouette, TheEye, TheHand, Wallpaper],
    p: [
        Fuji,
        TempleEngrave,
        TokTower,
        SmallWorlds,
        TempleGuy,
        TokTemple,
        SapSkyline2,
        SapSkyline,
        Yakshas,
        BangkokMonk,
        HoChiMinh,
        SouthamptonSun,
        Orchid1,
        Orchid2,
        Orchid3,
        CloseUp,
        Contrast,
        Purple,
        Ring,
        Skull,
        Sunset,
        Surfer,
        Vibrant,
        Wood,
    ],
} as const;
