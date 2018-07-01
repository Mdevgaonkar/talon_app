import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import MenuList from "@material-ui/core/MenuList";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";

import Appbar from "../components/Appbar";

import { sidebarListItems } from "../components/sidebarListItems";

import baseStyle from "../assets/jss/baseStyle";
import { Link } from "react-router-dom";

class Layout extends React.Component {
  state = {
    mobileOpen: false,
    auth: this.props.auth,
    title: this.props.title,
    anchorEl: null
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbarIe11}>
        <div className={classes.toolbar}>
          <Link className={classes.toolbartitle} to="/" style={{ textDecoration: 'none' }} >
            <Typography variant="title" color="inherit">
              Mail Talon
            </Typography>
          </Link>
          {/* <Typography className={classes.anchor} variant="caption">Brand caption</Typography> */}
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
          <Appbar title ={this.state.title} history={this.props.history} handleDrawerToggle={this.handleDrawerToggle} auth={this.state.auth}>
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
  theme: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  auth: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

export default withStyles(baseStyle, { withTheme: true })(Layout);
