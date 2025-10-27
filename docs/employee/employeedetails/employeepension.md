---
sidebar_label: 'Pension'
sidebar_position: 40
id: pension
title: pension
description: pensioninfo
slug: /employeepension
---

# Employee Details Pension

### If your employee has a pension enter the information here.

Each Employee can have up to 2 pensions with each one having the ability for payments from Employee,Employer,& Employee Voluntary contribution ( AVC.)\
See AEPension/PensionSchemes for initially setting up the pension schemes. (PP = Pension Provider)

Pension1 **SHOULD** be used for A.E.Pension  
Pension2 should NOT be used for A.E.

**Pension 1**  
Click the **Pension Scheme dropdownbox** to select one of the previously defined schemes you require.

**Employee's Pension Ref**  
Enter details the pension provider has supplied, or you are supplying to the pension provider, for this employee.  
Not all PP require this, but once entered do not change. The yellow adjacent box shows the unique reference no of the employee, which may be of assistance.

**Default**  
This will show the net amount or percentage that will be used, this comes from the Pension Scheme supplied.  
For a A.E scheme this will always be PERCENT.

**This Employee override**  
You can override the scheme's default rates by entering an amount. Please note that entering 0.00 does NOT override the default settings. (if you have a 5% rate and you want it to be 6% then enter 6.00, For 'Relief at Source' tax treatment this will deduct 80% ie 100-20BR )
If the 'Net/Percentage' show PERCENTAGE then the entered figure will be calculated as a %.  
If the 'Net/Percentage' show NET then the entered figure will be calculated as an amount.  
If you enter -1.00 then no pension will be deducted, this can be used when an employee has gone off the pension map for a period but it will still be reported on, or where this employee is perhaps on a Salary Sacrifice but the pension scheme does not default to this ie has a figure in the 'Default' box.

**Employer Override**\
Enter -1.00 in the Employer override will prevent any contribution by the employer. 
This can be used for an 'Entitled' employee to allow employee payments only.

To issue a rebate enter the amount as a minus ie -153.21.  
When an employee has Opted Out of the scheme within 30 days they can get their money back. Do this by entering the required amounts as a negative in both Employee and Employer override. The PP needs to OK this. As a rule the negative amounts are not sent to the PP and should not be contra'd against the normal amounts due.  
For those Pen Schemes (ie Creative) that want the contribution split between a default % and any AVC % then enter 0.00 in the Employees Override and the appropriate % in the AVC override. The AVC will use the Tax Treatment declared in A.E.Pension/PensionScheme' for the PP.

**Employer Extra flat amount**
If the employer is paying a flat extra amount into the pension, it can be entered here.

#### When an AE pension has been chosen the following information is relevant.
**A.E. Status:**\
| Status       | Description                                                                       |
| ------------ | --------------------------------------------------------------------------------- |
| Blank        | Employee not to be included in the AE process.                                    |
| Eligible     | Employee in the scheme and contributing.                                          |
| Non-Eligible | Earnings below threshold; may opt-in with both employee & employer contributions. |
| Entitled     | Earnings/age below threshold; may opt-in with employee-only contributions.        |
| Age-Barred   | Does not qualify due to age limits.                                               |
| Other Pen    | Has a qualifying pension elsewhere.                                               |


**Joined A.E.**, date they joined the AE pension.

**Group**, most of the PP require a grouping of the employees.  
What is entered here needs to agree with what the PP records have.

**Use Salary Sacrifice**, just a tick box so that the information can be presented in the PP reports. It does NOT create a Salary Sacrifice.  
A Salary Sacrifice is where the employer makes all the contributions,  the employer has reduce the salary/wage by the employees share. This can be advantageous as the employee pays reduced Tax and NIC. Please note it might not be suitable for non tax payers, also it can reduce the earnings to below the National Minimum Wage Rate which would make the procedure illegal.

**Opted out of A.E.**  
Date they left the pension scheme. If they left with 30 days they may be entitled to get their contributions back. Enter the previous payments as a negative in the 'This employee/r override'. You need the PP permission to do this.

**Opted into A.E.**  
 If an employee has not joined via AE status of 'Eligible' then enter the date joined here.

 <!-- See the [Pension Scheme](../aepension/pensionscheme.md) page for scheme-level settings. -->
 See the [Pension Scheme](../../aepension/pensionscheme.md) page for scheme-level settings. 



<br/>
<br/>
<br/>
<br/>
<br/>
employeepension 17/10/25