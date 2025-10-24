import React, { useEffect, useState } from "react";
import { LoaderCircle, ShieldUser } from 'lucide-react';

export default function Color(){
    const [colorData, setColorData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to generate a random 6-digit hex (no #)
    const getRandomHex = () => {
        return Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    };

    useEffect(() => {
        const fetchColor = async () => {
        setLoading(true);
        setError(null);

        try {
            const cleanHex = getRandomHex();
            const url = `https://www.thecolorapi.com/scheme?hex=${cleanHex}&mode=analogic&count=5`;
            const response = await fetch(url);

            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setColorData(data.colors);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        };

        fetchColor();
    }, []);

    if (loading) return <p className="spinwheel"><LoaderCircle size={100}/></p>
    if (error) return <div>Error: {error}</div>;
    if (!colorData) return null;

    return (
        <div>
            <h2>Random Hex Color Info</h2>
            <div className="superherocard-container">
            {colorData.map((color) => (
                <div 
                    className="superherocard"
                    key={color.hex.value}
                    style={{
                        width: "150px",
                        height: "150px",
                        backgroundColor: color.hex.value,
                        borderRadius: "10px",
                        boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontWeight: "bold",
                        textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
                    }}
                >
                    {color.name.value}
                        <br />
                    {color.hex.value}
                </div>
            ))}
      </div>
        </div>
    )
}