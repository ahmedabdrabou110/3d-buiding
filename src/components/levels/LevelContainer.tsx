import { useContext } from "react";
import RommsData from "../../utils/rooms";
import Level from "./Level";
import { currentLevelContext } from "../../hooks/useCurrentLevel";
import Surroundings from "../Surroundings";

const LevelContainer = () => {
  const ctx = useContext(currentLevelContext);
  return (
    <div
      className={`building miller ${ctx?.iconId ? "building--content-open" : ""}
      ${ctx?.searchLink ? " building--content--open" : ""}
      ${ctx?.id ? "building--content--open" : ""}
      ${ctx?.itemSelected?.level ? " building--content-open" : ""}
      `}
    >
      <div
        className={`levels ${
          ctx?.id ? `levels--selected-${ctx.id} levels--open` : ""
        }`}
      >
        {RommsData.map((room: any) => (
          <Level room={room} key={room.id} />
        ))}
      </div>
      {!ctx?.id && <Surroundings />}
    </div>
  );
};

export default LevelContainer;
