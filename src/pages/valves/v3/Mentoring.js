import React from "react";
import CardItem from '../../../components/CardItem';
import '../../../components/Cards.css';

export default class Mentoring extends React.Component {
  render() {
    return (
      <div className='cards'>
        <h1>Dive Team!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='images/josh.jpg'
                    text='UCI student: helps with students on campus'
                    label='Josh'
                    path='/mentor1'
                    />
                    <CardItem
                    src='images/john.jpg'
                    text='Professional in Diversity: experience in Social Justice'
                    label='John'
                    path='/mentor2'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='images/nicole.jpg'
                    text='Mentor at UCI: Helps with personal issues related to diversity'
                    label='Nicole'
                    path='/mentor3'
                    />
                    <CardItem
                    src='images/megan.jpg'
                    text='Mentor at UCI: Helps with personal issues related to diversity'
                    label='Megan'
                    path='/mentor4'
                    />
                </ul>
            </div>
        </div>
    </div>
    )
  }
}