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
import Chip from '@material-ui/core/Chip'

const LANGUAGES = [
  'React.js',
  'React Native',
  'ASP.NET Core',
  'Azure',
  'C#',
  'WebGL',
  'SQL Server',
  'TypeScript',
  'Python',
  'CouchDB',
  'Angular JS/7+',
]

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
    width: '50%',
    padding: 4,
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

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Grid
                  container
                  justifyContent='center'
                  alignItems='center'
                  spacing={1}
                  style={{ width: '70%' }}
                >
                  {LANGUAGES.map((e) => (
                    <Grid item xs={3}>
                      <Chip color='primary' label={e} />
                    </Grid>
                  ))}
                </Grid>
              </div>

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
      </Grid>
    </div>
  )
}
