import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'

import HeroList from '../Hero/HeroList'
import SidePanel from './SidePanel';
import StoredBuilds from '../StoredBuilds'
import DisplayListBuild from '../Display/DisplayListBuild'
import HeroPageImg from '../../assets/hero-page.png'
import { useState } from 'react'
import Build from './Build'


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

  var [allBuilds, setAllBuilds] = useState([])
  let myData = []


fetch('http://faultariaapi-devtest.us-east-1.elasticbeanstalk.com/api/builds')
.then(builds => builds.json())
.then(data => createBuild(data))


function createBuild(data) {
  setAllBuilds(allBuilds = data)


  for(let i = 0; i < allBuilds.length; i++){
      let id = allBuilds[i]["Id"];
      let title = allBuilds[i]["Title"];
      let build = new Build(id, title);

      myData.push(build);
      
  } 
}

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


  /* This section displays all builds for the hero*/
  const getBuilds = (build) => {
    if (build['Hero'] === heroName) {
      console.log("Build:",build)
      var featured1 = 'https://api.playfault.com/imagecdn/items/' + build['Featured'][0] + '.jpg'
      var featured2 = 'https://api.playfault.com/imagecdn/items/' + build['Featured'][1] + '.jpg'
      var featured3 = 'https://api.playfault.com/imagecdn/items/' + build['Featured'][2] + '.jpg'
      var featured4 = 'https://api.playfault.com/imagecdn/items/' + build['Featured'][3] + '.jpg'
      var featured5 = 'https://api.playfault.com/imagecdn/items/' + build['Featured'][4] + '.jpg'
      var featured6 = 'https://api.playfault.com/imagecdn/items/' + build['Featured'][5] + '.jpg'
      var url = '/builds/' + build['Title']
      return (
        <Link to={url}>
          <DisplayListBuild 
          title={build['Title']}
          author={build['Author']}
          role={build['Role']}
          hero={build['Hero']}
          buildBg={build['DisplayBanner']}
          patch={build['Patch']}
          date={build['Date']}
          item1={featured1}
          item2={featured2}
          item3={featured3}
          item4={featured4}
          item5={featured5}
          item6={featured6}
          />
        </Link>
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
                      { allBuilds.map((obj) => getBuilds(obj)) } 
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