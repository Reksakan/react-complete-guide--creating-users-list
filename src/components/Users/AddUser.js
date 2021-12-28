import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) { 
      return; 
    }
    console.log('username: ', enteredName, ';  age: ', enteredAge);                 //Delete
    props.onAddUser(enteredName, enteredAge);
    setEnteredName('');
    setEnteredAge('');
  }

  const usernameChangeHandler = (e) => {
    setEnteredName(e.target.value)
  }

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  }
  
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={enteredName} onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    
  )
}

export default AddUser;