import { useContext, useState } from "react";
import { currentLevelContext } from "../hooks/useCurrentLevel";
import AsideData from "../utils/aside";
import AsideItem from "./levels/AsideItem";
const Aside = () => {
  const [list, setList] = useState(false);
  const ctx = useContext(currentLevelContext);
  const closeModalSearch = () => {
    ctx?.closeModal();
  };

  const toggleList = () => {
    setList((prev) => !prev);
  };

  return (
    <aside
      className={`spaces-list ${ctx?.open ? "spaces-list--open" : ""} `}
      id="spaces-list"
    >
      <div className="search">
        <input
          className="search__input"
          placeholder="Search..."
          value={ctx?.search}
          onChange={(e) => ctx?.setSearchItem(e.target.value)}
        />
        {ctx?.open && (
          <button
            className="boxbutton boxbutton--darker close-search"
            aria-label="Close details"
            onClick={closeModalSearch}
          >
            <svg className="icon icon--cross">
              <use href="#icon-cross"></use>
            </svg>
          </button>
        )}
      </div>
      <span className="label" onClick={toggleList}>
        <input
          id="sort-by-name"
          className="label__checkbox"
          type="checkbox"
          aria-label="Show alphabetically"
        />
        <label className="label__text">A - Z</label>
      </span>
      <ul className={`list ${list ? "grouped-by-category" : ""}`}>
        {ctx?.search ? (
          <>
            {AsideData.filter((item: any) =>
              item.title.includes(`${ctx?.search}`)
            ).map((item: any) => (
              <AsideItem item={item} key={item.title} />
            ))}
          </>
        ) : (
          <>
            {AsideData.map((item: any) => (
              <AsideItem item={item} key={item?.title} />
            ))}
          </>
        )}
      </ul>
    </aside>
  );
};

export default Aside;
