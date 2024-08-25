import React, {useState} from 'react';
import './style/Footer2.css';

function Footer2() {

  // Define state variable to store input value
  const [genderValuem, setGenderValue] = useState('1');
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [postcodeValue, setPostcodeValue] = useState('');

  // Event handler to update input value
  const handleGenderChange = (e) => {
    setGenderValue(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstNameValue(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastNameValue(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  }
  
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handlePostcodeChange = (e) => {
    setPostcodeValue(e.target.value);
  }

  // Event handler to display alert with input value
  const handleClick = () => {
    alert("Your first name is: " + firstNameValue + " Your last name is: " + lastNameValue + " Your email is: " + emailValue + " Your date of birth: " + selectedDate + " Your Postcode is: " + postcodeValue);
  };

  //===================================================Sending email testing==================================================================
  // const express = require('express');
  // const nodemailer = require('nodemailer');
  // const app = express();
  // const port = 3001; // Or any other port you prefer

  // app.use(express.json());

  // app.post('/api/send-email', async (req, res) => {
  //   const { firstName, lastName, email, dateOfBirth, postcode } = req.body;

  //   // Create a Nodemailer transporter
  //   const transporter = nodemailer.createTransport({
  //     host: 'http://localhost:3000/',
  //     port: 587,
  //     secure: false, // Set to true if using SSL/TLS
  //     auth: {
  //       user: 'fhhdhysd@gmail.com',
  //       pass: 'Quanlatui777***.'
  //     }
  //   });

  //   // Send mail with defined transport object
  //   const info = await transporter.sendMail({
  //     from: 'fhhdhysd@gmail.com',
  //     to: 'vanhaminhquan2406@gmail.com',
  //     subject: 'New sign-up',
  //     text: `New sign-up:
  //       First Name: ${firstName}
  //       Last Name: ${lastName}
  //       Email: ${email}
  //       Date of Birth: ${dateOfBirth}
  //       Postcode: ${postcode}`
  //   });

  //   console.log('Message sent: %s', info.messageId);
  //   res.send('Email sent successfully');
  // });

  // app.listen(port, () => {
  //   console.log(`Server listening at http://localhost:${port}`);
  // });


  return (
    <div className="footer2-container">
      <div className="the-newsletter">
        <form className="signup-form">
          <div className="title">
            <h2 style={{ color: "white" }}>SIGN UP TO OUR NEWSLETTER</h2>
            <div className="line"></div>
          </div>
          <div className="error-feedback"></div>
          <div className="form-body">
            <div className="item">
              <fieldset className="form-body">
                <h3 style={{ color: "white" }}>Personal Details</h3>
                <div className="grg-column">
                  <select className="dropdown">
                    <option value="1">Title</option>
                    <option value="2">Mr</option>
                    <option value="3">Mrs</option>
                    <option value="4">Miss</option>
                    <option value="5">Ms</option>
                  </select>
                </div>
                <div className="grg-column">
                  <label>
                    <input placeholder='first-name*' name="first-name" className='text' value={firstNameValue} onChange={handleFirstNameChange}></input>
                  </label>
                </div>
                <div className="grg-column">
                  <label>
                    <input placeholder='last-name*' name="last-name" className='text' required="true" value={lastNameValue} onChange={handleLastNameChange}></input>
                  </label>
                </div>
                <div className="grg-column">
                  <label>
                    <input placeholder='Email-address*' name="email-address" className='text required="true"' value={emailValue} onChange={handleEmailChange}></input>
                  </label>
                </div>
                <div className="grg-column">
                  <label>
                    <input style={{ color: "white" }} placeholder='date*' name="date" className='text' type='date' required="true" value={selectedDate} onChange={handleDateChange}></input>
                  </label>
                </div>
                <div className="grg-column">
                  <label>
                    <input placeholder='postcode*' name="postcode" className='text' required="true"></input>
                  </label>
                </div>
              </fieldset>
            </div>
            <div className="item">
              <fieldset className='form-body'>
                <h3 style={{ color: "white" }}>Please contact me about:</h3>
              </fieldset>
              <fieldset className='form-body'>
                <div className='infor-box'>
                  <p style={{ color: "white" }}>Yes I would like to receive latest marketing information by email from Gordon Ramsay</p>
                  <input type="checkbox" className='checkbox'></input>
                </div>
              </fieldset>
              <fieldset className='form-body'>
                <div className='form-body'>
                  <p style={{ color: "white" }}>Yes I would like to receive latest marketing information by email from Gordon Ramsay
                    <a style={{ color: "white" }} href="">about all of our restaurants in the group </a>
                    <br></br>
                    For more information please see our
                    <a style={{ color: "white" }} href="">privacy policy</a> 
                    . We will of course keep your data safe and secure and if you change your mind you can unsubscribe at any time on any marketing email we send or email us at guestrelations@gordonramsay.com
                  </p>
                  <input type="checkbox"></input>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="button-holder">
            <button type="submit" className="signup-button" onClick={handleClick}>SIGN UP</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Footer2;
