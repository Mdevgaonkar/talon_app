import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import baseStyle from "../assets/jss/baseStyle.jsx";

const styles = baseStyle;

class AuthButtons extends React.Component {
  state = {
    auth: this.props.auth,
    anchorEl: null
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        {auth ? (
          <div>
            <IconButton
              aria-owns={open ? "menu-appbar" : null}
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose} component={Link}
            to="/login" >Profile</MenuItem>
              <MenuItem onClick={this.handleClose} component={Link}
            to="/logout" >Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          //   <Link to="/login" >
          <Button
            className={classes.menuButton}
            color="inherit"
            component={Link}
            to="/login"
          >
            Login
          </Button>
        )}
      </div>
    );
  }
}

AuthButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.bool.isRequired
};

export default withStyles(styles)(AuthButtons);
