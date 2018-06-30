import Home from "../pages/Home";
import Inbox from "../pages/Inbox";
import Authorize from "../pages/Authorize";
import AuthHandler from "../pages/AuthHandler";

var indexRoutes = [
  { path: "/", name: "Login", component: Authorize, exact: true },
  { path: "/authorize", name: "Authorizer", component: AuthHandler},
  { path: "/inbox", name: "Inbox", component: Inbox },
  { path: "/home", name: "Dashboard", component: Home }
];

export default indexRoutes;
