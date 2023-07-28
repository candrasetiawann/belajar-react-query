import React from "react";
import Image from "next/image";

type Props = {
  name: string;
  id: number;
  pokemonImage: string;
};

const PokemonCard = ({ name, pokemonImage }: Props) => {
  return (
    <div className="mx-auto">
      <ul className="bg-red-600 rounded-sm py-5 px-5 box-shadow-offset-black">
        {pokemonImage && (
          <Image
            src={pokemonImage}
            alt="pokemon-image"
            width={200}
            height={200}
          />
        )}
        <h5 className="text-center py-2 text-yellow-500 font-bold bg-blue-900 mx-2 mb-2 box-shadow-offset-black1">
          {name}
        </h5>
      </ul>
    </div>
  );
};

export default PokemonCard;
