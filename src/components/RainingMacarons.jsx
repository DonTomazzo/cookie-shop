import React from 'react';
import { FaCookieBite } from 'react-icons/fa';

// Genererar slumpmässiga värden
const getRandom = (min, max) => Math.random() * (max - min) + min;

const RainingMacarons = () => {
    // Array för att skapa 15 ikoner
    const macarons = Array.from({ length: 15 }, (_, index) => {
        const style = {
            left: `${getRandom(0, 100)}%`, // Slumpmässig horisontell position
            animationDuration: `${getRandom(8, 15)}s`, // Slumpmässig fallhastighet
            animationDelay: `${getRandom(0, 8)}s`, // Slumpmässig fördröjning
            opacity: getRandom(0.5, 1), // Slumpmässig opacitet
        };

        return (
            <FaCookieBite
                key={index}
                className="raining-macaron"
                style={style}
            />
        );
    });

    return <>{macarons}</>;
};

export default RainingMacarons;