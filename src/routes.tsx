import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import { StoreProvider } from "./context/storeContext";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home";
import SearchMovie from "./Pages/SearchMovie";

export default function Router(): JSX.Element {
  return (
    <StoreProvider>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/results/query=:query" exact component={SearchMovie} />
      </Switch>
    </StoreProvider>
  );
}
