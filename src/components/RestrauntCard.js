import { IMG_CDN_URL } from "../config";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <div className="cardTop">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
      </div>
      <div className="cardBody">
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    </div>
  );
};

export default RestrauntCard;
