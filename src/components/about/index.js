import React, { Fragment, Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Image from '../../assets/images/avatar.jpeg'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { SocialButtons } from '../socialButtons'
import { BACKGROUNDCOLOR } from '../../constants'

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(50),
    height: theme.spacing(50),
    marginTop: 35,
    marginBottom: 20,
  },
  text: {
    color: '#2d3436',
  },
  grid: {
    backgroundColor: BACKGROUNDCOLOR,
  },
}))

export default function About() {
  const classes = useStyles()
  return (
    <div>
      <Grid
        xs={12}
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justify='center'
        className={classes.grid}
      >
        <Avatar alt='Dustin Craig' src={Image} className={classes.avatar} />
        <br />
        <Typography variant='h2' component='h2' className={classes.text}>
          Dustin Craig
        </Typography>
        <Typography variant='h3' component='h3' className={classes.text}>
          Software Engineer
        </Typography>
        <Typography variant='h5' component='h5' className={classes.text}>
          <i>Design oriented and solution driven.</i>
        </Typography>
        {/* <br />
        <br /> */}
        <div style={{ marginBottom: 70 }} />
        <SocialButtons />
        <br />
        <br />
        <br />
      </Grid>
    </div>
  )
}
