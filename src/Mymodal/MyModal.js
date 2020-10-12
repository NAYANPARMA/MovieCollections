import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './Mymodal.css'
// import UserAuthentication from '../UserAuthentication/UserAuthentication';

function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: '75%',
      height: '400px',
      backgroundColor: '#1f1f1f',
      border: '1px solid #lightgrey',
      boxShadow: theme.shadows[5],
    },

  


}));

function MyModal(props) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    

    return (
        <Modal
            open={props.open}
            onClose={props.onClose}>
            <div style={modalStyle} className={classes.paper}>
                {props.children}
            </div>
        </Modal>
            
    
    )
}

export default MyModal