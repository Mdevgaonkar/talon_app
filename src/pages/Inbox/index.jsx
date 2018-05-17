import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import InboxStyles from "./InboxStyles";

import Layout from '../Layout';

class Inbox extends React.Component {
    state = {
      auth : true
    }
    
      render() {
        const { classes } = this.props;
    
        
    
        return (
          <Layout title='Inbox' drawerItemSelected = 'Inbox' auth = {this.state.auth}>
              <Typography noWrap>{'Welcome to inbox'}</Typography>
          </Layout>
        );
      }
    }
    
    Inbox.propTypes = {
      classes: PropTypes.object.isRequired,
    };
    
    export default withStyles(InboxStyles, { withTheme: true })(Inbox);