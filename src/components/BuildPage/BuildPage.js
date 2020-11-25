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

import CarryIcon from '../../assets/role-icons/Carry.svg'
import JungleIcon from '../../assets/role-icons/Jungle.svg'
import MidIcon from '../../assets/role-icons/Mid.svg'
import SoloIcon from '../../assets/role-icons/Solo.svg'
import SupportIcon from '../../assets/role-icons/Support.svg'
import AspectImg from '../CreateViews/Details/Aspects/components/AspectImg';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './buildpage.css'

var GideonImg = 'https://api.playfault.com/imagecdn/portraits/3.jpg'

var item1 = 'https://api.playfault.com/imagecdn/items/8.jpg'
var item2 = 'https://api.playfault.com/imagecdn/items/14.jpg'
var item3 = 'https://api.playfault.com/imagecdn/items/15.jpg'
var item4 = 'https://api.playfault.com/imagecdn/items/16.jpg'
var item5 = 'https://api.playfault.com/imagecdn/items/25.jpg'
var item6 = 'https://api.playfault.com/imagecdn/items/26.jpg'



var faultBlue = '#7DBCC9';
const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '0px',
      marginBottom: '0px',
      flexGrow: 1,
      padding: '0px',
      backgroundImage: `url(${HeroPageImg})`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      },
      paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '10px',
        paddingBottom: '0px',
        paddingLeft: 20,
        paddingRight: 20,
      },
      columnPaper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color: 'white',
        padding: '20px',
        paddingBottom: '20px',
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
        backgroundPosition: '50% 30%',
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
    },
    roleIcon: {
      width: 50,
      height: 50,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center center'
    },
    introductionText: {
      marginTop: 20,
      marginBottom: 20,
      border: '1px solid yellow',
      padding: '10px 50px 10px 50px'
    },
    square: {
      //To make Square Shape
      position: 'relative',
      width: 55,
      height: 55,
      backgroundColor: '#14ff5f',
      transform: 'rotate(45deg)',
      backgroundColor: 'black',
      border: '1px solid',
      borderColor: faultBlue,
   },
   smallSquare: {
    //To make Square Shape
    position: 'relative',
    width: 25,
    height: 25,
    backgroundColor: '#14ff5f',
    transform: 'rotate(45deg)',
    backgroundColor: 'black',
    border: '1px solid',
    borderColor: faultBlue,
 },
 stepValue: {
  position: 'absolute',
  transform: 'rotate(-45deg)',
  top: '5px',
  left: '5px',
  fontSize: '14px',
},
stepValueAbility: {
  position: 'absolute',
  transform: 'rotate(-45deg)',
  fontSize: '12px',
  left: 5,
  top: 2,
},
abilityImage: {
  width: '100%',
  height: '100%',
  transform: 'rotate(-45deg)',
},
    }));


    function TabPanel(props) {
      const { children, value, index, ...other } = props;
    
      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`wrapped-tabpanel-${index}`}
          aria-labelledby={`wrapped-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box p={3}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }
    
    TabPanel.propTypes = {
      children: PropTypes.node,
      index: PropTypes.any.isRequired,
      value: PropTypes.any.isRequired,
    };
    
    function a11yProps(index) {
      return {
        id: `wrapped-tab-${index}`,
        'aria-controls': `wrapped-tabpanel-${index}`,
      };
    }
    
    
    function TabsWrappedLabel() {
      const [value, setValue] = React.useState('one');
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
      return (
        <div style={{marginTop: 20}}>
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
              <Tab
                value="one"
                label="Set 1"
                wrapped
                {...a11yProps('one')}
              />
              <Tab value="two" label="Set 2" {...a11yProps('two')} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index="one">
                  <div style={{display: 'flex', justifyContent: 'center', marginBottom: 20}}>
                    <AspectImg name="King"/>
                    <AspectImg name="Ace"/>
                  </div>
                  Aspect Description. . . blah blah blah play countess or w/e like why not she pretty gas. 
Look there are more words! I wanted to fill the space up a bit so I decided that I should do a bit of typing. Like, why not just add some more stuff in here, I know it doesn't make any sense but does that matter? NO! Why? I have no idea, but I do like this big ole boris in the background, cause why not.
          </TabPanel>
          <TabPanel value={value} index="two">
                  <div style={{display: 'flex', justifyContent: 'center', marginBottom: 20}}>
                    <AspectImg name="Queen"/>
                    <AspectImg name="Warlock"/>
                  </div>
                  Aspect Description 2 . . . blah blah blah play countess or w/e like why not she pretty gas. 
Look there are more words! I wanted to fill the space up a bit so I decided that I should do a bit of typing. Like, why not just add some more stuff in here, I know it doesn't make any sense but does that matter? NO! Why? I have no idea, but I do like this big ole boris in the background, cause why not.
          </TabPanel>
        </div>
      );
    }

export default function BuildPage({ match }) {

    const classes = useStyles();
    const {
      params: { buildId }    
    } = match;





    var [allBuilds, setAllBuilds] = useState([])
    let myData = []
  
  //Build Data Variables

  var title = ''
  var author = ''
  var hero = ''
  var displayBanner = ''


  fetch('http://faultariaapi-devtest.us-east-1.elasticbeanstalk.com/api/builds')
  .then(builds => builds.json())
  .then(data => createBuild(data))
  
  
  function createBuild(data) {
    setAllBuilds(allBuilds = data)

  }
  for (var i in allBuilds) {
      if (allBuilds[i]['Id'] == buildId) {
          author = allBuilds[i]['Author']
          title = allBuilds[i]['Title']
          hero = allBuilds[i]['Hero']
          displayBanner = allBuilds[i]['DisplayBanner']
      }
  }

  //User data
  const setUserValues = (userListObj) => {

    if (author == userListObj.userName) {
        
        return (
            userListObj.profilePic
        )
    }
  }

  var profilePic = UserList.map(userListObj => setUserValues(userListObj))
  var userPic = ""
  for (var i in profilePic) {
      if (profilePic[i] != undefined) {
          userPic = profilePic[i]
      }
  }


  
    //GET HERO IMAGES
      var abilityStr = "https://api.playfault.com/imagecdn/abilities/"
      abilityStr += hero
      var pImg = abilityStr + "/P.png"
      var qImg = abilityStr + "/Q.png"
      var eImg = abilityStr + "/E.png"
      var rmbImg = abilityStr + "/RMB.png"
      var rImg = abilityStr + "/R.png"
      console.log(qImg)



  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={1} md={2}>
          <Paper className={classes.sides}>xs=12 sm=2</Paper>
        </Grid>
        <Grid item xs={12} sm={10} md={8}>
          <Paper className={classes.paper}>

            <div className={classes.banner} style={{backgroundImage: `url(${displayBanner})`}}>
                <div className={classes.bannerContainer}>
                    <div className={classes.profilePic} style={{backgroundImage: `url(${userPic})`}}></div>
                    <div className={classes.heroInfoWrapper}>
                        <div className={classes.heroName}>{title}</div>
                        <div>{author}</div>
                        <div>{hero}</div>
                    </div>
                </div>
              </div>
              <div style={{marginTop: 20, fontSize: 24}}>INTRODUCTION</div>
                  <div className={classes.introductionText}>User's intro here . . . blah blah blah play countess or w/e like why not she pretty gas. 
                        Look there are more words! I wanted to fill the space up a bit so I decided that I should do a bit of typing. Like, why not just add some more stuff in here, I know it doesn't make any sense but does that matter? NO! Why? I have no idea, but I do like this big ole boris in the background, cause why not.
                  </div>
              <div className={classes.contentWrapper}>
              <Grid item xs={12} sm={10} md={4}>
                <Paper className={classes.columnPaper}>
                  <div>ROLE</div>
                  <div className={classes.roleWrapper} style={{display: 'flex', justifyContent: 'space-between', marginTop: 20, marginBottom: 20}}>
                    <div className={classes.roleIcon} style={{backgroundImage: `url(${JungleIcon})`}}></div>
                    <div className={classes.roleIcon} style={{backgroundImage: `url(${CarryIcon})`}}></div>
                    <div className={classes.roleIcon} style={{backgroundImage: `url(${MidIcon})`}}></div>
                    <div className={classes.roleIcon} style={{backgroundImage: `url(${SupportIcon})`}}></div>
                    <div className={classes.roleIcon} style={{backgroundImage: `url(${SoloIcon})`}}></div>
                  </div>
                  <div>ASPECTS</div>
                  <TabsWrappedLabel />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={10} md={4}>
                <Paper className={classes.columnPaper}>
                <div>ITEMS</div>
                <div style={{marginTop: 20}}>
                    <Accordion style={{color: 'white', backgroundColor: 'transparent', borderBottom: '1px solid', borderColor: faultBlue}}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          <div>
                          <div style={{textAlign: 'left'}}>TITLE 1</div>
                            <div className={classes.roleWrapper} style={{display: 'flex', justifyContent: 'space-between', marginTop: 10}}>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item1})`}}></div>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item2})`}}></div>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item3})`}}></div>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item4})`}}></div>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item5})`}}></div>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item6})`}}></div>
                            </div>
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                          sit amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                </div>

                <div style={{marginTop: 20}}>
                    <Accordion style={{color: 'white', backgroundColor: 'transparent', borderBottom: '1px solid', borderColor: faultBlue}}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          <div>
                          <div style={{textAlign: 'left'}}>TITLE 2</div>
                            <div className={classes.roleWrapper} style={{display: 'flex', justifyContent: 'space-between', marginTop: 10}}>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item1})`}}></div>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item2})`}}></div>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item3})`}}></div>
                            </div>
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                          sit amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                </div>


                <div style={{marginTop: 20}}>
                    <Accordion style={{color: 'white', backgroundColor: 'transparent', borderBottom: '1px solid', borderColor: faultBlue}}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          <div>
                          <div style={{textAlign: 'left'}}>TITLE 3</div>
                            <div className={classes.roleWrapper} style={{display: 'flex', justifyContent: 'space-between', marginTop: 10}}>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item1})`}}></div>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item2})`}}></div>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item3})`}}></div>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item4})`}}></div>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item5})`}}></div>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item6})`}}></div>
                            </div>
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                          sit amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                </div>

                <div style={{marginTop: 20}}>
                    <Accordion style={{color: 'white', backgroundColor: 'transparent', borderBottom: '1px solid', borderColor: faultBlue}}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          <div>
                          <div style={{textAlign: 'left'}}>TITLE 3</div>
                            <div className={classes.roleWrapper} style={{display: 'flex', justifyContent: 'space-between', marginTop: 10}}>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item1})`}}></div>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item2})`}}></div>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item3})`}}></div>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item4})`}}></div>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item5})`}}></div>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item6})`}}></div>
                            </div>
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                          sit amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                </div>

                <div style={{marginTop: 20}}>
                    <Accordion style={{color: 'white', backgroundColor: 'transparent', borderBottom: '1px solid', borderColor: faultBlue}}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          <div>
                          <div style={{textAlign: 'left'}}>TITLE 3</div>
                            <div className={classes.roleWrapper} style={{display: 'flex', justifyContent: 'space-between', marginTop: 10}}>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item1})`}}></div>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item2})`}}></div>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item3})`}}></div>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item4})`}}></div>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item5})`}}></div>
                                <div className={classes.roleIcon} style={{backgroundImage: `url(${item6})`}}></div>
                            </div>
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                          sit amet blandit leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                </div>

                </Paper>
              </Grid>
              <Grid item xs={12} sm={10} md={4}>
                <Paper className={classes.columnPaper}>
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                      <div className={classes.square}>
                        <img className={classes.abilityImage}src={qImg}></img>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare} style={{width: 20, height: 20}}>
                          <div className={classes.stepValueAbility}>Q</div>
                        </div>
                      </div>
                      <div style={{marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>1</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>2</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>3</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>4</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>5</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>6</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>7</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>8</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>9</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>10</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>11</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>12</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>13</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>14</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>15</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>16</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>17</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>18</div>
                        </div>
                      </div>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', marginLeft: 40, marginRight: 40}}>
                      <div className={classes.square}>
                        <img className={classes.abilityImage}src={eImg}></img>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare} style={{width: 20, height: 20}}>
                          <div className={classes.stepValueAbility}>E</div>
                        </div>
                      </div>
                      <div style={{marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>1</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>2</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>3</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>4</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>5</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>6</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>7</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>8</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>9</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>10</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>11</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>12</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>13</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>14</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>15</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>16</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>17</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>18</div>
                        </div>
                      </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', marginRight: 40}}>
                      <div className={classes.square}>
                        <img className={classes.abilityImage}src={rmbImg}></img>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare} style={{width: 20, height: 20}}>
                          <div className={classes.stepValueAbility} style={{fontSize: 9, left: 0}}>RMB</div>
                        </div>
                      </div>
                      <div style={{marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>1</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>2</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>3</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>4</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>5</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>6</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>7</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>8</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>9</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>10</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>11</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>12</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>13</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>14</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>15</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>16</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>17</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>18</div>
                        </div>
                      </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                      <div className={classes.square}>
                        <img className={classes.abilityImage}src={rImg}></img>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare} style={{width: 20, height: 20}}>
                          <div className={classes.stepValueAbility}>R</div>
                        </div>
                      </div>
                      <div style={{marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>1</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>2</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>3</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>4</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>5</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>6</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>7</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>8</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>9</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>10</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>11</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>12</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>13</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>14</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>15</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>16</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>17</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center'}}>             
                        <div className={classes.smallSquare}>
                          <div className={classes.stepValue}>18</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Paper>
              </Grid>
              
              </div>
              <div style={{marginTop: 20}}>COMPATIBILITY</div>
                <div style={{display: 'flex', paddingBottom: 20, justifyContent: 'space-between'}}>
                  <div style={{width: '45%'}}>
                    <div>THREATS</div>
                    <div style={{marginTop: 10}}>
                    <Accordion style={{color: 'white', borderBottom: '1px solid #BC0000', backgroundColor: 'transparent'}}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          <div style={{textAlign: 'left'}}>Extreme</div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <div style={{display: 'flex'}}>
                            <div style={{border: '1px solid white', height: 90, width: 90, backgroundImage: `url(${GideonImg})`, backgroundSize: 'cover'}}></div>
                            <div style={{width: '70%', marginLeft: 10}}>So, Gideon can like . . . hit you with rocks and stuff, and it hurts. And his teleportal is like way more mobile than Countess' teleport or w/e but like it doesn't do damage. But he can be really high up and ulting and then you can't ult him back which is a big oof. So you gotta watch out for that. Like if he uses all his manas or w/e then like cool . . . cause then you can just tele to him and make him be the sad. Otherwise just like done be dead cause he likes to throw rocks which is really mean. Gideon is a big meanie!
                            </div>
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                </div>
                <div style={{marginTop: 10}}>
                    <Accordion style={{color: 'white', borderBottom: '1px solid #BC6B00', backgroundColor: 'transparent'}}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          <div style={{textAlign: 'left'}}>Major</div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <div style={{display: 'flex'}}>
                            <div style={{border: '1px solid white', height: 90, width: 90, backgroundImage: `url(${GideonImg})`, backgroundSize: 'cover'}}></div>
                            <div style={{width: '70%', marginLeft: 10}}>So, Gideon can like . . . hit you with rocks and stuff, and it hurts. And his teleportal is like way more mobile than Countess' teleport or w/e but like it doesn't do damage. But he can be really high up and ulting and then you can't ult him back which is a big oof. So you gotta watch out for that. Like if he uses all his manas or w/e then like cool . . . cause then you can just tele to him and make him be the sad. Otherwise just like done be dead cause he likes to throw rocks which is really mean. Gideon is a big meanie!
                            </div>
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                </div>
                <div style={{marginTop: 10}}>
                    <Accordion style={{color: 'white', borderBottom: '1px solid #BCAF00', backgroundColor: 'transparent'}}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          <div style={{textAlign: 'left'}}>Moderate</div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <div style={{display: 'flex'}}>
                            <div style={{border: '1px solid white', height: 90, width: 90, backgroundImage: `url(${GideonImg})`, backgroundSize: 'cover'}}></div>
                            <div style={{width: '70%', marginLeft: 10}}>So, Gideon can like . . . hit you with rocks and stuff, and it hurts. And his teleportal is like way more mobile than Countess' teleport or w/e but like it doesn't do damage. But he can be really high up and ulting and then you can't ult him back which is a big oof. So you gotta watch out for that. Like if he uses all his manas or w/e then like cool . . . cause then you can just tele to him and make him be the sad. Otherwise just like done be dead cause he likes to throw rocks which is really mean. Gideon is a big meanie!
                            </div>
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                </div>
                <div style={{marginTop: 10}}>
                    <Accordion style={{color: 'white', borderBototm: '1px solid #5E5801', backgroundColor: 'transparent'}}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          <div style={{textAlign: 'left'}}>Minor</div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <div style={{display: 'flex'}}>
                            <div style={{border: '1px solid white', height: 90, width: 90, backgroundImage: `url(${GideonImg})`, backgroundSize: 'cover'}}></div>
                            <div style={{width: '70%', marginLeft: 10}}>So, Gideon can like . . . hit you with rocks and stuff, and it hurts. And his teleportal is like way more mobile than Countess' teleport or w/e but like it doesn't do damage. But he can be really high up and ulting and then you can't ult him back which is a big oof. So you gotta watch out for that. Like if he uses all his manas or w/e then like cool . . . cause then you can just tele to him and make him be the sad. Otherwise just like done be dead cause he likes to throw rocks which is really mean. Gideon is a big meanie!
                            </div>
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                </div>
                  </div>
                  <div style={{width: '45%'}}>
                    <div>SYNERGIES</div>
                    <div style={{marginTop: 10}}>
                    <Accordion style={{color: 'white', borderBottom: '1px solid #002488', backgroundColor: 'transparent'}}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          <div style={{textAlign: 'left'}}>Optimal</div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <div style={{display: 'flex'}}>
                            <div style={{border: '1px solid white', height: 90, width: 90, backgroundImage: `url(${GideonImg})`, backgroundSize: 'cover'}}></div>
                            <div style={{width: '70%', marginLeft: 10}}>So, Gideon can like . . . hit you with rocks and stuff, and it hurts. And his teleportal is like way more mobile than Countess' teleport or w/e but like it doesn't do damage. But he can be really high up and ulting and then you can't ult him back which is a big oof. So you gotta watch out for that. Like if he uses all his manas or w/e then like cool . . . cause then you can just tele to him and make him be the sad. Otherwise just like done be dead cause he likes to throw rocks which is really mean. Gideon is a big meanie!
                            </div>
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                </div>
                <div style={{marginTop: 10}}>
                    <Accordion style={{color: 'white', borderBottom: '1px solid #146680', backgroundColor: 'transparent'}}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          <div style={{textAlign: 'left'}}>Strong</div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <div style={{display: 'flex'}}>
                            <div style={{border: '1px solid white', height: 90, width: 90, backgroundImage: `url(${GideonImg})`, backgroundSize: 'cover'}}></div>
                            <div style={{width: '70%', marginLeft: 10}}>So, Gideon can like . . . hit you with rocks and stuff, and it hurts. And his teleportal is like way more mobile than Countess' teleport or w/e but like it doesn't do damage. But he can be really high up and ulting and then you can't ult him back which is a big oof. So you gotta watch out for that. Like if he uses all his manas or w/e then like cool . . . cause then you can just tele to him and make him be the sad. Otherwise just like done be dead cause he likes to throw rocks which is really mean. Gideon is a big meanie!
                            </div>
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                </div>
                <div style={{marginTop: 10}}>
                    <Accordion style={{color: 'white', borderBottom: '1px solid #127B57', backgroundColor: 'transparent'}}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          <div style={{textAlign: 'left'}}>Good</div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <div style={{display: 'flex'}}>
                            <div style={{border: '1px solid white', height: 90, width: 90, backgroundImage: `url(${GideonImg})`, backgroundSize: 'cover'}}></div>
                            <div style={{width: '70%', marginLeft: 10}}>So, Gideon can like . . . hit you with rocks and stuff, and it hurts. And his teleportal is like way more mobile than Countess' teleport or w/e but like it doesn't do damage. But he can be really high up and ulting and then you can't ult him back which is a big oof. So you gotta watch out for that. Like if he uses all his manas or w/e then like cool . . . cause then you can just tele to him and make him be the sad. Otherwise just like done be dead cause he likes to throw rocks which is really mean. Gideon is a big meanie!
                            </div>
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                </div>
                <div style={{marginTop: 10}}>
                    <Accordion style={{color: 'white', borderBottom: '1px solid #275445', backgroundColor: 'transparent'}}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          <div style={{textAlign: 'left'}}>Ok</div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <div style={{display: 'flex'}}>
                            <div style={{border: '1px solid white', height: 90, width: 90, backgroundImage: `url(${GideonImg})`, backgroundSize: 'cover'}}></div>
                            <div style={{width: '70%', marginLeft: 10}}>So, Gideon can like . . . hit you with rocks and stuff, and it hurts. And his teleportal is like way more mobile than Countess' teleport or w/e but like it doesn't do damage. But he can be really high up and ulting and then you can't ult him back which is a big oof. So you gotta watch out for that. Like if he uses all his manas or w/e then like cool . . . cause then you can just tele to him and make him be the sad. Otherwise just like done be dead cause he likes to throw rocks which is really mean. Gideon is a big meanie!
                            </div>
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                </div>
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