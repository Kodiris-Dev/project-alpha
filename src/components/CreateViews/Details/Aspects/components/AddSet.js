import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AspectImg from './AspectImg'


function getModalStyle() {
  const top = 45;
  const left = 45;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
var faultBlue = '#7DBCC9';
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 800,
    backgroundColor: 'black',
    border: '1px solid',
    borderColor: faultBlue,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: 'white',
    height: 620,

  },
  selectedWrapper: {
      display: 'flex',
      justifyContent: 'center',
  },
  aspectsWrapper: {
      marginTop: 10,
  },
  aspectsRow: {
      display: 'flex',
      justifyContent: 'center',
  },
  selected: {
      border: "1px solid",
      borderColor: faultBlue,
  }
}));

export default function AddSet() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function body() {
    var selected1 = 'test'
    var selected2 = ''
    function selected(aspect) {
        selected1 = aspect
        console.log('selected aspect: ' + selected1)
        return (selected1)
    }
    return(
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.selectedWrapper}>
          <div className={classes.selected}>
            {selected1}
          </div>
          <div className={classes.selected}>
            <AspectImg name="King"/>
          </div>
      </div>
      <div className={classes.aspectsWrapper}>
          <div className={classes.aspectsRow}>
              <div onClick={ () => selected('Templar')}>
                <AspectImg name="Templar"/>
              </div>

            <AspectImg name="Magician"/>
            <AspectImg name="Titan"/>
            <AspectImg name="King"/>
          </div>
          <div className={classes.aspectsRow}>
            <AspectImg name="Clairvoyant"/>
            <AspectImg name="Warlock"/>
            <AspectImg name="Rook"/>
            <AspectImg name="Ace"/>
          </div>
          <div className={classes.aspectsRow}>
            <AspectImg name="Bishop"/>
            <AspectImg name="Queen"/>
            <AspectImg name="Beasthunter"/>
            <AspectImg name="Hunter"/>
          </div>
          <div className={classes.aspectsRow}>
            <AspectImg name="Rogue"/>
          </div>
      </div>
    </div>
      )
  }

  return (
    <div style={{marginTop: 20}}>
      <button type="button" onClick={handleOpen}>
        Add New Set
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body()}
      </Modal>
    </div>
  );
}