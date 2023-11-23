import { useContext } from "react";
import { currentLevelContext } from "../../hooks/useCurrentLevel";
const LevelPin = (pin: any) => {
  const ctx = useContext(currentLevelContext);

  return (
    <a
      className={`pin pin-${pin?.pin.pin_number} ${
        ctx?.iconId === pin?.pin.spaces ? "pin--active" : ""
      }`}
      data-category={`${pin?.pin.category_number}`}
      data-space={`${pin?.pin.spaces}`}
      href="#"
      aria-label={`${pin?.pin.aria_label}`}
      onClick={() => ctx?.getIconId(pin.pin.spaces)}
    >
      <span className="pin__icon">
        <svg className="icon icon--pin">
          <use href="#icon-pin"></use>
        </svg>
        <svg className={`icon icon--logo ${pin?.pin.class_name}`}>
          <use href={`#${pin?.pin.id}`}></use>
        </svg>
      </span>
    </a>
  );
};

export default LevelPin;
