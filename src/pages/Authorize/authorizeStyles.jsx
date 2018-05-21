import baseStyle from "../../assets/jss/baseStyle";
import { white } from "material-ui/styles/colors";

const authStyles = theme => ({
  ...baseStyle(theme),

  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:before,&:after": {
      position: "absolute",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    }
  },

  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  demo: {
    paddingTop: "20vh"
  },
  content: {
    padding: theme.spacing.unit * 2,
    height: "auto",
    alignItems: "center",
    width: 460,
    rounded: true,
    borderRadius: "6px"
    // color: theme.palette.text.secondary
  },
  brand: {
    width: 350,
    margin: "-40px 15px 0",
    rounded: true,
    borderRadius: "6px",
    padding: theme.spacing.unit * 5,
    backgroundColor: theme.palette.primary.main
  },
  brandTitle: {
    textAlign: "center",
    color: white
  },
  salutation: {
    padding: theme.spacing.unit * 2
  },
  socialLine: {
    marginTop: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    padding: "0"
  },
  socialIconButtons: {
    marginLeft: 10,
    marginRight: 10
  },
  socialIcons: {
    maxWidth: "48px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    height: "100%",
    lineHeight: "41px",
    fontSize: "30px"
  },
  getStartedButton: {
    textAlign: "center"
  },
  button: {
    margin: theme.spacing.unit
  },
  formMargin: {
    margin: theme.spacing.unit,
    textAlign: "center"
  }
});
export default authStyles;
