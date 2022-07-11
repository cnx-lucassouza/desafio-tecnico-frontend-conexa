import { BrowserRouter } from "react-router-dom";
import Direction from "../src/routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Direction />
      </BrowserRouter>
    </div>
  );
}

export default App;
