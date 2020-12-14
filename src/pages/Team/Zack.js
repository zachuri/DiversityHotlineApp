import React from 'react'
import { FaGithub, FaLinkedin} from "react-icons/fa";

function Zack() {
    return (
        <div className="profile-container">
            <div className="profile-wrapper">
                <img className="profile-img" src="images/zack.jpg" alt="zack"/>
                <h1 className="profile-name">Zachary Punsalang</h1> 
                <p>
                    Hello, my name is Zachary Punsalang I'm a Computer Science major at University of Irvine 
                    and I've been interested in Web Development through my college career. I've been told 
                    that the Web is the most influential place and I want to be one of those
                    people that can influence others. DiversityHotline is a perfect way 
                    to help indivduals gain experience, learn, and be mentored about their
                    situations. I've wanted to use my intrest in Web Development in creating this app as a Web apps
                    so it portable, light weight, and usable to anyone in need. My contact email
                    "zpunsala@uci.edu" if you have any questions.
                </p>
                <br></br>
                <h1 className="contact-text">Contact</h1>
                    <div className="contact-icons">
                        <a href="https://github.com/ZACHURI"><FaGithub/></a>
                        <a href="https://www.linkedin.com/in/zachary-punsalang-1b0b99194/"><FaLinkedin/></a>
                </div>
            </div>
        </div>
    )
}

export default Zack
