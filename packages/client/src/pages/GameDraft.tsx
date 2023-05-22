import { useComponentValue, useEntityQuery } from "@latticexyz/react";
import { useMUD } from "../MUDContext";
import { Has, getComponentValueStrict } from "@latticexyz/recs";

export const GameDraft = () => {
  const {
    components: { Player },
    systemCalls: { joinBattle, attack },
    network: { singletonEntity },
  } = useMUD();

  const playerIds = useEntityQuery([Has(Player)]);

  const handleJoinBattle = async () => {
    const result = await joinBattle();
    console.log({ result });
  };

  const handleAttack = async (target: string) => {
    const result = await attack(target);
    console.log({ result });
  };

  return (
    <>
      <div>Players</div>
      <div>
        <ol>
          {playerIds.map((id) => {
            const playerData = getComponentValueStrict(Player, id);

            return (
              <li key={id}>
                <div>
                  Address: {id.toString()}, hp: {playerData.hp}, mp:{" "}
                  {playerData.mp}{" "}
                </div>
                <div>
                  <button onClick={() => handleAttack(id.toString())}>
                    Attack
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div>
        <p>Join battle</p>
        <button onClick={handleJoinBattle}>Join</button>
      </div>
    </>
  );
};
