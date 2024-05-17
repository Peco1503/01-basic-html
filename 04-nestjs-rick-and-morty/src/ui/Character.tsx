"use client";
import Image from "next/image";
import { Character } from "@/types/Character";
import { Star } from "./Star";
import { useEffect, useState } from "react";
import db from "@/services/localStorage";
import { paths } from "@/const/paths";
import Link from "next/link";

interface CharacterComponentProps {
  character: Character;
}

export function CharacterComponent({
  character: { id, name, image, status, gender, location },
}: CharacterComponentProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(db.isFavorite(id));
  }, [id]);

  const handleFavoriteClick = () => {
    db.toggleFavoriteCharacter(id);
    setIsFavorite(!isFavorite);

    if (window.location.pathname === paths.favoriteCharacters) {
      window.location.reload(); // triggers a refresh only on favorite page
    }
  };

  return (
    <div className="relative flex items-center overflow-hidden rounded-lg bg-white shadow-md">
      <Image
        src={image}
        alt={name}
        width={120}
        height={120}
        unoptimized
        className="h-32 w-32 object-cover"
      />
      <div className="flex w-full flex-col justify-between p-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xl font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-gray-600">
              {status} - {gender}
            </p>
            <p className="text-sm text-gray-600">Location: {location.name}</p>
          </div>
          <button
            className="ml-4 text-yellow-500 transition-colors hover:text-yellow-400"
            onClick={handleFavoriteClick}
          >
            <Star isChecked={isFavorite} />
          </button>
        </div>
        <Link
          href={`${paths.character}/${id}`}
          className="mt-4 inline-block rounded-lg bg-blue-500 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-blue-600"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
