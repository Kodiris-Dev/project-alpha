import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import CategoryView from './CategoryView'

var faultBlue = '#7DBCC9';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    paddingRight: 50,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '800px',
    backgroundColor: 'transparent',
    color: 'white',
  },
}));

export default function CreateGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={8} md={9}>
          <Paper className={classes.paper}>Create View</Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Paper className={classes.paper}>
            <CategoryView />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}