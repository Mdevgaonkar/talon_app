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
import Axios from "axios";

// images
//none




class InfoWidget extends React.Component {
  state = {
    upToDate: -1 //0 no 1 yes -1 inProgress
  };

  selfUpdateStat= async (method,url)=> {
    this.setState({
      upToDate:  -1 //0 no 1 yes -1 inProgress
    }); 
    console.log("TRACK","Starting self update");
    try {
      const PI_logger = await Axios(url, {
        method: `${method.toUpperCase()}`,
        withCredentials: true,
        credentials: "include"
      });
    let resp_obj =  {
        data: PI_logger.data,
        status: false,
        debug: "Nothing to debug ¯\\_(ツ)_/¯"
      };
      console.log(resp_obj.data);
      this.setState({
        upToDate:  resp_obj.data.body.logStatus ? 1 : 0 //0 no 1 yes -1 inProgress
      });      
    } catch (error) {
      console.log("ERROR", error);
      let resp_obj = {
        data: "Request Failed",
        status: false,
        debug: error
      };
      console.log(resp_obj);
      this.setState({
        upToDate: 0 //0 no 1 yes -1 inProgress
      });
    }
  }
  
  componentDidMount = () => {
    
      console.log("TRACK");
      
      this.selfUpdateStat('GET', this.props.infoUrl);
      setInterval(() => {
        // this.selfUpdateStat.bind(null,['GET', this.props.infoUrl])
        // console.log('Demo');
        this.selfUpdateStat('GET', this.props.infoUrl);
        
      }, 1000 * 60 * 1);
    
  }

  render() {
    const { classes } = this.props;
    const { upToDate } = this.state;
    return (
      <Card>
        <CardHeader color="danger" stats icon>
          <CardIcon color="danger">
            <InfoOutline />
          </CardIcon>
          <p className={classes.cardCategory}>Production Issues Tracker</p>
          {/* <h3 className={classes.cardTitle}>75</h3> */}
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
            &nbsp;&nbsp;Tracked from Outlook 365
            
          </div>
        </CardFooter>
      </Card>
    );
  }
}

InfoWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  infoUrl:PropTypes.string.isRequired
  // infoMethod:PropTypes.object.isRequired,
};

export default withStyles(HomeStyles, { withTheme: true })(InfoWidget);
