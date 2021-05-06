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

How do we conenct these two? We send requests and responses. These are called AJAX (Background) requests and responses. We get JSON formatted data from this.

This is the big picture view of the MEAN stack. Now, let's turn to class and sequence diagrams.

### Class diagrams


### Sequence diagrams


## Back end

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/implementation2.png)

</div>

For our database, we used mongoDB. MongoDB is a NoSQL database which stores documents in collections instead of records in tables as with a SQL database. MongoDB stores application data (e.g., users and products) and enforces no data schema or relations. For this reason is is much less strict than a SQL database. It is also easily connected to Node.js and Express, but importantly not angular for security reasons. Because mongoDB is a powerful database that can be easily integrated into a Node/Express environment, it was an obvious choice, as we were looking to buil dour application quickly and with as little problems as possible. The 'M' in MEAN was, therefore, very important to ensure everything worked well and without issues.

Another advantage of mongoDB is that it is highly scalable. Were we to continue with NotSoBored games and try make it into a business, mongoDB would allow for us to scale in size.

So, why didn't we use a SQL database instead? We decided not to do this because we wanted to use the MEAN stack, which is a recognised stack that enables quick builds, and we also recognised that, for our purposes, we don't require a database to hold data with lots of connections. Instead, the data we will be storing requires very few. Give this fact, we felt it wasn't necessary to use SQL.

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/Mongooseicon.png)

</div>

With the MongoDB database working we then looked to create our data model. This was done using Mongoose which is a more straight-forward, schema-based solution of modelling our MongoDB database. Mongoose utilizes an object-orientated approach with the creation of an instance of a collection (equivalent to tables in relational databases). These created collections can then be referenced by the API to populate with the required information. This straightforward approach supports the production of the API and allows us to capture and send the data wherever needed for easy front-end use.

### Details of Implementation

With Lizhao and Harri working on the backend they had to maintain good communication throughout production. Harri was in charge of creating the database structure whilst Lizhao focused her attention on the API. The team collaborated on an intial idea for a schema (collection) shown in the ERD diagram below. The team noted that the priority was the user login information as well as the specific game information such as the Users involved. Furthermore, some extra details were added such as top scores, statistics about the game and any extras such as avatars. This allowed potential to expand the app to have a leaderboard element and some customization.

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/ERD1.png)

Upon implementation of this proposed schema we noted a few issues in the design. Firstly, the 'GameManager' part of the collection was largely obsolete and thus was removed. We also decided against the 'avatar' extra for the moment given the large workload we still had. Once all concerns had been discussed between the back-end team, Harri produced the intial database. From there on Lizhao took over in writing her API to write and use the stored data as needed.

--Show a final database design schema--

## Middle tier

Now, turning to the middle tier, we have Express, Node.js and RESTful API.


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

- API address:  http://localhost:3000/api 

- Use the [HTTP Status Code](#Returne-Status-Code-Specification) to identify the Status

- The data is transferred in a uniform format using JSON

- Interface authentication: Uniform use of Token authentication (based on JSON Web Token)

- Interfaces that require authorization must provide the request header field X-Access-Token information(see [middleware.js](https://github.com/ChrisEssery/group-project/blob/dev/server/routes/middleware.js))

- User password is encrypted using [blueimp-md5](https://www.npmjs.com/package/blueimp-md5)

- [Express session](https://www.npmjs.com/package/express-session) is used to store user data between HTTP request

![image](https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/images/api%20call%20flowchart.png)


### Returned Status Code Specification

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
### API Request & Response
**Overview**

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



## Front end

For the front end, we decided to use Angular.

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/implementation4.png)

</div>

Angular is a client-side framework which is really effective at building SPAs. This is because it simultaneously renders UI with dynamic data, handles user input and communicates with the services in the back end. This, in many ways, creates an expreience similar to that of a mobile app.

Angular is great for getting creating a professional UI in very little time. The tree of angular components are really useful for several reasons. First, it's easily maintainable. Second, readability is improved. Third, reusability.


### Details of Implementation

For our front-end, we had a number of separate pages. Each of these pages consisted of a number of components linked together via Angular router. Angular router allowed the user to navigate from one page to another. Let's consider these pages, identify notable features with relevant links to the code.

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

# Server-side
* Create a HTTP server/listener and a Socket.io object

![alt_text](https://imgur.com/a/t831aJ9)

### Real-time Video Chat
Placeholder

### Deploying to Microsoft Azure
Placeholder

___

## Navigate

- [Go To Next Section: UX Design](https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/UX_Design.md)
- [Go To Previous Section: Background](https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/Background.md)
- [Go Back To Readme](https://github.com/ChrisEssery/group-project/tree/dev)
