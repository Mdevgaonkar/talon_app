import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { logout } from "../../helpers/auth";

import baseStyle from "../../assets/jss/baseStyle";

const styles = baseStyle;

class AuthButtons extends React.Component {
  state = {
    auth: this.props.auth,
    anchorEl: null
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = src_btn => {
    this.setState({ anchorEl: null });

    if (src_btn === "logout") {
      logout(this.props.history);
    }
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
              <MenuItem
                id="logout"
                onClick={this.handleClose.bind(null, "logout")}
                // component={Link}
                // to="/"
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        ) : (
          //   <Link to="/login" >
          <Button
            className={classes.menuButton}
            color="inherit"
            component={Link}
            to="/"
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
  auth: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

export default withStyles(styles)(AuthButtons);
