import { BrowserRouter } from "react-router-dom";
import Direction from "../src/router/index";
import { AuthProvider } from "./Hooks";
import { GlobalStyle } from "./styles/globalStyle";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Direction />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
