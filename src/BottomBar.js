import { GoHomeFill } from "react-icons/go";
import { BsCompassFill } from "react-icons/bs";
import { GiMuscleUp } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import "./style/BottomBar.css";
import { useEffect } from "react";

const BottomBar = ({ route, setRoute }) => {
    const homeIcon = "home-component";
    const trainIcon = "train-component";
    const historyIcon = "history-component";
    const newSessionIcon = "new-session-component";

    useEffect(() => {
        routeSwitch();
    }, [route]);

    const unclickSelection = () => {
        let selections = document.getElementsByClassName("bottom-bar-icon");
        for (let i = 0; i < selections.length; i++)
            selections[i].style.backgroundColor = "crimson";
    };

    const routeSwitch = () => {
        unclickSelection();
        let icon = document.getElementById(route);

        if (!icon) {
            alert("The route doesn't exist! Route: ", route);
            return;
        }

        icon.style.backgroundColor = "rgb(196, 17, 53)";
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
                    id={historyIcon}
                    onClick={() => setRoute(historyIcon)}
                    className="bottom-bar-icon"
                >
                    <BsCompassFill />
                </div>
            </div>
        </div>
    );
};

export default BottomBar;
