import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import UserCard from "./components/UserCard";
import UserEditForm from "./components/UserEditForm";
import UserForm from "./components/UserForm";
import ROUTES from "./routes";

const App = () => {
  return (
    <Switch>
      <Header />

      <Route path={ROUTES.Home} exact component={UserCard} />
      <Route path={ROUTES.EditUser} exact component={UserEditForm} />
      <Route path={ROUTES.CreateUser} exact component={UserForm} />
    </Switch>
  );
};

export default App;
