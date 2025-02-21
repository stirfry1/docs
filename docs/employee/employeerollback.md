---
sidebar_label: 'RollBack'
sidebar_position: 50
id: rollback
title: rollback
description: prollbackinfo
slug: /employeerollback
---

# Employee Rollback

## This allows you to roll back an employee's P11 entries.
This removes the P11 entries for the chosen employee. You can then do the  Pay Run for the employee with the correct figures.
This procedure should be handled with care, there are problems with running balances./ 
Take a Backup before you proceed.

**Get Employee**\
Select the employee that you wish to roll back. A grid will appear with their P11 details.

**Remove P11 Entries**\
Click on the relevant 'Week_no' that you want to remove. That week and all the subsequent weeks will be removed. The grid will refresh itself. You may select another employee to Roll Back.

**Problems with running balances**\
CalcPay keeps a note of various running balances which are calculated when the Pay Run occurs. These balances are NOT adjusted back in this routine.\
You will have to do it manually. 

You will have to:
**SSP:**  Reduce 'EmployeeDetails/SSP/SickWeeksTaken' with the **weeks removed, a day in a 5day working pattern is 0.2\
**SMP:** Reduce 'EmployeeDetails/S.MPA/SMP/WeeksPaidat%Rate' / StandardRate' with the weeks removed. Remember a month may be 4 or 5 weeks.\
**SPP:** Ditto above 'EmployeeDetails/S.MPA/SPP/WeeksPaid'.\
**SAP:** Ditto above 'EmployeeDetails/S.MPA/SAP/WeeksPaid'.\
For the above 3 there may well be a 'WeeksNotPaid' adjustment.
Attachments: Reduce 'EmployeeDetails/Attac/PdtoDate' for the correct attachment.

**ShPP:** This does not roll back the weeks taken, you will need to phone to get further assistance.

The 'Total to Date'  at 'Employee/EmployeeDetails/Pay' is now (01/06/08) adjusted automatically.

P45s are not removed, do not use for an employee who has left.

Please handle with care and review the results.

 

emprollback 27/09/2007