import Home from "../pages/Home";
import Inbox from "../pages/Inbox"


var indexRoutes = [
    { path: "/", name: "Dashboard", component: Home,exact: true},
    { path: "/inbox", name: "Inbox", component: Inbox}
];
  
  export default indexRoutes;