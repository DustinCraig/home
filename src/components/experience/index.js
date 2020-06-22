import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import JobCard from './jobCard'

export default function Experience() {
  // return <JobCard />
  return (
    <Grid
      xs={12}
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justify='center'
    >
      <JobCard />
    </Grid>
  )
}
