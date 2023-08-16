import "./hero.css"
import banner from "../../assets/photo-grid.png"

function Hero() {
  return (
    <div>
      <div className="banner">
        <img src={banner} alt="" />
      </div>
      <div className="info">
        <h1 className="title">Online Experiences</h1>
        <p className="paragraph">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Hero