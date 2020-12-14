import React from 'react'
import '../App.css'
import CardItem from '../components/CardItem2';
import '../components/Cards.css';
import './AboutUs.css';


export default function AboutUs() {
    return (
    <div className='cards2'>
        <h1 className='about-us2'>We are REAL people diving into AUTHENTIC CONVERSATIONS... all of the time.</h1>
        <br></br>
        <br></br>
        <h2 className="vision">Vision:</h2>
        <br></br>
        <h3 className='vision-statement'>Conversations around diversity, equity, and inclusion can be very difficult. Our VISION is to create a dynamic, fluid, and transdisciplinary platform for discussing issues surrounding diversity, equity, and inclusion.</h3>
        
        <br></br>
        <h2 className="mision">Mission: Create a DIVE Team equipped to do the following:</h2>
        <br></br>
        <h3 className='mission-statement1'>1. Deliver high quality counseling to individuals experiencing trauma as a result of experiences that used their diversity against them.</h3>
        <br></br>
        <h3 className='mission-statement2'>2. Deliver high quality training to individuals desiring to create systemic changes, in diversity and inclusion in high schools and colleges. </h3>
        <br></br>
        <h3 className='mission-statement3'>3. Performing culturally sensitive evaluations for high schools and colleges interested in conducting a diversity and inclusion audit.</h3>
        <br></br>
        <h3 className='mission-statement4'>4. Deliver high quality and objective mediation for individuals needing support in addressing issues of diversity and inclusion at their school setting.</h3>
        <div className='cards__container2'>
            <div className='cards__wrapper2'>
                <ul className='cards__items2'>
                    <CardItem
                    src='images/josh.jpg'
                    text="Hello, I'm Josh and I'm a student at the University of California, Irvine and the Founder and CEO of Diversity Hotline."
                    label='Josh'
                    
                    />
                    </ul>

                    <ul className='cards__items2'>
                    
                    <CardItem
                    src='images/Art.png'
                    text='Hi there, my name is Art Punsalang, I am an enterprising student from the University of Irvine California majoring in Information and Computer Science. When the Diversity Hotline idea was introduced to me by Josh, it sounded like a great idea that I believed in because there are many people who struggle with indifference, discrimiation and inequality. Diversity Hotline is a great way for people to get help and talk about those situations they are struggling with. Overall,  Diversity Hotline is my first ever web application that I have built and will be proud of how it will continuously grow for futures to come. If you have any questions about Diversity Hotline or for me, my email is punsalaa@uci.edu.'
                    label="Art"
                    />
                    
                    <CardItem
                    src='images/Franchesca.JPG'
                    text="Hey! My name is Franchesca Leung and I'm a fourth year Computer Science major at University of California, Irvine. I'm really happy to be a part of Diversity Hotline and I'm extrememly proud of everything it stands for. I believe it is hard to find the right resources or the right person to talk in times of need, but Diversity Hotline is proud to provide both a safe space to share and wonderful resources. I truly believe in the impact Diversity Hotline will have on its users, and I can't wait for others to utilize what we've created as a team! Feel free to reach out at faleung@uci.edu if there are any questions!"
                    label="Franchesca"
                    />     
                  

                
                    </ul>

                    <ul className='cards__items2'>
                    <CardItem
                    src='images/rex.jpg'
                    text='Hi, my name is Xingchen Yang, I’m a senior student in University of Irvine in Computer Game Science and Computer Science. DiverisityHotLine is a amazing and useful application for students to solve their academic problems. Finding resources you need and talking with your exclusive mentor. I believe you will have a great experience on this web app. I have designed some games before, but this is my first time to build a application. Although it might not be perfect right now, I believe it will keep improving and have a bright future. If any problems of Diversity Hotline, you can contact me by my email “xingchy2@uci.edu”.'
                    label="Xingchen"
                    />     
                    
                    <CardItem
                    src='images/DVHT_Photo.jpg'
                    text="Hello, my name is Zachary Punsalang I'm a Computer Science major at University of Irvine 
                    and I've been interested in Web Development through my college career. I've been told 
                    that the Web is the most influential place and I want to be one of those
                    people that can influence others.  Hotline is a perfect way 
                    to help indivduals gain experience, learn, and be mentored about their
                    situations. I've wanted to use my intrest in Web Development in creating this app as a Web apps
                    so it portable, light weight, and usable to anyone in need. My contact email is:
                    zpunsala@uci.edu if you have any questions."
                    label= "Zachary"
                    />
                    
                    
                    </ul>
                
            </div>
        </div>
    </div>
    );
}


