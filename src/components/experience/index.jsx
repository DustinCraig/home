import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import JobCard from './jobCard'
import { makeStyles } from '@material-ui/core/styles'

import { BACKGROUNDCOLOR, HEADERCOLOR } from '../../constants'

const OI_BULLETPOINTS = [
  'Maintained and developed the internal Radiology CoreLab web app using React/Redux.',
  'Worked on a web app using WebGL and React to visualize aneurysms in 3D from a medical scan image using various image processing techniques, erosion, and volume estimation.',
]

const FLIR_BULLETPOINTS = [
  'Developed reliable, internal software in a wide breadth of technologies including: .NET with C#, Angular 7 and Typescript, C++, and Python.',
  'Software projects were designed to either improve workflow of production or collect data to be used in manufacturing engineering.',
  'Unified data entry for production tests to be done within the internal web application.',
  'Helped with refactoring the code behind the automation processes to improve reliability of data.',
]

const PREVO_BULLETPOINTS = [
  'Updating the look and feel of their electronic document and records management system: TechDoc.',
  'Refreshed the menus, layout, icons and color-scheme which involved changes to CSS, HTML, JavaScript and Java servlets.',
]

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: 60,
    color: HEADERCOLOR,
    fontSize: 60,
  },
}))

export default function Experience() {
  // return <JobCard />
  const classes = useStyles()

  return (
    <Grid
      xs={12}
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ backgroundColor: BACKGROUNDCOLOR }}
    >
      <Typography className={classes.header} variant="h3">
        Experience
      </Typography>
      <br />
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
