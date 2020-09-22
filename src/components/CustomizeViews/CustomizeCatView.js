import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden'
import { Link } from 'react-router-dom'

var faultBlue = '#7DBCC9';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 100,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '160px',
    backgroundColor: 'transparent',
    color: 'white',
    borderRight: '1px dashed',
    borderRightColor: faultBlue,
  },
  save: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '20px',
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid',
    borderColor: faultBlue,
    width: '85%',
  },
  stepDiv: {
    display: 'flex',
    height: '30px',
    justifyContent: 'flex-end',
},
  step: {
      display: 'inline-block',
      margin: '0px',
      marginLeft: '0px',
      fontSize: '18px',
      marginTop: 15,
      position: 'relative',
      bottom: -2,
  },
  square: {
    //To make Square Shape
    position: 'relative',
    right: -22,
    width: 40,
    height: 40,
    backgroundColor: '#14ff5f',
    transform: 'rotate(45deg)',
    marginTop: '10px',
    backgroundColor: 'black',
    border: '1px solid',
    borderColor: faultBlue,
 },
 squareActive: {
    //To make Square Shape
    position: 'relative',
    right: -22,
    width: 40,
    height: 40,
    backgroundColor: '#14ff5f',
    transform: 'rotate(45deg)',
    marginTop: '10px',
    backgroundColor: faultBlue,
    border: '1px solid',
    borderColor: faultBlue,
 },
  stepValue: {
      position: 'absolute',
      transform: 'rotate(-45deg)',
      top: '5%',
      left: '30%',
      fontSize: '25px',
  }
}));

export default function CustomizeCatView() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
                <div className={classes.stepDiv}>
                    <p className={classes.step}>SETUP</p>
                    <Link to="/create">
                    <div className={classes.square}>
                        <div className={classes.stepValue}>1</div>
                    </div>
                    </Link>
                </div>
            </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className={classes.stepDiv}>
                <p className={classes.step}>DETAILS</p>
                <Link to="/create/details">
                <div className={classes.square}>
                    <div className={classes.stepValue}>2</div>
                </div>
                </Link>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className={classes.stepDiv}>
                <p className={classes.step}>CUSTOMIZE</p>
                <div className={classes.squareActive}>
                    <div className={classes.stepValue}>3</div>
                </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} style={{borderRight: "none"}}>
            <div className={classes.stepDiv}>
                <p className={classes.step}>REVIEW</p>
                <Link to="/create/review">
                <div className={classes.square}>
                    <div className={classes.stepValue}>4</div>
                </div>
                </Link>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}