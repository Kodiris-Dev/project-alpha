import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import BrowseGrid from './BrowseGrid'



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
      backgroundColor: 'transparent',
      color: 'white',
      paddingBottom: '0px',
    },
    sides: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '100%',
        backgroundColor: 'transparent',
        color: 'white',
      },
  }));

function BrowsePage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Hidden only={['sm', 'xs']}>
                    <Grid item xs={0} sm={1} md={1} lg={2}>
                        <Paper className={classes.sides}>xs=12 sm=2</Paper>
                    </Grid>
                </Hidden>
                <Grid item xs={12} sm={12} md={10} lg={8}>
                <Paper className={classes.paper}>
                    <BrowseGrid />
                </Paper>
                </Grid>
                <Hidden only={['sm', 'xs']}>
                    <Grid item xs={0} sm={1} md={1} lg={2}>
                        <Paper className={classes.sides}>xs=12 sm=2</Paper>
                    </Grid>
                </Hidden>
            </Grid>
        </div>
    )
}

export default BrowsePage