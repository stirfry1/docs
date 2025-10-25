---
sidebar_label: 'Export Data'
sidebar_position: 110
id: exportdata
title: exportdata
description: exportdata info
slug: /rep_exportdata
---

# Reports Export Data

### You can get detailed information from the Employee and P11 cards which can be saved as CSV or XML files.
Working on the basis that YOU have entered this information into CalcPay then YOU are entitled to get it out in the manner that YOU want.

**Choose Employees**  
Use the 'Select' column to mark which employees you want.  
You enter a 'Y' for the employees you want.
You can also use the  'All', 'None', 'Swap', 'Weekly', '2Weekly', '4Weekly' & 'Monthly' to assist in making your choice.  

**Employee  Fields**  
You bring over the fields you want from the 'Available Fields' to the 'Selected Fields'.
You can do this by double clicking on the field name or  selecting the clicking the '>' arrow.  
Once they are in the 'Selected Fields' you can change the order of layout by dragging them up or down.  
Click the 'Export Emp' button to force your choices into the 'Emp Export' page.

**Employee Export**  
This displays a grid of your choice from above.  
You can CHANGE the information in the grid if you wish.  
'Save Info' will allow you to save the above information into a CSV or XML file of your choice.

**P11 Info**  
You have Three available data sources:  
First is a Detailed view of the P11 information in a Week order.  
Second is a Totals of the P11 for each employee.  
Third is per above but allows for different NIC letter totals.  
As per the 'Employee Fields' you choose what fields you wish.  
Please note that the 'P11empid' is what relates the P11 information to the Employee 'Empid'.

**P11 Export**  
This is per 'Employee Export' as above.  
'Save Info' will allow you to save the above information into a CSV or XML file of your choice.

**Employee + P11 Export**  
This combines the Employee & P11 information that you have chosen.  
'Save Info' will allow you to save the above information into a CSV or XML file of your choice.

**Pay Info**  
This combines the Employee & Pay information.
First 'Choose Employees' that you want.  
On the Pay Info tab click Prepare Grid.  
This will show a grid with the employees & Pay Details.  
Idno,PayFreq,Name,Description,EmpRefNo,PayIdNo,Amount(Hours),Rate.  
'Save Info' will allow you to save the above information into a CSV or XML file of your choice, default  'output/emp_pay_hrs_rate'.  
The reason for this is that you can create a CSV file that you can alter the figures for the Hours/Rate in a spreadsheet such as OpenOffice.org/Calc & import it back into CalcPay.  
The format of the CSV is:  
Emp_id     N  
Pay_fq      C   
Fullname   C  
Descibe     C  
Emp_order  N  
Pay_id        I  
Amount    N  
Rate           N  
| Emp\_id | Pay\_fq | Fullname       | Descibe    | Emp\_order | Pay\_id | Amount | Rate   |
| ------- | ------- | -------------- | ---------- | ---------- | ------- | ------ | ------ |
| 3       | W       | Stirling Alan  | Wage       | 3          | 1       | 35.00  | 9.00   |
| 3       | W       | Stirling Alan  | O/T Rate 1 | 3          | 2       | 2.00   | 12.00  |
| 3       | W       | Stirling Alan  | O/T Rate 2 | 3          | 3       | 0.00   | 24.00  |
| 3       | W       | Stirling Alan  | Special    | 3          | 6       | 0.00   | 300.00 |
| 4       | W       | Stirling Craig | Wage       | 4          | 1       | 5.00   | 6.50   |
| 5       | W       | Stirling Scott | Wage       | 5          | 1       | 35.00  | 10.00  |
| 5       | W       | Stirling Scott | O/T Rate 1 | 5          | 2       | 0.00   | 15.00  |
| 5       | W       | Stirling Scott | O/T Rate 2 | 5          | 3       | 0.00   | 24.00  |

This ties up with 'File/Amend Hours'.  
This means you can get your hours worked into a spreadsheet (perhaps from a client) and import the hours worked directly into CalcPay.
<br/>
<br/>
<br/>
<br/>
<br/>
###### rep_exportdata 23/10/25