---
sidebar_label: 'Email Settings'
sidebar_position: 100
id: util_emailsettings
title: Email Settings
description: emailsettings info
slug: /util_emailsettings
---

# Email Settings

## This is the settings that enable CalcPay to send the emails.

You need to enter your email address into 'Employer/EmployerDetails', 'Email'

CalcPay can not use Microsoft emails, ie Hotmail, 365, etc.

**Mail Server**  
This is what your computer uses to send emails.  
For 'tiscali' it is smpt.tiscali.co.uk  
For 'gmail' it is smtp.gmail.com  

**User Name**  
This is the name you use to connect to the server.  
For tiscali it is like myname@tiscali.co.uk  
For gmail it is like myname@gmail.com

**Password**  
This is the password that you need to connect to the server.  
Tiscali does not need you to enter one, you can if you wish.  
Gmail insists on a password.

**SMTP Port**  
This is a number that your computer uses to send emails through the HTTP protocal.  
For Tiscali it is 25.  
For Gmail it is normally 465

**Use Authentication**  
Sometimes the Mail Server requests this.  
Tiscali does not need it.  
Gmail does need it.

**Use SSL**  
Sometimes the Mail Server requests this.  
Tiscali does not need it.  
Gmail does need it.

**Test**  
After entering  an email address, that you can view, you can check that is working OK.

## Tiscali default settings
![Tiscali image](/img/emailtiscali.jpg)


## Gmail default settings 
![Gmail](/img/emailgmail.jpg)

## Gmail default settings 
![Gmail](/img/emailgmail.jpg)

## Gmail default settings 
![Gmail](/img/emailgmail.jpg)

**Note for GMAIL**
Google no longer wants you to use Gmail account to send ePayslips. It is still possible to do it however.  
Go to your Google a/c.  
You need to have 2-Step Verification ON.  
Then 'Home'  
'Search' in your Google Account.  
Enter 'App Password', select App Password Security.  
Enter your login password.  
in 'App Password', Enter a name ie Payroll, then Create.  
Record the password. The password may be 4 blocks of 4 characters, it is entered into CalcPay WITHOUT any spaces.
If you change the login password for Gmail then you will lose the 'App Password', so you will need to regenerate it again as above.

**Note for YAHOO**  
https://help.yahoo.com/kb/pop-access-settings-instructions-yahoo-mail-sln4724.html

Generate and manage 3rd-party app passwords
https://uk.help.yahoo.com/kb/account/generate-manage-rd-party-passwords-sln15241.html  
Sign in to your Yahoo Account Security page. https://login.yahoo.com/account/security?.lang=en-GB&.intl=uk&.src=yhelp  
Under "External connections," click Create app password.  
Enter your app's name in the text field.  
Click Generate password.  
Use the one-time password to log in to your 3rd party app.  
Click Done.  
This App Password remains active even if you change your main login password.




## SMTP2GO  
I have researched other email providers and found **SMTP2GO** which has a FREE plan that allows you to send up to 200 emails in a single day and up to 1,000 monthly emails.  
I suggest you use SMTP2GO instead of your Gmail a/c.
https://www.smtp2go.com  

**Setting up SMTP2GO a/c**  
I'll use 'support@calcpay.co.uk' as an example a/c, substitute your own email address where appropriate. (Note: You may not be able to sign up with a Gmail account.)  
Go to https://www.smtp2go.com/   
Click 'Try SMTP2GO Free'  
Enter your email address, eg 'support@calcpay.co.uk'.  
Full name:  
Company name:  
Password:  
They will send you an confirmation email so you will need to check your emails and click on the 'Activate account'.

You now need to verify the sender.  
Click 'Add a verified sender'.  
Choose the second option ' Single sender email'.  
Click 'Add a single sender email'.  
Enter your email address, eg 'support@calcpay.co.uk'.  
Click 'Send verification email'.  
Check your emails and click 'Verify [your email]'.  
Refresh the SMTP2GO verified Senders page by clicking on 'Single sender emails'. You should see your email name.

Click on 'Sending' then 'SMTP USERS' then 'Continue'  
Click on 'Add SMTP user'  
This will show:  
'Username:' 'calcpay.co.uk' ( Note: no support@ ).  
'Password:' a password will be created. You will want to copy this. It is not the same as the sign-in password.  
Click on 'add SMTP User' to save.

That is it. Your SMTP2GO setup is complete.  
In 'Reports/Activity' you can see the previous 5 days of emails and any rejections.



In CalcPay  
'Utilities/Email Settings' 
Mail Server: mail.smtp2go.com  
User Name  : calcpay.co.uk   ( Note: no support@ )  
Password   : TheEmailPassword 
SMTP Port  : 465  
Use Authen : Ticked  
Use SSL    : Ticked  

In 'Employer/EmployerDetails/Email' you MUST enter the full email (eg 'support@calcpay.co.uk').
<br/>
<br/>
<br/>
<br/>
<br/>
###### util_emailsettings 27/10/25