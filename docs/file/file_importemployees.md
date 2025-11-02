---
sidebar_label: 'Import Employees'
sidebar_position: 70
id: file_importemployees
title: importemployees
description: import employees info
slug: /file_importemployees
---

# Import Employees

### This brings a list of Employees into CalcPay.
You enter the CSV file you want to import from, you can alter the contents of this file.
The information is presented in a Raw grid for review, which you can alter.
This is then sent to the Final grid. Any errors are displayed. you should resolve the errors in the Raw grid & resend
From the Final grid you add the employees into CalcPay's data.

There is a default layout, but you can import as little as you want, you could, for instance, only bring in the Surname.

**Start**  
Information/Instructions

**CSV File**  
Where the csv file comes from. Use the browse button   ( ... )  to find your file.

**Show CSV Details**  
This displays the CSV files contents, you can alter it here.

**Save CSV Changes**  
Saves the any changes back to the CSV file.

**CSV Layout**  
Use EITHER the default layout or create a layout that you have selected to match the CSV file.
This will take the CSV file into the 'Raw Grid'

Refn       
    Numeric  
    Order No: Sets order of employess. any number to 999999 can be blank.
    eg 501

Surname    
    Char (35)
    Surname: This is compulsory. If empty defaults to 'Blankname'.
    eg "Stirling"

First_name 
    Char (35)
    First Name: Enter only 1 forename here. If empty defaults to 'FirstName'.
    eg "Andrew"

First_nam2 
    Char (35)
    Second First Name: Enter only 1 forename here. Can be blank.  
    eg "John"
   
Title      
    Char (10)
    Title: one of 'Mr','Mrs','Miss','Ms,'Dr','Rev','Sir','Hon','Lady' : Blank is either Mr or Mrs dependant on M/F  
    "MR". Can be lower or upper case.

Add1       
    Char (35)
    Address:  4 lines of address. Can be left blank.You should have the first 2 lines populated.  
    eg "1A North Street"  
Add2    Char (35)  
Add3    Char (35)  
Add4    Char (35)

PostCd     
    Char (10)
    Post Code: Can be left blank.. Accepts lower or upper case. This will be forced to UPPER case  
    eg "PH10 7AH"

Mf         
    Char (1) 
    Gender: Male or Female : Accepts  lower or upper case, ie m,f,M,F takes only first letter. If empty it uses 'F' if title is 'MRS','MS','MISS','LADY' else 'M'  
    eg "M" or "Male"

Ms         
    Char (1)  
    Marital status: Takes the first letter, accepts S,M,D,W for Single, Married, Divorced, Widow. If empty or error defaults to 'S'  
    eg "S" or "single"

dBirth     
    Char (10)  
    Date of Birth: in format YYYYMMDD ie 31st Jan 1960 = 19600131 If empty or error defaults to 19010101  
    Format can also so be DD/MM/YYYY 31/12/1960

dStart     
    Char (10)  
    Date of Start of employment:  in format YYYYMMDD ie 31st Jan 1960 = 19600131 Can be empty. If error it is forced to 01/01/2001.  
    Format can also so be DD/MM/YYYY ie 31/12/1960
       
WorkNo     
    Char (20)  
    I.R. Work No: Your reference for this employee with the I.R. can be blank  
    eg "Sales 0023"

Taxcc      
    Char (9)   
    Tax Code: Must conform to Tax rules. If empty or error defaults to the default code ie 503L  
    eg "485L"
   
Wk1       
    Char (1)  
    Week/Month1 Basis: If  Tax Code above is week/month1. Accepts W,w,M,m,T,t,Y,y,1 as a week/month1 otherwise it is not wk/mt1. including blank.  
    eg "T"

NatNo      
    Char (9)  
    Nat Ins No.:Format CC999999C. this will be tested against the IR rules. Can be blank. if error it will be forced blank.  
    eg "AA124578A"

NicL       
    Char (1)  
    Nic Letter: One of ABCDELFGJSX. Takes upper or lower case. Forced to 'A' if error or blank.  
    eg "A"

PM         
    Char (1)  
    Payment Method: Accepts CGTQ for Cash,Giro,Cheque,Transfer.  If empty or error defaults to 'C'  
    eg "C"

PF         
    Char (1)  
    Payment Frequency: Accepts W24Mwm  for Weekly, 2Weekly, 4Weekly,Monthly. If empty or error defaults to 'W'  
    eg "W"

Dept         
    Numeric (1)  
    Department, enter a numeric figure to 999. If empty or error defaults to 'W'  
    eg 1

Bank A/c Name
    Char(30)  
    Employee's bank account name.     Mr & Mrs J. Smith

Bank A/c Number
    Char(8)  
    Employee's bank account number.     00123456

Bank Sort Code
    Char(8)  
    Employee's bank sort code.                    124578

Bank Auto Pay
    Char(8)  
    Spare ref that used for Auto pay.     124578

Email
    Char(150)  
    The current employees email address

**example**  
50,"Smith","Mary","","Mrs","House A","New Road","","","AB10 5RT","F","W","19610102","20040501","","4T",F,"AA124578A","A","G","m"
93,"Jones","Susan","Mary","MISS","Lostway","","","","","F","S","19810101","20040412","001sales","474L",T,"AA875421A","A","G","W"

**Raw Grid.**  
The employees information is displayed here. It can be changed.
Click 'Refresh Final Grid' to send the data to the Final Grid.  
If there are errors you will be informed of them. default data is used for missing or bad fields. You can also review the alterations in the 'Error Info' tab

**Final Grid.**  
The employees information is displayed here. 
Once you have review the data you should click 'Append to Employees' to send the employees records into CalcPay.

**Error Info.**  
If there are any errors when data is refreshed in the Raw Grid then it is displayed here.
<br/>
<br/>
<br/>
<br/>
<br/>
###### file_importemployees 21/3/12