import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper}>Create View</Paper>
        </Grid>
        <Grid item xs={12} sm={3} style={{borderLeft: "solid 1px", borderColor: faultBlue}}>
          <Paper className={classes.paper}>Category View</Paper>
        </Grid>
      </Grid>
    </div>
  );
}