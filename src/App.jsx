import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Card from "./Components/Card/Card";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

export default App;
