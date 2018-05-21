import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import AuthButtons from "../AuthButtons";
import baseStyle from "../../assets/jss/baseStyle";
const styles = baseStyle;

class Appbar extends React.Component {
  state = {
    title: this.props.title,
    auth: this.props.auth
  };

  render() {
    const { classes, handleDrawerToggle, auth } = this.props;

    return (
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              noWrap
              className={classes.flex}
            >
              {this.state.title}
            </Typography>
            {this.props.children}
            <AuthButtons auth={auth} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Appbar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  auth: PropTypes.bool.isRequired
};

export default withStyles(styles)(Appbar);
