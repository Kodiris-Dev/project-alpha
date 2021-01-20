import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'

import HeroList from '../Hero/HeroList'

import StoredBuilds from '../StoredBuilds'
import DisplayListBuild from '../Display/DisplayListBuild'
import HeroPageImg from '../../assets/hero-page.png'
import { useState } from 'react'
import Build from '../HeroPage/Build'
import UserList from '../Users/UserList'


var faultBlue = '#7DBCC9';
const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '0px',
      marginBottom: '0px',
      flexGrow: 1,
      padding: '0px',
      backgroundImage: `url(${HeroPageImg})`,
      backgroundSize: 'cover',
      },
      paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '98.5%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        padding: '10px',
        paddingBottom: '0px',
      },
      sides: {
          textAlign: 'center',
          color: theme.palette.text.secondary,
          height: '93vh',
          backgroundColor: 'transparent',
          color: 'transparent',
        },
      banner: {
        width: '100%',
        height: '250px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 70%',
      },
      heroInfoWrapper: {
        width: '98%',
        textAlign: 'left',
        height: '90%',
        position: 'relative',
        padding: 10,
      },
      heroName: {
        fontSize: 48,
        textTransform: 'uppercase',
      },
      diamond: {
        position: 'relative',
        left: 10,
        width: 40,
        height: 40,
        backgroundColor: '#14ff5f',
        transform: 'rotate(45deg)',
        marginTop: '10px',
        marginRight: 20,
        backgroundColor: 'black',
        border: '1px solid',
        borderColor: faultBlue,
     },
     abilityImage: {
       width: '100%',
       height: '100%',
       transform: 'rotate(-45deg)',
     },
     skillWrapper: {
       position: 'absolute',
       bottom: 10,
     },
     skillBar: {
       display: "flex",
     },
     contentWrapper: {
       display: 'flex',
       height: '900px',
     },
     contentLeft: {
       width: "70%",
     },
     contentRight: {
      width: "30%",
    },
    filterBox: {
      width: '30%',
      paddingTop: 5,
      paddingBottom: 5,
      marginRight: 15,
      backgroundColor: '#171717',
    },
    filterBoxActive: {
      width: '30%',
      border: '1px white solid',
      paddingTop: 5,
      paddingBottom: 5,
      marginRight: 15,
      backgroundColor: faultBlue
    },
    bannerContainer: {
        display: 'flex',
    },
    profilePic: {
        backgroundSize: 'cover',
        width: 110,
        height: 110,
    }
    }));

function HeroBlock(props) {
  var url = '/heroes/' + props.name
  return (
    <Link to={url}>
      <li>{props.name}</li>
    </Link>

  )
}


export default function Heroes() {

    const classes = useStyles();

  function getHeroes(obj) {
    return (
      <ul style={{color: 'white'}}>
        <HeroBlock { ...obj}/>
      </ul>

    )
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={1} md={2}>
          <Paper className={classes.sides}>xs=12 sm=2</Paper>
        </Grid>
        <Grid item xs={12} sm={10} md={8}>
          <Paper className={classes.paper}>

            <div className={classes.banner} style={{backgroundImage: `url(${HeroPageImg})`}}>
                <div className={classes.bannerContainer}>
                    <div className={classes.heroInfoWrapper}>
                        <div className={classes.heroName}>Heroes</div>
                        <div></div>
                    </div>
                </div>
              </div>

              <div className={classes.contentWrapper}>
                  <div className={classes.contentLeft}>
                    { HeroList.map((obj) => getHeroes(obj)) }
                  </div>
                  <div className={classes.contentRight}>
                  </div>
              </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={1} md={2}>
          <Paper className={classes.sides}>xs=12 sm=2</Paper>
        </Grid>
      </Grid>
    </div>
  );
}