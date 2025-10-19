---
sidebar_label: 'Attachments'
sidebar_position: 80
id: attachments
title: attachments
description: attachments info
slug: /employeeattach
---

# Employee Details Attachments

### Employers have a statutory duty to deduct amounts from the earnings of employees who have incurred court debts or fines.


There is a serious lack of information with regards to legal deductions from employees. What follows is an interpretation of the limited information that is available.  We have endeavoured to provide a realistic explanation of the available information. You are responsible for the interpretation of the attachment/arrestment.

The following requires to be entered in the attachment page.


**Date**  
Date of the order.

**Type**  
One of:
DEO, DEO%, DEA, AEO, AEON,AEO3,CCAEO, CTAEO, EA,CMA,DAS, OTHER.

**Reference**  
The order reference.

**Deduction**  
Amount to be deducted for each pay period. (DEO,DEO%,AEO,AEON,DAS,OTHER).
Amount to be deducted for each DAY. (CMA)

**Protected**  
Amount declared in the order as the Protected earnings.(DEO,DEO%,AEO,AEON,OTHER).

**Org.Debt**  
What the original debt is. Enter 0.00 if it is a maintenance order.

**Pd.to Date**  
Leave blank if this is a new order. If you are just starting to use CalcPay, & there is an order in place, you should enter the brought forward figure from the manual records.

**Order**  
1 for DEO, DEO% & perhaps AOE. This also arranges the sequence in which order's are calculated.
The lower number is processed first, if on the same number then the date is used.

**Fin.**  
T (Y) if finished. CalcPay automatically marks it as finished once the Org.Dept is cleared.

**Name & Add**  
Information for your records.

**Add Attachment**  
Adds an entry into the grid.

**Remove Attachment**  
This will remove the line that is currently highlighted. You will be asked to confirm.

**View Payments**  
Gives a brief display of this years deductions to date.

To get a printout of the deductions go to MENU:REPORTS:ORDERS.

Multiple payments in a period  
If the employee receives holiday pay in advance the amount deducted will be increased by the number of holiday periods allowing for the Protected earnings.
<br/>
<br/>
<br/>
<br/>
<br/>
Examples

**DEO**  
Deduction from Earnings Order, Child Support Act.   
You should be informed of:  
Effective Date (ED)  
CSA Reference number  (CSARN)  
Normal deduction Rate (NDR),  
Protected Earnings Proportion (PEP), This must be an amount, not a %  
Enter the following in the grid.
|      |  |
| - | - |
| Date       | ED    |
| Type       | DEO   |
| Reference  | CSARN |
| Deduction  | NDR   |
| Protected  | PEP   |
| Orig.Debt  | 0.00  |
| Pd to Date | 0.00  |
| Order      | 1     |
| Name       | CSA   |

As there is no total debt do not put an entry in the Org.Debt column.
CalcPay will start the deduction in the pay run dated on or after the ED.  
The deduction will be taken off.  
If the Protected earnings are breached, then the deduction will be reduced.  
Any deduction not taken will be forwarded to the next payrun & will then be added to that deduction.  
When the DEO is finished enter 'T' in the Fin. column.

You can see the payments deducted in the View Payments button.
SLD: if this is also in place then it will be deducted. It will not breach the PEP.
Holiday Pay:  If you advance the PAYE week to take into account a holiday week then CalcPay will automatically calculate the correct figures.
There is more information at the CSA site http://www.csa.gov.uk/newcsaweb/employers.asp
Ref  CINO BD-004 24/8/05

You must forward any deductions to the CSA office by the 19th of the following month.
Use  'Reports/Orders/Orders paid'
<br/>
<br/>
<br/>
**DEO%**  
Deduction from Earnings Order, Child Support Act.  
Same as above except the Protected amount is a % of the 'Net Pay'  
The Protected rate should be entered as 0.60, being 60%
<br/>
<br/>
<br/>
**DEA**  
DEAH This is the Higher % rate  
Gov.Uk Direct Earnings Attachment: an employers' guide
Direct Earnings Attachment. NON PRIORITY  
DEA uses 'Utilities/FileUtilities/EarningsArrestTables'  
The DEA notice should tell you:  
Reference number  (RN)  
Effective Date (ED)   nb this is on or after 22 days from the notice date.  
Normal Deduction Rate (NDR), As this is a percentage deduction this should be left blank. However sometimes there may be a figure, if so correct it to the appropriate weekly, 2weekly,4weekly,monthly figure. That figure will then be used as opposed to the % rate.  
Protected Earnings Proportion  (PEP) Leave blank,  
It may give the Total Debt    TD  

Enter the following in the grid.
| Field      | Value |
| ---------- | ----- |
| Date       | 22 days after the Notice |
| Type       | DEO/DEAH   |
| Reference  | Ref no|
| Deduction  | Blank or fixed amount  |
| Protected  | Blank, it defaults to 60%  |
| Orig.Debt  | Amount of original debt, if stated |
| Pd to Date | 0.00  |
| Order      | 3     |
| Name       | Court Details  |



A % calculation will be calculated from the Net Earnings, which are Pay less Tax, Nic, Pension.  
If there is no Total Debt do not put an entry in the Org.Debt column.  
Date, the date to enter is 22 days after the  notice date. CalcPay will start the deduction in the next pay run from that Date.  
The deduction will be taken off.  
Any amount not taken, because of the PEP, will NOT be forwarded to the next payrun.  
When the Total Debt is paid CalcPay will enter a 'T' in the Fin column, no more will be deducted.  
If you are instructed to finish the DEA enter 'T' in the Fin. column. No more monies will be deducted.  
The PEP will be 60% of the Pay less Tax,Nic,Pension.

CalcPay You can see the payments deducted in the View Payments button.  
SLD: Sld has priority over DEA. It will be taken off first. If the SLD breaks the 60% protected earnings rule the deduction will be reduced.  
Holiday Pay:  If you advance the PAYE week to take into account a holiday week then CalcPay will automatically calculate the correct figures.  
example: DEA  
Pay  700.00  
Tax    95.60  
NIC   65.16  
Pen     4.70  
Net Earnings= £534.54, over 520 so @ 20% = 106.91  
SLD of 32.00 , The deductions of 106.91+32.00= 138.91 are less that 40% of Net Earnings 534.54=213.82  
DEAH  
As above, Net Earnings= £534.54, over 520 so @ 40% = 213.82,
SLD of 32.00 , The deductions of 213.82+32.00= 255.82 are greater that 40% of Net Earnings 534.54=213.82  
So the DEA needs to be reduced to 213.82-32.00 = £181.82  
All this is done automatically by CalcPay.  
however SLD of 32.00 will bring the deductions over 40% of
<br/>
<br/>
<br/>
**AEO**  
Attachment of Earnings Order. PRIORITY  
Relates to the Attachment of Earnings Act (AEA) 1971  
This deals with PRIORITY orders, see AEON for non priority orders.  
Please be also aware of the new (2003) AEO orders which are % based AEO3.  
The AEO should tell you:  
Reference number  (RN)
Effective Date (ED)   
Normal Deduction Rate (NDR),
Protected Earnings Proportion  (PEP)
It may give the Total Debt    TD

Enter the following in the grid.
| Field      | Value         |
| ---------- | ------------- |
| Date       | ED            |
| Type       | AEO           |
| Reference  | RN            |
| Deduction  | NDR           |
| Protected  | PEP           |
| Orig.Debt  | TD            |
| Pd to Date | 0.00          |
| Order      | 1             |
| Fin        | blank         |
| Name       | Court details |

If there is no Total Debt do not put an entry in the Org.Debt column, CalcPay will then continue making the deductions ad infinitum.  
CalcPay will start the deduction in the next pay run from the Date.  
The deduction will be taken off.  
If the Protected earnings are breached, then the deduction will be reduced.  
Any amounts not taken, because of the PEP, will be forwarded to the next payrun & will then be added to that (the next) deduction.  
When the Total debt is paid CalcPay will enter a 'T' in the Fin column, no more will be deducted.  
If you are instructed to finish the AEO enter 'T' in the Fin. column.  

You can see the payments deducted in the View Payments button.
**SLD**: if this is also in place then it will be deducted. It will not breach the PEP, thus the SLD may be reduced.  
**Holiday Pay**:  If you advance the PAYE week to take into account a holiday week then CalcPay will automatically calculate the correct figures.
<br/>
<br/>
<br/>
**AEON**  
Attachment of Earnings Order. NON PRIORITY  
Relates to the Attachment of Earnings Act (AEA) 1971  
Please also be aware of the new (2003) aeo orders which are % based.  
**AEO3**  
The AEO should tell you:  
Reference number  (RN)  
Effective Date (ED)   
Normal Deduction Rate (NDR)  
Protected Earnings Proportion  (PEP)  
It may give the Total Debt    TD  
Enter the following in the grid.
| Field      | Value         |
| ---------- | ------------- |
| Date       | ED            |
| Type       | AEON           |
| Reference  | RN            |
| Deduction  | NDR           |
| Protected  | PEP           |
| Orig.Debt  | TD            |
| Pd to Date | 0.00          |
| Order      | 1             |
| Fin        | blank         |
| Name       | Court details |


If there is no Total Debt do not put an entry in the Org.Debt column, CalcPay will then continue making the deductions ad infinitum.  
CalcPay will start the deduction in the next pay run from the Date.  
The deduction will be taken off.  
If the Protected earnings are breached, then the deduction will be reduced.  
Any amount not taken, because of the PEP, will NOT be forwarded to the next payrun.  
When the Total Debt is paid CalcPay will enter a 'T' in the Fin column, no more will be deducted.  
If you are instructed to finish the AEON enter 'T' in the Fin. column.  

You can see the payments deducted in the View Payments button.  
**SLD**: Sld has priority over AEON. It will be taken off first. Note that the NDR be be reduced because of the SLD  
**Holiday Pay**:  If you advance the PAYE week to take into account a holiday week then CalcPay will automatically calculate the correct figures.
<br/>
<br/>
<br/>
**AEO3**  
Attachment of Earnings Order.  
Relates to the Attachment of Earnings Act (AEA) 2003.  
This is % based. This uses the same rates as **CTAEO**, see below.  
The AEO should tell you:
Reference number  (RN)
Effective Date (ED)   
It may give the Total Debt    TD
Enter the following in the grid.
| Field      | Value         |
| ---------- | ------------- |
| Date       | ED            |
| Type       | AEO3          |
| Reference  | RN            |
| Deduction  | NDR           |
| Protected  | 0.00           |
| Orig.Debt  | TD            |
| Pd to Date | 0.00          |
| Order      | 1             |
| Fin        | blank         |
| Name       | Court details |

If there is no Total Debt do not put an entry in the Org.Debt column.  CalcPay will then continue making the deductions ad infinitum.  
CalcPay will start the deduction in the next pay run from the Date.  
The deduction will be taken off.  
When the Total Debt is paid CalcPay will enter a 'T' in the Fin column, no more will be deducted.  
If you are instructed to finish the AEO3 enter 'T' in the Fin. column.

You can see the payments deducted in the View Payments button.
**SLD**: Even though the AEO3 is table based Sld is still deducted.  
**Holiday Pay**:  If you advance the PAYE week to take into account a holiday week then CalcPay will automatically calculate the correct figures.
<br/>
<br/>
<br/>
**CTAEO**  
Council Tax Attachment of Earnings Order.  
Relates to CTAEO made on or after 1/10/1998.  
This is  % based.  
The CTAEO should tell you:  
Reference number  (RN)
Effective Date (ED)   
It should give the Total Debt    TD
Enter the following in the grid.
| Field      | Value         |
| ---------- | ------------- |
| Date       | ED            |
| Type       | CTAEO         |
| Reference  | RN            |
| Deduction  | 0.00          |
| Protected  | 0.00          |
| Orig.Debt  | TD            |
| Pd to Date | 0.00          |
| Order      | 1             |
| Fin        | blank         |
| Name       | Court details |

If there is no Total Debt do not put an entry in the Org.Debt column.  
CalcPay will then continue making the deductions ad infinitum.  
CalcPay will start the deduction in the next pay run from the Date.  
The deduction will be taken off.  
When the Total Debt is paid CalcPay will enter a 'T' in the Fin column, no more will be deducted.  
If you are instructed to finish the CTAEO enter 'T' in the Fin. column.

You can see the payments deducted in the View Payments button.
**SLD**:No Sld will be deducted while the CTAEO is in effect.  
**Holiday Pay**:  If you advance the PAYE week to take into account a holiday week then CalcPay will automatically calculate the correct figures.
<br/>
<br/>
<br/>
**CCAEO**  
Council Tax Attachment of Earnings Order.  
Relates to CCAEO made before 1/04/1992.  
This is no longer supported.
<br/>
<br/>
<br/>
**EA**  
Earnings Arrestment.  
This arrives at a deduction dependent on the earnings.  
The Diligence against Earnings (Variation) (No. 2) (Scotland) Regulations 2009  
Calculates on a percentage scale with 4 rates 15%,20%,25%,50% dependant on the arrestable earnings.  
The EA should tell you:  
Reference number  (RN)  
Effective Date (ED)   
It may give the Total Debt (TD)  
Who to pay (Creditor)  
Enter the following in the grid.
| Field      | Value         |
| ---------- | ------------- |
| Date       | ED            |
| Type       | EA            |
| Reference  | RN            |
| Deduction  | 0.00          |
| Protected  | 0.00          |
| Orig.Debt  | TD            |
| Pd to Date | 0.00          |
| Order      | 1             |
| Fin        | blank         |
| Name       | Creditor      |

If there is no Total Debt do not put an entry in the Org.Debt column.  CalcPay will then continue making the deductions ad infinitum.  
CalcPay will start the deduction in the next pay run from the Date.  
The deduction will be taken off.  
When the Total Debt is paid CalcPay will enter a 'T' in the Fin column, no more will be deducted.  
If you are instructed to finish the EA enter 'T' in the Fin. column.

You can see the payments deducted in the View Payments button.  
**SLD**:No Sld will be deducted while the EA is in effect.  
**Holiday Pay**:  The deduction should be calculated as if ALL the earnings occur in the first period (week).  
CalcPay is unable to do this calculation. You will have to do it manually.  
You may consider doing each period independently. You can only have one 'EA'.  You can however also have a 'CMA'. If this is the case please ensure that the 'EA'  has a lower Order no to ensure it is dealt with first.
<br/>
<br/>
<br/>
**CMA**  
Current Maintenance  Arrestment.  
This takes a **DAILY** amount off the wage.  
CalcPay will deduct  the daily amount times 7/14/28 or days in the month.ie 28,29,30,31 days.  
Relates to EA 1971.  
This arrives at a deduction dependent on a DAILY deduction.  
The CMA should tell you:  
Reference number  (RN)  
DAILY deduction Rate (DDR)  
Protected  Earnings Rate (PER)Daily £16.24 as at 06/04/2016  
Effective Date (ED)   
It may give the Total Debt (TD)  
Who to pay (Creditor)  
Enter the following in the grid.
| Field      | Value         |
| ---------- | ------------- |
| Date       | ED            |
| Type       | CMA           |
| Reference  | RN            |
| Deduction  | DDR           |
| Protected  | PEP           |
| Orig.Debt  | TD            |
| Pd to Date | 0.00          |
| Order      | 1             |
| Fin        | blank         |
| Name       | Creditor      |

If there is no Total Debt do not put an entry in the Org.Debt column  CalcPay will then continue making the deductions ad infinitum.  
CalcPay will start the deduction in the next pay run from the Date.  
The Daily Rate will be multiplied by the days in the pay period.  
The deduction will be taken off.  
When the Total Debt is paid CalcPay will enter a 'T' in the Fin column, no more will be deducted.  
If you are instructed to finish the EA enter 'T' in the Fin. column.

You can see the payments deducted in the View Payments button.  
**SLD**:No Sld will be deducted while the CMA is in effect.  
**Holiday Pay**:  If you advance the PAYE week to take into account a holiday week then CalcPay will automatically calculate the correct figures.

You can only have one 'CMA'. You can however also have a 'EA'. If this is the case then CalcPay will deduct on a ProRata calculation, as the both have equal authority.
<br/>
<br/>
<br/>
**DAS**  
Attachment of Earnings Order.   
Relates to the Debt Arragement Scheme (Scotland) Regulations 2004.  
The DAS on form 6  should tell you:  
Das Reference number  (RN)  
Effective Date (ED)   
Payment Amount (PA)  
It may give the Total Debt (TD)  
Payments Distributor (PD)  
Enter the following in the grid.
| Field      | Value         |
| ---------- | ------------- |
| Date       | ED            |
| Type       | DAS           |
| Reference  | RN            |
| Deduction  | PA            |
| Protected  | 0.00          |
| Orig.Debt  | TD            |
| Pd to Date | 0.00          |
| Order      | 1             |
| Fin        | blank         |
| Name       | PD            |

If there is no Total Debt do not put an entry in the Org.Debt column.  CalcPay will then continue making the deductions ad infinitum.  
CalcPay will start the deduction in the next pay run from the Date.  
The deduction will be taken off.  
When the Total Debt is paid CalcPay will enter a 'T' in the Fin column, no more will be deducted.  
If you are instructed to finish the DAS enter 'T' in the Fin. column.

You can see the payments deducted in the View Payments button.  
**SLD**: Sld has priority over DAS. It will be taken off first. Note that you may have to manually reduce PA  because of the SLD  
**Holiday Pay**:  If you advance the PAYE week to take into account a holiday week then CalcPay will automatically calculate the correct figures.  
It would appear that the employer must make payments to the 'Payments Distributor' as soon as possible.  
There is more information to be obtained from:  
http://www.moneyscotland.gov.uk/das/das_emp_display_home.jsp?pContentID=110&p_applic=CCC&pElementID=103&pMenuID=97&p_service=Content.show&  
 and a pdf file  
http://www.moneyscotland.gov.uk/das/files/Employer%20Guidance%20-%20January%202005.pdf
<br/>
<br/>
<br/>
**OTHER**  
For your own use works similar to AEON

Orders

DEO Deduction from Earnings Order, Child Support Act.

England & Wales
AEO Attachment of Earnings Order.
CCAEO Community Charge Attachment of Earnings Order.
CTAEO Council Tax Attachment of Earnings Order.

Scotland
EA Earnings Arrestment.
CMA Current Maintenance Arrestment .
CAO Conjoined Arrestment Order.


CalcPay starts the deductions from the DATE that has been entered..


There are various phrases used in attachments.

Attachable Earnings
This is the Earnings less specific expenses.
The Earnings are Wages,Overtime,Salary,Bonuses,Commission,Pension income these should all be marked as 'Y' under Pay Headings in the Company menu. S.S.P. is also included but Disability Pension,SMP, Guaranteed min Pension are not.
The expenses are PAYE, NIC, Pension, AVC's ( not Free Standing AVCs).

Protected Earnings
Amount that must be left in the employee's pay packet.

Priority & Non Priority
A priority AEO means that if there has been any shortfall in the deduction (because there is insufficient funds between the Attachable & the Protected earnings) then that shortfall is carried forward against subsequent pay periods. For a Non Priority this shortfall is not carried forward, this results in the full debt being paid over a longer time period. DEO's are priority.



There are 2 different types of ORIGINAL DEBT.

1 FIXED DEBT
Deductions are taken off until the debt is cleared.

2 MAINTENANCE DEBT
The total amount is not known, thus the deductions continue until you are informed to stop.

For FIXED debt you enter the AMOUNT in the ORG.DEBT column, for type 2 you leave this column BLANK.



There are 2 different types of DEDUCTIONS.
FIXED amount.
You are informed what to deduct, though sometimes this fixed amount may vary. (WHY!!!!!)

VARIABLE amount.
The more the employee earns the more is taken off.

The program knows how to deal with each one depending on what you enter in the TYPE column.
AEO3,CCAEO,CTAEO,EA are Variable deductions.

**CTAEO & AEO3** table of deductions.  
| Weekly (£) | Monthly (£) | Deduct % |
| ---------- | ----------- | -------- |
| 0          | 0           | 0        |
| 55         | 220         | 0        |
| 100        | 400         | 3        |
| 135        | 540         | 5        |
| 165        | 660         | 7        |
| 260        | 1 040       | 12       |
| 370+       | 1 480+      | 17       |

**CTAEO7** table of deductions  
| Weekly (£) | Monthly (£) | Deduct % |
| ---------- | ----------- | -------- |
| 0          | 0           | 0        |
| 75         | 300         | 0        |
| 135        | 550         | 3        |
| 185        | 740         | 5        |
| 225        | 900         | 7        |
| 355        | 1 420       | 12       |
| 505+       | 2 020+      | 17       |










employeeattach 17/10/25