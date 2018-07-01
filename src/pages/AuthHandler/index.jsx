import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography, Card } from "@material-ui/core";

import authStyle from "../Authorize/authorizeStyles";

// custom components
import GridContainer from "../../components/Grid/GridContainer";

// images
import image from "../../assets/img/b2.jpg";

// helper
import { authorize } from "../../helpers/auth";

import { parse } from "query-string";

class AuthHandler extends React.Component {
  state = {
    auth: false,
    signInUrl: "",
    accessToken: "",
    user: ""
  };

  componentDidMount = async () => {
    const { history } = this.props;
    const authCode = parse(this.props.location.search).code;
    let authObj = await authorize(authCode);
    console.log(authObj);

    if (authObj.auth === false) {
      //auth false
      this.setState({ auth: false });
      //   this.setState({signInUrl: `${authObj.signInUrl}`});
      history.replace({
        pathname: "/",
        state: {
          auth: false
        }
      });
    } else if (authObj.auth === true) {
      this.setState({ auth: true });
      this.setState({ accessToken: authObj.accessToken });
      this.setState({ user: authObj.user });
      history.push({
        pathname: "/home",
        state: {
          auth: true
        }
      });
    } else {
      this.setState({ auth: "error" });
      this.setState({ signInUrl: "Some Error Occured Please Retry!" });
      history.replace({
        pathname: "/",
        state: {
          auth: false
        }
      });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <GridContainer className={classes.root}>
            <Grid
              container
              spacing={16}
              className={classes.demo}
              alignItems="center"
              direction="row"
              justify="center"
            >
              <Grid item>
                <Paper
                  className={classes.content}
                  style={{
                    paddingTop: 10,
                    paddingBottom: 20
                  }}
                >
                  <Card raised className={classes.brand}>
                    <Typography
                      className={classes.brandTitle}
                      variant="headline"
                      color="inherit"
                      justify="center"
                    >
                      Mail Talon
                    </Typography>
                  </Card>
                  <div className={classes.salutation}>
                    <Typography
                      variant="subheading"
                      color="inherit"
                      align="center"
                    >
                      Logging you in... Please wait.
                    </Typography>
                  </div>
                  <div className={classes.brandTitle}>
                    <CircularProgress
                      className={classes.progress}
                      size={50}
                      thickness={7}
                    />
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </GridContainer>
        </div>
      </div>
    );
  }
}

AuthHandler.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
export default withStyles(authStyle, { withTheme: true })(AuthHandler);
