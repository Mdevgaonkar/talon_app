import Home from "../pages/Home";
import Inbox from "../pages/Inbox";
import Authorize from "../pages/Authorize";

var indexRoutes = [
  { path: "/", name: "Dashboard", component: Authorize, exact: true },
  { path: "/inbox", name: "Inbox", component: Inbox },
  { path: "/home", name: "Login", component: Home }
];

export default indexRoutes;
