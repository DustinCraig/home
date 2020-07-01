import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
}))

export default function Home() {
  const classes = useStyles()
  return (
    <Fragment>
      <Typography variant='h2' component='h2' className={classes.root}>
        Dustin Craig
      </Typography>
      <Typography variant='h3' component='h3' className={classes.root}>
        Software Engineer
      </Typography>
      <Typography>College Senior studying Computer Science</Typography>
    </Fragment>
  )
}
