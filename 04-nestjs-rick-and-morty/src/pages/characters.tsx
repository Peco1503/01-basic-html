import React, { useEffect, useState } from "react";
import Layout from "@/app/layout";
import { Character } from "@/types/characters";
import { fetchAllCharacters } from "@/services/charactersService";

const Characters: React.FC = () => {

    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const baseUrl = '${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API}/character';
        fetchAllCharacters(baseUrl).then(characters => {
            setCharacters(characters);
            setLoading(false);
        }).catch(error => {
            console.error(error);
            setLoading(false);
        });
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-semibold text-rick-and-morty-green">All Characters</h1>
            <p className="text-lg mt-4">
            Here you can find all the characters in the Rick and Morty universe. You can add your favorite characters to the "Favorite Characters" page.
            </p>
        </div>
    );
};

export default Characters;