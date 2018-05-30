import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// Material-ui components
import Typography from "@material-ui/core/Typography";

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
import GridContainer from "../../components/Grid/GridContainer";
import Button from "../../components/CustomButtons/Button";

// import GridContainer from "../../components/Grid/GridContainer";

import Layout from "../Layout.jsx";

import HomeStyles from "./HomeStyles.jsx";

// images
import image from "../../assets/img/b2.jpg";

class Home extends React.Component {
  state = {
    auth: true
  };

  render() {
    const { classes, theme } = this.props;
    // const image = "assets/img/b2.jpg";
    return (
      <Layout
        drawerItemSelected="Dashboard"
        title="Dashboard"
        auth={this.state.auth}
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

          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleDarkBg}>Types of Buttons</h4>
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Card title</h4>
                <Typography>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Typography>
                <GridItem xs={12} sm={4} md={4}>
                  <Button simple color="microsoft">
                    <i
                      className="fab fa-microsoft"
                      style={{ fontSize: "20px" }}
                    />&nbsp;&nbsp;Connect with microsoft
                  </Button>
                </GridItem>
                <GridItem xs={12} sm={4} md={3}>
                  <Button simple color="twitter">
                    <i
                      className="fab fa-twitter"
                      style={{ fontSize: "20px" }}
                    />&nbsp; Connect with Twitter
                  </Button>
                </GridItem>
              </CardBody>
            </Card>
          </GridItem>
          {/* </GridContainer>
        <GridContainer> */}
          <GridItem xs={12} sm={12} md={5}>
            <Card>
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
        </GridContainer>
      </Layout>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(HomeStyles, { withTheme: true })(Home);
