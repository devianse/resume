import Layout from "./components/Layout/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import React, { useContext } from "react";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      {!authCtx.isLoggedIn && (
        <Switch>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route path="*">
            <Redirect to="/auth" />
          </Route>
        </Switch>
      )}
      {authCtx.isLoggedIn && (
        <Switch>
          <Route path="/resume">
            <Layout />
          </Route>
          <Route path="*">
            <Redirect to="/resume" />
          </Route>
        </Switch>
      )}
    </React.Fragment>
  );
}

export default App;
