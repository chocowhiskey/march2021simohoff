import background from "./images/ocean.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={background} className="App-logo" alt="logo" />
      </header>

      <div class="center">
        <p>This div is vertically centered.</p>
      </div>
    </div>
  );
}

export default App;
