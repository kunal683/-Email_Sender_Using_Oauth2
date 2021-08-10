const nodemailer = require('nodemailer')
const {google} = require('googleapis');
require('dotenv').config()


//Your credentials for oAuth2Client
const mail = process.env.mail /* Your Mail */
const Client_ID = process.env.Client_ID;
const Client_Secret = process.env.Client_Secret;
const Redirect_URI = process.env.Redirect_URI;
const Refresh_Token = process.env.Refresh_Token;
const receivermail = process.env.ReceiveMail;


const oAuth2Client = new google.auth.OAuth2(Client_ID,Client_Secret,Redirect_URI)
oAuth2Client.setCredentials({refresh_token:Refresh_Token})


async function mailsender(){
    try {
        const AccessToken = await oAuth2Client.getAccessToken()
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                type: 'OAuth2',
                user: mail,
                clientId: Client_ID,
                clientSecret: Client_Secret,
                refreshToken: Refresh_Token,
                accessToken: AccessToken,
            }
        })
        const mailOptions = {
            from: `Dummy Mail <${mail}>`,
            to: `${receivermail}`,
            subject: 'This is a test email',
            text: 'Text Email',
       
          };

          const result = await transporter.sendMail(mailOptions)
          return result
          

    } catch (error) {
        return error;
    }
}
mailsender()
  .then((result) => console.log('Email sent...', result))
  .catch((error) => console.log(error.message));