import React, {useEffect, useState} from "react";
import { LoaderCircle, ShieldUser } from 'lucide-react';
import '../css/ghibli.css';
import GhibliModal from "./GhibliModal";

export default function GhibliFilms(){
    const [films, setFilms] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedFilm, setSelectedFilm] = useState(null);

    useEffect(() => {
        const fetchFilms = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://ghibliapi.vercel.app/films');
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            // Randomize film order and take only 5
            const shuffled = data.sort(() => Math.random() - 0.5);
            const selected = shuffled.slice(0, 5);
            // setFilms(selected);
            setFilms(data);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        };

        fetchFilms();
    }, []);

    if (loading) return <p className="spinwheel"><LoaderCircle size={100}/></p>
    if (error) return <p>Error: {error}</p>;
    if (!films) return null;

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Studio Ghibli Films</h2>
            <div className="superherocard-container">
                {films.map((film) => (
                    <div
                    className="superherocard ghibli-card"
                    key={film.id}
                    onClick={() => setSelectedFilm(film)}
                    >
                    {/* Image */}
                    <img
                        className="ghibli-card-image"
                        src={film.image}
                        alt={film.title}
                    />

                    {/* Content */}
                    <div className="ghibli-card-body">
                        <h3 className="ghibli-card-title">
                        {film.title} ({film.release_date})
                        </h3>
                        <p className="ghibli-card-director">
                        <strong>Director:</strong> {film.director}
                        </p>
                        <p className="ghibli-card-description">{film.description}</p>
                    </div>
                    </div>
                ))}
            </div>

            {/* ✅ Modal */}
            <GhibliModal film={selectedFilm} onClose={() => setSelectedFilm(null)} />

        </div>
    );

}