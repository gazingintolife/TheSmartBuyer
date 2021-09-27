const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: process.env.EHOST,
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EPASS,
    },
  })

const sendCustomerQuery = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const body = req.body.body; 
    const mail = {
    from: name,
    to: "***************@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${body}</p>`,
    };

    transporter.sendMail(mail, (error) => {
        if (error) {
          console.log(error)  
          res.json({ status: "ERROR" });
        } else {
          console.log("message sent")  
          res.json({ status: "Message Sent" });
        }
      });
}

module.exports = {sendCustomerQuery};