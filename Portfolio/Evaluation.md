<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/NotSoBoredGamesTitleAnim.gif)

</div>

___

# Evaluation

In this section, we evaluate our app. We start by evaluating the design of the app, looking at the strengths, weaknesses and lessons learned. We then move on to unit testing, with a focus on how our selected harness helped us throughout the project build. Finally, after unit testing, we go on to look at user acceptance testing and we reflect on our working practices and successes.

## Table of contents

* [**Evaluation of design**](#evaluation-of-design)
   * [Strengths](#strengths)
   * [Weaknesses](#weaknesses)
   * [Lessons learned](#lessons-learned)
* [**Unit testing**](#unit-testing)
   * [Front-End](#frontend)
   * [Back-End](#backend)
* [**User acceptance testing**](#user-acceptance-testing)
   * [User acceptance testing](#user-acceptance-testing)
   * [Findings and implications](#findings-and-implications)


## Evaluation of design


When it came to the design of the project we knew it was important to have a number of methods to perform an evaluation of the design. What's more, it was important to do this regularly so as to ensure the design developed and evolved consistently over time.

### Methods used

We turn to the methods used and evaluate the effectiveness of each of these. The first of these methods was the paper prototyping.


### Paper prototyping

The first way in which we evaluated our design was through paper prototyping. At this stage, we used the shared powerpoint in Teams to brainstorm and design each web page separately with consideration of the content and functionality of each page. There are a few advantages with this approach. First, it’s fun. Paper prototyping ought to be fast and leads to rapid iteration. It takes minutes to create a few different versions of a design. It is also low cost. Paper prototyping is very inexpensive. Basic toolset includes pen and paper. Low commitment. No one wants to throw out a digital prototype that took hours to create. It’s much easier to throw out a sketch that takes only 5-minute to create. Early feedback from real users. Real users can be involved in product design before actual design and coding begins. Eliciting honest feedback. An important advantage of paper prototypes is their sketchy look. The prototypes don’t look like you’ve spent a lot of time on them. As a result, people feel more comfortable criticising sketches rather than polished designs. Team building. Since paper prototyping doesn’t require any special skills, anyone can participate in this process. You can easily do paper prototyping as a group activity. People from all kinds of backgrounds can participate in creating paper prototypes.

**Limitations**

Now, for the disadvantages. Hard to interpret design. Paper prototypes require a great deal of imagination from test participants—they have to imagine how the future state of a product will look like just by looking at the paper. Testing only in person. It’s hard to test a paper prototype when participants are widely dispersed geographically. Need to transfer papers to the digital format. The downside of a paper prototype is that you’ll need to convert it in a digital prototype anyway.

With these disadvantages in mind, we created a short video demo of the paper prototype. This addressed the issue of partcipants being unable to imagine how the product would look, and it meant that the prototype could be sent to people across the country and globe. This meant that we were able to obtain feedback from a wide range of users, all dispersed geographically. We integrated all the web pages together and focused on adding navigation between the pages. We filmed a short video demo to make sure the navigation flowed properly. This video is below:

<br/><br/>
<p align="center">
  <img width="700" height="400" src="https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/images/demo.gif" alt="">
  <br/>
  <b >Paper Prototype Demo</b>
  <br/><br/>
</p>

This approach to evaluating the design was very effective since it had all the benefits of a paper prototype without the drawbacks mentioned above. It was largely inexpensive to produce and it was simple to share among users.

One way in which this process could have been improved was through user testing through a facillitator and human-computer roles. If you plan to conduct testing sessions with a paper prototype, you’ll need two roles for each testing session: Facilitator (presenter). A person that instructs test participants and interacts with them.‘Human computer.’ This person remains silent during the session and is in charge of changing screens or screen states, whenever the test participant interacts with a prototype. This role is extremely important — the effectiveness of testing often depends on how good the person playing the computer is at responding to a participant’s actions. Avoid combining the roles of facilitator and ‘human computer.’ It’s a quite common problem when presenter who acts as a ‘human computer’ miss some vital information from test participants.

### Wireframing

At this stage, we converted the paper prototype of our website to a wireframe to simulate all the features (including the structure of menu, button control, requests and responses) we have planned with the use of [Figma](https://www.figma.com/) (a digital design and prototyping tool). See our initial wireframe version [here](https://www.figma.com/proto/0CgBZ0XKPHl8fCcgvPSsWr/NotSoBoredGames-Copy?node-id=6%3A137&scaling=scale-down&page-id=6%3A121).

Wireframing proved to be a very effective way of evaluating our design. The UI wireframe above provides a low-fidelity skeleton of the UI. This serves to show the main features, layout, content, and functionality of the UI, without getting bogged down in the visual design of the app. It is essential in UI design as it determines what the user will eventually interact with when they eventually use the software, and it helps those working on the front-end of the product to better understand how they should design and build the main features and functions of the UI.

We distributed the digital UI prototype to the potential users and created a test to gather user feedback with a focus on the feasibility of the website, the functionality and ease of use. We distributed our digital UI prototype to the potential users with an online questionnaire to gather feedback and update our wireframes.

EDIT:
The advantages:

It can get clients on board with the design process.  
Getting clients involved at the get-go can help in a big way. When they sign it off, your designer isn’t left in the dark about their desired functionality and features. This also means your client isn’t left in the dark about why you’ve suggested this wireframe for them. Everything that comes after will fall into place, which helps you avoid explaining the functional choices you’ve made later down the line.   

Make changes more efficiently
Nailing the skeleton of the website is pivotal in efficient design. If you jump straight into design without thinking about the information hierarchy and user experience, you can end up making loads of changes later down the line. Wireframes help you see if you’re making the right decisions from a UX and information-hierarchical point of view, so you can build around it.  

Saves time and money
Doing a quick wireframe is an extra step in the process, but it can save you loads of time and money later down the line. It provides greater knowledge of the project which will be fine-tuned to basic requirements, minimizing the risk of redesigns. Nailing the functional part of the website means your designer will know how things will work before jumping in. It’ll allow them to design around these necessary interactive features so things aren’t changing when you realize something won’t work well from a UX point of view.  

Allows you to plan for website responsiveness
Wireframing helps you prioritize site elements while putting you in a good mindset for thinking about what content is most relevant to the visitors and how that content will work on different screens. It’ll help you see how things will flow across different devices.

Great for a client who only focuses on how pretty things are as it’s based around functionality only
If your client is getting bogged down with design elements ahead of the curve, you can help them take a step back and think about the user-centric UX consequences of any ambitious design desires they have. They’ll be able to see and consider how the site will behave for their visitors over how it’ll look.  

**Limitations**

EDIT:
The disadvantages:

Clients get bogged down with the minute details  
It’s sometimes hard to explain why wireframes are needed to clients, especially those who are concerned more with how a website looks than how it behaves. Some clients are more comfortable looking at images and branding than a gray, basic map of the website, but this step shouldn’t include those bits yet.

Can be too designed
If your wireframes are too designed, it means that too much time is being taken up by them. Remember, they’re only there to help you map out the very basic flow of your website, so it shouldn’t be a huge step in the process.  

It’s another step in the process
Yes, this is an extra step in the process, so many people believe skipping it will get things moving into the design stage faster.   

Tricky to change a drawing
Editing a drawing over and over takes a chunk of unnecessary time. It’s much easier to make vital changes if you’re using programs like Balsamiq instead.

Does provide design limitations  
When a wireframe has been signed off, there’s little room for creative change for your designer. They must adhere to the functionality of your agreed website skeleton, which pens-in the option for other creative possibilities that may require a different flow.


### Questionnaires

Questionnaires are

See our full test report [here](https://my.helio.app/report/01F1WDKPM82XVYYJVE0HS5Q93T).

Based on the report, we focused on making several updates.

Our data is qualitative. Qualitative methods generate data that are represented by observe or report words and or behaviours. It is best suited when you want to understand and represent the opinions and perspectives of your users.

Given the time constraints of this unit, we were unable to use as many evaluation techniques as we would have liked. Focus groups, interviews and observations all would have been invaluable methods for garnering data about our target group, their needs and interactions with out product. Questionnaires proved to be a very useful method for answering specific questions about our paper prototype and wireframe, and it opened up the possibility for quantitative data. It had the advantage of being able to reach many people with low resource requirements and the disadvantage that the design and phrasing of the questions needed to be well constructed to provide strong, reliable data and avoid the negative effects of human judgment bias.

**Limitations**

One limitation of our use of questionnaires concerns the size of the questionnaires we conducted. In the questionnaire, participants were recruited through ‘snowball sampling' (i.e. word of mouth) with all participants known to our team. Two problems arise. First, the size and diversity of the research sample are arguably an inadequate representation of the target population. As such, findings derived from the study are not generalisable to the wider population (Keeble, 2013). Whilst we acknowledge this shortcoming, there was scope for us to make greater efforts to reach our target audience, unknown to ourselves, and recruit them. Second, given that the participants were known to various members of our team, issues regarding participation bias arise, wherein participants behave as they expect the experimenter desires, which undermines the study's internal validity (Keeble, 2013, p. 1). To overcome these shortcomings, recruitment fliers and ‘community gatekeepers' to assist in recruitment could have generated a larger, more diverse pool of participants not known to our team and mitigated against the lack of generalisability and participation bias (Keller, 2016, p. 83).

One may object, however, that the exploratory nature of our approach limits its precision and scope. Instead, it would have benefited from descriptive research (Alan, 1999). But this misses the point. Our project was designed to explore research questions. Its main limitation, however, is that it fails to use other exploratory methodologies such as interviews and focus groups to inform the results of our user feedback (Reiter, 2017).

### User stories

Proto-personas based on assumptions about the relevant stakeholders, and are designed to simulate the approach taken in a real-life agile project, during which there is a continuous dialogue between the software development team and their clients, owing to the client-led approach at the heart of the agile framework.

This approach relies on an [autoethnography](https://www.researchgate.net/publication/260778406_Autoethnography_as_a_research_method_Advantages_limitations_and_criticisms) approach. An autoethnography is a form of qualitative research based on self-reflection and the process of writing to explore and understand personal experiences and connect this autobiographical story to wider societal issues. For our purposes, this relates to self-reflection on the position of our stakeholders via proto-personas. This was an excellent method for adding stakeholders into our agile development, and meant that despite being able to meet older adults in person show them our product, we were able to reflect on what their responses might be. This, together with the questionnaire data we gathered meant we could adjust our UI and UX design to best serve our end-users. This was extremely useful for evaluating our design.

**Limitations**
EDIT

One of the main limitations of autoethnography is its emphasis on the self. Specifically, it is regarded as too individualised. On this point, Sparkes (2000) claims, "The emergence of autoethnography and narratives of self…has not been trouble-free, and their status as proper research remains problematic" (p. 22).  Autoethnographies have been criticised for being self-indulgent and individualised (Atkinson, 1997; Coffey, 1999).

Another criticism concerns the accuracy of the research method. In particular, is it a reliable guide to the truth in the sense that the personal narratives or autoethnographies represent the ground truth. On this point, Walford (2004) states, "If people wish to write fiction, they have every right to do so, but not every right to call it research" (p. 411).

Ellis and Bochner (2000), claim autoethnography as a narrative that, "…is always a story about the past and not the past itself" (p. 745) .

Walford (2004), who claims that "…the aim of research is surely to reduce the distortion as much as possible" (p. 411). Walford's concerns are focused on how much of the accounts presented as autoethnographies represent real conversations or events as they happened, and how much they are just inventions of the authors.

Denzin and Lincoln (2000) state, "Objective reality can never be captured. We can know a thing only through its representations" (p. 5).

Overall, then, the benefit of autoethnography is the ideas that emerge from the interaction between reflection on the users with consideration of the cultural and social context in which the user exists. It is through this process of reflection that useful insights are generated, which have primae facie value as a research tool.


### Heuristics

Why use these modelas and heuristics? Well, because they can help in predicting user behaviour and when compared to primary datam can uncoveer important resesarch questions and hypotheses.

**Limitations**

ONe of the downsides of heuristics commonly make assumptions about products and people. Heuristics may not be suited to novel technologies - there is a risk of new technology outpacing heuristics. However, despite these considerations, heuristics are a great tool for making the design do's and don'ts intuitive. For our purposes, heurisitcs were perfect because we didn't have access to many users given the covid crisis. Challenges to end-users, particularly given that our end-users are an at-risk group.

Before moving on to our evaluation of the design, let's consider some of the strengths and weaknesses of this approach.

<table>
<tr>
  <th>The Pros</th>
  <th>The Cons</th>
</tr>
<tr>
  <td>- Evaluators can focus directly on specific issues, flag them and find optimal solutions <br /> - Evaluators can identify faults with individual elements and determine their impact on the overall UX  <br /> - Compared to testing on users, you can obtain feedback without ethical issues and costs. </td>
  <td>- Evaluators' insights are subjective; findings can lack proof and be biased <br /> - Finding several evaluators may be hard and expensive  <br />- Evaluators can identify issues that aren't usability problems </td>
</tr>
</table>

### Other possible methods

We would have liked to employ a mixed methods approach to generate both quantitative and qualitative data, often using one to inform the other (that is, 'triangulation').

Qualitative methods generate data that are represented by observed or reported words and/or behaviours. It is best suited when you want to understand and represent the rich opinions and persepctive of your users.

Analysing qualitative data may include interviews, observation notes, open-ended survey responses, user-diaries. There are several qays in which such data may be analysed with differeing levels of rigour.

Models of behaviour are also useful - empirical research models of human behaviour using similar technologies / designs, can be used to predict or estimate evaluative outcomes. Fitts' law (1954) is a good example of research which cites Fitts' law.

**Cognitive walkthroughs** - emulating a user's problem-solving process at each step in the the human-computer-dialogue and check to see how users progress from step to step in these interactions

**Thematic analysis** is a popular and flexible means of applying strucutre and a prescriber process for your analysis. In short, this approach involves gathering together your data from all available sources, creating category labels ("codes") that describe emerging and or expected patterns trend, apportion evidence (e.g. quotes from users, research observations excerpts beneath each category label, restructuring codes into a hierarchy tree and grouping related items together to generate themes).

Thematic analysis. Affinity diagrams -> visual way of grouping different parts of our data together. It is important to analyse the data effectively.


### Timeline of evaluation of design

**ADD timeline**




## Unit testing

### Front-End
Functional testing is paramount to the successful launching of our MEAN stack SPA. Thankfully the MEAN stack includes some prerequisite software which helps implement easy front-end functional testing on the differing components.
The software includes Karma which is a test-runner for JavaScript which runs on Node.js. Karma is great for testing code in browsers as well as different devices. The software allows us to clearly see which tests are failing within the specific components. This helps speed up the debugging process.

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/Karma.png)

For Karma to work well we need to implement a test framework for our project. The are a wide variety of frameworks to choose from with some of the most popular being Mocha and Jasmine. Both of these frameworks allow us to write tests on our individual components. Mocha is a popular choice and actually also has an inbuilt driver which can also run tests in the browser just like Karma. Karma is however the better option to run these tests on thanks to its flexibility in its browser testing. Also, Mocha is lacking in assertion testing and requires a plug-in called Chai to be able to write such tests. Jasmine on the other hand already has these assertion tests built in. Weighing this all up we decided to choose Jasmine for our implementation.

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/Jasmine_Mocha.png)

Now that the framework was chosen, we could specifically test our JavaScript code using the Jasmine syntax which will capture any problematic component issues. See below for how these software’s were utilized on our project.
To begin the front-end testing, we had to produce a test plan as below:

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/TestPlan.png)

This test plan outlines the specifics of our front-end testing. As you can see our focus was purely on the navigation of our users as well as logging out effectively. We also fixed all the default angular tests such that all components are created. In order to implement this, we had to edit the components spec files which our tests focused upon. As below:

# Test A.
![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/InvalidPassandUser.png)

# Test B.
![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/Navigation.png)

# Test C.
![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/SignoutWorks.png)

Then through running ‘ng test’ we could easily see any issues within our front-end code which could be problematic for our users. The Karma software allows us to clearly see which components failed the specific tests and hints towards fixes for these.

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/TotalPasses.png)

# Test A.
![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/LoginTestWorks.png)

# Test B & C.
![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/NavbarTestWorks.png)

Our functional testing showed that the navigation, login and logout of users is smooth and gives us confidence that the implementation was correct.

### Back-End (AUTOMATED API TESTING)

The backend API was tested vigorously using software known as [Postman](https://www.postman.com/), which is is a scalable API testing tool that allows us to run automated and thorough tests to our RESTful API.

Based on our [API design](https://github.com/ChrisEssery/group-project/tree/dev/server), there are mainly 4 methods involved in our [API Testing](https://www.guru99.com/api-testing.html):

- GET- The GET method is used to extract information from the given server using a given URI. While using GET request, it should only extract data and should have no other effect on the data.

- POST- A POST request is used to create a new entity. It can also be used to send data to the server, for example, customer information, file upload, etc. using HTML forms.

- PUT- Create a new entity or update an existing one.

- DELETE- Removes all current representations of the target resource given by a URI.

To fully test these methods, we focused on two aspects:

- Test functionality

  Make sure your API does exactly what it’s supposed to do.

- Test exceptions

  Make sure your API handles unexpected input and behavior.



#### **Testing Implementation**

**Prerequiste**

[Postman](https://www.postman.com/): Testing tool to drive the API

[mongodb atlas](https://www.mongodb.com/cloud/atlas): cloud mongodb for checking data persistence

**Set up**

ensure you have a connected mongodb cloud database which you can check the data collection online

ensure you have a working api interface which is exposed on localhost port 3000

**Tear down**

remove all the changes to the database

**Tests:**

1. validate the API's error handling and the returned status code
2. validate the data and the status code returned by a request (GET)
3. validate the message and the status code returned by a request  (UPDATE, PUT, DELETE)
4. make sure that data is transferred/updated to the database correctly

API testing collection:
![image](https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/images/collection.png)
**Methods:**

To carry out testst, we used the `pm.response` object in Postman. You defined tests using the `pm.test` function, providing a name and function that returns a boolean (`true` or `false`) value indicating whether the test passed or failed. Then, we used [ChaiJS BDD](https://www.chaijs.com/api/bdd/) syntax and `pm.expect` in the assertions to test the response detail. Here are some selected parts of the testing codes:  

1. Test the status code

```javascript
//case: Any successful get request
//test: the status code should be 200
pm.test("status code is 200", function () {
    pm.response.to.have.status(200);
});

//case: Get request without valid token being provided
//test: the status code should be 401 (unauthorized access)
pm.test("status code is 401", function () {
    pm.response.to.have.status(401);
});
```

2. Test the response body : JSON value check

```javascript
//case: user sign up
//test: the returned data should contain the username as "Test"
pm.test("the user is apiTestor", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.user).to.eql("Test");
});

//case: user log in with wrong password
//test: the returned error message should be "invalid password"
pm.test("error message is correct", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.error).to.eql("invalid password");
});
```

3. Test the response body: Contains a property

```javascript
//case: user log in
//test: the returned data should contain a token
pm.test("has token", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("token");
});

//case: retrieve a user's recent game activities
//test: the returned data should contain a date of each game instance
pm.test("has the date of a game instance", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.gamesPlayed[0]).to.have.property("date");
});
```

4. Test the response body: Contains a string

```javascript
//case: get the user's friendlist
//test: the returned friendlist should contain username "bbb"
pm.test("has friend bbb", function () {
    pm.expect(pm.response.text()).to.include("bbb");
});
```

Please see our [published api document](https://documenter.getpostman.com/view/15388829/TzRLkVzq) for test scripts of each request

**Test Results:**
1. API tests
![image](https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/images/1.png)
![image](https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/images/2.png)
![image](https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/images/3.png)
![image](https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/images/4.png)
![image](https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/images/5.png)
2. Database status
![image](https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/images/testuserscollection.png)
![image](https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/images/testgamescollection.png)
## User acceptance testing

We now turn to the user acceptance testing. According to Wikipedia, user acceptance testing "consists of a process of verifying that a solution works for the user."

The most important consideration here is that UAT centres around the user. Are the users able to use the application? Does the application behave in expected ways? Does the application solve the users’ problem?

User acceptance testing. Evaluation of your design with users – methods undertaken, findings, implications.

### Questionnaires

Questionnaires are


Our data is qualitative. Qualitative methods generate data that are represented by observe or report words and or behaviorus. It is best suited when you want to understand and represent the opinions and perspectives of your users.


### User stories

DUPLICATION? EDIT
Proto-personas based on assumptions about the relevant stakeholders, and are designed to simulate the approach taken in a real-life agile project, during which there is a continuous dialogue between the software development team and their clients, owing to the client-led approach at the heart of the agile framework.

This approach relies on an [autoethnography](https://www.researchgate.net/publication/260778406_Autoethnography_as_a_research_method_Advantages_limitations_and_criticisms) approach. An autoethnography is a form of qualitative research based on self-reflection and the process of writing to explore and understand personal experiences and connect this autobiographical story to wider societal issues. For our purposes, this relates to self-reflection on the position of our stakeholders via proto-personas. This was an excellent method for adding stakeholders into our agile development, and meant that despite being able to meet older adults in person show them our product, we were able to reflect on what their responses might be. This, together with the questionnaire data we gathered meant we could adjust our UI and UX design to best serve our end-users. This was extremely useful for evaluating our design.


### Methods undertaken


### Findings and implications

We conducted an evaluation of our design with users

### References

[1] Alan, R. (1999). The Importance of Hypothesis Testing. Behaviour Change, 16(2).

[2] Keeble, C., Barber, S., Law, GR., Baxter, PD. (2013). Participation bias assessment in three high impact journals. Sage Open, 3(4), 1-5.

[3] Keller, J., Ainsworth BE. (2016). Recruiting participants into pilot trials: techniques for researchers with shoestring budgets. Californian journal of health promotion, 14(2):81–89.

[4] Reiter, B. (2017). Theory and Methodology of Exploratory Social Science Research. Government and International Affairs Faculty Publications. 132.

___

## Navigate

- [Go To Next Section: Conclusion](https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/Conclusion.md)
- [Go To Previous Section: Sprints & Project Management](https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/Sprints_Project_Management.md)
- [Go Back To Readme](https://github.com/ChrisEssery/group-project/tree/dev)
