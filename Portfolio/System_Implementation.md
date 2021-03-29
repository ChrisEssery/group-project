# System Implementation

In this section we discuss the the system implementation of the app. We start with a stack architecture and system design overview. Then, we look closely at the middle tier covering Express, Node, RESTful API. After that we move to the front end and go over Angular, before moving on to authentication and deployment and integration.

## Table of contents

* [**Stack architecture and system design**](#Stack-architecture-and-system-design)
   * [Overview of stack](#overview-of-stack)

* [**Back End**](#back-end)
   * [MongoDB](#mongodb)

* [**Middle tier**](#middle-tier)
   * [Express](#express)
   * [Node](#node)
   * [RESTful API](#restful-api)

* [**Front end**](#front-end)
   * [Angular](#angular)

* [**Authentication**](#authentication)
   * [Design Process and Ideation](#design-process-and-ideation)
   * [Identification of users and stakeholders](#identification-of-users-and-stakeholders)

* [**Deployment and integration**](#deployment-and-integration)
   * [Design Process and Ideation](#design-process-and-ideation)
   * [Identification of users and stakeholders](#identification-of-users-and-stakeholders)


## Stack architecture and system design

In this section, we will now give a quick overview of the architecture and how it functions. First though, let's define key terms. To begin with, what is a single page application?

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/implementation5.png)

</div>

In an angular app, we have one root index.html file. We serve that from our node server or from a different server (it can be decoupled from node) This html page includes script imports that houses our angular app, the angular framework and our code. We use that application to dynamically re-render what the user sees without sending a request for a second page to be rendered by the server because we never need to reload the page. We instead navigate to the page directly. We add new elements, helped out by the angular framework. This offers a powerful way to change the page. This provides a really interactive and fast webpage. Instant re-rendering, instant user feedback and makes building an engaging UI possible. Dynamically re-rendered all the time by angular.

How does the MEAN stack work then?

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/implementation1.png)

</div>

Let's have a look at the architecture. We have the client side in the browser and the server side where we run our business logic which the user only indiretly uses. In the client side we use angular. On the server-side, we use node.js, expresss and mongoDB (not direcly connected to by Anglar).

Client(browser) is presentation and UI. This can be served by Amazon Web Services (AWS), it doesn't have to be served by the node backend.

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/implementation6.png)

</div>


Sever side we have the business logic, persistent data storage and authentication.

How do we conenct these two? We send requests and responses. These are called AJAX (Background) requests and responses. We get JSON formatted data from this.

This is the big picture view of the MEAN stack.


## Back end

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/implementation2.png)

</div>

For our databse, we used mongoDB. MongoDB is a NoSQL database which stores documents in collections instead of records in tables as with a SQL database. MongoDB stores application data (e.g., users and products) and enforces no data schema or relations. For this reason is is much less strict than a SQL database. It is also easily connected to Node.js and Express, but importantly not angular for security reasons. Because mongoDB is a powerful database that can be easily integrated into a Node/Express environment, it was an obvious choice, as we were looking to buil dour application quickly and with as little problems as possible. The 'M' in MEAN was, therefore, very important to ensure everything worked well and without issues.

Another advantage of mongoDB is that it is highly scalable. Were we to continue with NotSoBored games and try make it into a business, mongoDB would allow for us to scale in size.

So, why didn't we use a SQL database instead? We decided not to do this because we wanted to use the MEAN stack, which is a recognised stack that enables quick builds, and we also recognised that, for our purposes, we don't require a database to hold data with lots of connections. Instead, the data we will be storing requires very few. Give this fact, we felt it wasn't necessary to use SQL.

## Middle tier

Now, turning to the middle tier, we have Express, Node.js and RESTful API.


<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/implementation3.png)

</div>

Node.js is the language used for the backend. Specifically, it is a server-side library with javascript on the server-side. It listens to requests and responds accordingly. It executes server-side logic and interacts with databases and files.

This is an alternative to PHP. Express is a Node.js framework which simplifies writing server-side logic. It is build on top of the node.js framework, and enhances its functionality. It offers the same functionalities as node and is middleware-based, funnelling requests through functions. Its functionality includes routing, view-rendering and more, and depending on the client requests, it uses 'routes' to assist in directing users to different parts of a web application, thereby fast tracking the process improving the speed of server-based applications.  


## Front end

For the front end, we decided to use Angular.

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/implementation4.png)

</div>

Angular is a client-side framework which is really effective at building SPAs. This is because it simultaneously renders UI with dynamic data, handles user input and communicates with the services in the back end. This, in many ways, creates an expreience similar to that of a mobile app.

## Authentication



## Deployment

___
