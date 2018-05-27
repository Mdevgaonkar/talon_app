import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import authStyle from "./authorizeStyles";
import { Typography, Card, Icon } from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import IconButton from "../../components/CustomButtons/IconButton";
import Button from "../../components/CustomButtons/Button";

import image from "../../assets/img/b2.jpg";

class Authorize extends React.Component {
  state = {
    valid_pass: true,
    valid_email: true
  };
  render() {
    const { classes, theme } = this.props;
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
          <Grid container className={classes.root}>
            <Grid item xs={12}>
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
                        Continue with
                      </Typography>
                      <div className={classes.socialLine}>
                        <IconButton
                          href="https://google.com"
                          target="_blank"
                          color="twitter"
                          className={classes.socialIconButtons}
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            className={classes.socialIcons + " fab fa-twitter"}
                          />
                        </IconButton>
                        <IconButton
                          href="#pablo"
                          target="_blank"
                          color="facebook"
                          className={classes.socialIconButtons}
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            className={classes.socialIcons + " fab fa-facebook"}
                          />
                        </IconButton>
                        <IconButton
                          href="#pablo"
                          target="_blank"
                          color="google"
                          className={classes.socialIconButtons}
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            className={
                              classes.socialIcons + " fab fa-google-plus-g"
                            }
                          />
                        </IconButton>
                        <IconButton
                          href="#pablo"
                          target="_blank"
                          color="microsoft"
                          className={classes.socialIconButtons}
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            className={
                              classes.socialIcons + " fab fa-microsoft"
                            }
                          />
                        </IconButton>
                      </div>
                      <Typography
                        variant="subheading"
                        color="inherit"
                        align="center"
                      >
                        Or
                      </Typography>

                      {/* <div className={classes.formMargin}> */}
                      <div>
                        <Grid
                          container
                          spacing={16}
                          // className={classes.demo}
                          alignItems="baseline"
                        >
                          <Grid item>
                            <Icon color="action">email</Icon>
                          </Grid>

                          <Grid item xs="10">
                            <TextField
                              label="Email"
                              placeholder="john.doe@example.com"
                              fullWidth
                              error={!this.state.valid_email}
                            />
                          </Grid>
                        </Grid>
                      </div>
                      <div>
                        <Grid
                          container
                          spacing={16}
                          // className={classes.demo}
                          alignItems="baseline"
                        >
                          <Grid item>
                            <Icon color="action">lock</Icon>
                          </Grid>

                          <Grid item xs="10">
                            <TextField
                              label="Password"
                              type="password"
                              fullWidth
                              error={!this.state.valid_pass}
                            />
                          </Grid>
                        </Grid>
                      </div>
                      <div className={classes.getStartedButton}>
                        <Button
                          variant="flat"
                          color="primary"
                          className={classes.button}
                          component={Link}
                          to="/home"
                        >
                          Get Started
                        </Button>
                      </div>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Authorize.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(authStyle, { withTheme: true })(Authorize);
