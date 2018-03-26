import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import indexRoutes from "./routes/index.jsx";

import registerServiceWorker from './registerServiceWorker';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route exact={prop.exact} path={prop.path} key={key} component={prop.component}/>
        // <Route  path="/inbox"  component={Inbox} />
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();
