import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import AspectImg from './AspectImg'


var faultBlue = '#7DBCC9';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: '100%',
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
export default function Set(props) {
    const classes = useStyles()
    const aspect1 = props.aspect1
    const aspect2 = props.aspect2
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
                <AspectImg name={aspect1}/>
                <AspectImg name={aspect2}/>
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