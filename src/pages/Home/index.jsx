import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// Material-ui components
import Typography from "@material-ui/core/Typography";
import { Button, Grid } from "@material-ui/core";

// icons
import InfoOutline from "@material-ui/icons/InfoOutline";
import LocalOffer from "@material-ui/icons/LocalOffer";

//Custom Components
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardHeader from "../../components/Card/CardHeader";
import CardFooter from "../../components/Card/CardFooter";
import CardIcon from "../../components/Card/CardIcon";
import GridItem from "../../components/Grid/GridItem";

// import GridContainer from "../../components/Grid/GridContainer";

import Layout from "../Layout.jsx";

import HomeStyles from "./HomeStyles.jsx";

class Home extends React.Component {
  state = {
    auth: true
  };

  render() {
    const { classes, theme } = this.props;
    const image =
      "https://cdn.pixabay.com/photo/2017/08/08/15/43/nature-2611771_960_720.jpg";
    return (
      <Layout
        drawerItemSelected="Dashboard"
        title="Dashboard"
        auth={this.state.auth}
      >
        <Grid>
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
          <GridItem xs={12} sm={12} md={6}>
            <Card style={{ width: "20rem" }}>
              <img
                style={{ height: "180px", width: "100%", display: "block" }}
                className={classes.imgCardTop}
                src={image}
                alt="Card-img-cap"
              />
              <CardBody>
                <h4 className={classes.cardTitle}>Card title</h4>
                <Typography>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Typography>

                <Button color="primary">Do something</Button>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </Layout>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(HomeStyles, { withTheme: true })(Home);
