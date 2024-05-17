import { getCharacter } from "@/services/getCharacter";
import { getMultipleEpisodes } from "@/services/getMultipleEpisodes";
import Image from "next/image";

export default async function ServerPage({
  params,
}: {
  params: { id: string };
}) {
  const character = await getCharacter(parseInt(params.id));

  const episodesIds = character.episode.map((url) =>
    parseInt(url.split("/").pop()!),
  );
  const episodes = await getMultipleEpisodes(episodesIds);

  return (
    <div className="mx-auto max-w-screen-lg rounded-lg bg-gradient-to-r from-green-400 to-blue-500 p-6 pt-10 shadow-lg">
      <div className="flex flex-col gap-10 rounded-lg bg-white p-6 shadow-lg md:flex-row">
        <Image
          src={character.image}
          alt={character.name}
          width={200}
          height={200}
          unoptimized
          className="h-auto rounded-md shadow-md"
        />
        <div className="flex flex-col justify-between">
          <div className="font-light text-gray-800">
            <h1 className="mb-4 text-3xl font-bold text-gray-900">
              {character.name}
            </h1>
            <p className="mb-2 text-lg text-gray-600">
              {character.status} - {character.gender}
            </p>
            <p className="mb-2">
              <span className="font-bold">Origin: </span>
              {character.origin.name}
            </p>
            <p>
              <span className="font-bold">Location: </span>
              {character.location.name}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="mb-6 text-2xl font-bold text-white">Episodes:</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {episodes.map((episode) => (
            <div
              key={episode.id}
              className="rounded-lg bg-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <p className="mb-2 text-lg font-semibold text-gray-900">
                {episode.episode}
              </p>
              <p className="text-md mb-1 text-gray-700">{episode.name}</p>
              <p className="text-sm text-gray-500">{episode.air_date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
