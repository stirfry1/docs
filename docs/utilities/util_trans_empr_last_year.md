---
sidebar_label: 'Transfer Employers From Last Year'
sidebar_position: 150
id: util_trans_empr_last_year
title: licence
description: util_trans_empr_last_year info
slug: /util_trans_empr_last_year
---

# Bring Data over from Last Year.

### This brings over from Last Year One/Some/All of your Clients.

nb for those who are using a 'server' (not supported by Calcpay) you should be on the computer that 'actually' has the data files.

CalcPay separates each year to different folders as below:

c:
    calcpay
                pay25_26
                        comp1
                                pay
                        comp2
                                pay
                        comp3
                                pay
                        comp4
                                pay
We thus want to reproduce this layout for the new year 'pay26_27'
The setup of CalcPay automatically creates the first Employer:
                pay26_27
                        comp1
                                pay

We use this routine to copy the rest of the folders over.  

CalcPay will use the current Employer you are in as the starting folder, assuming
1) You are at the last Employer.
2) There are no employees in this Employer.

The First step of the wizard is to get the Last Years Folder.  
It should make a reasonable guess but you can change it.  
The program will check for the presence of 'calcpay25.exe' in the folder before it continues.  

The Second step displays:  
on the left, all of last years clients.  
on the right, the companies you have already used in the new year.  

The object is to move them from 'Last Year Clients' to 'Clients For Transferal'.  
These are the ones that will be brought over.  
You can change their position via the MoverBars.  

Normally you would bring over ALL the clients, but you might choose to bring over just some.  
This may be because you have lost them as clients, not finalised the P11, etc.  
You can always come back at a later date and bring over the clients you missed.  

The Third step instructs you to tick the appropriate check boxes.  
The first increases the 'L' Tax Code by 0 for all the 'L' Tax Codes.(no increase 20026_27)  
The second will clear all the Cumulative Pay for the year.  
The third will clear the Cumulative Pay Extra totals. ( you might not want to tick this if you have internal loans that are being payed off.)  

**Finish**  
This starts the transfer process.  
You will be given a final chance to abort, otherwise CalcPay will work through all the chosen clients from last year & bring them over to this year.  
There is an inbuilt delay of 5 seconds for each Employer, the last Employer processed will be displayed.  
In the process of conversion CalcPay will note any interesting things and bring the full list to your attention at the end.  
The displayed file 'importlastyear.txt' is saved in the 'output' folder. The information is appended at the bottom of the file, so you will need to work your way down until you get to todays date.  

You then want to go into 'Employee/EmployeeDetails to ensure the current employees have been brought over.  
Please also check the 'Pay' TotalToDate has been cleared and in 'Pension' that the Pension Scheme is correct.  

*************************************
If you make an error, you can remove the bad 'Employer no' ie 'comp55' onward to the end.  
You do this in the file manager (WIN+E) & delete from say 'comp55' to the end of the companies ie 'comp95'. When you go back into CalcPay it notices the change & rebuilds the master Employer file.

You must NOT delete a single compNN folder by itself. They must be in sequence.
************************************

Info
<br/>
<br/>
<br/>
<br/>
<br/>
###### util_trans_empr_last_year 27/10/25