import React from 'react'
import '../../App.css'
import './Valve3.css'




export default function Coaching() {
    return ( 
        <div className='coaching'>
            <h1> Coaching </h1>
            <div className='questions_container'>
                <form>
                <div className='questions_wrapper'>
                    <ul className='question_items'>
            
                        <label className='q1'> Question 1: Use one word to describe how are you feeling?  </label>

                        <input className='smallbox' type="text" name="name"/>
                    
                        
                    </ul>

                    <ul className='question_items'>
            
                        <label className='q1'> Question 2: Use three emojis to express yourself  </label>

                        <input className='smallbox' type="text" name="name"/>
                    
                        
                    </ul>

                    <ul className='question_items'>
            
                        <label> Question 3: Chatbox  </label>

                        <input className='largebox' type="text" name="name"/>
                    
                        
                    </ul>

                </div>
            </form>
            <input type="submit" value="Submit" />
            
            </div>
        </div>

    )


}
    
// export default Coaching;


