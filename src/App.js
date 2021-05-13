import "./styles.css";
import mapa from "./assets/mapa-bkg-1.png";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header>
          <h1>Kingdom under construction</h1>
        </header>
        <img src={mapa} alt="mapa" className="mapa-bkg" />
      </div>
      {console.log(mapa, "MAPA")}
    </div>
  );
}
