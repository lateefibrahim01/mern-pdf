# MERN PDF Store App

![App Screenshot](./screenshot.png)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Payment Process](#payment-process)
- [Tailwind CSS](#tailwind-css)
- [License](#license)

## Overview
This is a web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The primary purpose of this app is to sell a PDF file to users. Only users with successful PayPal payments will be allowed to download the PDF file.

## Features
- User-friendly interface.
- Secure payment processing through PayPal.
- Instant PDF download upon successful payment.
- Integration of Tailwind CSS for responsive and attractive styling.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed.
- MongoDB set up and running.
- PayPal developer account for API integration.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/lateefibrahim01/mern-pdf.git
   cd mern-pdf

2. Install server dependencies:
   `cd server`
    `npm install`
3. Install client dependencies:
   `cd client`
   `npm install`
4. Create a .env file in the server directory and make use of .env.sample

5. Start the server and client:
   
   `npm start` (server directory)


   `npm start` (client directory)


## Usage
- Access the app in your browser at http://localhost:3000.
- select the PDF file.
- Click the "Buy Now" button to proceed with the payment.
- Complete the PayPal payment process.
- Upon successful payment, the PDF file will be available for download.

## Payment Process
This app uses PayPal for payment processing. When a user clicks "Buy Now," they will be redirected to the PayPal checkout page. After successful payment, PayPal will send a confirmation to the server, and the user will be granted access to download the PDF file.

## Tailwind CSS
This project utilizes Tailwind CSS for styling. You can customize the styles by modifying the Tailwind configuration files in the client directory.

## License
This project is licensed under the MIT License.   