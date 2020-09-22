import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import '../../styles/Heroes.css'
import HeroList from '../Hero/HeroList'
import SidePanel from './SidePanel';
import StoredBuilds from '../StoredBuilds'
import DisplayListBuild from '../Display/DisplayListBuild'

var faultBlue = '#7DBCC9';
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
        backgroundPosition: '50% 25%',
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
    }
    }));


export default function HeroPage({ match }) {
  const classes = useStyles();
  const {
    params: { heroName }    
  } = match;

  const setHeroValues = (heroListObj) => {
    var abilityStr = "https://api.playfault.com/imagecdn/abilities/"
    if (heroName == heroListObj.name) {

      abilityStr += heroName


      var bannerImg = heroListObj.banner
      var id = heroListObj.id
      var pImg = abilityStr + "/P.png"
      var qImg = abilityStr + "/Q.png"
      var eImg = abilityStr + "/E.png"
      var rmbImg = abilityStr + "/RMB.png"
      var rImg = abilityStr + "/R.png"
    }
    return([bannerImg, id, pImg, qImg, eImg, rmbImg, rImg])
  }

  var heroValueList = HeroList.map(heroListObj => setHeroValues(heroListObj))

  var index = HeroList.findIndex(x => x.name === heroName)

  var heroObject = (heroValueList[index])

  var bannerImg = heroObject[0]
  var heroId = heroObject[1]
  var pImg = heroObject[2]
  var qImg = heroObject[3]
  var eImg = heroObject[4]
  var rmbImg = heroObject[5]
  var rImg = heroObject[6]

  console.log("Banner: " + bannerImg)
  console.log("Hero ID: " + heroId)
  console.log("P Img: " + pImg)

  /* This section displays all builds for the hero*/
  const setStoredBuilds = (storedBuildsObj) => {
    if (heroName == storedBuildsObj.hero) {
      var title = storedBuildsObj.title
      var author = storedBuildsObj.author
      var buildBanner = storedBuildsObj.displayBanner
      var date = storedBuildsObj.date
      var upvotes = storedBuildsObj.upvotes
      var patch = storedBuildsObj.patch
      var role = storedBuildsObj.role

    console.log("Build Banner: " + buildBanner)
      return (
        <DisplayListBuild 
        hero={heroName} 
        title={title} 
        author={author}
        buildBg={buildBanner}
        date={date}
        upvotes={upvotes}
        patch={patch}
        role={role}
        />
      )
    }

  }
 

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={1} md={2}>
          <Paper className={classes.sides}>xs=12 sm=2</Paper>
        </Grid>
        <Grid item xs={12} sm={10} md={8}>
          <Paper className={classes.paper}>
              <div className={classes.banner} style={{backgroundImage: `url(${bannerImg})`}}>
                <div className={classes.heroInfoWrapper}>
                  <div className={classes.heroName}>{heroName}</div>

                  <div className={classes.skillWrapper}>
                    <div style={{marginBottom: 10}}>SKILLS</div>
                    <div className={classes.skillBar}>
                      <div className={classes.diamond}>
                          <img className={classes.abilityImage}src={pImg}></img>
                        </div>
                        <div className={classes.diamond}>
                          <img className={classes.abilityImage}src={qImg}></img>
                        </div>
                        <div className={classes.diamond}>
                          <img className={classes.abilityImage}src={eImg}></img>
                        </div>
                        <div className={classes.diamond}>
                          <img className={classes.abilityImage}src={rmbImg}></img>
                        </div>
                        <div className={classes.diamond}>
                          <img className={classes.abilityImage}src={rImg}></img>
                        </div>
                    </div>  
                  </div>
                </div>
              </div>
              <div className={classes.contentWrapper}>
                  <div className={classes.contentLeft}>
                    <div style={{display: 'flex', marginTop: 10, justifyContent: 'space-between'}}>
                      <div style={{width: '50%', display: 'flex'}}>
                          <div className={classes.filterBoxActive}>PATCH</div>
                          <div className={classes.filterBox}>TOP RATED</div>
                          <div className={classes.filterBox}>TRENDING</div>
                      </div>
                      <div style={{width: '30%', backgroundColor: faultBlue, paddingTop: 5, paddingBottom: 5}}>
                          PREMIUM MEMBERSHIP
                      </div>
                    </div>
                      { StoredBuilds.map(storedBuildsObj => setStoredBuilds(storedBuildsObj, HeroList))}
                  </div>
                  <div className={classes.contentRight}>
                      <SidePanel />
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