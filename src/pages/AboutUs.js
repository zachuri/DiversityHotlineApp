import React from 'react'
import '../App.css'
import './AboutUs.css'
import CardItem from '../components/CardItem';
import '../components/Cards.css'

export default function AboutUs() {
    return (

        <div>
            <div class="about-section">
                <h1>About Us</h1>
                <p>"We are Real people diving into AUTHENTIC CONVERSATIONS... all of the time."</p>
                <br></br>

                <h1>Vision</h1>
                <p> Conversations around diversitym equity,a nd inclusion can be very difficualt. Our VISION is 
                    to create a dynamic, fluid and transdisciplinary platform for discussing issues surrounding diversity,
                    equity, and inclusion.
                </p>

                <br></br>
                <h1>Mission</h1>
                <ol type="1">
                    <li>Deliver high quality <span>counseling</span> to individuals experiencing trauma as
                    a result of experiences that used their diversity against them.</li>
                    <li>Deliver high quality training to individuals desiring to create systemic changes, in diversity and
                        inclusion in high schools and colleges.
                    </li>
                    <li>Perform culturally sensitive evaluations for high schools and colleges interested in conducting a
                        diversity and inclusion audit.
                    </li>
                    <li>Deliver high quality, and objective mediation for indiviuals needing support in addressing issues of
                        diversity and inclusion at their school setting.
                    </li>
                </ol>
            </div>

            <div className='cards'>
            <h1>Our Team</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/josh.jpg'
                        text=''
                        label='Joshua Ma'
                        path='/about-us'
                        />
                        <CardItem
                        src='images/zack.jpg'
                        text='Information & Computer Science Major at University of Irvine'
                        label='Zachary Punsalang'
                        path='/about-us'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/art.png'
                        text='Information & Computer Science Major at University of Irvine'
                        label='Art Punsalang'
                        path='/about-us'
                        />
                        <CardItem
                        src='images/megan.jpg'
                        text=''
                        label='Franchesca Lueng'
                        path='/about-us'
                        />
                        <CardItem
                        src='images/rex.jpg'
                        text=''
                        label='Xingchen Yang'
                        path='/about-us'
                        />
                    </ul>
                </div>
                </div>
            </div>

        </div>
    ) 
}