# Zendesk Challenge - Ticker viewer

## :pushpin: Objectives of the project

* Connect to the Zendesk API
* Request all the tickets for your account
* Display them in a list
* Display individual ticket details
* Page through tickets when more than 25 are returned

### :computer: Technologies and Dependencies

I decided to create a web application, therefore, I selected the tools below to help me with that (also because I'm very comfortable using them :laughing:).
#### Programming language
* Typescript

#### Test
* jest

#### Backend Frameworks and Libraries 
* Express - it provides functions that make the development process simple and efficient such as Router and express.json().
* Axios - To request the data from Zendesk API I created an asynchronous and Axios is a Promise HTTP client that I can use in both browser and Express.
* dotenv - To be able to use environment variable dotenv helps to read the .env file using my private credentials.


#### Frontend
* ReactJs - Easy to create users interface and I can use components that I've created before to make my development process more productive.
* styled-components - I can separate each component styles in specific files and solve the CSS modules problem.
* polished - I don't have great skill with colours, so polished helps me choose the right colour in my components.
* react-modal - I decided to show the ticket details in a modal to not lose the main page context, because there is no other feature or information to show in the ticket details component.


## Getting Started

 
### Clone the repository and create .env file
* $ `git clone https://github.com/FelipeCostaBR/Zendesk-Challenge.git`
* $ `cd Zendesk-Challenge/server_ticket_viewer/`
* Create a file `.env` on the root of the folder `server_ticket_viewer/` and paste the informations attached in the email sent to Sabrina.
   
### Run Server
* $ `cd Zendesk-Challenge/server_ticket_viewer/`
* $ `yarn`
* $ `yarn dev:server`

* Open a new terminal and go into the project folder

### Run Web application

* $ `cd web_ticket_viewer`
* $ `yarn`
* $ `yarn start`

### If the browser doesn't open automatically with the app,  you can copy and paste the link below in your browser search
*  http://localhost:3000/tickets


### If no tickets are returned, you can execute in the terminal the command available in the file `insert_tickets.txt` attached in the email sent to Sabrina.


## Tests
* copy the folder `test` attached in the email sent to Sabrina and paste on the path `../ZENDESK/server_ticket_viewer/src`
* $ `cd server_ticket_viewer`
* $ `yarn test`

## ENJOY 


## :books: Reference documentation

### Zendesk API
* Ticket API: https://developer.zendesk.com/rest_api/docs/support/tickets
* Users API: https://developer.zendesk.com/rest_api/docs/support/users
* Views API: https://developer.zendesk.com/rest_api/docs/support/views

### Pagination
* https://develop.zendesk.com/hc/en-us/community/posts/360004239687-Pagination-using-JavaScript-Promises
* https://medium.com/how-to-react/create-pagination-in-react-js-using-react-hooks-c3c582ff5a96

### Modal
* http://reactcommunity.org/react-modal/
* https://uxplanet.org/modal-vs-page-a-decision-making-framework-34453e911129

### Test
* https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6

### DOTENV
* https://www.npmjs.com/package/dotenv
