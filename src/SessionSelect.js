import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import "./style/SessionSelect.css";

const SessionSelect = ({ setIsSessionSelected, setSessionSelected }) => {
    const [sessions, setSessions] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/sessions", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setSessions(myJson);
            });
    }, []);

    const handleDeleteSession = (id) => {
        let temp = sessions.filter((session) => session.id !== id);
        console.log(temp);

        fetch("http://localhost:3001/sessions/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));

        setSessions(temp);
    };

    const startWorkout = (sessionSelected) => {
        setSessionSelected(sessionSelected);
        setIsSessionSelected(true);
    };

    return (
        <div className="session-select">
            <div className="session-select-content">
                <h1>Train</h1>

                <div className="sessions">
                    {sessions &&
                        sessions.map((session) => (
                            <div key={session.id} className="session">
                                <h2>{session.name}</h2>
                                {session.exercises.map((exercise) => (
                                    <div
                                        key={exercise.id}
                                        className="session-exercises"
                                    >
                                        <p>{exercise.name}</p>
                                        <p>Sets: {exercise.sets}</p>
                                    </div>
                                ))}
                                <button
                                    className="start-workout-button"
                                    onClick={() => startWorkout(session)}
                                >
                                    Start Workout
                                </button>
                                <FaTrash
                                    onClick={() =>
                                        handleDeleteSession(session.id)
                                    }
                                />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default SessionSelect;
