import { useEntityQuery } from "@latticexyz/react";
import { Has, HasValue, getComponentValue } from "@latticexyz/recs";
import { useMUD } from "../MUDContext";
import { keccak256 } from "@latticexyz/utils";

export const useArenas = () => {
  const {
    components: { Arena },
  } = useMUD();

  const arenas = useEntityQuery([
    Has(Arena),
    HasValue(Arena, { status: keccak256("waiting") }),
  ]);
  const arenasWithData = arenas.map((id) => ({
    ...getComponentValue(Arena, id),
    id,
  }));

  return arenasWithData;
};
