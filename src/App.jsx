import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Card from "./Components/Card/Card";
import data from "./Components/Card/data";

function App() {
  const card = data.map((data) => {
    return (
      <Card
        key={data.id}
        data = {data}
      />
    );
  });

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <div className="card-section">{card}</div>
    </div>
  );
}

export default App;
