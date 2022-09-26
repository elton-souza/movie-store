import { Switch } from "react-router-dom";
import Header from "./components/Header";
import RouteLayout from "./components/RouteLayout";
import { MovieProvider } from "./context/movieContext";
import { StoreProvider } from "./context/storeContext";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home";

export default function Router(): JSX.Element {
  return (
    <MovieProvider>
      <StoreProvider>
        <Header />
        <Switch>
          <RouteLayout path="/" exact component={Home} />
          <RouteLayout path="/checkout" exact component={Checkout} />
        </Switch>
      </StoreProvider>
    </MovieProvider>
  );
}
