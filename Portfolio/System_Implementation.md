<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/NotSoBoredGamesTitleAnim.gif)

</div>

___

# System Implementation

In this section, we discuss the the system implementation of the app. We start with a stack architecture and system design overview. Then, we look closely at the middle tier covering Express, Node, RESTful API. After that we move to the front end and go over Angular, before moving on to authentication and deployment and integration.

## Table of contents

* [**Stack architecture and system design**](#Stack-architecture-and-system-design)
   * [Overview of stack](#overview-of-stack)
   * [Class diagrams](#class-diagram)
   * [Sequence diagrams](#sequence-diagrams)
* [**Back End**](#back-end)
   * [MongoDB](#mongodb)
   * [Details of Implementation](#details-of-implementation)
* [**Middle tier**](#middle-tier)
   * [Express](#express)
   * [Node](#node)
   * [RESTful API](#restful-api)
   * [Details of Implementation](#details-of-implementation)
* [**Front end**](#front-end)
   * [Angular](#angular)
   * [Details of Implementation](#details-of-implementation)
* [**Additional elements and components**](#additional-elements-and-components)
   * [Details of Implementation](#details-of-implementation)
* [**Deployment and integration**](#deployment-and-integration)
   * [Details of Implementation](#details-of-implementation)


## Stack architecture and system design

In this section, we will now give a quick overview of the architecture and how it functions. First though, let's define key terms. To begin with, what is a single page application?

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/implementation5.png)

</div>

In an angular app, we have one root index.html file. We serve that from our node server or from a different server (it can be decoupled from node).

This html page includes script imports that houses our angular app, the angular framework and our code. We use that application to dynamically re-render what the user sees without sending a request for a second page to be rendered by the server because we never need to reload the page. We instead navigate to the page directly. We add new elements, helped out by the angular framework. This offers a powerful way to change the page. This provides a really interactive and fast webpage. Instant re-rendering, instant user feedback and makes building an engaging UI possible. Dynamically re-rendered all the time by angular.

How does the MEAN stack work then?

### Overview of stack

Let's have a look at the architecture.

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/implementation1.png)

</div>

We have the client side in the browser and the server side where we run our business logic which the user only indiretly uses. In the client side we use angular. On the server-side, we use node.js, expresss and mongoDB (not direcly connected to by Anglar).

Client(browser) is presentation and UI. This can be served by Amazon Web Services (AWS), it doesn't have to be served by the node backend.

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/implementation6.png)

</div>


Sever side we have the business logic, persistent data storage and authentication. Below is a diagram of a MEAN stack request/response data flow between client-server-database:

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/implementation7.png)

</div>

How do we connect these two? We send requests and responses. These are called AJAX (Background) requests and responses. We get JSON formatted data from this.

This is the big picture view of the MEAN stack. Now, let's turn to class and sequence diagrams.

### Class diagrams


### Sequence diagrams

With this information in mind, we will turn our attention to the back-end of the stack and provide a detailed overview of its implementation.

## Back end

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/implementation2.png)

</div>

For our database, we used MongoDB. MongoDB is a NoSQL database which stores documents in collections instead of records in tables as with a SQL database. MongoDB stores application data (e.g., users and products) and enforces no data schema or relations. For this reason is is much less strict than a SQL database. It is also easily connected to Node.js and Express. However, importantly, it is not easily connected to Angular for security reasons. But why did we choose MongoDB?

There are several reasons. Firstly, MongoDB is a powerful database that can be easily integrated into a Node/Express environment. For this reason, it was an obvious choice, as we were looking to build our application quickly and with as little problems as possible. The 'M' in MEAN was, therefore, very important to ensure everything worked well and without issues. Secondly, MongoDB is highly scalable. Were we to continue with NotSoBored games and try make it into a business, mongoDB would allow for us to scale in size.

So, why didn't we use a SQL database instead? We decided not to do this because we wanted to use the MEAN stack, which is a recognised stack that enables quick builds, and we also recognised that, for our purposes, we don't require a database to hold data with lots of connections. Instead, the data we will be storing requires very few. Give this fact, we felt it wasn't necessary to use SQL.

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/Mongooseicon.png)

</div>

With the MongoDB database working we then looked to create our data model. This was done using Mongoose which is a more straight-forward, schema-based solution of modelling our MongoDB database. Mongoose utilises an object-orientated approach with the creation of an instance of a collection (equivalent to tables in relational databases). These created collections can then be referenced by the API to populate with the required information. This straightforward approach supports the production of the API and allows us to capture and send the data wherever needed for easy front-end use.

### Details of Implementation

With Lizhao and Harri working on the backend they had to maintain good communication throughout production. Harri was in charge of creating the database structure whilst Lizhao focused her attention on the API. The team collaborated on an intial idea for a schema (collection) shown in the ERD diagram below. The team noted that the priority was the user login information as well as the specific game information such as the Users involved. Furthermore, some extra details were added such as top scores, statistics about the game and any extras such as avatars. This allowed potential to expand the app to have a leaderboard element and some customization.

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/ERD1.png)

Upon implementation of this proposed schema we noted a few issues in the design. Firstly, the 'GameManager' part of the collection was largely obsolete and thus was removed. We also decided against the 'avatar' extra for the moment given the large workload we still had. Once all concerns had been discussed between the back-end team, Harri produced the intial database. From there on Lizhao took over in writing her API to write and use the stored data as needed. Lizhao needed to make some final tweaks to the database to work alongside the API. A final Database Class Diagram was produced to represent our database below:

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/DatabaseClassDiagram.png)

Based on the diagram, we defined the User schema and Game schema using Mongoose as the following:

[user.js](https://github.com/ChrisEssery/group-project/blob/dev/server/models/user.js)
```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema ({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email: {type: String, required: true},
  name: {type: String},
  surname: {type:String},
  age: {type: Number},
  gender: {type: String},
  location: {type: String},
  wins: {type: Number},
  friends: [{type: String}],
  gamesPlayed: [{
    gamename:{type: String},
    date: {type: Date, default: Date.now},
    playedWith: [{type: String}],
    result:{type: String}}]
});

module.exports = mongoose.model('User', User);
```

[game.js](https://github.com/ChrisEssery/group-project/blob/dev/server/models/game.js)
```javascript
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Game = new Schema({
    gameName: {type: String, required: true},
    date: {type: Date, default: Date.now},
    players: [{
        username: {type: String, required: true}, //player1's username
        result: {type: String, required: true},
        score: {type: Number}
    }],
    difficultyLevel: {type: String}, // not required
  });

  module.exports = mongoose.model('Game', Game);
```

Having gone over the database implementation, we move to the middle tier of our system.

## Middle tier

Turning to the middle tier, we have Express, Node.js and RESTful API.


<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/implementation3.png)

</div>

### Node

Node.js is the language used for the backend. Specifically, it is a server-side library with javascript on the server-side. It listens to requests and responds accordingly. It executes server-side logic and interacts with databases and files.

This is an alternative to PHP.

### Express

Express is a Node.js framework which simplifies writing server-side logic. It is build on top of the node.js framework, and enhances its functionality. It offers the same functionalities as node and is middleware-based, funnelling requests through functions. Its functionality includes routing, view-rendering and more, and depending on the client requests, it uses 'routes' to assist in directing users to different parts of a web application, thereby fast tracking the process improving the speed of server-based applications.  


### RESTful API

RESTful API makes it easy to decouple the backend code from the front end so that it can be used across multiple applications/platforms. To build a RESTful API, we use Node.js as our backend language, express.js to create routes easier and middlewares, and mongodb together with mongoose to create schemas and models and store the data.

### Details of Implementation

We now give a detailed overview of the API implementation, beginning with the API work flow.

### API Work Flow

- API route:  http://localhost:3000/api
    - Request game data: http://localhost:3000/api/games
    - Request user data: http://localhost:3000/api/users

**Here is a flowchart of how our api will handle a request**

<p align="center">
<img src="https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/images/api%20call%20flowchart.png">
</p>
<b><p align= "center">Figure : api flowchart </p></b>


**[api.js](https://github.com/ChrisEssery/group-project/blob/dev/server/routes/api.js)** catches all api routes and sends the requests based on the request data type (game or user) to the corresponding router file (games.js and users.js)

**[games.js](https://github.com/ChrisEssery/group-project/blob/dev/server/routes/games.js)** handles with all api requests that query about game data (i.e. [Add a new game instance](#Add-a-new-game-instance), [Get top users of a specific game according to the game score](#Get-top-users-of-a-specific-game-according-to-the-game-score))

**[users.js](https://github.com/ChrisEssery/group-project/blob/dev/server/routes/users.js)** handles with all api requests that query about user data (i.e. [User Register](#User-Register), [User Log in](#User-Log-In), [Get a user's friendlist](#Get-a-user's-friendlist), [Get a user's game history](#Get-a-user's-game-history))

**[middleware.js](https://github.com/ChrisEssery/group-project/blob/dev/server/routes/middleware.js)** serves as a middleware which prevents unauthorized access without valid token and makes sure every request comes with a valid and unexpired X-Acess-Token.

### Use the [HTTP Status Code](#Returne-Status-Code-Specification) to identify the Status

**Returned Status Code Specification**

| status code | Meaning                              | Notes                                                        |
| ----------- | ------------------------------------ | ------------------------------------------------------------ |
| 200         | OK                                   | A successful get request                                     |
| 201         | CREATED                              | A successful post/put request                                |
| 204         | DELETED                              | A successful delete request                                  |
| 400         | BAD REQUEST                          | The requested address does not exist or contains an unsupported parameter |
| 401         | UNAUTHORIZED                         | A validation error occurred while checking permission (e.g. invalid username or password) |
| 403         | FORBIDDEN                            |                                                              |
| 404         | NOT FOUND                            |                                                              |
| 409         | CONFLICT                             | A validation error occurred while creating an object, (e.g. conflict username) |
| 422         | Unprocesable entity [POST/PUT/PATCH] | A validation error occurred while creating an object         |
| 500         | INTERNAL SERVER ERROR                |                                                              |


### Error Handling
When an error occurs, the returned HTTP Status Code is 4xx error, such as `400,403,404`. And an error message will be returned to indicate the problem.

**Example response**

case: the user attempts to login with incorrect password

returned status code: `401`

returned data:

```json
{
  error: 'invalid password'
}
```

### API Request & Response data are set in a uniform format using JSON

**Request Overview**

- [x] [User Register](#User-Register)
- [x] [User Log in](#User-Log-In)
- [x] [User Sign out](#User-Log-Out)
- [x] [Get a user 's personal information](#Get-a-user's-personal-information)
- [x] [Get a user's friendlist](#Get-a-user's-friendlist)
- [x] [Get a user's game history](#Get-a-user's-game-history)
- [x] [Update a user's personal information](#Update-a-user's-personal-information)
- [x] [Add a friend to a user's friendlist](#Add-a-friend-to-a-user's-friendlist)
- [x] [Add a new game instance](#Add-a-new-game-instance)
- [x] [Get top users according to winning times](#Get-top-users-according-to-winning-times)
- [x] [Get top users of a specific game according to the game score](#Get-top-users-of-a-specific-game-according-to-the-game-score)

#### User Register

**Request:**

- HTTP Method: `POST`
- Path: `/users`
- Sent data:

```json
{
   "username": "aaa",
   "email": "aaa@email.com",
   "password": "12345"
}
```

**Response:**

- Status code: `201`
- Returned data:

```json
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTk2NTQ0NzI0Nzh9.Ha9QrGrexSwW_qhkXM6Rt6oPTxFmyWzpBUeDTbklvLg",
    "user": "aaa"
}
```


#### User Log In

**Request:**

- HTTP Method: `POST`
- Path: `/users/session`
- Sent data:

```json
{
   "username": "ccc",
   "password": "12345"
}
```

**Response:**

- Status code: `201`
- Returned data:

```json
{
    {
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI2MDc4ZTAzZTBiNWEzMDNmNGNmZjJmYTciLCJleHAiOjE2MTk2NTQ1MTIxMzl9.nR3kFnBseD8oeEfcPFrmKe8eLEExRiIzwlUZv_5ABXY",
    "user": "ccc"
    }
}
```

#### User Log Out

**Request:**

- HTTP Method: `DELETE`
- Path: `/users/session`

**Response:**

- Status code: `204`



#### Get a user 's personal information

**Request:**

- HTTP Method: `GET`
- Path: `/users/info/:username`

| parameters | isRequired | explanation |
| ---------- | ---------- | ----------- |
| username   | YES        | username    |

**Response:**

- Status code: `200`
- Returned data:

```json
{
        "username": "aaa",
        "email": "aaa@email.com",
        "name": "aaa" ,
        "surname": "Smith",
        "age": 70,
        "gender": "male",
        "location": "bristol"
}
```

#### Get a user's friendlist

**Request:**

- HTTP Method: `GET`
- Path: `/users/friends/:username`

| parameters | isRequired | explanation |
| ---------- | ---------- | ----------- |
| username   | YES        | username    |

**Response:**

- Status code: `200`
- Returned data:

```json
{
   "friends": [
        "aaa",
        "bbb"
    ]
}
```

#### Get a user's game history

**Request:**

- HTTP Method: `GET`
- Path: `/users/games/:username/:limit`

| parameters | isRequired | explanation                                         |
| ---------- | ---------- | --------------------------------------------------- |
| username   | YES        | username                                            |
| limit      | YES        | the number of games returned (from the most recent) |

**Response:**

- Status code: `200`
- Returned data:

```json
{
    "gamesPlayed": [
        {
            "playedWith": [
                "bbb"
            ],
            "_id": "6080bfd26216e5aaeee2049d",
            "gamename": "Memory Game",
            "result": "win",
            "date": "2021-04-22T00:14:10.968Z"
        },
        {
            "playedWith": [
                "bbb"
            ],
            "_id": "6080bfff6216e5aaeee204a2",
            "gamename": "Connect 4",
            "result": "win",
            "date": "2021-04-22T00:14:55.965Z"
        }
    ]
}
```

#### Update a user's personal information

**Request:**

- HTTP Method: `PUT`
- Path: `/users/info/:username`

| parameters | isRequired | explanation |
| ---------- | ---------- | ----------- |
| username   | YES        | username    |

- Sent data:

```json
{
   "email": "aaa@email.com",
   "name": "aaa" ,
   "surname": "Smith",
   "age": 70,
   "gender": "male",
   "location": "bristol"
}

```

**Response:**

- Status code: `201`
- Returned data:

```json
{
    "result": "updated successfully"
}
```

#### Add a friend to a user's friendlist

**Request:**

- HTTP Method: `POST`
- Path: `/users/friends/:username`

| parameters | isRequired | explanation |
| ---------- | ---------- | ----------- |
| username   | YES        | username    |

- Sent data:

```json
{
   "friendName": "aaa"
}

```

**Response:**

- Status code: `201`
- Returned data:

```json
{
    "result": "friend aaa is added successfully",
    "friends": [
        "bbb",
        "aaa"
    ]
}
```


#### Add a new game instance

**Request:**

- HTTP Method: `POST`
- Path: `/games/memorygame` OR `/games/connect4`
- Sent data:

```json
{
   "players": [
      {
         "username" : "aaa",
         "result" : "WIN",
         "score": 23  //not required, add it if there is a score
      },
      {
         "username" :"bbb",
         "result": "LOSE"
      }
   ],
   "difficultyLevel": "easy" //if there is a choice of difficulty level
}
```

**Response:**

- status code: 201

```json
{
    "result": "game added"
}
```


#### Get top users according to winning times

**Request:**

- HTTP Method: `GET`
- Path:  `/users/leaderboard/:limit`

| parameters | isRequired | explanation                        |
| ---------- | ---------- | ---------------------------------- |
| Limit      | YES        | the number of top players returned |

**Response:**

- status code: 200
- Returned data:

```json
[
    {
        "username": "aaa",
        "wins": 5
    },
    {
        "username": "bbb",
        "wins": 1
    }
]
```

#### Get top users of a specific game according to the game score

**Request:**

- HTTP Method: `GET`
- Path:  `/games/scores/:gamename/:limit/:order`

| parameters | isRequired | explanation                                                  |
| ---------- | ---------- | ------------------------------------------------------------ |
| Limit      | YES        | e.g. 3 means the top 3 scores                                |
| gamename   | YES        | e.g. memorygame OR connect4                                  |
| order      | YES        | sort order: 1 -> sort in ascending order， 0 -> sort in descending order |

**Response:**

- status code: 200
- Returned data:

```json
{
  [
    {
        "score": 19,
        "username": "aaa"
    },
    {
        "score": 20,
        "username": "ddd"
    }
  ]
}
```



### User Authentication in the Backend

<p align="center">
<img src="https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/images/userauth(backend).png">
</p>
<b><p align= "center">Figure : user authentication process to deal with a request (backend) </p></b>

To prevent the unauthorized access from the frontend, we implemented the interface authentication with uniform use of Token authentication (based on [JSON Web Token](https://jwt.io/)), which include the following features:

1. The token (JWT string with secret) is created when the user login/signup and will be sent back to the client with the user information.
```javascript

    const token = jwt.encode({
    iss: body.id,
    exp: moment().add( 7, 'days').valueOf()}, 'secret')
    delete body.password
    res.status(201).json({
    token,
    user: body.username
  })
```
2. Interfaces that require authorization must provide the request header field X-Access-Token information

To implement that, we created a [middleware.js](https://github.com/ChrisEssery/group-project/blob/dev/server/routes/middleware.js) to check the token validity before handling the requests in the server, which can be seen below:

```javascript
exports.check_api_token = (req, res, next) => {
    const token = req.get('x-access-token')
    //check if the request contains a X-Access-Token
    if (!token) {
      return res.status(401).json({
        error: 'Authentication failure: X-Access-Token information could not be found in the request'
      })
    }
   //check if the token is valid
    try {
      const decodedToken = jwt.decode(token, 'secret')
      // check if the token is expired
      if (decodedToken.exp < moment().valueOf()) {
        return res.status(401).json({
          error: 'Authentication failed: Token has expired'
        })
      }
      req.body.userId = decodedToken.iss
      next()
    } catch (err) {
      res.status(401).json({
        error: 'Authentication failed: Invalid Token'
      })
    }
  }
```

### User data protection
In order to keep the password secure before saving to the database, we used [blueimp-md5](https://www.npmjs.com/package/blueimp-md5) to encrypt the user password, which can be seen below: 

Case: User Register:
```javascript
   //encrypt password
    body.password = md5(body.password)
```
Case: User Log in:
```javascript
    //check password
    if (md5(body.password) !== targetUser.password) {
        return res.status(401).json({
           error: 'invalid password'
        })
    }
```



We now turn our attention to the front-end of our application.

## Front end

For the front end, we decided to use Angular.

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/implementation4.png)

</div>

Angular is a client-side framework which is really effective at building SPAs. This is because it simultaneously renders UI with dynamic data, handles user input and communicates with the services in the back end. This, in many ways, creates an experience similar to that of a mobile app.

Angular is great for getting creating a professional UI in very little time. The tree of angular components are really useful for several reasons. First, it's easily maintainable. Second, readability is improved. Third, reusability. The details of our front-end implementation now follow.


### Details of Implementation


Below is an image of the front-end class diagram:

![image](https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/images/frontend%20tree.png)

And below is the front-end flowchart:

![image](https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/images/(updated)flowchart%20frontend.png)

For our front-end, we had a number of separate pages. Each of these pages consisted of a number of components linked together via Angular router. Angular router allowed the user to navigate from one page to another. Let's consider these pages, identify notable features with relevant links to the code.

### User Authentication in the Frontend

To implement user authentication with Angular in the frontend, we referred to the following struture(credit: bezkoder):

<p align="center">
<img src="https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/images/userauth%20angular.png">
</p>

<b><p align= "center">Figure : User Authentication with Router and HttpInterceptor (credit: bezkoder)</p></b>

To introduce the detailed features of how we implement user authentication in the frontend, we'll start with the user registration and login process:

#### User registration and user login 

The [`Login`](https://github.com/ChrisEssery/group-project/tree/dev/src/app/login-page) & [`Register`](https://github.com/ChrisEssery/group-project/tree/dev/src/app/signup-page) components have forms for submission data (with support of Form Validation). Then, they use [`auth.service`](https://github.com/ChrisEssery/group-project/blob/dev/src/app/_services/auth.service.ts) which uses Angular `HttpClient` ($http service) for sending signin/signup requests (shown below).

```javascript
export class AuthService {
  private USER_AUTH_API = "http://localhost:3000/api/users";

  constructor(private httpClient: HttpClient) {}

  register(userData: any){
    return this.httpClient.post(this.USER_AUTH_API, userData)
  }

  login(credentials: any){
    return this.httpClient.post(this.USER_AUTH_API+'/session', credentials)
  }
  
  signout(username: String){
    return this.httpClient.delete(this.USER_AUTH_API+'/session')
  }
}
```

With the functions provided in [`auth.service`](https://github.com/ChrisEssery/group-project/blob/dev/src/app/_services/auth.service.ts), the client is able to communicate with the backend as shown below:

<p align="center">
<img src="https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/images/sign%20up.png">
</p>

<b><p align= "center">Figure : User Registration Sequence Diagram</p></b>

<p align="center">
<img src="https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/images/login.png">
</p>

<b><p align= "center">Figure : User Log In Sequence Diagram</p></b>

As we can see, the token (JWT) will be generated and returned with every successful login/signup request which will then be needed as a passport for further requests on protected resources. Therefore, the token will be saved to the Browser Session Storage with the use of `token-storage.service`

#### Use token-storage.service to save the token and username to or get the token and username from the Browser Session Storage

The [`token-storage.service`](https://github.com/ChrisEssery/group-project/blob/dev/src/app/_services/token-storage.service.ts) is an Angular injectable service file which can save the token and username to or get the token and username from the `Browser Session Storage`. This includes the following functions:

```javascript
export class TokenStorageService {
  constructor() { }

  clearToken(): void {
    window.sessionStorage.clear();
    console.log('signed out')
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return window.sessionStorage.getItem(TOKEN_KEY)|| '{}'
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    return window.sessionStorage.getItem(USER_KEY)|| '{}'
  }
}
```

#### Use auth.interceptor to add the token to HTTP Authorization Header before sending request to the backend

Every HTTP request by `$http` service will be inspected and transformed before being sent by [`auth.interceptor`](https://github.com/ChrisEssery/group-project/blob/dev/src/app/_services/auth.interceptor.ts), which can be seen below:

```javascript
const TOKEN_HEADER_KEY = 'X-Access-Token';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private token: TokenStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq = request;
    const token = this.token.getToken();
    if (token != null) {
      authReq = request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, token)});
    }
    return next.handle(authReq);
  }
}
```

#### Use auth-guard.guard to block unauthorized access to protected routes

We use [`auth-guard.guard`](https://github.com/ChrisEssery/group-project/blob/dev/src/app/_services/auth-guard.guard.ts) to block the routes from loading based on some permissions or blocking a route based if not authenticated. If the access attemps are unauthorized, we use `router` to navigate to the login page:

```javascript
export class AuthGuard implements CanActivate {
  constructor(private router:Router, private tokenStorageService:TokenStorageService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token=this.tokenStorageService.getToken()
    if(!token){
      this.router.navigate(['/signin'])
      return false
    }
    return true
  }
}
```

In the [`app-routing.module.ts`](https://github.com/ChrisEssery/group-project/blob/dev/src/app/app-routing.module.ts), any attempts to access the home page will be passed to [`auth-guard.guard`](https://github.com/ChrisEssery/group-project/blob/dev/src/app/_services/auth-guard.guard.ts) to check the permission. 

An example to use [`auth-guard.guard`](https://github.com/ChrisEssery/group-project/blob/dev/src/app/_services/auth-guard.guard.ts) in the [`app-routing.module.ts`](https://github.com/ChrisEssery/group-project/blob/dev/src/app/app-routing.module.ts) can be seen below:

```javascript
    path: 'home',
    component: HomePageComponent,
    canActivate: [AuthGuard], //Prevent unauthorized access
    children: [
      {
        path: '',
        component: GameMenuComponent 
      },
      {
        path: 'profile', 
        component: ProfileComponent
      },
      {
        path: 'leaderboard',
        component: LeaderboardComponent
      }
```

Therefore, we updated our flowchart to include [`auth-guard.guard`](https://github.com/ChrisEssery/group-project/blob/dev/src/app/_services/auth-guard.guard.ts):

<p align="center">
<img src="https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/images/flowchart%20frontend(with%20authguard).png">
</p>

<b><p align= "center">Figure : Flowchart for the frontend</p></b>



### Start page

The first page of our application is the start page. This is shown below.

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/start-page.png)

</div>

Let's take a closer look at the main features of this page. This consisted of three separate components, including a background, title, and btngrp1 component.

 * [Start-page.component.html](https://github.com/ChrisEssery/group-project/blob/dev/src/app/start-page/start-page.component.html). As mentioned in the subsection on [digital literacy](https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/Background.md#digital-literacy) in the Background section of this report, a digital game for the elderly should be designed with the needs of the target user in mind. As such, we decided to make the user interface bright, bold and easy to use. So, we decided to have a bright, engaging background, a clear bold title and two buttons, one to 'sign up' and another 'login'.

 ```
 <app-background></app-background>
 <app-title></app-title>
 <br>
 <br>
 <br>
 <br>
 <app-btngrp1></app-btngrp1>

 ```

 * [Background.component.css](https://github.com/ChrisEssery/group-project/blob/dev/src/app/start-page/background/background.component.css). Add information

 The following code was used to make the screen responsive to different variations in screen size, including mobile responsiveness. This was important as we were aware that some users would want to access and view their profile and the leaderboard using their smartphones and/or tablets.

 ```
 @media screen and (max-width:1024px) {
   /* Specific to this particular image */
   .bgPulse {
     left:50%;
     margin-left: -512px;
     /* 50% */
   }
 }

 ```

 * [Title.component.css](https://github.com/ChrisEssery/group-project/blob/dev/src/app/start-page/background/title.component.css). Add information

### Login

The next page is the login. This is shown in the image below:

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/login-page.png)

</div>

The main features of the login were

 * [Login.component.ts](https://github.com/ChrisEssery/group-project/blob/dev/src/app/login-page/login.component.ts). Add information

 ```
 login(){
    const formData = this.checkLoginForm
    this.authService.login(formData).subscribe(
      (data:any)=>{
        this.errMsg = ''
        this.tokenStorageService.saveToken(data.token)
        this.tokenStorageService.saveUser(data.user)
        this.router.navigate(['/home'])
      },
      error=>{
        if(error.status === 401) {
          this.errMsg ="invalid username/password"
        }
      }
    )

 ```
 * [Login.component.html](https://github.com/ChrisEssery/group-project/blob/dev/src/app/login-page/login.component.html). Add information
 * [Login.component.css](https://github.com/ChrisEssery/group-project/blob/dev/src/app/login-page/login.component.css). Add information

### Games

We chose to build just two games. Here are the main features of these games:

### Leaderboard

One important part of our product was to have a leaderboard. Here is the leaderboard:

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/leaderboard.png)

</div>

The main features of the leaderboard are in the following component:

 * [Leaderboard.component.ts](https://github.com/ChrisEssery/group-project/blob/dev/src/app/home-page/leaderboard/leaderboard.component.ts) Add information

 This calls dataService.getWinsLeaderboard which is found under services
 ```
 ngOnInit(): void {
    this.dataService.getWinsLeaderboard(10).subscribe(
      (data:any)=>{
        this.players=data
        console.log(data)
      },
      error=>{
        console.log("fail to load the data")
      }
    )
  }

 ```
  The getWinsLeaderboard in data.service.ts:

  ```

  getWinsLeaderboard(limit: number){
    return this.httpClient.get(this.REST_API_SERVER_USER+'/leaderboard/'+limit)
  }

  ```
 * [Leaderboard.component.html](https://github.com/ChrisEssery/group-project/blob/dev/src/app/home-page/leaderboard/leaderboard.component.html) Add information

### Profile

Add information on this page.

## Additional elements and components

We will now cover the additional elements and components we added to our application.

### Details of Implementation


## Deployment

The deployment of our app utilized the software known as Docker. Compatibility for differing components of our app can be troublesome, alonside OS requirements. Docker allows each component of the app to be ran it's own personalized environment known as a container. This technique is not specific to Docker software but it's functionality and versatility make it one of the best containerising softwares in deployment today.      

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/Docker_Image.png)

### Details of Implementation

Initially a Dockerfile was created so that the node element of our app could be containerised and served. This allowed us to view the front-end from very early stages in the production.

In preperation for the back-end a wait-script was added which allowed the MongoDB database to always start-up prior to the node element of our app. This allowed synchronization between the containers.

Once the back-end work had begun we could then create the docker-compose configuration file. This allowed us to containise the database seperate to the node element. Once implemented the back-end could 'talk' to the front-end easily without any trouble. With our multiplayer aspect of the app we needed to tweak the docker-compose slightly to accept some extra ports in order for this to work as expected.

### Multiplayer Functionality

## WebSockets
Reliable real-time data communication is essential on the modern Internet. To meet these demands, in 2011 the WebSocket protocol was developed. This protocol allows web applications to send and receive data instantly. It can be used for purposes such as chat applications, location information-based applications or multiplayer games.

The WebSocket protocol works by providing full-duplex (bi-directional, or both ways) communication between the client and a server over a single TCP connection. A HTTP system (which is implemented in your typical webpage) consists of a server that is responsible for responding to HTTP messages from the client; the client sends a request, the server sends a response. With the use of WebSockets, both can send and receive requests simultaneously.

HTTP is stateless, which means that the server does not know where the request is coming from and it treats each request as independent. This functionality is sufficient for the serving of basic webpages, but when data is of increasing complexity and time-sensitivity, such as real-time chat, it falls short. WebSockets are stateful, meaning the server will "remember" the client and can in turn handle the management of communication between multiple clients, or separate groups of clients.

The process of WebSocket communcation is as follows:

* The client sends a HTTP handshake request to the server for a WebSocket connection
* If the server is able to fulfill this request, it sends a successful handshake response, with the HTTP code 101
* The connection is then upgraded from HTTP to a WebSocket connection
* TCP is still the underlying protocol and it is full-duplex, allowing bi-directional communication between the client and server
* When it is time for the connection to terminate, both the client and server can initiate the closing of the connection

![alt text](https://images.techhive.com/images/article/2016/06/websockets-100668229-primary.idge.jpg)

## Socket.io
One of the key objectives of this project was to enable real-time multiplayer functionality for the games that have been developed for the application. Initially APIs such as PubNub and Phaser.io were explored as potential solutions for this. However, on evaluation, a less fully-featured solution such as WebSockets was deemed more appropriate and Socket.io was chosen to implement it.

![alt_text](https://miro.medium.com/max/1624/0*xAADmPJN52Yy6XJV.jpg)

Socket.io is a JavaScript library that enables real-time communication for web applications that is predominantly built on the WebSocket protocol. However, it has additional functionality such as implementing HTTP long-polling if a WebSocket connection cannot be initiated and automatic reconnection.

A typical implementation of Socket.io can be seen below:

#### Server-side
* Create a HTTP server/listener and a Socket.io object

<img width="336" alt="Screenshot 2021-05-07 at 00 16 16" src="https://user-images.githubusercontent.com/29493918/117377857-2018f500-aecc-11eb-9e50-a8a59c928164.png">

* The Socket.io object will then listen on the specified port for a connection and then execute specified code (in this case giving the player a number and emitting the number back to the client)

<img width="398" alt="Screenshot 2021-05-07 at 00 38 10" src="https://user-images.githubusercontent.com/29493918/117378033-856ce600-aecc-11eb-8841-3a66d5b06a57.png">

#### Client-side
* Create a Socket.io connection to a specified port
* Wait for specific messages from the server, or emit specific messages to the server

<img width="419" alt="Screenshot 2021-05-07 at 00 41 44" src="https://user-images.githubusercontent.com/29493918/117378383-36738080-aecd-11eb-99c9-b2df7d191409.png">

Overall, Socket.io provided all of the functionality required to delivery the multiplayer aspects of the game in a clean, intuitive fashion.

### Real-time Video Chat
Along with multiplayer functionality, providing a real-time video chat solution was another key objective. Initially, we had discussed developing a video chat application from the ground up using ASP.NET and Angular, however we decided that focusing our development time on our own application was a more effective use of our time.

We began researching which services would meet our needs. We explored Twilio, PubNub, Sinch and Jitsi. We ultimately ended up choosing Jitsi, as it provided all the functionality we needed, without additional bloat. Providing we kept the Jitsi logo on the video feed, you are also able to leverage their API for free.

<img src="https://jitsi.org/wp-content/uploads/2018/11/jitsi-logo-blue-grey-text.png" width="500" height="400">

Firstly, we needed to call the Jitsi Meet script in the index.html file of the project.

<img width="436" alt="Screenshot 2021-05-08 at 23 09 44" src="https://user-images.githubusercontent.com/29493918/117554929-a8290700-b052-11eb-8d95-2d6ad8ad60d2.png">

We then generated a component to house all of the Jitsi component logic.

<img width="330" alt="Screenshot 2021-05-08 at 23 10 49" src="https://user-images.githubusercontent.com/29493918/117554952-e0c8e080-b052-11eb-9995-41076576a7d0.png">

At this point, we were then easily able to use the component in any of the other components that required the real-time video chat.

### Deploying to Microsoft Azure
![alt_text](https://miro.medium.com/max/3840/1*_HYOZExV1wV2f0OrfZ9YcA.png)
The platform chosen to deploy a live version of the application was Microsoft's cloud platform Azure as one of our team members, Chris, holds Microsoft-accredited certifcations for the platform. Azure provides Docker support in the form of Azure Container Instances (ACI), which allows the deployment of containers without managing the underlying servers and Azure Container Registry (ACR) for the storage of private Docker container images, which allows easy, scalable deployment.

There are many benefits of using a cloud platform as opposed to your own web server for deploying your applications:

* Scalability - as your business grows or your application becomes more popular, if your application is deployed on only one server, it may struggle to keep up with demand. By using cloud servers, you can either scale up (increase the compute power of your instance) or scale out (increase the number of instances on which your application is deployed). You can also use burstable instances, which only scale up or out for a short period whilst your application is experiencin heavy traffic - meaning you only pay for what you need.

* Integration - Azure has support for many services that may be of use for your application. For example, it provides integration for MongoDB, Docker, Big Data analytics, cheap scalable storage and IoT solutions.

* Automation - Azure provides services such as Logic Apps and Functions, which allow you to automate processes for your systems and minimise the time administrating.

For the purpose of this project, the solution architected was not overly complex. The solution used was Azure App Service. App Service allows you to deploy a container, or code, using the language or framework of your choice. It is a fully managed platform, meaning you don't have to handle any of the management of the underlying servers, such as patching or scaling. In a production environment, you can also use the built-in CI/CD integration do minimise downtime.

There are different levels of App Service plans. The plan used for this deployment was the Basic Plan, with the B1 instance, information for which can be found below.

<img width="1291" alt="Screenshot 2021-05-08 at 22 48 09" src="https://user-images.githubusercontent.com/29493918/117554442-9e51d480-b04f-11eb-96c0-1182b0653506.png">

___

## Navigate

- [Go To Next Section: UX Design](https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/UX_Design.md)
- [Go To Previous Section: Background](https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/Background.md)
- [Go Back To Readme](https://github.com/ChrisEssery/group-project/tree/dev)