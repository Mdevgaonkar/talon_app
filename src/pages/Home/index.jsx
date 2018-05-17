import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import Layout from '../Layout.jsx'

import HomeStyles from "./HomeStyles.jsx";

class Home extends React.Component {
  state = {
    auth : true
  }
    
      render() {
        const { classes, theme } = this.props;
        return (
          <Layout drawerItemSelected = 'Dashboard' title='Dashboard' auth = {this.state.auth}>
              <Typography noWrap>{'Hear me... and rejoice'}</Typography>
          </Layout>
        );
      }
    }
    
    Home.propTypes = {
      classes: PropTypes.object.isRequired,
      theme: PropTypes.object.isRequired,
    };
    
    export default withStyles(HomeStyles, { withTheme: true })(Home);