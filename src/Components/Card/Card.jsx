import "./card.css";
import PropTypes from "prop-types";
import star from "../../assets/Star 1.png";

function Card({ data }) {
  const { title, coverImg, location, rating, reviewCount, price, openSpots } =
    data;
  const display =
    openSpots === 0 ? "SOLD OUT" : location === "Online" ? "ONLINE" : false;

  return (
    <div className="card-container">
      <div
        className="pic"
        style={{ backgroundImage: `url("/src/assets/${coverImg}")` }}
      >
        {display && <button>{display}</button>}
      </div>
      <div className="card-content">
        <div className="stats">
          <img src={star} alt="" />
          <span className="black"> {rating} </span>
          <span>({reviewCount})</span>
          <span>•</span>
          <span>{location}</span>
        </div>
        <p>{title}</p>
        <p>
          <span className="bold">From ${price}</span> / person
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.object,
  state: PropTypes.string,
  rating: PropTypes.number,
  reviews: PropTypes.number,
  country: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  display: PropTypes.bool,
};

export default Card;
