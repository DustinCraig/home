import React, { Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  card: {
    width: 700,
    margin: 30,
  },
  title: {
    fontSize: 25,
  },
}))

export default function JobCard({ company, title, bulletPoints }) {
  const classes = useStyles()
  return (
    <Fragment>
      <Card className={classes.card} variant='outline'>
        <CardContent>
          <Typography className={classes.title}>
            <b>{company}</b> - {title}
          </Typography>
          <hr />
          <ul>
            {bulletPoints.map((b) => (
              <li>
                <Typography paragraph>{b}</Typography>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Fragment>
  )
}
