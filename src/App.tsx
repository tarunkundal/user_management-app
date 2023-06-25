import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import ROUTES from "./routes";
import NotFound from "./screens/NotFound";
import Home from "./screens/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path={ROUTES.Home} exact component={Home} />
        <Route path={ROUTES.CreateUser} exact component={UserForm} />
        <Route path={"*"} exact component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
