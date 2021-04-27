<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/header.png)

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

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/Mongooseicon.png)

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


### Details of Implementation


## Front end

For the front end, we decided to use Angular.

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/implementation4.png)

</div>

Angular is a client-side framework which is really effective at building SPAs. This is because it simultaneously renders UI with dynamic data, handles user input and communicates with the services in the back end. This, in many ways, creates an expreience similar to that of a mobile app.

Angular is great for getting creating a professional UI in very little time. The tree of angular components are really useful for several reasons. First, it's easily maintainable. Second, readability is improved. Third, reusability.


### Details of Implementation

For our front-end, we had a number of separate pages. Each of these pages consisted of a number of components linked together via Angular router. Angular router allowed the user to navigate from one page to another. Let's consider these pages, identify notable features with relevant links to the code.

#### Start page

The first page is the start page. This is shown below.

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/start-page.png)

</div>

Let's take a closer look at the main features of this page. This consisted of three separate components, including a background, title, and btngrp1 component.

 * [Start-page.component.html](https://github.com/ChrisEssery/group-project/blob/dev/src/app/start-page/start-page.component.html).
 * [Background.component.css](https://github.com/ChrisEssery/group-project/blob/dev/src/app/start-page/background/background.component.css).
 * [Title.component.css](https://github.com/ChrisEssery/group-project/blob/dev/src/app/start-page/background/title.component.css).

#### Login

The next page is the login. This is shown in the image below:

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/login-page.png)

</div>

The main features of the login were

 * [Login.component.ts](https://github.com/ChrisEssery/group-project/blob/dev/src/app/login-page/login.component.ts).
 * [Login.component.html](https://github.com/ChrisEssery/group-project/blob/dev/src/app/login-page/login.component.html).
 * [Login.component.css](https://github.com/ChrisEssery/group-project/blob/dev/src/app/login-page/login.component.css).

#### Games

We chose to build just two games. Here are the main features of these games:

#### Leaderboard

One important part of our product was to have a leaderboard. Here is the leaderboard:

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/leaderboard.png)

</div>

The main features of the leaderboard are in the following component:

 * [Leaderboard.component.ts](https://github.com/ChrisEssery/group-project/blob/dev/src/app/home-page/leaderboard/leaderboard.component.ts)
 * [Leaderboard.component.html](https://github.com/ChrisEssery/group-project/blob/dev/src/app/home-page/leaderboard/leaderboard.component.html)

#### Profile

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

___

## Navigate

- [Go To Next Section: UX Design](https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/UX_Design.md)
- [Go To Previous Section: Background](https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/Background.md)
- [Go Back To Readme](https://github.com/ChrisEssery/group-project/tree/dev)
