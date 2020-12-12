import React from 'react';
import '../../../App.css';
import emailjs from 'emailjs-com';
import './Coaching.css';

//using bootstrap - npm install bootstrap

/*
function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_rzl3qea', 'template_70a9q59', e.target, 'user_2xrMsKQKeM0YDVM9hf0dR')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}
*/


const initialState = {
  q1: "",
  q2: "",
  q3: "",
  name: "",
  email: "",
  subject: "",
  message: "",
  q1Error: "",
  q2Error: "",
  q3Error: "",
  q4Error: "",
  nameError: "",
  emailError: "",
  subjectError: "",
  messageError: ""
}

export default class Coaching extends React.Component {
    state = initialState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
          [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
    };

    validate = () => {
        let q1Error = "";
        let q2Error = "";
        let q3Error =  "";
        let q4Error =  "";
        let nameError =  "";
        let emailError = "";
        let subjectError = "";
        let messageError= "";
    
        if (!this.state.name || !this.state.q1 || !this.state.q2 || !this.state.q3  
            || !this.state.subject || !this.state.message) {
          nameError = "name cannot be blank";
          q1Error = "Q1 cannot be blank";
          q2Error = "Q2 cannot be blank";
          q3Error = "Q3 cannot be blank";
          q4Error = "Q4 cannot be blank";
          subjectError = "Subject cannot be blank";
          messageError = "Messages cannont be blank";
        }
    
        if (!this.state.email.includes("@")) {
          emailError = "invalid email";
        }
    
        if (emailError || nameError || q1Error || q2Error || q3Error
             || subjectError || messageError) {
          this.setState({ emailError, nameError, q1Error, q2Error, q3Error, q4Error, subjectError, messageError });
          return false;
        }
    
        return true;
      };

      handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            emailjs.sendForm('service_rzl3qea', 'template_70a9q59', event.target, 'user_2xrMsKQKeM0YDVM9hf0dR')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
                event.target.reset()
                console.log(this.state);
                // clear form
                this.setState(initialState);

                //Go to Success Page
                this.props.history.push('/Success');
        }
      };


    render () {
        return (
            <div className='App'>
                <section className="contact">
                    <div className="contactContainer">

                        <title>Tell Us Your Story</title>

                        <div id="error"></div>
                        <form id="form" onSubmit={this.handleSubmit}>
                            <label>1. How do you feel right now? (Select an Emoji)</label>
                                <p className="errorMsg">{this.state.q1Error}</p>
                                {/*
                                <input id="q1" type="text" className="form-control" placeholder="Answer with emoji's" value={this.state.q1} onChange={this.handleChange} name="q1"/>
                                */}
                                <select id="q1" type="text" className="form-control" placeholder="Answer with emoji's" onChange={this.handleChange} name="q1">
                                    <option value="Happy😀">😀</option>
                                    <option value="Good🙂">🙂</option>
                                    <option value="Okay🙁">🙁</option>
                                    <option value="Sad☹️">☹️</option>
                                    <option value="Bad😭">😭</option>
                                </select>

                            <label>2. Is this the first time this incident has occured or is this a repeated offense?</label>
                                <p className="errorMsg">{this.state.q2Error}</p>
                                <input id="q2" type="text" className="form-control" placeholder="(Yes/no)" value={this.state.q2} onChange={this.handleChange} name="q2"/>

                            <label>3. Is this your first time reaching out to Diversity Hotline for Coaching/Mentoring support?</label>
                                <p className="errorMsg">{this.state.q3Error}</p>
                                <input id="q3" type="text" className="form-control" placeholder="(Yes/no)" value={this.state.q3} onChange={this.handleChange} name="q3"/>
                            
                            <label>4. In three words or less, describe how the incident made you feel?</label>
                                <p className="errorMsg">{this.state.q4Error}</p>
                                <input id="q3" type="text" className="form-control" placeholder="Answer for Question 4" value={this.state.q4} onChange={this.handleChange} name="q4"/>

                            <label>Topic of Discussion:</label>
                                <p className="errorMsg">{this.state.subjectError}</p>
                                <input id="subject" type="text" className="form-control" placeholder="Topic" value={this.state.subject} onChange={this.handleChange} name="subject"/>

                            <label>Explain your situation:</label>
                                <p className="errorMsg">{this.state.messageError}</p>
                                <textarea id="message" className="form-control" cols="54.5" rows="8" placeholder="Please explain your situation" 
                                    value={this.state.message} onChange={this.handleChange} name="message">
                                </textarea>

                            <title>Contact Info</title>
                                <p className="errorMsg">{this.state.nameError}</p>
                                <input id="name" type="text" className="form-control" placeholder="First Name Only" value={this.state.name} onChange={this.handleChange} name="name"/>

                                <p className="errorMsg">{this.state.emailError}</p>
                                <input id="email" type="email" className="form-control" placeholder="Email Address" value={this.state.email} onChange={this.handleChange} name="email"/>

                                
                                <button type="submit" value="Send Message">Submit </button>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}