import { useContext } from "react";
import { currentLevelContext } from "../../hooks/useCurrentLevel";
const ContentItem = (info: any) => {
  const ctx = useContext(currentLevelContext);
  const closeModal = () => {
    ctx?.setIconId("");
    ctx?.getSelectedItem(null);
  };
  return (
    <>
      <div
        className={`content__item ${
          ctx?.iconId === info.info.spaces ? "content__item--current" : ""
        }
          ${ctx?.searchLink && "content__item--current"}
          ${ctx?.itemSelected?.level ? "content__item--current" : ""}
        `}
        data-space={`${info.info.spaces}`}
        data-category={`${info?.info.category}`}
      >
        <h3 className="content__item-title">{info?.info.title}</h3>
        <h4>{info?.info.heading}</h4>
        <div className="content__item-details">
          <p className="content__meta">
            <span className="content__meta-item">
              <strong>Office:</strong> {info?.info.content_meta.office}
            </span>
            <span className="content__meta-item">
              <strong>Hours:</strong> 8:00AM &mdash;{" "}
              {info?.info.content_meta.hours}
            </span>
            <span className="content__meta-item">
              <strong>Phone:</strong> {info?.info.content_meta.phone}
            </span>
          </p>
          <p className="content__desc">
            <img
              src={info?.info.content_desc.img.src}
              alt={info?.info.content_desc.img.alt}
            />
            {info?.info.content_desc.title}
            <br />
            <br />
            Publications:{" "}
            <a href={info?.info.content_desc.link.src}>
              {info?.info.content_desc.link.title}
            </a>
          </p>
        </div>
      </div>
      {(ctx?.iconId || ctx?.itemSelected?.level) && (
        <button
          className="boxbutton boxbutton--dark content__button"
          aria-label="Close details"
          onClick={closeModal}
        >
          <svg className="icon icon--cross">
            <use href="#icon-cross"></use>
          </svg>
        </button>
      )}
    </>
  );
};

export default ContentItem;
