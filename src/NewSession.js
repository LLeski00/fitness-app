import { useEffect, useState } from "react";
import "./style/NewSession.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const NewSession = () => {
    const [exercises, setExercises] = useState(null);
    const [session, setSession] = useState(null);

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
                setExercises(myJson);
            });
    }, []);

    return (
        <div className="new-session">
            <div className="new-session-content">
                <h1>New Session</h1>
                {exercises &&
                    exercises.map((exercise) => (
                        <div key={exercise.id} className="exercise">
                            <h2>{exercise.name}</h2>
                            <p>Sets: </p>
                            <div className="set-counter">
                                <FaMinus />
                                <p>0</p>
                                <FaPlus />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default NewSession;
