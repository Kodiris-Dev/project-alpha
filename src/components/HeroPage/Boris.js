import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import '../../styles/Boris.css'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '62px',
    margin: '20px',
    marginBottom: '0px',
    flexGrow: 1,
    padding: '0px',
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '93vh',
    backgroundColor: 'black',
    color: 'white',
  },
}));

export default function Boris() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={1} md={2} lg={3}>
          <Paper className={classes.paper}>xs=12 sm=2</Paper>
        </Grid>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Paper className={classes.paper}>
              <div className="banner"></div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={1} md={2} lg={3}>
          <Paper className={classes.paper}>xs=12 sm=2</Paper>
        </Grid>
      </Grid>
    </div>
  );
}