import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Category1 from "./Category1";
import Category2 from "./Category2";
import Category3 from "./Category3";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/category1">Category 1</Link>
            </li>
            <li>
              <Link to="/category2">Category 2</Link>
            </li>
            <li>
              <Link to="/category3">Category 3</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/category1">
            <Category1 />
          </Route>
          <Route path="/category2">
            <Category2 />
          </Route>
          <Route path="/category3">
            <Category3 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
