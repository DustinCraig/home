import React, { Component, Fragment, useState } from 'react'
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
import { makeStyles } from '@material-ui/core/styles'
import Image from '../../assets/images/Landing.png'

const drawerWidth = 200

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    height: '100%',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#2d3436',
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
    backgroundColor: '#2d3436',
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#dfe6e9',
    padding: theme.spacing(3),
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
    color: 'white',
  },
  title: {
    flexGrow: 1,
  },
}))

export default function Layout() {
  const classes = useStyles()
  const [mobileOpen, openMobile] = useState(false)

  const drawer = (
    <div>
      <Hidden smDown>
        <div className={classes.toolbar} />
      </Hidden>
      <MenuList>
        <MenuItem className={classes.menuItem}>Home</MenuItem>
        <MenuItem className={classes.menuItem}>About</MenuItem>
        <MenuItem className={classes.menuItem}>Experience</MenuItem>
        <MenuItem className={classes.menuItem}>Projects</MenuItem>
      </MenuList>
    </div>
  )

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position='fixed' className={classes.appBar}>
          <ToolBar>
            <IconButton
              edge='start'
              className={classes.navIconHide}
              color='inherit'
              aria-label='menu'
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h5' className={classes.title}>
              Dustin Craig
            </Typography>
          </ToolBar>
        </AppBar>
        {/* Side Drawer */}
        <nav className={classes.drawer}>
          <Hidden smDown implementation='css'>
            <Drawer
              variant='permanent'
              open
              classes={{ paper: classes.drawerPaper }}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>Hello fadfasdfsafasdfadsfadfadsf</Typography>
        </main>
      </div>
    </Fragment>
  )
}
