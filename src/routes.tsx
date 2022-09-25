import { Switch } from "react-router-dom";
import Header from "./components/Header";
import RouteLayout from "./components/RouteLayout";
import { StoreProvider } from "./context/storeContext";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home";

export default function Router(): JSX.Element {
  return (
    <StoreProvider>
      <Header />
      <Switch>
        <RouteLayout path="/" exact component={Home} />
        <RouteLayout path="/checkout" exact component={Checkout}/>
      </Switch>
    </StoreProvider>
  );
}
