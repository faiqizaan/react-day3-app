import React from "react";
import {Star} from "lucide-react";
import "../css/ghibli.css"; // Import modal styles

export default function GhibliModal({ film, onClose }) {
  if (!film) return null;

   // 🎯 Convert rt_score (0–100) → 0–5 scale
  const ratingOutOfFive = Math.round((parseInt(film.rt_score, 10) / 100) * 5);

  return (
    <div className="ghibli-modal-overlay" onClick={onClose}>
      <div className="ghibli-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Left Image */}
        <div className="ghibli-modal-image">
          <img src={film.image} alt={film.title} />
        </div>

        {/* Right Info */}
        <div className="ghibli-modal-info">
          <div className="ghibli-modal-description">
            <h2>{film.title}</h2>
            <p>{film.description}</p>
          </div>

          <div className="ghibli-modal-footer">
            <div className="ghibli-modal-rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={20}
                  fill={index < ratingOutOfFive ? "#FFD700" : "none"} // filled gold for rating
                  stroke="#FFD700"
                  style={{ marginRight: "4px" }}
                />
              ))}
              <span className="ghibli-rating-text">
                ({film.rt_score}/100)
              </span>
            </div>
            <button className="ghibli-modal-close" onClick={onClose}>
              ✖ Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
