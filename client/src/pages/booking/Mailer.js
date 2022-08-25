import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './mailer.css'

const Mailer = () =>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_7uym11k', 'template_3wgzsne', form.current, 'BwsrfgZKtZpi1qduV')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
    return(
        <>


<section>
<div id="form-main">
  <div id="form-div">
    <form class="form" id="form1"  ref={form} onSubmit={sendEmail}>
      
      <p class="name">
        <input name="name" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
      </p>
      
 
      
      <p class="text">
        <textarea name="message" class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Comment"></textarea>
      </p>
      
      
      <div class="submit">
        <input type="submit" value="SEND" id="button-blue"/>
        <div class="ease"></div>
      </div>
    </form>
  </div>
  </div>
</section>

</>
    );
}


export default Mailer ;

