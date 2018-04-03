import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import HomeStyles from "../assets/jss/pages/HomeStyles.jsx";

import Layout from './Layout';

class Inbox extends React.Component {
    
    
      render() {
        const { classes } = this.props;
    
        
    
        return (
          <Layout drawerItemSelected = 'Inbox'>
              <Typography noWrap>{'Welcome to inbox'}</Typography>
          </Layout>
        );
      }
    }
    
    Inbox.propTypes = {
      classes: PropTypes.object.isRequired,
    };
    
    export default withStyles(HomeStyles, { withTheme: true })(Inbox);