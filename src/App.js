import { Route, Switch, Redirect } from "react-router-dom";
import React, { useContext, Suspense } from "react";
import AuthContext from "./store/auth-context";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AuthPage = React.lazy(() => import("./pages/AuthPage"));
const Layout = React.lazy(() => import("./components/Layout/Layout"));

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      {!authCtx.isLoggedIn && (
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }>
          <Switch>
            <Route path="/auth">
              <AuthPage />
            </Route>
            <Route path="*">
              <Redirect to="/auth" />
            </Route>
          </Switch>
        </Suspense>
      )}
      {authCtx.isLoggedIn && (
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }>
          <Switch>
            <Route path="/resume">
              <Layout />
            </Route>
            <Route path="*">
              <Redirect to="/resume" />
            </Route>
          </Switch>
        </Suspense>
      )}
    </React.Fragment>
  );
}

export default App;
