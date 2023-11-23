import { useContext } from "react";
import RommsData from "../../utils/rooms";
import Level from "./Level";
import { currentLevelContext } from "../../hooks/useCurrentLevel";

const LevelContainer = () => {
  const ctx = useContext(currentLevelContext);
  return (
    <div
      className={`building miller ${
        ctx?.iconId ? "building--content-open" : ""
      } `}
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
    </div>
  );
};

export default LevelContainer;
