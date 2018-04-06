const drawerWidth = 240;

const baseStyle = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%"
  },
  flex:{
    flex:1
  },
  appBar: {
    position: "absolute",
    marginLeft: drawerWidth,
    zIndex: theme.zIndex.drawer + 1
    
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  },
  activeItem: {
    backgroundColor: theme.palette.primary[100]
  },
  item: {},
  
});

export default baseStyle;
