import React from "react";
import { getQueryClient } from "@/app/store";
import { getPokemonById } from "@/app/store";
import Hydrate from "@/app/utils/Hydrate";
import { dehydrate } from "@tanstack/react-query";
import PokemonDetails from "@/app/components/PokemonDetails";
import Link from "next/link";

const page = async ({ params }: { params: { id: number } }) => {
  const client = getQueryClient();
  const id = params.id;
  await client.prefetchQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemonById(id),
  });

  const dehydratedState = dehydrate(client, {
    shouldDehydrateMutation: () => true,
  });

  return (
    <div className="mx-auto px-20 md:px-32 ">
      <Hydrate state={dehydratedState}>
        <Link
          className="bg-orange-600 text-white py-2 px-4 rounded-sm "
          href={"/"}
        >
          Back
        </Link>
        <PokemonDetails id={id} />
      </Hydrate>
    </div>
  );
};

export default page;
