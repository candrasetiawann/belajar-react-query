"use client";

import Hydrate from "./utils/Hydrate";
import { dehydrate, useQuery } from "@tanstack/react-query";
import { getQueryClient } from "./store";
import Users from "./users/Users";
import PokemonComponent from "./pokemon/Pokemon";

const client = getQueryClient();

const dehydratedState = dehydrate(client, {
  shouldDehydrateQuery: () => true,
});
export default function Home() {
  return (
    <div className="">
      <Hydrate state={dehydratedState}>
        {/* <Users /> */}
        <PokemonComponent />
      </Hydrate>
    </div>
  );
}
