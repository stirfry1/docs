---
sidebar_label: 'Import Employees from FPS'
sidebar_position: 9
id: importEmployeesfromfps
title: ImportEmployees from FPS
description: importp Employees from FPS info
slug: /importemployeesfromfps
---

# Import Employees from a FPS

## This will read a FPS file and import the employee and P11 data into CalcPay.
You should do a backup before you do this, 'File/Backup'.\
Get FPS File.\
You enter the FPS file you want to import from, you can alter the contents of this file.\
The information is presented in a grid for review.\
You can choose which employee to import via 'Include'.\
You can change any of the data that is presented, though I strongly suggest you don't!\
It would appear that 'Earnie' software produces the employees twice!, obviously only 'Include' one lot of them.

Import into CalcPay\
This will add the 'Included' employees into CalcPay.



Please note the following:\
Employees who have previously left will not be on the FPS file.\
       You can enter their information either:\
       Get the additional FPS that they left on and only include the leavers\
       or\
       Manually enter their details. Their P11 data entered via 'Utilities/MidYearStart'. THEN marked as left.\
       HMRC does not need the previous employees, but without the info the Employers Allowance may be miscalculated.\

Current years starters P45 data is not imported, this will need to be added via 'Employee/EmployeeDetails/Tax_NI', 'P6/LateP45 Pay&Tax'.

'Married' defaults to 'Single' You might wish to change the 'Ms' to M=Married,D=Divorced,W=Widow

'Pay Method' defaults to 'Cash'. You might wish to change the 'Pm' to C=Cash,G=Giro,Q=Cheque,T=Transfer

'Date Start' is empty, so needs to be entered manually.\'Employee/EmployeeDetails'

It does pickup Directors, but not the start date.

'Department' defaults to 'Department 1'

If there is a Student Loan Deduction, the start date is 06/04/2016
       Student Loan Deduction defaults to Plan1

It imports the employee Pension totals, but the pension details need to be entered.\
       'Employer/EmployerDetails/A.E.Pension', enter the Start date & other details.\
       Check the 'A.E.Pension/PensionScheme'
       'A.E.Pension/EmployeesReview' to bring the correct pension into the EmployeeDetails.\
       The employer totals can be entered via 'Utilities/MidYearStart', but is not required.

No SSP paid totals are entered. This is only important if there is ongoing SSP.

No Parenting details are entered, however the totals paid to date are.
       Manually enter the weeks already taken in 'Employee/EmployeeDetails/SMP,PP,SAP,ShPP'

No bank details are entered.

The 'Works no' is retained from the FPS file, however CalcPay field limit is 22 characters, some other products use a much larger reference. If that is the case then click 'Changed Payroll ID' in 'Employee/EmployeeDetails/Info'



The 'Employer/EmployerDetails' can be added from the FPS.\
       The Password is brought over if it has not been Hashed.

The 'Manually enter Employment Allowance' in 'Employer/EmployerDetails' will probably need entered.




After you have done the above you want to check that the employees have all been entered.
'Reports/P32/P32PaymentRecord' to check the totals agree with the old system.