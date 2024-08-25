const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3001; // Or any other port you prefer

app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { firstName, lastName, email, dateOfBirth, postcode } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false, // Set to true if using SSL/TLS
    auth: {
      user: 'fhhdhysd@gmail.com',
      pass: 'Quanlatui777***.'
    }
  });

  // Send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'fhhdhysd@gmail.com',
    to: 'vanhaminhquan2406@gmail.com',
    subject: 'New sign-up',
    text: `New sign-up:
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Date of Birth: ${dateOfBirth}
      Postcode: ${postcode}`
  });

  console.log('Message sent: %s', info.messageId);
  res.send('Email sent successfully');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
