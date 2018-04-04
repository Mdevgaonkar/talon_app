import Home from "../pages/Home.jsx";
import Inbox from "../pages/Inbox.jsx"


var indexRoutes = [
    { path: "/", name: "Dashboard", component: Home,exact: true},
    { path: "/inbox", name: "Inbox", component: Inbox}
];
  
  export default indexRoutes;