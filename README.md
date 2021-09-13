# -Email_Sender_Using_Oauth2
This is an application for sending mail using nodemailer with the helper of GOOGLE OAUTH 2.0.


In order to run the application copy the repository and run
***npm install*** 
to install all the dependencies of the application. 
After intalling all the dependencies run ***node server.js*** to initiate the email.

The credentials for the OAuth 2.0 are stored in a .env file. However these credentials have only a life span of 24 hours. So, new credential has to be generated for the Aouth 2.0 under the Google Gloud Platform.
After generating the new credentials update the sender and recipient email in the .env file.
