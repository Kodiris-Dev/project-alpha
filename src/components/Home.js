import React from 'react'
import logo from '../logo.svg';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import HomeGrid from '../components/HomeGrid'



const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '0px',
      margin: '20px',
      marginBottom: '0px',
      flexGrow: 1,
      padding: '0px',
    },
    paper: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '98.5%',
      backgroundColor: 'black',
      color: 'white',
      padding: '10px',
      paddingBottom: '0px',
    },
    sides: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '93vh',
        backgroundColor: 'transparent',
        color: 'white',
      },
  }));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Hidden only={['sm', 'xs']}>
                    <Grid item xs={0} sm={1} md={2} lg={3}>
                        <Paper className={classes.sides}>xs=12 sm=2</Paper>
                    </Grid>
                </Hidden>
                <Grid item xs={12} sm={12} md={8} lg={6}>
                <Paper className={classes.paper}>
                    <HomeGrid />
                </Paper>
                </Grid>
                <Hidden only={['sm', 'xs']}>
                    <Grid item xs={0} sm={1} md={2} lg={3}>
                        <Paper className={classes.sides}>xs=12 sm=2</Paper>
                    </Grid>
                </Hidden>
            </Grid>
        </div>
    )
}

export default Home