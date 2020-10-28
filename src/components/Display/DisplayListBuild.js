import React from 'react'
import { makeStyles, withTheme } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Chip from '@material-ui/core/Chip';
import UserList from '../Users/UserList'


var faultBlue = '#7DBCC9';
const useStyles = makeStyles((theme) => ({
  displayWrapper: {
      height: 100,
      marginTop: 10,
      display: 'flex',
      overflow: 'hidden',
      boxShadow: "5px 5px 1px black",
      backgroundColor: '#050505',
      backgroundSize: 'cover',
      backgroundPosition: 'center -120px',
      backgroundRepeat: 'no-repeat',
  },
  profileBox: {
      height: '90px',
      width: '90px',
      padding: 5,
      float: 'left',
      backgroundColor: 'black',
      marginRight: 10,
  },
  profileImg: {
      width: '90px',
      height: '90px',
      objectFit: 'cover',
  },
  content: {
      overflow: 'hidden',
      width: '70%',
  },
  buildName: {
    textAlign: 'left',
    width: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    height: 20,
    fontSize: '100%',
    marginBottom: 5,
    marginTop: 5,
  },
  headingWrapper: {
      width: '55%',
      overflow: 'hidden',
      backgroundColor: 'transparent',
  },
  authorBar: {
    textAlign: 'left',
    width: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontSize: '80%',
    display: 'flex',
  },
  topWrapper: {
      display: 'flex',
      width: '100%',
  },
  itemBar: {
      width: '80px',
      float: 'right',
      marginRight: '60px',
      display: 'flex',
      flexFlow: 'row',
      margin: 'auto',
  },
  tagBar: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '40%',
      backgroundColor: 'black',
      height: '100%',
      paddingTop: 25,
  },
  buildItem: {
      height: 40,
      width: 40,
  },
  itemImage: {
      width: 40,
      height: 40,
  },
  favorite: {
      float: 'right',
      width: 65,
      paddingTop: 10,
  },
  chip: {
      color: 'white',
      borderColor: faultBlue,
      fontSize: 11,
      height: 20,
      width: 60,
      position: 'relative',
  }
}));

export default function DisplayListBuild(props) {
    const classes = useStyles()
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

    return (
        <div className={classes.displayWrapper} style={{backgroundImage: `url(${props.buildBg})`}}>
            <div className={classes.profileBox}>
                <img className={classes.profileImg} src={userPic}></img>
            </div>
            <div className={classes.content}>
                <div className={classes.topWrapper}>
                    <div className={classes.headingWrapper}>
                        <div className={classes.buildName}>
                            {props.title}
                        </div>
                        <div className={classes.authorBar}>
                            <div style={{marginRight: 5}}>by</div>
                            <div style={{color: faultBlue}}>{props.author}</div>
                            <div style={{marginLeft: 5}}>updated {props.date} </div>
                        </div>
                    </div>
                </div>
                <div className={classes.tagBar}>
                    <Chip className={classes.chip} style={{borderColor: 'brown'}} label={props.patch} variant="outlined" />
                    <Chip className={classes.chip} style={{borderColor: 'purple'}} label={props.role} variant="outlined" />
                    <Chip className={classes.chip} style={{borderColor: 'brown'}} label="17FR" variant="outlined" />
                    <FavoriteBorderIcon  style={{color: 'red'}}/>
                </div>

                
            </div>
            <div style={{display: 'flex', flexFlow: 'column'}}>
                <div className={classes.itemBar}>
                    <div className={classes.buildItem}>
                        <img className={classes.itemImage}src="https://pbs.twimg.com/media/EhLk9BvWkAEcJVC?format=jpg&name=medium"></img>
                    </div>
                    <div className={classes.buildItem}>
                        <img className={classes.itemImage}src="https://pbs.twimg.com/media/Eg1_fuWXkAAdOGG?format=jpg&name=medium"></img>
                    </div>
                    <div className={classes.buildItem}>
                        <img className={classes.itemImage}src="https://pbs.twimg.com/media/EgruBPSXsAAa3pl?format=jpg&name=medium"></img>
                    </div>
                </div>
                <div className={classes.itemBar}>
                    <div className={classes.buildItem}>
                        <img className={classes.itemImage}src="https://pbs.twimg.com/media/EghXFLeU8AAsIdB?format=jpg&name=medium"></img>
                    </div>
                    <div className={classes.buildItem}>
                        <img className={classes.itemImage}src="https://pbs.twimg.com/media/EhBc8V2WoAEd66Z?format=jpg&name=medium"></img>
                    </div>
                    <div className={classes.buildItem}>
                        <img className={classes.itemImage}src="https://pbs.twimg.com/media/EhLk9BvWkAEcJVC?format=jpg&name=medium"></img>
                    </div>
                </div>
            </div>
            
            <div style={{width: 60, display: 'flex', backgroundColor: 'black'}}>
                <div style={{margin: 'auto'}}>
                    <KeyboardArrowUpIcon style={{color: 'green'}}/>
                    <div>{props.upvotes}</div>
                    <KeyboardArrowDownIcon style={{color: 'red'}}/>
                </div>
            </div>
        </div>
    )
}