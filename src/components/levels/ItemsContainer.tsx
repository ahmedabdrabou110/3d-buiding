import { useContext } from "react";
import { currentLevelContext } from "../../hooks/useCurrentLevel";
import RommsData from "../../utils/rooms";
import ContentItem from "./ContentItem";
const ItemsContainer = () => {
  const ctx = useContext(currentLevelContext);
  const openModalSearch = () => {
    ctx?.openModal();
  };

  return (
    <>
      <div
        className={`content ${ctx?.itemSelected?.level ? "content-open" : ""}`}
      >
        {RommsData.map((item: any) =>
          item.data.map((data: any) => (
            <ContentItem info={data.information} key={data.spaces} />
          ))
        )}
      </div>
      {!ctx?.open && (
        <button
          className="boxbutton boxbutton--dark open-search"
          aria-label="Show search"
        >
          <svg className="icon icon--search" onClick={openModalSearch}>
            <use href="#icon-search"></use>
          </svg>
        </button>
      )}
    </>
  );
};

export default ItemsContainer;
