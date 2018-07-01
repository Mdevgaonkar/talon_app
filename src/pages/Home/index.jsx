import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// Material-ui components
// none

// icons
import InfoOutline from "@material-ui/icons/InfoOutline";
import LocalOffer from "@material-ui/icons/LocalOffer";

//Custom Components
import { redirectToLogin, setAuth } from "../../helpers/auth";
import Card from "../../components/Card/Card.jsx";

import CardHeader from "../../components/Card/CardHeader";
import CardFooter from "../../components/Card/CardFooter";
import CardIcon from "../../components/Card/CardIcon";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";

import Layout from "../Layout.jsx";

import HomeStyles from "./HomeStyles.jsx";

// images
//none

class Home extends React.Component {
  state = {
    auth: false
  };

  constructor(props) {
    super(props);
    this.state = { auth: setAuth(props) };
    // this.setAuth();
  }

  // setAuth = () => {
  //   if (this.props.location.state !== undefined)
  //     if ("auth" in this.props.location.state) {
  //       // console.log('AUTH-1.5', this.props.location.state.auth);
  //       this.state = { auth: this.props.location.state.auth };
  //       // console.log('AUTH-1.6', this.state.auth);
  //       return true;
  //     }
  //   return false;
  // };

  render() {
    const { classes, history } = this.props;
    const { auth } = this.state;
    // console.log('AUTH-3', auth);

    if (!auth) {
      return redirectToLogin(history);
    }

    return (
      <Layout
        drawerItemSelected="Dashboard"
        title="Dashboard"
        auth={auth}
        history={history}
      >
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <InfoOutline />
                </CardIcon>
                <p className={classes.cardCategory}>Fixed Issues</p>
                <h3 className={classes.cardTitle}>75</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <LocalOffer />
                  Tracked from Github
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </Layout>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(HomeStyles, { withTheme: true })(Home);
