import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import UserEditForm from "./components/UserEditForm";
import UserForm from "./components/UserForm";
import ROUTES from "./routes";
import NotFound from "./components/NotFound";
import Home from "./screens/Home";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        {/* <Route path={ROUTES.EditUser} exact component={UserEditForm} /> */}
        <Route path={ROUTES.Home} exact component={Home} />
        <Route path={ROUTES.CreateUser} exact component={UserForm} />
        <Route path={"*"} exact component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
