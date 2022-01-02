import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

import classes from './AddUser.module.css';

const AddUser = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      })
      return;
    }
    if (+enteredAge < 1) { 
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age (>0).'
      })
      return; 
    }
    
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
  
  const errorHandler = () => {
    setError(null);
  }


  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={enteredName} onChange={usernameChangeHandler}/>
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler}/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>  
    </Wrapper>
  )
}

export default AddUser;