import { Route, Switch } from "react-router";
import "./style/App.scss";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import DiscoverRecipesPage from "./Pages/DiscoverRecipesPage";
import { NavLink } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <NavLink className="navlink" exact to="/">
            Home
          </NavLink>
          <div>
            <NavLink className="navlink" to="/discover">
              Discover
            </NavLink>
            <NavLink className="navlink" to="/about">
              About
            </NavLink>
          </div>
        </nav>
      </header>
      <Switch>
        <Route path="/discover" component={DiscoverRecipesPage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
