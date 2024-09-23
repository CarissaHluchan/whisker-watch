# <picture><source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f43e/512.webp" type="image/webp"><img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f43e/512.gif" alt="🐾" width="32" height="32"></picture><picture><source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f63a/512.webp" type="image/webp"><img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f63a/512.gif" alt="😺" width="32" height="32"></picture>[ Whisker Watch ](https://whisker-watch.vercel.app/)<picture><source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f63a/512.webp" type="image/webp"><img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f63a/512.gif" alt="😺" width="32" height="32"></picture><picture><source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f43e/512.webp" type="image/webp"><img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f43e/512.gif" alt="🐾" width="32" height="32"></picture>

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
Whisker Watch is a charming web application designed for cat breed enthusiasts with a particular interest in rare and unusual cat breeds. This interactive platform offers a delightful experience for users who want to explore and celebrate these unique feline companions.

### Technology:
[//]: <> (Add technology you used for this project.) 
1. React
2. React Router
3. Asynchronous JavaScript
4. Cypress
5. CSS

### Design:
[Design Board](https://miro.com/app/board/uXjVLf8mZcs=/)

<img width="662" alt="Screenshot 2024-09-20 at 6 06 42 PM" src="https://github.com/user-attachments/assets/f17de73a-68c8-4756-b135-55b2d2f20b26">

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
1. Click the Title to run the app.
2. _(optional) Fork this project to your own Github account._
> [!WARNING]
> **[Node.js](https://nodejs.org/en), [npm](https://www.npmjs.com/) & a [locally running API](https://github.com/turingschool-examples/overlook-api) are required to run this app.**<br>
  > _Please ensure you have both installed on your machine before proceeding._
  - Clone the repository to your local machine.
  - `cd` into the project folder.
  - Use the `npm install` command to install the project dependencies.
  - Use the `npm start` command to run webpack.
  - Check the console for the `PORT` and copy/paste `localhost:PORT` into your web browser.
3. If you fork this repo you will need to request an API key.
  - you can request the API key for free here: [The Cat API](https://thecatapi.com/#pricing)
  - create a .env file in the root directory
  - label it `REACT_APP_CAT_API_KEY=(your API key here)`
4. To run Cypress testing
- in the console type `npm run cypress`
- for issues: [Follow these instructions to install Cypress.](https://on.cypress.io/guides/installing-and-running#section-installing)

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)
![Whisker-Watch-preview](https://github.com/user-attachments/assets/02289c9c-0d35-4857-b028-379489e83164)

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
This solo project took me roughly 8 days or 32 hours to complete. I am in the 15th week of intensive front-end web development training program.

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)
This application was built by: [Carissa Hluchan](https://github.com/CarissaHluchan)

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
- Demonstrate knowlegde of the following: React, Router, Asynchronous JavaScript, End to end testing with Cypress.
- Create personas and user stories to describe the target audience.
- Work within constraints to deliver a product for the niche audience, which helps solve a problem unique to them.
- Have the following core functionality:
  - Display the data from the API in a way that applies directly to the audience
  - Ability for users to store/manipulate the data displayed in the application
  - Multiple views handled by Router
  - Be deployed using Vercel
  - PropTypes has been implemented in all components with props
  - App is responsive across mobile, tablet and desktop sizes


### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
- Dynamic UI Testing with Cypress: Testing dynamic elements, such as navigation menus and asynchronously loaded components, presented challenges with visibility and timing in Cypress. I resolved this by breaking up test assertions and using cy.realHover and cy.intercept to handle asynchronous rendering and API calls. I found a dynamic way of handing cat breed cards visablity using forEach in Cypress.

- API Data Handling in Tests: Mocking and intercepting API requests required careful synchronization to ensure the UI was updated correctly during testing. By using Cypress fixtures and ensuring API responses matched expected structures, I stabilized the tests and ensured data was correctly loaded before user interactions.


