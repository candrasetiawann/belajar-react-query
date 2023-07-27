import { QueryClient } from "@tanstack/query-core";
import { cache } from "react";

export const getQueryClient = cache(() => new QueryClient());

type getPokemonProps = {
  url: string;
  name: string;
};

// user
export const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const responseJson = await response.json();
  return responseJson;
};

//pokemon

const getIdFromUrl = (url: string) => {
  const id = url
    .split("/")
    .filter((i) => i !== "")
    .at(-1);
  return id;
};

export const getPokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon").then(
    (res) => res.json()
  );

  const pokemonResults = response?.results?.map(
    ({ url, name }: getPokemonProps) => ({
      name,
      url,
      id: getIdFromUrl(url),
      pokemonImage: getPokemonImage(url),
    })
  );

  return pokemonResults;
};

const getPokemonImage = (url: string) => {
  const id = getIdFromUrl(url);
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

export const getPokemonById = async (id: number) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url).then((res) => res.json());

  return { ...response, id, pokemonImage: getPokemonImage(url) };
};
