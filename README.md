<div id="header" align="center">
  <img src="https://cdn-icons-png.flaticon.com/128/8841/8841503.png" width="100"/>
</div>
<div align="center">
<h2>Hello ! <h2>
  <p>Kaustubh Sule here !</p> 
</div>

<!-- Links to social profiles  -->
<div id="badges" align="center">
  <a href="https://www.linkedin.com/in/kaustubh-sule-b46303229/ ">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
  <a href="https://youtu.be/JkI1acKmYl0">
    <img src="https://img.shields.io/badge/YouTube-red?style=for-the-badge&logo=youtube&logoColor=white" alt="Youtube Badge"/>
  </a>
  <a href="https://twitter.com/KaustubhSule ">
    <img src="https://img.shields.io/badge/Twitter-blue?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter Badge"/>
  </a>
</div>
Note : The database is deployed on MongoDB Atlas. And the backend server is deployed on Vercel. Since, you don't have to create a local host, you can skip the following steps under 'Getting Started'. You can use Postman to make API calls to/from the database and verify. More on that under 'API Documentation'.
  
  ## Getting Started

Clone the repository on your local machine with the command below in your terminal, and cd into the **my-app**

<!-- Insert repo link below -->

```bash
https://github.com/sulekaustubh/BookMyShow-App-Backend.git

cd my-app
```

Install dependencies (if you are using yarn then do with that)

```bash
npm install
```

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

## Project Description

<b>Project Name : <i>BookMyShow</i> </b>
<a href ="https://bookmyshow-project-frontend.vercel.app"/>
Live Here
</a>
<br></br>
<b>Backend Deployment:</b>
<a href="https://bookmyshow-project-backend.vercel.app"/>
Live here
</a>
<br></br>
<b>Configure Database:</b>
Open MongoDB Compass and use Mongo_URI given below
(**Mongo_URI**="mongodb+srv://bms:bms123@bookmyshowDB.1bw2pfo.mongodb.net/bookMovie?retryWrites=true&w=majority")

 </br>

## Languages and Tools used:

 <div>
<img src="https://skills.thijs.gg/icons?i=mongodb" title="MongoDB" alt="MongoDB"/>&nbsp;
  <img src="https://avatars.githubusercontent.com/u/10251060?s=200&v=4" title="Postman" alt="Postman" width="50" height="50"/>&nbsp;
  <img src="https://skills.thijs.gg/icons?i=nodejs" title="NodeJS" alt="NodeJS" />&nbsp;
  <img src="https://pngimage.net/wp-content/uploads/2018/05/express-js-png-5.png" title="ExpressJS" alt="ExpressJS" width="50" height="50"/>&nbsp;  
</div><br>

<b>Team Collaborators: </b>

  <p>➤ <i>Ritu Verma</i></p>
  <p>➤ <i>Saad Ansari</i> </p> 
  <p>➤ <i>Md. Ashif Reza</i></p>
  <p>➤ <i>Kaustubh Sule</i></p>
 <br>

# API Documentation

- This API Documentation deals with the specifications of endpoints used in the full-stack project named the 'Book that Show' App. It has SIGN UP and SIGN IN API to deal with user authentication. 
- When new users are successfully signed up, they will receive a token. To book new tickets, view booking details,etc, this token needs to be entered under the Headers section of Postman, where the key: auth-token and value: token. 
- After successfully signing in, the user will be re-directed to Tickets Booking page. It has 2 methods for Movie Ticket Booking: GET and POST. 
- The GET method will fetch the Last Booking details from the database associated with the user and display them under their respective section. The POST method will allow users to book movie tickets and store data in the database. An in-depth understanding of the usage of API endpoints is mentioned below.

## SignUp

Used to provide token to newly registered users.  
**URL if using Local Host** : `http://localhost:8080/users/signup`

**URL if using Postman** : `https://bookmyshow-project-backend.vercel.app/users/signup`

**Method** : `POST`

**Auth required** : NO  

**Data constraints**

```json
{
    "username": "[valid username of minimum 3 characters]",
    "email": "[valid email id]",
    "password": "[password of minimum 5 and maximum 10 characters]"
}
```

**Data example**

```json
{
    "username": "AlmaBetter",
    "email": "almabetter123@gmail.com",
    "password": "ab123"
}
```

### Success Response

**Code** : `201 OK`

**Content example**

```json
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsbWFiZXR0ZXIxMjNAZ21haWwuY29tIiwiaWQiOiI2MzhiNjAzY2U1MjZkZGVkYWNiOThkOTkiLCJpYXQiOjE2NzAwNzg3NjN9.DBmn9QYLJjWfUTsciU484lZYi1Nv_8PUvY7aBWFcD18"
}
```

### Error Response

**Condition** : If 'user with an email' already exists.

**Code** : `403 Forbidden`

**Content** :

```json
{
    "success": false,
    "message": "Sorry a user with this email already exists"
}
```

**Code** :`500`

**Content** :

```json
{
    "errors": ["Something went wrong"]
}
```

## SignIn

Get the details of the currently Authenticated User.

<!-- **URL if using Local Host** : [**http://localhost:8080/users/signin**](http://localhost:8080/users/signin) -->
**URL if using Local Host** : `http://localhost:8080/users/signin`

**URL if using Postman** : `https://bookmyshow-project-backend.vercel.app/users/signin`

**Method** : `POST`

**Auth required** : `NO`

**Data constraints**

```json
{
    "email": "[valid email id]",
    "password": "[password ]"
}
```

**Data example**

```json
{
    "email": "almabetter123@gmail.com",
    "password": "ab123"
}
```

### Success Response

**Code** : `201 OK`

**Content example**

```json
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsbWFiZXR0ZXIxMjNAZ21haWwuY29tIiwiaWQiOiI2MzhiNjAzY2U1MjZkZGVkYWNiOThkOTkiLCJpYXQiOjE2NzAwNzg3NjN9.DBmn9QYLJjWfUTsciU484lZYi1Nv_8PUvY7aBWFcD18"
}
```

### Error Response

**Code** : `404 BAD REQUEST`

**Condition** : **If 'user with entered email' not found**

**Content** :

```json
{
    "success": false,
    "message": "User not found"
}
```

**Code** : `400 BAD REQUEST`

**Condition** : **If 'user' enters wrong password**

**Content** :

```json
{
    "success": false,
    "message": "Invalid Credentials"
}
```

**Code** :`500`

**Content** :

```json
{
    "error": ["Something went wrong"]
}
```

## GET

The GET method is a HTTP method that is applied while requesting information from a particular source. It is also used to get a specific variable derived from a group.

**API to get information of available tickets at a given position**

**Request method**: `GET`

**URL if using Local Host**: `http://localhost:8080/api/booking`

**URL if using Postman** : `https://bookmyshow-project-backend.vercel.app/api/booking`

**Auth required** : YES

**Data constraints**

```json
{
    "movie": "[choose a movie name]",
    "slot": "[choose a time-slot]",
    "seats": {
        "A1": "[Number of seats]",
        "A2": "[Number of seats]",
        "A3": "[Number of seats]",
        "A4": "[Number of seats]",
        "D1": "[Number of seats]",
        "D2": "[Number of seats]"
    }
}
```

**Data example**

```json
{
    "movie": "Tenet",
    "slot": "8:00 AM",
    "seats": {
        "A1": 9,
        "A2": 2
    }
}
```

### Success Response

**Code** : `200 OK`

**Content example**

```json
[
    {
        "seats": {
            "A1": 9,
            "A2": 2
        },
        "_id": "6385dab44f30f232679290b4",
        "user": "63851043d6018785f2d3ad45",
        "movie": "Tenet",
        "slot": "8:00 AM",
        "__v": 0
    }
]
```

### Error Response

**Code** : `401 Unauthorized`

**Content example**

```json
{
    "error": "Please authenticate using a valid token"
}
```

**Code** : `500 BAD REQUEST`

**Content example**

```json
{
    "error": "Internal server error"
}
```

## POST

POST is an HTTP method designed to send data to the server from an HTTP client. It requests the web server accept the data enclosed in the body of the POST message.

**API to book movie tickets at a given position**

**Request method**: `POST`

<!-- **URL if using Local Host**: [**http://localhost:8080/api/booking**](http://localhost:8080/api/booking) -->
**URL if using Local Host** : `http://localhost:8080/api/booking`

**URL if using Postman** : `https://bookmyshow-project-backend.vercel.app/api/booking`

**Auth required** : `YES`

**Data constraints**

```json
{
    "movie": "[choose a movie name]",
    "slot": "[choose a time-slot]",
    "seats": {
        "A1": "[Number of seats]",
        "A2": "[Number of seats]",
        "A3": "[Number of seats]",
        "A4": "[Number of seats]",
        "D1": "[Number of seats]",
        "D2": "[Number of seats]"
    }
}
```

**Data example**

```json
{
    "movie": "Tenet",
    "slot": "8:00 AM",
    "seats": {
        "A1": 9,
        "A2": 2
    }
}
```

### Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "user": "63851043d6018785f2d3ad45",
    "movie": "Tenet",
    "slot": "8:00 AM",
    "seats": {
        "A1": 9,
        "A2": 2
    },
    "_id": "6385dab44f30f232679290b4",
    "__v": 0
}
```

### Error Response

**Code** :`401 Unauthorized`

**Condition** :**If user authorization is missing**

**Content example**

```json
{
    "error": "Please authenticate using a valid token"
}
```

**Code** : `400 BAD REQUEST`

**Condition** : **If movie name is missing**

**Content example**

```json
{
    "errors": [
        {
            "value": "",
            "msg": "Movie name is required",
            "param": "movie",
            "location": "body"
        }
    ]
}
```

**Condition** : **If time-slot is missing**

**Content example**

```json
{
    "errors": [
        {
            "value": "",
            "msg": "time is required",
            "param": "slot",
            "location": "body"
        }
    ]
}
```

**Condition** : **If seat-slot is missing**

**Content example**

```json
{
    "errors": [
        {
            "value": "",
            "msg": "seat is required",
            "param": "seats",
            "location": "body"
        }
    ]
}
```

**Code** : `500`

**Content example**

```json
{
    "error": "Internal Server Error"
}
```
