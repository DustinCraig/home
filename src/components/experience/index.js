import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import JobCard from './jobCard'
import { BACKGROUNDCOLOR } from '../../constants'

const OI_BULLETPOINTS = [
  'Maintained and developed the internal Radiology CoreLab web app using React/Redux.',
  'Worked on a web app using WebGL and React to: visualize aneurysms in 3D from a medical scan image and perform volume estimation.',
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
      style={{ backgroundColor: BACKGROUNDCOLOR }}
    >
      <br />
      <JobCard
        title={'Software Engineer'}
        company={'Oculus Imaging'}
        bulletPoints={OI_BULLETPOINTS}
      />
      <JobCard
        title={'Software Engineering Intern'}
        company={'FLIR Detection'}
        bulletPoints={FLIR_BULLETPOINTS}
      />
      <JobCard
        title={'Software Engineering Intern'}
        company={'Prevo Technologies'}
        bulletPoints={PREVO_BULLETPOINTS}
      />
    </Grid>
  )
}
