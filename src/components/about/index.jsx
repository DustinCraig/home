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
    width: theme.spacing(35),
    height: theme.spacing(35),
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
        direction='column'
        alignItems='center'
        justify='center'
        className={classes.grid}
      >
        <center>
          <Typography className={classes.header} variant='h3'>
            About Me
          </Typography>
        </center>
        <Avatar alt='Dustin Craig' src={Image} className={classes.avatar} />

        <Card className={classes.card} variant='outline'>
          <CardContent>
            <Typography className={classes.title}>
              <Typography paragraph>
                <b style={{ fontSize: 35 }}>Hello! </b> My name is Dustin. I am
                highly interested in the fields of <u>Software Engineering</u>,
                and <u>Computer Graphics</u>. I have a great passion for what I
                do, and I take a large amount of pride in my work. I am looking
                for opportunities to gain experience and solve interesting
                problems.
                <br />
                <br />I have professional experience with the following
                technologies:
              </Typography>

              <ul>
                <li>React.js</li>
                <li>React Native</li>
                <li>WebGL</li>
                <li>TypeScript</li>
                <li>Angular JS/7+</li>
                <li>Python</li>
                <li>C/C++</li>
                <li>.NET Framework</li>
                <li>CouchDB</li>
                <li>SQL Server</li>
              </ul>

              <br />
              <center>
                Feel free to contact me at{' '}
                <a
                  href='mailto:dustincraig16@gmail.com'
                  style={{ color: TEXTCOLOR }}
                >
                  dustincraig16@gmail.com
                </a>
                !
              </center>
            </Typography>
            <div
              style={{
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                marginTop: 10,
              }}
            >
              <SocialButtons />
            </div>
          </CardContent>
        </Card>
        <div stlye={{ marginBottom: 10 }} />
      </Grid>
    </div>
  )
}
