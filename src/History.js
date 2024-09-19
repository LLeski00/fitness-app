import { useEffect, useState } from "react";
import "./style/History.css";

const History = () => {
    const [history, setHistory] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/history", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setHistory(myJson);
            });
    }, []);

    return (
        <div className="history">
            <div className="history-conent">
                <h1>History</h1>
                {history &&
                    history.map((workout) => (
                        <div key={workout.id} className="history-workout">
                            <h2>{workout.session.name}</h2>
                            <h2>Exercises:</h2>
                            {workout.session.exercises.map((exercise) => (
                                <div
                                    key={exercise.id}
                                    className="history-workout-exercise"
                                >
                                    <h3>{exercise.name}</h3>
                                    <h3>Sets:</h3>
                                    {exercise.timeOfSet.map((set, i) => (
                                        <div
                                            key={i}
                                            className="history-workout-exercise-set"
                                        >
                                            <p>
                                                {i + 1}. Set: {set}s
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default History;
