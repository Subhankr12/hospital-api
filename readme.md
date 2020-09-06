# Hospital API

> A NodeJS and MongoDB built API for hospital doctors to keep track of their patients with Covid19 test reports.

## Technologies Used

1.  Nodejs
2.  Express
3.  MongoDB for database

## Prerequisites

- MongoDB
- Node.js 10+
- Command Line Tools
- Visual Studio Code

## Installation

##### # Get the latest snapshot

`git clone https://github.com/Subhankr12/hospital-api.git myproject`

##### # Change directory

`cd myproject`

##### # Install NPM dependencies

`npm install`

##### # Then simply start your app

`npm start`

#### # The Server should running at: http://localhost:5500/

## Folder Structure

app <br>
├── config <br>
│ --- ├── mongoose.js <br>
│ --- └── passport-jwt-strategy.js <br>
├── controllers <br>
│ --- ├── doctors_controller.js <br>
│ --- ├── patients_controller.js <br>
│ --- └── reports_controller.js <br>
├── models <br>
│ --- ├── doctor.js <br>
│ --- ├── patient.js <br>
│ --- └── report.js <br>
├── routes <br>
│ --- ├── api <br>
│ ----│ -- ├── v1 <br>
│ --- │ -- │ -- ├── doctors.js <br>
│ --- │ -- │ -- ├── index.js <br>
│ --- │ -- │ -- ├── patients.js <br>
│ --- │ -- │ -- └── reports.js <br>
│ ----│ -- └── index.js <br>
│ --- └── index.js <br>
├── server.js <br>
├── package.json <br>
├── package-lock.json <br>
└── readme.md <br>
