import React from "react";
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
// import { Route } from "react-router-dom"
import { Link } from "react-router-dom";


const drawerListItems = [
  { path: "/", name: "Dashboard", icon: "dashboard" },
  { path: "/inbox", name: "Inbox", icon: "inbox" }
];

const no_underine = {
  textDecoration: "none"
};


export const sidebarListItems = (selectedItem) => (
  <div>
    {drawerListItems.map((prop, key) => {
      return (
        <Link to={prop.path} style={no_underine} key={key}>
          <MenuItem  selected={selectedItem===prop.name ? true : false } >
            <ListItemIcon>
              <Icon>{prop.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={prop.name} />
          </MenuItem>
        </Link>
      );
    })}
  </div>
);
