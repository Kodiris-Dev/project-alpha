import React from 'react';
import {
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

var faultBlue = '#7DBCC9';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: faultBlue,
    },
    '& label': {
        color: 'grey',
      },
    '& .MuiInput-underline:after': {
      borderBottomColor: faultBlue,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'grey',
      },
      '&:hover fieldset': {
        borderColor: faultBlue,
      },
      '&.Mui-focused fieldset': {
        borderColor: faultBlue,
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  title: {
    margin: theme.spacing(1),
    width: '100%',
  },
  input: {
    color: "white",
  },
  header: {
      margin: 0,
  },
  catBorder: {
    border: '1px grey solid',
    backgroundColor: 'black',
    width: '50%',
},
catGroup: {
    backgroundColor: faultBlue,
    width: '98%',
    margin: 8.
},
catName: {
    color: 'white',
}
}));
export default function CreateView() {
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
      <div style={{border: '1px red solid'}}>
            <div className={classes.fieldWrapper}>
                <h2 className={classes.header}>TITLE</h2>
                <form className={classes.root} noValidate autoComplete="off">
                    <CssTextField
                        required
                        className={classes.title}
                        label="Title Name"
                        variant="outlined"
                        id="custom-css-outlined-input"
                        InputProps={{
                            className: classes.input
                        }}
                    />
                </form>
            </div>
            <div className={classes.fieldWrapper}>
                <h2 className={classes.header}>CATEGORY</h2>
                <ToggleButtonGroup className={classes.catGroup}
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    >
                    <ToggleButton className={classes.catBorder} value="left" aria-label="left aligned">
                        <div className={classes.catName}>GUIDE</div>
                    </ToggleButton>
                    <ToggleButton className={classes.catBorder} value="right" aria-label="right aligned">
                        <div className={classes.catName}>BUILD</div>
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
        </div>         
  );
}