---
sidebar_label: 'Backup'
sidebar_position: 20
id: file_backup
title: Backup
description: Backup info
slug: /file_backup
---

# Backup

## This is where you backup your payroll data.
Remember that the computer you are using WILL break eventually. It also might get stolen or destroyed (fire). The Pay26 year is used in the examples ie 'c:\calcpay\pay25_26\'

Taking a backup of your data files is VERY important. It should be done every time you add information.
We recommend that you should backup after every wage run.  
We also suggest that a backup is kept off site.  
You could save the backup to a USB disk, or to a folder on your machine that is backed up via say Microsoft's OneDrive or Google's  Drive.

The backup files are saved to a ZIP file. This file is encrypted with a default password and after purchasing a licence, the password is your Registration No.


**Current Data Folder**  
This is where the data for the current employer is stored. eg  
'c:\calcpay\pay25_26\comp1\pay'  
The 'comp1 is the first employer then comp2, comp3 etc.

**To Drive**  
This is the where the backup ZIP file is to be stored.  
You will be given an option to save elsewhere.  
You can change the default storage folder  by clicking the '...' button or at 'Utilities/File_Utilities/Change backup drive'.
DO NOT BACKUP TO THE ZIP FOLDER 'c:\calcpay\pay25_26\zip'.  This is used internally when restoring CalcPay. It will delete everything thats saved there.

**Default file name**  
This comes from 'Employer/EmployerDetails/BackupName'.  
The number is the End Year then the date in YYMMDD format.  
Then the last entry (week no) saved in the P11 tables.

**Backup**  
This will compress your data and save to the backup zip file. The program uses the standard 'ZIP' format. You will be given an option to enter the name & place of where you wish the backup to take place.

**Cancel**  
Leave without doing anything.

**Use default password**  
If this is ticked the ZIP file is encrypted with the default password, this means anyone with a current copy of CalcPay can restore from it.
 
See also [Restore](./file_restore.md)
<br/>
<br/>
<br/>
<br/>
<br/>
###### file_backup 16/10/25