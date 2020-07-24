import React, { Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { TEXTCOLOR, HEADERCOLOR, DATECOLOR } from '../../../constants'
import { makeStyles } from '@material-ui/core/styles'
import PITW from '../../../assets/images/pitw.PNG'
import GAMMONSREVIEW from '../../../assets/images/gammonsreview.PNG'
import GRAPHICS from '../../../assets/images/graphicsProject.PNG'

const useStyles = makeStyles((theme) => ({
  card: {
    width: 300,
    margin: 30,
    backgroundColor: 'rgba(0,0,0,0.1)',
    color: TEXTCOLOR,
    height: 405,
  },
  media: {
    height: 180,
  },
  title: {
    color: DATECOLOR,
  },
}))

export default function ProjectCard({ title, link, description }) {
  const classes = useStyles()
  return (
    <Fragment>
      <a href={link} style={{ textDecoration: 'none' }}>
        <Card className={classes.card} variant='outline'>
          <CardActionArea>
            {title === 'Paper in the Wind' && (
              <CardMedia className={classes.media} image={PITW} />
            )}
            {title === 'GammonsReview' && (
              <CardMedia className={classes.media} image={GAMMONSREVIEW} />
            )}
            {title === 'Final Project' && (
              <CardMedia className={classes.media} image={GRAPHICS} />
            )}
          </CardActionArea>
          <CardContent>
            <Typography
              className={classes.title}
              gutterBottom
              variant='h4'
              component='h2'
            >
              {title}
            </Typography>
            <Typography>{description}</Typography>
          </CardContent>
        </Card>
      </a>
    </Fragment>
  )
}
