import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/ship/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;