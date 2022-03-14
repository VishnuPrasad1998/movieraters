# movieraters
Movie Raters is an online movie posting and rating system which has the following features:
1. Authentication and Authorization.
2. Add, Delete, Update and List Movies.
3. Rate movies and saves their average ratings. 

# Libraries/Frameworks/Tools Used:
JavaScript(ES6), NodeJS, ExpressJS, Mongoose, MongoDB.

## Steps for Installation and Running:
1. Clone the repo using ```
git clone <reponame> ```
2.```cd <reponame>``` 
3. Install Dependencies inside package.json by running
```
npm install
```
4. To Run the server
```
nodemon index.js
```
5. To test API use postman(API docs attached below).

## Code Walkthrough
1. DB config is kept in index.js
2. Model Schema is kept under models/ directory. In which models for movies, user and ratings are defined under seperate files
3. All the routes are kept under routes/ directory and are registered in index.js
4. The core service logic is kept under controllers/ directory
5. index.js is the main file also entry point.

## Base Url
http://localhost:8080
Where port should be defined by making an .env file in root directory itself(Please refer .env.test)

## API Docs
Click here to go to the [API Docs](https://documenter.getpostman.com/view/11431269/UVsJwmpU)

Click here to view some snapshots of the DB
[Image1](https://ibb.co/fvCFs23)
[Image2](https://ibb.co/3st7yH1)
[Image3](https://ibb.co/98DZLTk)

## Improvements and Future Scope:
1. Improve the code by using Redis etc for storing rating values. So it will be faster.
2. Implement production level practises in code.
3. Implement refresh token.
4. Add Github actions for a CI pipeline.
