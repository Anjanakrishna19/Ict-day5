import React, { useEffect, useState } from 'react'
import { Button, Typography, TextField } from '@mui/material';
import axios from 'axios';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
const AddStudent= (props) => {
    var[input,setInput]=useState({
      Name:"",
     Place:"",
     Age:"",
      Department:"",
    });

    var location = useLocation();
    var navigate = useNavigate();
         console.log("state:",location.state);

    const inputHandler=(e)=>{
        setInput({...input,[e.target.name]:e.target.value});
        console.log(input)
    };
    useEffect(()=> {
      if (location.state!==null){
        setInput({
          ... input,
         Name:location.state.val.Name,
         Place:location.state.val.Place,
         Age:location.state.val.Age,
         Department:location.state.val.Department
        })
      }
    },[])
const submitHandler=()=>{
  console.log("btn Clicked")
  if (location.state!==null){
    axios.put(`http://localhost:3000/${location.state.val._id}`,input)
    .then((res)=>{
      alert(res.data);
    })
    .catch ((err)=>{
      console.log(err);
    });

  } else{
    axios.post('http://localhost:3000',input)
  .then((res)=>{
    console.log(res);
    alert(res.data)
    navigate('/vt')
  })
  .catch((err)=>{
    console.log(err);
  });
  } 
};
  return (
    <div>
      <Typography variant='h3'>Welcome To Student Portal</Typography>
      <TextField variant='outlined' label="Name" onChange={inputHandler} name='Name' value = {input.Name}/><br /><br />
      <TextField variant='outlined' label="Place" onChange={inputHandler} name='Place' value = {input.Place}/><br /><br />
      <TextField variant='outlined' label="Age" onChange={inputHandler} name='Age' value = {input.Age}/><br /><br />
      <TextField variant='outlined' label="Department" onChange={inputHandler} name='Department' value = {input.Department}/><br /><br />
      <Button variant='contained'onClick={submitHandler}>Submit</Button>
    </div>
  )
}

export default AddStudent