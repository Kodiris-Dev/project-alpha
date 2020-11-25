import React from 'react'

import { makeStyles, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HeroGrid from './HeroGrid';
import DisplayBuild from './Display/DisplayBuild';
import TrendingCardSection from './HomeSections/TrendingCardSection'
import ProCarousel from './HomeSections/ProCarousel';
import DisplayCardBuild from './Display/DisplayCardBuild';


var faultBlue = '#7DBCC9';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  middle: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
    borderColor: '#707070',
    backgroundColor: '#0D0D0D',
    color: 'white',
  },
  homeHeading: {
    borderBottom: '1px solid white',
    fontSize: '24px',
    paddingBottom: 10,
  },
  sectionHeading: {
    marginTop: 20,
    fontSize: 18,
  },
  sectionContent: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

export default function HomeGrid() {
  const classes = useStyles();

  return (
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={6} lg={9}>
          <Paper className={classes.middle}>
            <div className={classes.homeHeading}>FAULTARIA</div>
            <div className={classes.sectionHeading}>TRENDING GUIDES OF THE WEEK</div>
            <div className={classes.sectionContent}>
             <DisplayCardBuild 
             author='Kodiris'
             date='OCT 9 2020'
             hero='Boris'
             displayBanner='https://uploads-ssl.webflow.com/5e4eab335c128658e8a2b36e/5f0d9a0381f476f558d3e0f5_T_BorisDefault_Portrait.jpg'
             />
                          <DisplayCardBuild 
             author='Kodiris'
             date='OCT 9 2020'
             hero='Boris'
             displayBanner='https://uploads-ssl.webflow.com/5e4eab335c128658e8a2b36e/5f0d9a0381f476f558d3e0f5_T_BorisDefault_Portrait.jpg'
             />
                          <DisplayCardBuild 
             author='Kodiris'
             date='OCT 9 2020'
             hero='Boris'
             displayBanner='https://uploads-ssl.webflow.com/5e4eab335c128658e8a2b36e/5f0d9a0381f476f558d3e0f5_T_BorisDefault_Portrait.jpg'
             />
             
            </div>
            <div className={classes.sectionHeading}>PRO GUIDES</div>
            <div className={classes.sectionContent}>
            <DisplayCardBuild 
             author='Kodiris'
             date='OCT 9 2020'
             hero='Boris'
             displayBanner='https://uploads-ssl.webflow.com/5e4eab335c128658e8a2b36e/5f0d9a0381f476f558d3e0f5_T_BorisDefault_Portrait.jpg'
             />
                          <DisplayCardBuild 
             author='Kodiris'
             date='OCT 9 2020'
             hero='Boris'
             displayBanner='https://uploads-ssl.webflow.com/5e4eab335c128658e8a2b36e/5f0d9a0381f476f558d3e0f5_T_BorisDefault_Portrait.jpg'
             />
                          <DisplayCardBuild 
             author='Kodiris'
             date='OCT 9 2020'
             hero='Boris'
             displayBanner='https://uploads-ssl.webflow.com/5e4eab335c128658e8a2b36e/5f0d9a0381f476f558d3e0f5_T_BorisDefault_Portrait.jpg'
             />
             
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Paper className={classes.middle} style={{borderLeft: '1px red solid'}}>Right
          </Paper>
        </Grid>
      </Grid>
  );
}
