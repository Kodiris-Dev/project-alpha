import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'


var faultBlue = '#7DBCC9';
var aspect1= 'https://global-uploads.webflow.com/5d44771a95c1f5121689f944/5de96653519095c41422e30d_Fault_Factions-09.png'
var aspect2= 'https://global-uploads.webflow.com/5d44771a95c1f5121689f944/5de9665449103c2aee94774d_Fault_Factions-08.png'
const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: '80%',
        display: 'flex',
        marginTop: 20,
    },
    left: {
        width: '30%',
    },
    right: {
        width: '70%'
    },
    textField: {
        color: 'white', 
      },
    introField: {
        color: 'white',
    },
      cssLabel: {
        color: 'white',
      },
      notchedOutline: {
        borderWidth: '1px',
        borderColor: 'grey',
      },
      notchedOutlineDesc: {
        borderWidth: '1px',
        borderColor: 'grey',
        height: 156,
      },
    aspectWrapper: {
        display: 'flex',
        marginTop: 10,
    },
    aspectIcon: {
        border: '1px solid',
        borderColor: 'grey',
        width: 100,
        height: 100,
        margin: 'auto',
        backgroundSize: 'cover',
    },
    fieldWrapper: {
        width: '100%',
      }
}))
export default function Set() {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <div className={classes.left}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                id="outlined-basic"
                label="Enter Title"
                variant="outlined" 
                color="secondary"
                size="small"
                InputProps={{
                    classes: {
                      root: classes.textField,
                      notchedOutline: classes.notchedOutline,
                    }
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                    },
                  }}
                />
            </form>
            <div className={classes.aspectWrapper}>
                <div className={classes.aspectIcon} style={{backgroundImage: `url(${aspect1})`}}></div>
                <div className={classes.aspectIcon} style={{backgroundImage: `url(${aspect2})`}}></div>
            </div>
            </div>
            <div className={classes.right}>
            <TextField
                  id="filled-multiline-static"
                  label="Notes"
                  multiline
                  rows={4}
                  className={classes.fieldWrapper}
                  variant="outlined"
                  color='secondary'
                  InputProps={{
                    classes: {
                      root: classes.introField,
                      notchedOutline: classes.notchedOutlineDesc,
                    }
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                    },
                  }}
                  />
            </div>
        </div>
    )
}