# Survey Cookies
Survey Cookies :cookie: is a web-base application built with Node.js, Express, and MongoDB. It helps users to send surveys to their customers. Users can easily view the responses with a clear format

Visit at: https://surveycookies-67932.herokuapp.com/

---
## Open source kits and API

### Front End
- <a href="https://materializecss.com/">MaterializeCSS</a>: a front-end framework to help create responsive websites
- <a href="https://fonts.google.com/">Google Fonts</a>: typographic assets for building customized front-end font style
- <a href="https://zh-hant.reactjs.org/">React</a>: a JS library for building user interfaces
- <a href="https://zh-hant.reactjs.org/docs/react-dom.html">ReactDOM</a>: DOM handler for React application
- <a href="https://redux.js.org/">Redux</a>: a predicatable state container for JavaScript applications

### Back End
- <a href="http://www.passportjs.org/">passport</a>: to add authentication mechanism, such as register and login functionalities
- <a href="https://mongoosejs.com/">Mongoose</a>: the ODM package of MongoDB; serve as the website's database solution
- <a href="https://stripe.com/">Stripe</a>: to process online payment
- <a href="https://sendgrid.com/">SendGrid</a>: a cloud-based email delivery platform for transactional and marketing email
- <a href="https://www.npmjs.com/package/cookie-session">cookie-session</a>: a simple cookie-based session middleware
- <a href="https://reactrouter.com/">react-router</a>: to process navigational actions in the application
- <a href="https://github.com/axios/axios">axios</a>: a promise based HTTP client for the browser and node.js

---
## Installation

### Prerequisites
- <a href="https://www.npmjs.com/get-npm">npm v6.14.8</a>
- <a href="https://nodejs.org/en/download/">Node.js v14.9.0</a>
- <a href="https://www.mongodb.com/try/download/community">MongoDB v5.10.6</a>

### Clone
Clone this repository to your local machine

`$ git clone https://github.com/weijchen/survey-cookies`


### Setup
1. Create SendGrid, MongoDB Atlas, Stripe & Google account
    - https://signup.sendgrid.com/
    - https://account.mongodb.com/account/login
    - https://stripe.com/
    - https://www.google.com.tw/

2. Create and get a SendGrid API Key

3. Create and get a MongoDB API Key

4. Create and get a Stripe API Key

5. Create an Google App and get the App ID & Secret

6. Enter the project folder
> $ cd survey-cookies

5. Install npm packages
> $ npm install

6. Create dev.js file
> $ touch config/dev.js
 
7. Store API Key in dev.js file and save
```
module.exports = {
  googleClientID: <YOUR GOOGLE_CLIENT_ID>,
  googleClientSecret: <YOUR GOOGLE_CLIENT_SECRET>,
  mongoURI: <YOUR MONGO_URI>,
  cookieKey: <YOUR GOOGLE_CLIENT_ID>,
  stripePublishableKey: <YOUR STRIPE_PUBLISHABLE_KEY>,
  stripeSecretKey: <YOUR STRIPE_SECRET_KEY>,
  sendGridKey: <YOUR SENDGRID_KEY>,
  redirectDomain: http://localhost:3000
}
```

8. Activate the server
> $ npm run dev

9. Find the message for successful activation
```
> Server start at http://localhost:5000
> Connected to DB!
```
You may visit the application on browser with the URL: http://localhost:3000

---
## Authors
<a href="https://github.com/weijchen">Jimmy Chen</a>
