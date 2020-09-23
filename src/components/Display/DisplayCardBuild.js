import React from 'react'
import { makeStyles, withTheme } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Chip from '@material-ui/core/Chip';
import UserList from '../Users/UserList'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';



var faultBlue = '#7DBCC9';
const useStyles = makeStyles({
    root: {
      width: 290,
      height: 195,
      color: 'white',
      backgroundColor: '#171717',
      boxShadow: "4px 4px 8px #000000"
    },
    img: {
        backgroundSize: 'cover',
        backgroundPosition: 'center -20px',
        backgroundRepeat: 'no-repeat',
        height: 60,
    },
    bannerContent: {
        display: 'flex',
        color: 'white',
        justifyContent: 'space-between',
    },
    profilePic: {
        width: 50,
        height: 50,
        border: '1px solid',
        borderColor: faultBlue,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        margin: 5,
    },
    cardTitle: {
        fontSize: 14,
        textAlign: 'left',
        width: "100%",
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
    },
    cardAuthor: {
        fontSize: 10,
        textAlign: 'left',
        marginBottom: 10,
    },
    cardBody: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardContent: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    itemImg: {
        width: 40,
        height: 40,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    cardFooter: {
        display: 'flex',
        padding: 10,
        paddingTop: 5,
        position: 'relative',
    },
    chip: {
        color: 'white',
        fontSize: 11,
        height: 20,
        width: 60,
        position: 'relative',
        marginRight: 5,
    },
    upVotes: {
        backgroundColor: 'black',
        height: 60,
    }
  });
  

export default function DisplayCardBuild(props) {
    const classes = useStyles()
    console.log("props:",props)
    props=props.build

    /*Setting card variables */
    var displayBanner = props.displayBanner
    var author = props.author
    var date = props.date
    var hero = props.hero
    var patch = props.patch
    var role = props.role
    var title = props.title
    var upvotes = props.upvotes

    const setUserValues = (userListObj) => {

        if (props.author == userListObj.userName) {
            
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
      console.log("Profile Pic Url: " + userPic)
    return (
        
        <Card className={classes.root}>
      <CardActionArea style={{height: '85%'}}>
        <div
        className={classes.img}
        style={{backgroundImage: `url(${displayBanner})`}}
        >
            <div className={classes.bannerContent}>
                <div className={classes.profilePic} style={{backgroundImage: `url(${userPic})`}}></div>
                <div className={classes.upVotes}>
                    <KeyboardArrowUpIcon style={{color: 'green'}}/>
                    <div>{upvotes}</div>
                    <KeyboardArrowDownIcon style={{color: 'red'}}/>
                </div>
            </div>
        </div>
        <CardContent className={classes.cardContent}>
          <div className={classes.cardTitle}>
                {title}
          </div>
          <div className={classes.cardAuthor}>
                by {author} on {date}
          </div>
          <div className={classes.cardBody}>
            <div className={classes.itemImg} style={{backgroundImage: 'url("https://pbs.twimg.com/media/EhLk9BvWkAEcJVC?format=jpg&name=medium")'}}></div>
            <div className={classes.itemImg} style={{backgroundImage: 'url("https://pbs.twimg.com/media/EhLk9BvWkAEcJVC?format=jpg&name=medium")'}}></div>
            <div className={classes.itemImg} style={{backgroundImage: 'url("https://pbs.twimg.com/media/EhLk9BvWkAEcJVC?format=jpg&name=medium")'}}></div>
            <div className={classes.itemImg} style={{backgroundImage: 'url("https://pbs.twimg.com/media/EhLk9BvWkAEcJVC?format=jpg&name=medium")'}}></div>
            <div className={classes.itemImg} style={{backgroundImage: 'url("https://pbs.twimg.com/media/EhLk9BvWkAEcJVC?format=jpg&name=medium")'}}></div>
            <div className={classes.itemImg} style={{backgroundImage: 'url("https://pbs.twimg.com/media/EhLk9BvWkAEcJVC?format=jpg&name=medium")'}}></div>
          </div>
        </CardContent>
      </CardActionArea>
      <div className={classes.cardFooter}>
        <Chip className={classes.chip} style={{borderColor: 'brown'}} label={patch} variant="outlined" />
        <Chip className={classes.chip} style={{borderColor: 'purple'}} label={role} variant="outlined" />
        <Chip className={classes.chip} style={{borderColor: 'brown'}} label="17FR" variant="outlined" />
        <FavoriteBorderIcon  style={{color: 'red', position: 'absolute', right: 5, bottom: 10}}/>
      </div>
    </Card>
    )
}