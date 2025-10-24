import React, { useEffect, useState } from "react";
import axios from "axios";
import { LoaderCircle, ShieldUser } from 'lucide-react';

function Cat() {
    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);

    const accessToken = "live_szIhsUuTz8M5uX8OZUX0RNG3viTe1qrYOiRDww4K41d39kTzbcg3KDJho3WdAoSL"; 
    const baseUrl = `https://api.thecatapi.com/v1/images/search`;
    const corsProxy = "https://corsproxy.io/?url="

    useEffect(() => {
        async function fetchCats() {
            try {
                const response = await axios.get(baseUrl, {
                    headers: {
                        "x-api-key": accessToken,
                    },
                    params: {
                        limit: 5, // fetch 5 cat images
                    },
                });
                setCats(response.data);
            } catch (error) {
                console.error("Error fetching cats:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchCats();
        return () => {};
    }, []);

    // Best practice is early return and then React exits the component
    // So else is not required
    if (loading) return <p className="spinwheel"><LoaderCircle size={100}/></p>
    return (
    <div>
        <h1><ShieldUser size={40} />5 Random Cat</h1>
        {cats.map((cat) => (
            <div className="superherocard" key={cat.id}>
                <img
                key={cat.id}
                src={cat.url}
                alt="Cute cat"
                style={{ width: "250px", borderRadius: "10px" }}
                />
            </div>
      ))}
    </div>
    )
}

export default Cat;