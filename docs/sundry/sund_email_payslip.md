---
sidebar_label: 'Email Payslip'
sidebar_position: 40
id: sund_email_payslip
title: email_payslip
description: email_payslip info
slug: /sund_email_payslip
---

# ePayslip

### This shows you how to email out payslips.

You can use your own email provider to email out ePayslips.

**Setup Email Provider**  
You need to enter your email providers details into 'Utilities/EmailSettings'.  
There is information as to how to do this here:  [EmailSettings](../utilities/util_emailsettings.md)  
You need to have the employers email in 'Employer/EmployerDetails/Email'. 

**Setup Employee**  
'Employee/EmployeeDetails/Info', and populate the 'Email' box. Tick the 'Send ePayslip' box.
Those who have got the 'ePayslip' ticked will be sent the payslip as an a PDF attachment, the others will be printed out as normal.  
You can also enter a 'Password', this will mean that the employee will need to enter that password in order to open the email.



**Payrun**
When you now go to print the payslips there is an option to 'Email'. If this is ticked then it will send out the ePayslip for those employees who have asked for ePayslips, the others will get the payslip printed.  
You can choose any layout, I would recommend  'A4 Payslip Fancy Addr Note 1Blu'. Non-ePayslips will be displayed/printed per your layout choice.  
'Email Message' will display allowing you to enter:  
       Signature        [where you can enter your own name]

'Continue' to proceed to email the payslips, You will see a notification of the employees getting the payslips, then the  non-ePayslips will be display/printed.  
There will be a list of the ePayslips generated and saved to the output folder(or your saved folder) with the employer shortname, payslip,and date&time.
There is a built in delay of 5 seconds for each ePayslip.

<br/>
<br/>
<br/>
<br/>
<br/>
###### sund_email_payslip 27/10/25