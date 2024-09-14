import { useEffect, useState } from "react";
import "./style/NewSession.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const NewSession = () => {
    const [exercises, setExercises] = useState(null);
    const [sessionName, setSessionName] = useState("Session name...");

    useEffect(() => {
        fetch("http://localhost:3001/exercises", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                for (let i = 0; i < myJson.length; i++) myJson[i].sets = 0;
                setExercises(myJson);
            });
    }, []);

    const handleMinusClick = (id) => {
        let temp = [...exercises];
        temp[id] = { ...temp[id], sets: temp[id].sets - 1 };
        setExercises(temp);
    };

    const handlePlusClick = (id) => {
        let temp = [...exercises];
        temp[id] = { ...temp[id], sets: temp[id].sets + 1 };
        setExercises(temp);
    };

    const handleSaveSession = () => {
        let temp = { name: "Session", exercises: [] };
        temp.name = sessionName;
        temp.exercises = exercises.filter((exercise) => exercise.sets > 0);

        fetch("http://localhost:3001/sessions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(temp),
        })
            .then((response) => response.json())
            .catch((error) => console.error(error));

        console.log(temp);
    };

    return (
        <div className="new-session">
            <div className="new-session-content">
                <h1>New Session</h1>
                <div className="exercises">
                    {exercises &&
                        exercises.map((exercise) => (
                            <div key={exercise.id} className="exercise">
                                <h2>{exercise.name}</h2>
                                <p>Sets: </p>
                                <div className="set-counter">
                                    <FaMinus
                                        onClick={() =>
                                            handleMinusClick(exercise.id)
                                        }
                                    />
                                    <p>{exercise.sets}</p>
                                    <FaPlus
                                        onClick={() =>
                                            handlePlusClick(exercise.id)
                                        }
                                    />
                                </div>
                            </div>
                        ))}
                </div>

                <p>Name this session:</p>

                <div className="save-session">
                    <input
                        onChange={(e) => setSessionName(e.target.value)}
                        value={sessionName}
                        type="text"
                        className="session-name"
                    />

                    <button
                        className="save-session-button"
                        onClick={() => handleSaveSession()}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewSession;
