import React from 'react'
import emailjs from '@emailjs/browser';
import '../stylesheets/ContactUsForm.css'

const ContactUsForm  = () => {

  const send = () => {
    let name = document.getElementById("contactUsFormFName").value;
    let email = document.getElementById("contactUsFormEmailInput").value;
    let pNumber = document.getElementById("contactUsFormPNumber").value;
    let message = document.getElementById("contactUsFormMessage").value;
    let params = {
      name: name,
      email: email,
      message: `Email: ${email}\nName: ${name}\nPhone Number: ${pNumber}\n\n${message}`
    }
    emailjs.send("service_u43vbyl", "template_jpbka9s", params, "9gif31Cx0HMa5kyha").then((res) => alert("Mail sent successfully."), (err) => {alert("The mail could not be sent: " + err); console.log(err);})
  }

  return (
    <div id='contactUsFormContainer'>
        <div id='contactUsFormInfo'>
            <p id='contactUsFormH1'>Contact Us</p><br />
            <p id='contactUsFormP1'>Need more information? Contact us and let us know how we can help you.</p><br /><br />
            <p id='contactUsFormEmail' className='gradientText'>contact@algabay.com</p><br /><br />
            
        </div>
        <div id='contactUsForm'>
            
            <p className='contactUsFormInputLabel'>Name</p>
            <input type="text" id='contactUsFormFName' className='contactUsFormInput'/>
            <br />
            <p className='contactUsFormInputLabel'>Email</p>
            <input type="email" id='contactUsFormEmailInput' className='contactUsFormInput'/>
            <br />
            <p className='contactUsFormInputLabel'>Phone Number</p>
            <input type="text" id='contactUsFormPNumber' className='contactUsFormInput'/>
            <br />
            <p className='contactUsFormInputLabel'>Message</p>
            <input type="text" id='contactUsFormMessage' className='contactUsFormInput'/>
            
            <br />
            <button type='button' id='contactUsSendButton' onClick={send}>Send</button>
        </div>
    </div>
  )
}

export default ContactUsForm