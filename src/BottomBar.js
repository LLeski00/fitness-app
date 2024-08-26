import { GoHomeFill } from "react-icons/go";
import { RiSettingsFill } from "react-icons/ri";
import { GiMuscleUp } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import "./style/BottomBar.css";
import { useEffect } from "react";

const BottomBar = ({ route, setRoute }) => {
    const homeIcon = "home-component";
    const trainIcon = "train-component";
    const settingsIcon = "settings-component";
    const newSessionIcon = "new-session-component";

    useEffect(() => {
        routeSwitch();
    }, [route]);

    const unclickSelection = () => {
        let selections = document.getElementsByClassName("bottom-bar-icon");
        for (let i = 0; i < selections.length; i++)
            selections[i].style.opacity = "100%";
    };

    const routeSwitch = () => {
        unclickSelection();
        let icon = document.getElementById(route);

        if (!icon) {
            alert("The route doesn't exist! Route: ", route);
            return;
        }

        icon.style.opacity = "70%";
    };

    return (
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div
                    id={homeIcon}
                    onClick={() => setRoute(homeIcon)}
                    className="bottom-bar-icon"
                >
                    <GoHomeFill />
                </div>
                <div
                    id={newSessionIcon}
                    onClick={() => setRoute(newSessionIcon)}
                    className="bottom-bar-icon"
                >
                    <FaPlus />
                </div>
                <div
                    id={trainIcon}
                    onClick={() => setRoute(trainIcon)}
                    className="bottom-bar-icon"
                >
                    <GiMuscleUp />
                </div>
                <div
                    id={settingsIcon}
                    onClick={() => setRoute(settingsIcon)}
                    className="bottom-bar-icon"
                >
                    <RiSettingsFill />
                </div>
            </div>
        </div>
    );
};

export default BottomBar;
