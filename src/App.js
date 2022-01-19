import Layout from "./components/Layout/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthPage from "./components/pages/AuthPage";

function App() {
  return (
    <Switch>
      <Route path="/resume">
        <Layout />
      </Route>
      <Route path="/auth">
        <AuthPage />
      </Route>
      <Route path="*">
        <Redirect to="/resume" />
      </Route>
    </Switch>
  );
}

export default App;
