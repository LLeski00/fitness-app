import "./style/Home.css";
import { useEffect, useState } from "react";

const Home = () => {
    const [exercises, setExercises] = useState(null);

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
        <div className="home">
            <div className="home-content">
                {exercises &&
                    exercises.map((exercise) => (
                        <div key={exercise.id} className="exercise">
                            <p>{exercise.name}</p>
                        </div>
                    ))}{" "}
            </div>
        </div>
    );
};

export default Home;
