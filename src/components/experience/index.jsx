import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import JobCard from './jobCard'
import { makeStyles } from '@material-ui/core/styles'

import { BACKGROUNDCOLOR, HEADERCOLOR } from '../../constants'

const OI_BULLETPOINTS = [
  'Maintained and developed new features of the internal medical imaging  web application',
  'Developed a mobile application to efficiently analyze angiographic images and perform 3D volume reconstruction',
]

const FLIR_BULLETPOINTS = [
  'Spearheaded various software projects to either improve workflow of production or collect data to be used in manufacturing engineering.',
  'Updated automation code to greatly improve reliability and maintainability.',
  'Unified data entry for production tests to be done within the internal web application.',
  'Helped with refactoring the code behind the automation processes to improve reliability of data.',
]

const PREVO_BULLETPOINTS = [
  'Updated the look and feel of their electronic document and records management system: TechDoc.',
  'Refreshed the menus, layout, icons and color-scheme which involved changes to CSS, HTML, JavaScript and Java servlets.',
]

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: 20,
    color: HEADERCOLOR,
    fontSize: 60,
  },
}))

export default function Experience() {
  const classes = useStyles()

  return (
    <Grid
      xs={12}
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justify='center'
      style={{ backgroundColor: BACKGROUNDCOLOR }}
    >
      <Typography className={classes.header} variant='h3'>
        Experience
      </Typography>

      <JobCard
        title={'Software Engineer'}
        company={'Oculus Imaging'}
        dates={['April 2020', 'Present']}
        bulletPoints={OI_BULLETPOINTS}
      />
      <JobCard
        title={'Software Engineering Intern'}
        company={'FLIR Detection'}
        dates={['February 2019', 'January 2020']}
        bulletPoints={FLIR_BULLETPOINTS}
      />
      <JobCard
        title={'Software Engineering Intern'}
        company={'Prevo Technologies'}
        dates={['August 2018', 'December 2018']}
        bulletPoints={PREVO_BULLETPOINTS}
      />
    </Grid>
  )
}
