import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// Material-ui components
// none

// icons
import InfoOutline from "@material-ui/icons/InfoOutline";

//Custom Components
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardFooter from "../../components/Card/CardFooter";
import CardIcon from "../../components/Card/CardIcon";

import HomeStyles from "../../pages/Home/HomeStyles";

// images
//none

class InfoWidget extends React.Component {
  state = {
    upToDate: -1 //0 no 1 yes -1 inProgress
  };
  render() {
    const { classes } = this.props;
    const { upToDate } = this.state;
    return (
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
            {upToDate === -1 ? (
              <i
                className="fas fa-circle-notch fa-spin"
                style={{ color: "#00acc1", fontSize: "22px" }}
              />
            ) : upToDate === 0 ? (
              <i
                className="fas fa-exclamation-circle"
                style={{ color: "#f44336", fontSize: "22px" }}
              />
            ) : (
              <i
                className="fas fa-check-circle"
                style={{ color: "#4caf50", fontSize: "22px" }}
              />
            )}
            &nbsp;&nbsp;Tracked from Github
          </div>
        </CardFooter>
      </Card>
    );
  }
}

InfoWidget.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(HomeStyles, { withTheme: true })(InfoWidget);
