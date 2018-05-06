import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import MenuList from "@material-ui/core/MenuList";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";

import Appbar from "../components/Appbar.jsx";

import { sidebarListItems } from "../components/sidebarListItems.jsx";

import baseStyle from "../assets/jss/baseStyle.jsx";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

class Layout extends React.Component {
  state = {
    mobileOpen: false,
    auth: true,
    anchorEl: null
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;
    const { auth } = this.state;

    const drawer = (
      <div>
        <div className={classes.toolbarIe11}>
        <div className={classes.toolbar}>
          <Link className={classes.toolbartitle} to="/" style={{ textDecoration: 'none' }} >
            <Typography variant="title" color="inherit">
              Brand Name
            </Typography>
          </Link>
          <Typography className={classes.anchor} variant="caption">Brand caption</Typography>
        </div>
      </div>
        <Divider />
        <MenuList>{sidebarListItems(this.props.drawerItemSelected)}</MenuList>
        <Divider />
      </div>
    );

    return (
      <div className={classes.root}>
        <div>
          <Appbar handleDrawerToggle={this.handleDrawerToggle} auth={auth}>
          </Appbar>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              variant="permanent"
              open
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </div>
        <main className={classes.content}>
          <div className={classes.toolbar} />

          {this.props.children}
        </main>
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(baseStyle, { withTheme: true })(Layout);
