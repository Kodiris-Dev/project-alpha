import React from 'react'

import { makeStyles, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HeroGrid from './HeroGrid';
import DisplayBuild from './Display/DisplayBuild';


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
  featured: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '150px',
    border: '1px solid',
    borderColor: '#707070',
    backgroundColor: 'transparent',
    color: 'white',
    boxShadow: "5px 5px 1px black",
  },
  middle: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '350px',
    border: '1px solid',
    borderColor: '#707070',
    backgroundColor: 'transparent',
    color: 'white',
    boxShadow: "5px 5px 1px black",
  },
  heroes: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '90%',
    border: '1px solid',
    borderColor: '#707070',
    backgroundColor: 'transparent',
    color: 'white',
    boxShadow: "5px 5px 1px black",
  },
}));

export default function HomeGrid() {
  const classes = useStyles();

  return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.featured}>Featured</Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.middle}>Pro
          <DisplayBuild 
          name="If this gets 1000 upvotes I'll fire kodiris"
          url="https://uploads-ssl.webflow.com/5e4eab335c128658e8a2b36e/5e4f4377dca0022f14500660_41951361_2259064580989909_5692818703754723328_o.jpg"
          />
          <DisplayBuild 
          name="HONEY! WHERE ARE MY SUPER BOOTS"
          url="https://uploads-ssl.webflow.com/5e4eab335c128658e8a2b36e/5f3abb530306c6baf5e8f76e_thumbnail_IMG_1396.jpg"/>
          <DisplayBuild 
          name="THIS IS A TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST"
          url="https://uploads-ssl.webflow.com/5e4eab335c128658e8a2b36e/5f1e3784a807cd93eac82829_20200101_171732%20-%20Jeremias%20Elvegaard.jpg"/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.middle}>Trending
          <DisplayBuild 
          name="If this gets 1000 upvotes I'll fire kodiris"
          url="https://uploads-ssl.webflow.com/5e4eab335c128658e8a2b36e/5e4f4377dca0022f14500660_41951361_2259064580989909_5692818703754723328_o.jpg"
          />
          <DisplayBuild 
          name="HONEY! WHERE ARE MY SUPER BOOTS"
          url="https://uploads-ssl.webflow.com/5e4eab335c128658e8a2b36e/5f3abb530306c6baf5e8f76e_thumbnail_IMG_1396.jpg"/>
          <DisplayBuild 
          name="THIS IS A TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST"
          url="https://uploads-ssl.webflow.com/5e4eab335c128658e8a2b36e/5f1e3784a807cd93eac82829_20200101_171732%20-%20Jeremias%20Elvegaard.jpg"/>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.heroes}>
            <HeroGrid />
          </Paper>
        </Grid>
      </Grid>
  );
}
