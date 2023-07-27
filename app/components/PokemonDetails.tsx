"use client";
import { useQuery } from "@tanstack/react-query";
import { getPokemonById } from "../store";
import PokemonCard from "./PokemonCard";

type Props = {
  id: number;
};

const PokemonDetails = ({ id }: Props) => {
  const { data } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemonById(id),
  });
  return (
    <div className="mx-auto ">
      <PokemonCard
        name={data?.name}
        id={data?.id}
        pokemonImage={data?.pokemonImage}
      />
    </div>
  );
};

export default PokemonDetails;
