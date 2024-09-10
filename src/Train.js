import { useState, useEffect } from "react";
import "./style/Train.css";

const Train = () => {
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

    return (
        <div className="train">
            <div className="train-content">
                <h1>Train</h1>

                <div className="sessions">
                    {sessions &&
                        sessions.map((session) => (
                            <div key={session.id} className="session">
                                <h2>{session.name}</h2>
                                {session.exercises.map((exercise) => (
                                    <div className="session-exercises">
                                        <p>{exercise.name}</p>
                                        <p>Sets: {exercise.sets}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Train;
