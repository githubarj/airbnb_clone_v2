import "./card.css";
import star from "../../assets/Star 1.png";

function Card() {
  return (
    <div className="card-container">
      <div className="pic">
        <button>SOLD OUT</button>
      </div>
      <div className="card-content">
        <div className="stats">
          <img src={star} alt="" />
          <span className="black">5.0</span>
          <span>(6)</span>
          <span>•</span>
          <span>USA</span>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <span className="bold">From $136</span> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
