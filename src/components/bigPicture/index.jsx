import React from 'react'
import Image from '../../assets/images/Landing.png'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { TEXTCOLOR } from '../../constants'

const useStyles = makeStyles((theme) => ({
  text: {
    color: TEXTCOLOR,
  },
}))

export default function BigPicture() {
  const classes = useStyles()
  return (
    <div
      className="LandingContainer"
      style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        height: '100%',
      }}
    >
      <Typography variant="h2" component="h2" className={classes.text}>
        Dustin Craig
      </Typography>
      <Typography variant="h3" component="h3" className={classes.text}>
        Software Engineer
      </Typography>
      <Typography variant="h5" component="h5" className={classes.text}>
        <i>Design oriented and solution driven.</i>
      </Typography>
    </div>
  )
}
