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
import GridContainer from "../../components/Grid/GridContainer";

// helper
import { getAuth } from "../../helpers/auth";

class Authorize extends React.Component {
  state = {
    auth: false,
    signInUrl: '',
    accessToken: '',
    user: ''
  };

  componentDidMount = async () => {
    let authObj =await  getAuth();
    if (authObj.auth===false) {
      //auth false
      this.setState({auth: false});
      this.setState({signInUrl: `${authObj.signInUrl}`});
    } else if(authObj.auth === true){
      this.setState({auth: true});
      this.setState({accessToken: authObj.accessToken});
      this.setState({user: authObj.user});
      const { history } = this.props;
      history.push("/home");
    }else {
      this.setState({auth: 'error'});
      this.setState({signInUrl: 'Some Error Occured Please Retry!'});
    }
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
                      Continue with
                    </Typography>
                    </div>
                    <div className={classes.socialLine}>
                    
                    {
                      this.state.auth===false ? 
                    
                      <div className={classes.salutation}>
                    <Typography
                      variant="subheading"
                      color="inherit"
                      align="center"
                    >
                      Continue with
                    </Typography>
                      <Button
                        href={this.state.signInUrl}
                        // target="_blank"
                        color="microsoft"
                        // onClick={e => e.preventDefault()}
                      >
                        <i
                          className="fab fa-microsoft"
                          style={{ fontSize: "20px" }}
                        />&nbsp;&nbsp;Microsoft Office 365 Account
                      </Button>
                      </div>
                      : 
                      <div className={classes.salutation}>
                    <Typography
                      variant="subheading"
                      color="inherit"
                      align="center"
                    >
                      Something went wrong!! Please Try again Later.
                    </Typography>
                      <Button
                      color="danger"
                      simple
                      disabled
                    >
                      <i
                        className="fas fa-exclamation-triangle"
                        style={{ fontSize: "20px" }}
                      />
                    </Button>
                    </div>
                    }
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

Authorize.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(authStyle, { withTheme: true })(Authorize);
