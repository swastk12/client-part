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
        <section className='mail' style={{backgroundColor:"#FAFDD6", paddingTop:"15px" }}>
        <div className="container border "
        style={{

                width:'50%',
                margin: 'auto',
                marginTop:"60px",
                backgroundImage:`url('https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`,
                backgroundPosition:"center",
                backgroundSize:"cover"}}>
            <h1  style={{ margin: 'auto', textAlign: "center" }}> Booking Form </h1>
            <form className="row  forms"  style={{margin:"25px 85px 75px 100px"}} ref={form} onSubmit={sendEmail}>
                <label style={{fontWeight:"600"}}>Name</label>
                <input type='text' name='name' className="form-control controller"/>
                <label style={{fontWeight:"600"}}>Email</label>
                <input type='email' name='user_email' className="form-control"/>
                <label style={{fontWeight:"800"}} >Message</label>
                <textarea name='message' rows='4' className="form-control"/>
                <input type='submit' value='Send' className="form-control btn btn-primary"
                style={{marginTop:"30px" }} />
            </form>
        </div>
        </section>
    );
}


export default Mailer ;

