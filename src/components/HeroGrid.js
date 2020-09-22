import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import HeroList from './Hero/HeroList'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
    backgroundColor: "black",
    color: 'white'
  },
  heroImage: {
    width: "100%",
    height: "100%",
  }
}));


export default function HeroGrid() {
  const classes = useStyles();
  
const getHeroList = (heroListObj) => {
  var heroName = heroListObj.name
  var imageSrc = heroListObj.src
  return(
    <Grid item xs={4} sm={2}>
    <Link to={`/heroes/${heroName}`}>
    <Paper className={classes.paper}>
 
    <div>
      <p>{heroName}</p>
      <img className={classes.heroImage} src={imageSrc}></img>
    </div>


    </Paper>
    </Link>
    </Grid>

  )
}
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      {HeroList.map(heroListObj => getHeroList(heroListObj))}
      </Grid>
    </div>
  );
}