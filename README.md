# Zendesk Challenge - Ticker viewer

## :pushpin: Objectives of the project

* Connect to the Zendesk API
* Request all the tickets for your account
* Display them in a list
* Display individual ticket details
* Page through tickets when more than 25 are returned

### :computer: Technologies and Dependencies

I decided to create a web application, therefore, I selected the tools below to help me with that (also because I'm very confortable to use them :laughing:).
#### Programming language
* Typescript

#### Test
* jest

#### Backend Frameworks and Libraries 
* Express - it provides functions that makes the development process simple and efficient such as Router and express.json().
* axios - To request the data from Zendesk API I created an asynchronous and axios is a Promise HTTP client that I can use in bouth, Browser and Express.
* dotenv - To be able to use environment variable dotenv helps to read the .env file with my private credentials informations.


#### Frontend
* ReactJs - Easy to create users interface and I can use components that I've created before to make my development process more productive.
* styled-components - I can separate each component styles in specific files and solve the CSS modules problem.
* polished - I don't have great skill with colours, so polished helps me choose the right colour in my components.
* react-modal - I decided to show the ticket details in a modal to don't lose the context of the main page, because don't have any other feature or a lot information the ticket details with modal makes the resposabilite to display the details simple.


## :books: Reference documentation

* Lumen: https://lumen.laravel.com/docs/8.x/testing#testing-json-apis
* Laravel: https://laravel.com/docs/8.x/testing



## Getting Started

### Clone the repository
* $ `git clone https://github.com/FelipeCostaBR/Zendesk-Challenge.git`
* $ `cd Zendesk-Challenge`
   
### Run Server
* $ `cd server_ticket_viewer`
* $ `yarn dev:server`

* Open a new terminal and go into the project folder

### Run Web application

* $ `cd web_ticket_viewer`
* $ `yarn start`

### If the brownser app dosen't open you copy and past the link below in your browser search.
*  http://localhost:3000/tickets

## Tests
* copy the folder `test` attached on your email and paste on the path `../ZENDESK/server_ticket_viewer/src`
* $ `cd server_ticket_viewer`
* $ `yarn test`



