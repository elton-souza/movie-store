import { Route, RouteProps } from "react-router-dom";

interface RouteLayoutProps extends RouteProps {
  component: any;
}

export default function RouteLayout({
  component: Component,
  path,
}: RouteLayoutProps) {
  return (
    <Route
      path={path}
      exact
      render={(matchProps) => <Component {...matchProps} />}
    />
  );
}
