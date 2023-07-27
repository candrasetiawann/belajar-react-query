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
      <ul className="bg-white rounded-sm ">
        {pokemonImage && (
          <Image
            src={pokemonImage}
            alt="pokemon-image"
            width={100}
            height={100}
          />
        )}
        <h5 className="pl-5">{name}</h5>
      </ul>
    </div>
  );
};

export default PokemonCard;
