import React, { useState, useEffect} from "react";
import fire from '../service/fire';
import '../App.css';
import Login from '../components/Login';
import Hero from './Hero';
import './SignUp.css';

const SignUp = () => {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPasssword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break; 
          default:
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);

        if(user != null){

          var email_id = user.email;
          document.getElementById("user_para").innerHTML = "User : " + email_id;
        }
      }
      else {
        setUser("")
      }
    });
  };

  useEffect(() => {
    authListener();
  });

  return (
    <div className="App">
      {user ? (            
        <Hero 
          handleLogout={handleLogout}
          setEmail={setEmail}
        />
      ) : (
        <Login 
          email={email} 
          setEmail={setEmail}
          password={password}
          setPasssword={setPasssword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
    )}
    </div>
  );
};

export default SignUp;