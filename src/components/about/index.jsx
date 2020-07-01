import React, { Fragment, Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Image from '../../assets/images/avatar.jpeg'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { SocialButtons } from '../socialButtons'
import { BACKGROUNDCOLOR, TEXTCOLOR, HEADERCOLOR } from '../../constants'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(50),
    height: theme.spacing(50),
    marginTop: 35,
    marginBottom: 20,
  },
  text: {
    color: TEXTCOLOR,
  },
  grid: {
    backgroundColor: BACKGROUNDCOLOR,
  },
  card: {
    width: '70%',
    margin: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  title: {
    //fontSize: 25,
    color: TEXTCOLOR,
  },
  header: {
    marginTop: 60,
    color: HEADERCOLOR,
    fontSize: 60,
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
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.grid}
      >
        <center>
          <Typography className={classes.header} variant="h3">
            About Me
          </Typography>
        </center>
        <Avatar alt="Dustin Craig" src={Image} className={classes.avatar} />

        <Card className={classes.card} variant="outline">
          <CardContent>
            <Typography className={classes.title}>
              <b>Hello!</b> My name is Dustin and I am currently a college senior studying Computer
              Science. I am highly interested in the fields of <u>Software Engineering</u>,{' '}
              <u>Game Development</u> and <u>Computer Graphics</u>. I have a great passion for what
              I do and I take a large amount of pride in my work. I am always looking for new
              opportunities to further my knowledge.
              <br />
              <br />I have professional experience with the following technologies:
              <ul>
                <li>HTML/CSS/JavaScript/ES6+</li>
                <li>React JS</li>
                <li>TypeScript</li>
                <li>Angular JS/7+</li>
                <li>Python</li>
                <li>C++</li>
                <li>.NET C#</li>
              </ul>
              <br />
              <center>
                Feel free to contact me at{' '}
                <a href="mailto:dustincraig16@gmail.com" style={{ color: TEXTCOLOR }}>
                  dustincraig16@gmail.com
                </a>
                !
              </center>
            </Typography>
          </CardContent>
        </Card>
        <SocialButtons />
        <br />
        <br />
        <br />
      </Grid>
    </div>
  )
}
