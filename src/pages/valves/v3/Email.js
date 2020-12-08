import React, { useState, useEffect} from "react";
import '../App.css';
import './Coaching.css';
import Coaching from './Coaching'
import Success from './Sucess'

const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const q3 = document.getElementById('q3');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  let errorMessages = []
  if (name.value === '' || name.value == null) {
    errorMessages.push('Name is required')
  }
  if (errorMessages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }

})

const Email = () => {

  return (
    <div className="App">
      {user ? (            
        <Success />
      ) : (
        <Coaching/>
    )}
    </div>
  );
};

export default Email;