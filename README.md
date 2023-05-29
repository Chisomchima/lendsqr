# Awesome Project

Welcome to My Awesome Project! 🚀

![Awesome Project Banner](./public/lendsqr.svg)

## Overview

This is my implementation of the dashboard UI given for my Lendsqr Job Application. This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Features](#features)
- [API Documentation](#api-documentation)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)
- [Contact](#contact)

## Installation

To get started with the Project, follow these simple steps:

1. Clone the repository: `git clone https://github.com/your-username/awesome-project.git`
2. Install the dependencies: `yarn`

## Usage

Now that the installation is complete, let's dive into the usage of the Project:

1. Run the application: `yarn dev`
2. Access the Project in your browser at [http://localhost:3000]
3. The home Page shows three Links namely the Login, Dashboard and User.
4. Access each page on the assignment using these links.

## File Structure

The file structure of this Project is organized as follows:

Lendsqr/
├── Pages/
│ ├── dashboard/
│ ├── index/
│ ├── login/
│ ├── user/
| |-- app/
├── components/
├── public/
|── styles/
|── Service/
|── types/

- `Pages/`: Contains the main pages of the application.
- `public/`: Includes public assets such as images, fonts, and static files.
- `Service`: Includes the api requests as well as the local storage data caching for user details.
- `styles`: Houses all styling leveraging scss.
- `components`: All basic page components are placed in the components folder such as table component, cards etc.
- `types`: Houses the UerData interface that was used in populating the table component and details page.


## Features

Thes features were implemented along with the UI:

1. **Pagination**: [I implemented the pagination feature for seamless data viewing]
2. **Rows Per Page**: [For the same reasons as stated in pagination, I had to implement the rows per page functionality ]
3. ** Filters **: [A functional filter that allows easy filtering in the application was implemented]


Check out the [demo Link](https://lendsqr-lends-7yerud96l-chisomchima.vercel.app/) to see these features in action!
## Deployment

I used the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
to deploy the application.
