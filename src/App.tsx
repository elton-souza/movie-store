import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { GlobalStyle } from "./styles/GlobalStyles";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
