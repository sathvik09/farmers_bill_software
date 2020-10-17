import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button,TextField } from '@material-ui/core';
import {useSelector,useDispatch} from 'react-redux';
import {prdNameBuilder,priceBuilder,descBuilder} from '../actions';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Scaffold(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const prdName = useSelector(state=>state.farmerReducer);
  const price = useSelector(state=>state.priceReducer);
  const desc = useSelector(state=>state.descReducer);
  const dispatch = useDispatch();

  const btnClick = async()=>{
      const data = {
          _id:localStorage.getItem('user'),
          name:prdName,
          price,
          desc,
      }
      dispatch(prdNameBuilder(''));
      dispatch(priceBuilder(''));
      dispatch(descBuilder(''));
     await axios.post(`http://localhost:5000/productRout/addProduct`,data)
      .then(res=>{console.log(res);props.dummy=='a'?props.setDummy(''):props.setDummy('a');})
      .catch(err=>console.log(err))
      
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <div className="">
          <TextField onChange={e=>dispatch(prdNameBuilder(e.target.value))} id="standard-basic" label="product name" />
          </div>
          <div className="">
          <TextField onChange={e=>dispatch(priceBuilder(e.target.value))} id="standard-basic" label="price" />
          </div>
          <div className="">
          <TextField onChange={e=>dispatch(descBuilder(e.target.value))} id="standard-basic" label="description" />
          </div>
          <div className="">
          <Button onClick={btnClick} variant="contained" color="primary">Submit</Button>
          </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
