---
sidebar_label: 'Import Hours'
sidebar_position: 7
id: importhours
title: importhours
description: importhours info
slug: /importhours
---

# Import Hours

## This brings a list of Hours worked for your employees into CalcPay.  You can also use it to change the Pay Rates as well.
You enter the CSV file you want to import from, you can alter the contents of this file.\
The information is then sent to a grid for review.\
It is then integrated with the Pay Rate file.

You can create the original CSV file in Export Data Pay Info.\
The file you import can have 2 different layouts, & each layout can be missing the 'Rate' figure.\
The layouts are shown at the bottom of this help.


Mass change of the Hours worked.\
It may well be more convenient to enter the Hours worked for standard & Overtime etc in a spreadsheet then import the results into CalcPay.

Mass change of the Pay Rates.\
It may be easier to change the Pay Rates here when a general pay review is undertaken.

Keep the PayRates confidential.\
If you delete the 'Rate' column in the spreadsheet, then the operative will only be able to see the hours, which (s)he can then alter. Thus keeping pay confidential.

Manage large number of employees.\
Split the raw CSV file into separate files, this will allow a number of  operatives to enter the hours for their group.

Get your client to enter the figures.\
If you save the file as a spreadsheet then you could get your client to enter the figures & email it to you. You then save the file into a CSV format so that you can import it into CalcPay. You may care to Protect the A to F columns.

Pay Rate entered as 0.00.\
The side effect of allowing you to delete the Rates column is that if a Rate is changed to 0.00 it will not be read into CalcPay, leaving the original figure untouched.

Retain Rate\
This overwrites the default setting above. This will accept 0.00 into the pay rate.\
Keep a record of the weekly raw pay details.
You could save this as a series of spreadsheets.

Start\
Information/Instructions

CSV File\
Where the csv file comes from. Use the Get 'CSV' File  button  to find your file.\
The CSV files contents are displayed, you can alter it here.

Save  Changes\
If you altered the contents you can saves them back to the CSV file.

Transfer to 'Grid'.\
This sends the data to the grid for further review.

Grid\
Who is getting paid & how much is displayed here.\
You can change the Hours & Rate

Update PayRate Data.\
This sends the data to the PayRate file.

Error Info\
If there are any errors then it is displayed here.

Use EITHER the default layout or create a layout that you have selected to match the CSV file.
This will take the CSV file into the 'Raw Grid'

CSV FILE LAYOUT\
EmpId
    Numeric,  any number to 999999\
    This is not directly used at this time.

PayFreq    
    Character,  one of 'W,2,4,M'\
    This is not directly used at this time.

FullName    
    Character,  The name of the employee\
    This is not directly used at this time.

PayDesc   
    Character,  The description of the Payment.\
    This is not directly used at this time.

Refn      
    Numeric,  any number to 999999\
    This should equate to the Refn or Order No of CalcPay

PayHead  
    Numeric,  any number to 999999\
    This should equate to the position of the Pay Heading in the
    Company/PayHeadings

Hours\
    Numeric with 2 decimals from 0.01 to 999999.99\
    This is the hours that the employee has worked at that Pay Heading.

Rate\
    Numeric with 2 decimals from 0.01 to 999999.99\
    This is the Rate of pay that the employee gets at that Pay Heading.\
    Can be blank,missed out, or 0.00. In this case the Rate is taken from the PayRate file.
  

Example Layout\
3,"W","Stirling Alan","Wage",3,1,35.00,9.00\
3,"W","Stirling Alan","O/T Rate 1",3,2,2.00,12.00\
3,"W","Stirling Alan","O/T Rate 2",3,3,0.00,24.00\
3,"W","Stirling Alan","Special",3,6,0.00,300.00\
4,"W","Stirling Craig","Wage",4,1,5.00,6.50\
5,"W","Stirling Scott","Wage",5,1,35.00,10.00\
5,"W","Stirling Scott","O/T Rate 1",5,2,0.00,15.00\
5,"W","Stirling Scott","O/T Rate 2",5,3,0.00,24.00\
without the 'Rate'\
3,"W","Stirling Alan","Wage",3,1,35.00\
3,"W","Stirling Alan","O/T Rate 1",3,2,2.00\
3,"W","Stirling Alan","O/T Rate 2",3,3,0.00\
3,"W","Stirling Alan","Special",3,6,0.00\
4,"W","Stirling Craig","Wage",4,1,5.00\
5,"W","Stirling Scott","Wage",5,1,35.00\
5,"W","Stirling Scott","O/T Rate 1",5,2,0.00\
5,"W","Stirling Scott","O/T Rate 2",5,3,0.00\

or\
1,1,34.5,9.55\
1,2,6,15.00\
6,1,35,9.55\
6,5,1,500\
without the 'Rate'\
1,1,34.5,0\
1,2,6\
6,1,35,0\
6,5,1,125\


 

importhours 03/09/09