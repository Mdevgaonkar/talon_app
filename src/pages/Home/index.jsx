import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// Material-ui components
// none

//Custom Components
import { redirectToLogin, setAuth } from "../../helpers/auth";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";

//modules
import StatWidget from "../../modules/StatWidget";

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
  }

  render() {
    const { history } = this.props;
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
            <StatWidget infoUrl = "http://localhost:5000/piexpo" />
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
