import { BrowserRouter } from "react-router-dom";
import Direction from "../src/router/index";
import { AuthProvider } from "./hooks/useAuth";
import { GlobalStyle } from "./styles/globalStyle";
import "react-toastify/dist/ReactToastify.min.css";

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
