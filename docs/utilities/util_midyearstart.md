---
sidebar_label: 'Mid Year Entry'
sidebar_position: 40
id: util_midyearstart
title: util_midyearstart
description: util_midyearstart info
slug: /util_midyearstart
---

# Mid Year Start

## This is instructions on how to start CalcPay mid way through the year from a manual system.

The object is to put the P11 TOTALS from the Manual System into CalcPay.

Can you obtain the **Full Payment Submission** from the previous provider, this file can bring 95% of the data required automatically vis 'File/ImportEmployeesFromAFPS'.

Seriously consider if you can run CalcPay from the beginning of the year. Most of the effort is in putting in the employees details.

Please do these totals at a monthend on the P11 to enable CalcPay to calculate the correct figure for Employment Allowance.

You should have already entered the employee details.

Ensure that you have entered the P45 details for any employee who has started in the year. You do this via 'Employee/EmployeeDetails/Tax_Nic' 'P6/LateP45 Pay&Tax'.

You will need to **ADD UP** the manual P11 Cards. These figures are what you need to enter into the P11.  
If there are any employees who have had a change of NIC letter, then total the NICs separately as the NIC totals will require to be entered separately, just use a different date.  
You are now ready to start entering the P11 information.

For each pay frequency.  

Enter the Date of the previous payrun that you have the totals for.  
You need to do the different pay periods separately. ie Weekly, Monthly etc.  
Click the appropriate Pay period.  
This will create a P11 record for each employee with the date and NIC Letter.
You can leave and re-enter at your convenience.  

The columns that you need to populate are per P11 Entry:  
  LEL  
  PT  
  UEL  
  T.nic (Total Employer & Employee NIC)  
  E.nic (Only Employee NIC)  
  SSP   (not required)  
  Parenting ie SMP,SPP,ShPP,SAP,SPBP,SNCP  
  SLD  
  SLD Pg  
  Nic Pay (This is needed for directors NIC calculations)  
  Pay 2   (The taxable pay in this employment)  
  Tax Ded  (Tax in this employment)  
  Pay  Gross (not required but it is reflected on the payslips)  
  Pay Net  (not required)  
  Other inc  (Not required)  
  Legal Ded  (Not required)  
  Pen eE   (Employee Pension contributions)  
  Pen R    (Employers Pen contributions, Not required)  
  Pen Vol  (Employee Pen Voluntary cont.)  
  Pen_NPA  (if using a Net Payment Arrangement Pension, same figure as Pen R)  

An employee who has left will not show up in the P11. You need to 'Unleave' him. 'Employee/EmployeeDetails' 'P45Leaver'. Make a note of the leaving date, go into the P45 and delete the leaving date. After you have dealt with the P11 entries put the leaving date back in.

Do P45's for those who have left.

CalcPay information should now agree with your manual records, check this by previewing / printing the P11s under Reports.

Please note that calcpay will NOT be able to calculate SSP SMP SPM SAP refunds correctly, in the P32, for the pre-entered period. Adjust for this in the P32 & P35 computations.
<br/>
<br/>
<br/>
<br/>
<br/>
###### util_midyearstart 27/10/25

