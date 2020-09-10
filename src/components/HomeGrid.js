import React from 'react'

import { makeStyles, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


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
    borderColor: faultBlue,
    backgroundColor: 'transparent',
    color: 'white',
  },
  middle: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '350px',
    border: '1px solid',
    borderColor: faultBlue,
    backgroundColor: 'transparent',
    color: 'white',
  },
  heroes: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '150px',
    border: '1px solid',
    borderColor: faultBlue,
    backgroundColor: 'transparent',
    color: 'white',
  },
}));

export default function HomeGrid() {
  const classes = useStyles();

  return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.featured}>Featured</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.middle}>Pro</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.middle}>Trending</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.heroes}>Heroes</Paper>
        </Grid>
      </Grid>
  );
}
