# VALIFY

## Introduction

VALIFY is a web application that will validate an RSA ID number that users will input from the UI. Given that a South African ID number is a 13-digit number which is defined by the following format: YYMMDDSSSSCAZ.
-	The first six digits (YYMMDD) are based on your date of birth – 23 January 1988 is 880123.
-	The next four digits (SSSS) are used to define your gender –  females are assigned numbers in the range 0000-4999 and males from 5000-9999.
-	The next digit (C) shows if you are an SA citizen – 0 – or a permanent resident – 1.
-	The next digit (A) was used until the late 1980s to indicate a person’s race. This has been eliminated and old ID numbers were reissued to remove this.
-	The last digit (Z) is a checksum digit – used to check that the number sequence is accurate using the Luhn algorithm.

### Having Trouble Running The Web Application

--type `npm install all --save` to install all dependenacies,
  then type `npm start` to run app on local server
  
### (Developed For Any Device That Has A Browser)
        
## Features

This is what you can do with VALIFY:

- input an id to be validated
- Get feedback about the status of the id
- View id along with its meta data such as:
- Gender
- Year of birth
- Citizenship
- The following is for **admin**:
    - To gain admin privileges, On sign-up include the substring **"$a@d%m#i&N"** on your password
    - as an admin you can do the following:
    - View Id database
    - Create insights from the data, as well as viewing charts

## Built Using

* Visual Studio
* Firebase Cloud Storage
* React js

## Developers

* Tshepiso Mahoko

## For documentation please visit
[Application documentation](https://github.com/ClearanceC137/valify/tree/main/src/Documentation)


### To find out more, please visit the 
[vALIFY github](https://github.com/ClearanceC137/valify)


