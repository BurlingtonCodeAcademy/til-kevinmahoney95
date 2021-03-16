import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Facts from "./components/facts";
import Post from "./components/post";
import Nav from "./components/nav";

function App() {
  return (
    <div>
      
      <header>
        <h1>Today I Learned!</h1>
      </header>
      {/* Places nav bar on page, and sets up paths from home page */}
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/facts" component={Facts} />
        <Route path="/facts/:id" component={Post} />
      </Switch>
    </div>
  );
}

export default App;

//Ran out of time on this one. Will add functionality at a later date.
