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

In an angular app, we have one root index.html file. We serve that from our node server or from a different server (it can be decoupled from node) This html page includes script imports that houses our angular app, the angular framework and our code. We use that application to dynamically re-render what the user sees without sending a request for a second page to be rendered by the server because we never need to reload the page. We instead navigate to the page directly. We add new elements, helped out by the angular framework. This offers a powerful way to change the page. This provides a really interative and fast webpage. Instant re-rendering, instant user feedback and makes building an engaging UI possible. Dynamically re-rendered all the time by angular.

How does the MEAN stack work then?

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/implementation1.png)

</div>

Let's have a look at the architecture. We have the client side in the browser and the server side where we run our business logic which the user only indiretly uses. In the client side we use angular. On the server-side, we use node.js, expresss and mongoDB (not direcly connected to by Anglar).

Client(browser) is presentation and UI. This can be served by AWS, it doesn't have to be served by the node backend.

Sever side we have the business logic, persistent data storage and authentication.

How do we conenct these two? We send requests and responses. These are called AJAX (Background) requests and responses. We get JSON formatted data from this.

This is the big picture view of the MEAN stack.


## Back end

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/implementation2.png)

</div>

For our databse, we used mongoDB, the NoSQL databse which stores documents in collections insted of records in tables as in the SQL databse. Store applicatoin data (users, products) and enforces no data schema or relations. it is way less strict than a SQL databse. Finally, it is easily to connect to Noe/Expressbut importantly not angular. This is a powerful database which can be integrated into a Node/Express environment.

It is highly scalable.

We could have used a SQL database in this project. But we decided not to do this because we doen't have data with lots of connections so it doesn't seem necessary to use SQL. We are using this stack though

## Middle tier

Now, turning to the middle tier, we have Express, Node.js and RESTful API.


<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/implementation3.png)

</div>

Node.js is the language used for the backend. It is a server-side library with javascript on the server-side. It listens to requirest and responds accorindingly, it executes server-side logic and interacts with databases and files.

This is an alternative to PHP, Ruby on

Express is a Node.js framework which simplifies writing server-side logic. It offers the same functionalities as node and is middleware-base. funnel requests through functions. It includes routing, view-rendering and more.


## Front end

For the front end, we decided to use Angular.

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/implementation4.png)

</div>

Angular is a client-side framework which is really effective at building SPAs. This is because it simultaneously renders UI with dynamic data, handles user input and communicates with the services in the back end. This, in many ways, creates an expreience similar to that of a mobile app.

## Authentication



## Deployment

___
