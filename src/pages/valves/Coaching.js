import React from 'react'
import '../../App.css'
import './Valve3.css'
import $ from 'jquery'; // have to do 'sudo npm install jquery --save' in terminal to download jquery for react



export default function Coaching() {

    $.fn.serializeObject = function()
    {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
    if (o[this.name]) {
    if (!o[this.name].push) {
    o[this.name] = [o[this.name]];
    }
    o[this.name].push(this.value || '');
    } else {
    o[this.name] = this.value || '';
    }
    });
    return o;
    };
    
    <head>
    <base target="_top">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    </base>
    </head>
    
    // takes information to google sheets --> account: diversityhotline@gmail.com   password: DiversityHotline123

    var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbx_GpP58XCeeCWWBUnQnCbh1AanOI2a0ziuzot-c8b2eFsZPQW5/exec';

    $('#submit-form').on('click', function(e) {
    e.preventDefault();
    var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
    }).success(
    // do something
    // have to handle it here in order to write in sheets
    //url.reload()
    document.write("Success!")  // place holder for now
    // do something
    
    );
    })

    return ( 
       
        <div className='coaching'>
            <h1> Coaching </h1>
            <div className='questions_container'>
                <form id="test-form">
                <div className='questions_wrapper'>
                    <ul className='question_items'>
            
                        <label className='q1'> Question 1: Use one word to describe how are you feeling?  </label>

                        <input className='smallbox' type="text" name="Question_1"/>
                    
                        
                    </ul>

                    <ul className='question_items'>
            
                        <label className='q1'> Question 2: Use three emojis to express yourself  </label>

                        <input className='smallbox' type="text" name="Question_2"/>
                    
                        
                    </ul>

                    <ul className='question_items'>
            
                        <label> Question 3: Chatbox  </label>

                        <input className='largebox' type="text" name="Chatbox"/>
                    
                        
                    </ul>

                </div>
            </form>
            <button type="submit"id="submit-form">Submit</button>
            {/* <input type="submit" value="Submit" /> */}
            
            </div>
        </div>

       

    )


}


    
// export default Coaching;


