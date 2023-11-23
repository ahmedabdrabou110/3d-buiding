import { useContext } from "react";
import { currentLevelContext } from "../../hooks/useCurrentLevel";
const AsideItem = (item: any) => {
  const ctx = useContext(currentLevelContext);
  return (
    <li
      className={`list__item ${
        item?.item.spaces == ctx?.id ? "list__item--active" : ""
      }`}
      data-level={item?.item.level}
      data-category={item?.item.category}
      data-room={item?.item.room}
      data-space={item?.item.spaces}
      onClick={() => {
        ctx?.setIdItem(item?.item.level);
        // ctx?.getSelectedItem(item?.item);
        ctx?.getIconId(item?.item.spaces);
      }}
    >
      <a href="#" className="list__link">
        {item?.item.title}
      </a>
    </li>
  );
};

export default AsideItem;
