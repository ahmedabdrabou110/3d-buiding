import { useContext } from "react";
import { currentLevelContext } from "../../hooks/useCurrentLevel";
import RommsData from "../../utils/rooms";
import ContentItem from "./ContentItem";
const ItemsContainer = () => {
  const ctx = useContext(currentLevelContext);
  return (
    <div className="content">
      {RommsData.map((item: any) =>
        item.data.map((data: any) => <ContentItem info={data.information} />)
      )}
    </div>
  );
};

export default ItemsContainer;
