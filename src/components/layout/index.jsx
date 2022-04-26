import React, { Fragment, useState, useEffect } from 'react'
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
import {
  BACKGROUNDCOLOR,
  SECONDARYCOLOR,
  APPBARCOLOR,
  TEXTCOLOR,
} from '../../constants'

const drawerWidth = 200
const ABOUT = 'about'
const EXPERIENCE = 'experience'
const PROJECTS = 'projects'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    height: '100vh',
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
      height: '100vh',
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
  titleFirst: {},
  title: {
    marginLeft: '7%',
  },
  link: {
    color: TEXTCOLOR,
    textDecoration: 'none',
  },
}))

export default function Layout() {
  const classes = useStyles()
  const [mobileOpen, openMobile] = useState(false)
  const [viewingContent, setViewingContent] = useState(ABOUT)

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.root}>
        {/* AppBar */}
        <AppBar position='fixed' className={classes.appBar}>
          <ToolBar>
            <Typography variant='h5' className={classes.titleFirst}>
              <a href='#' className={classes.link}>
                Dustin Craig
              </a>
            </Typography>
            <Hidden smDown>
              <Typography variant='h5' className={classes.title}>
                <a href='#about' className={classes.link}>
                  About
                </a>
              </Typography>
              <Typography variant='h5' className={classes.title}>
                <a href='#experience' className={classes.link}>
                  Experience
                </a>
              </Typography>
              <Typography variant='h5' className={classes.title}>
                <a href='#projects' className={classes.link}>
                  Projects
                </a>
              </Typography>
            </Hidden>
          </ToolBar>
        </AppBar>
        {/*********/}

        {/* Main Content */}
        <div className={classes.content}>
          <div className={classes.toolbar} />
          <BigPicture />
          <div id='about'>
            <About />
          </div>

          <div id='experience'>
            <Experience />
          </div>

          <div id='projects'>
            <Projects />
          </div>
          {/*  */}
        </div>
      </div>
    </Fragment>
  )
}
