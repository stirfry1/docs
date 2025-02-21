---
sidebar_label: 'Import P11 Totals'
sidebar_position: 8
id: importp11
title: importp11
description: importp11 info
slug: /importp11
---

# Import P11 Totals

## This is a facility to import information from a CSV file into CalcPay
This conversion has not been extensively tested. Please consider it as beta.\
You should backup before running this routine, and when finished, check the figures in CalcPay.

The following is brought in via the P11Totals:\
The CSV file should NOT have any headings in it, just data separated by a comma.\

Details           Size C/O Example\
Reference number    N6   C  123, ties up with the Refn from the Employees Name data re above\
NICLETTER           C1   C  Nic Letter\
LEL                 N9   C  Lower Earnings Limit,        total of 1A\
ET                  N9,2 C  Earnings Threshold,          total of 1B\
UEL                 N9,2 C  Upper Earnings Limit,        total of 1C\
NICTotal            N9,2 C  Total of Employers & Employees NIC, total of 1D\
NICEmpee            N9,2 C  Total of Employees NIC,        total of 1E\
SSP                 N9,2 C  Total of SMP,                total of 1f\
SMP                 N9,2 C  Total of SMP,                total of 1g\
SPP                 N9,2 C  Total of SPP,                total of 1h\
ShPP                N9,2 C  Total of ShPP,                total of1i\
SAP                 N9,2 C  Total of SAP,                total of 1j\
SLD                 N9,2 C  Total of SLD,                total of 1k\
PayNIC              N9,2 C  Total of NIC Pay\
PayTax              N9,2 C  Total of Taxable Pay, col 2 Gross Pay\
TaxCum              N9,2 C  Total of Tax, col7\
P45Pay              N9,2 O  Pay from P45 if in current PAYE year, otherwise 0.00\
P45Tax              N9,2 O  Tax from P45 if in current PAYE year, otherwise 0.00\
GrossPay            N9,2 O  Total of Gross Pay, can be left blank, it is not used in calculations\
NetPay              N9,2 O  Total of Net Pay, can be left blank, it is not used in calculations\

'C' Compulsory\
'O' Optional\
Reference number is the same number as the 'Order No', sometimes referred to as the RefNo, in the employee table. This is required to allocate the P11 info to the Employees table. You must have the Reference number already in the employees table.\
If you have more than 1 Nic Letter then you will need to subtotal the amounts LEL through to NICEmpee as a separate line which must be AFTER the main line. \
The PayNIC is required in Directors NIC calculations, otherwise it can be left blank. The value is normally the gross pay.\
The PayTax is the taxable pay in this employment only, it does NOT include any P45 pay.\
The TaxCum is the tax in this employment only, it does NOT include any P45 tax.\
The P45Pay,P45Tax,GrossPay & NetPay do not need to be entered.\
You can enter P45 Pay & Tax in CalcPay instead of bringing it over. Please do this AFTER you have imported the P11 totals.

Below shows 3 employees\
The first does not declare PayNIC, P45Pay,P45Tax,GrossPay,NetPay\
The next has P45Pay & P45Tax\
The third has 2 lines as it has 2 entries for Nic, letter 'A' & 'C', it is for a Director so must give the NicPay.\

4,"A",1131,174,1296.57,10.00,308.58,142.62,101.57,0,0,0,0,0,2601.57,217.78,,,,


5,"A",377,58,1565.00,0.00,372.47,172.15,,,,,,2000.00,2000.00,321.79,4000,643.55,2000.00,1506.06


6,"A",4524,701,775,0.00,184.45,85.25,0,0,0,0,0,6000.00,9000.00,1625.34,,,9000.00,4831.98\
6,"C",0,0,3000.00,30.5,384.00,,,,,,,3000.00,,,,,,\



importp11totals 23/3/08