import React from "react";

const Favorites: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-semibold text-rick-and-morty-green">Favorite Characters</h1>
            <p className="text-lg mt-4">
            Here you can find all your favorite characters in the Rick and Morty universe.
            </p>
        </div>
    );
};

export default Favorites;