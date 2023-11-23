import { useContext } from "react";
import { currentLevelContext } from "../hooks/useCurrentLevel";
const Navbar = () => {
  const ctx = useContext(currentLevelContext);
  const closeWindow = () => {
    ctx?.setIdItem("");
    ctx?.setIconId("");
    ctx?.getSelectedItem(null);
  };

  return (
    <>
      {ctx?.id && (
        <nav className="buildingnav buildingnav" key={ctx?.id}>
          {ctx?.id !== "7" && (
            <button
              className="boxbutton buildingnav__button--up"
              aria-label="Go up"
              onClick={() => ctx?.nextWindow(ctx?.id)}
            >
              <svg className="icon icon--angle-down">
                <use href="#icon-angle-up"></use>
              </svg>
            </button>
          )}
          <button
            className="boxbutton boxbutton--dark buildingnav__button--all-levels"
            aria-label="Back to all levels"
            onClick={closeWindow}
          >
            <svg className="icon icon--stack">
              <use href="#icon-stack"></use>
            </svg>
          </button>
          {ctx?.id !== "1" && (
            <button
              className="boxbutton buildingnav__button--down"
              aria-label="Go down"
              onClick={() => ctx?.prevWindow(ctx?.id)}
            >
              <svg className="icon icon--angle-down">
                <use href="#icon-angle-down"></use>
              </svg>
            </button>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;
