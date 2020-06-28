import React, { Fragment, useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import CssBaseline from '@material-ui/core/CssBaseline'
import IconButton from '@material-ui/core/IconButton'
import About from '../about'
import Experience from '../experience'
import Projects from '../projects'
import BigPicture from '../bigPicture'
import { makeStyles } from '@material-ui/core/styles'
import { BACKGROUNDCOLOR, SECONDARYCOLOR, APPBARCOLOR, TEXTCOLOR } from '../../constants'

const drawerWidth = 200
const ABOUT = 'about'
const EXPERIENCE = 'experience'
const PROJECTS = 'projects'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    height: '100%',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: APPBARCOLOR,
    color: TEXTCOLOR,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      height: '100%',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    height: '100%',
    backgroundColor: SECONDARYCOLOR,
    color: '#333333',
  },
  content: {
    flexGrow: 2,
    backgroundColor: BACKGROUNDCOLOR,
    height: '100%',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuItem: {
    fontSize: 25,
    margin: 10,
    color: '#333333',
  },
  title: {
    flexGrow: 1,
  },
}))

function Layout() {
  const classes = useStyles()
  const [mobileOpen, openMobile] = useState(false)
  const [viewingContent, setViewingContent] = useState(ABOUT)

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.root}>
        {/* AppBar */}
        <AppBar position="fixed" className={classes.appBar}>
          <ToolBar>
            <IconButton
              edge="start"
              className={classes.navIconHide}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" className={classes.title}>
              Dustin Craig
            </Typography>
          </ToolBar>
        </AppBar>
        {/*********/}

        {/* Main Content */}
        <div className={classes.content}>
          <div className={classes.toolbar} />
          <BigPicture />
          <About />
          <Experience />
          {/* <Projects /> */}
        </div>
      </div>
    </Fragment>
  )
}

export default Layout
