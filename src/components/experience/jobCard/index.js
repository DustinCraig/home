import React, { Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  card: {
    // width: '50%',
  },
}))

export default function JobCard() {
  const classes = useStyles()
  return (
    <Fragment>
      <Card className={classes.card} variant='outline'>
        <CardContent>
          <Typography>Tsfsdfsdfsdfsdfsfsdfsdfsdfest</Typography>
        </CardContent>
      </Card>
    </Fragment>
  )
}
