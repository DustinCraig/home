import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import ProjectCard from './projectCard'
import { makeStyles } from '@material-ui/core/styles'
import { BACKGROUNDCOLOR, HEADERCOLOR } from '../../constants'

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: BACKGROUNDCOLOR,
  },
  header: {
    marginTop: 60,
    color: HEADERCOLOR,
    fontSize: 60,
  },
}))

export default function Projects() {
  const classes = useStyles()

  return (
    <div>
      <Grid
        xs={12}
        container
        direction='column'
        alignItems='center'
        justify='center'
        className={classes.grid}
      >
        <center>
          <Typography className={classes.header} variant='h3'>
            Projects
          </Typography>
          <Grid className={classes.grid} container justify='center' spacing={4}>
            <Grid item>
              <ProjectCard
                title={'Paper in the Wind'}
                description={'Unity game being created by a friend and I'}
                link={'https://dustincraig.github.io/PaperInTheWind/'}
              />
            </Grid>
            <Grid item>
              <ProjectCard
                title={'GammonsReview'}
                description={
                  'Website created with ASP.NET Core I made for a friend to post his movie reviews'
                }
                link={'http://www.thegammonsreview.com/'}
              />
            </Grid>
            <Grid item>
              <ProjectCard
                title={'Computer Graphics: Final Project'}
                description={
                  'My final project from the computer graphics course at school. Built using HTML/JS/WebGL'
                }
                link={
                  'http://web.eecs.utk.edu/~dcraig14/2bN9gJ0sx3U/finalp.html'
                }
              />
            </Grid>
            <Grid item>
              <ProjectCard
                title={'This website!'}
                description={
                  'I built this website using React.JS and Material-UI'
                }
                link={'https://github.com/DustinCraig/home'}
              />
            </Grid>
          </Grid>
        </center>
      </Grid>
    </div>
  )
}
