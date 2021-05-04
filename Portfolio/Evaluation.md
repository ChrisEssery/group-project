<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/header.png)

</div>

___

# Evaluation

In this section, we evaluate our app. We start by evaluating the design of the app, looking at the strengths, weaknesses and lessons learned. We then move on to unit testing, with a focus on how our selected harness helped us throughout the project build. After unit testing, we go on to look at user acceptance testing and we reflect on our working practices and successes. Finally, we discuss the social and ethical implications of our product and future work.

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


When it came to the design of the project we felt... with this in mind, we will now evaluate the strengths, weaknesses and potential extensions of the design before reflecting on the lessons we've learned about this aspect of the project.

### Methods used


### Questionnaires

Questionnaires are


Our data is qualitative. Qualitative methods generate data that are represented by observe or report words and or behaviorus. It is best suited when you want to understand and represent the opinions and perspectives of your users.

**Limitations**

Given the time constraints of this unit, we were unable to use as many evaluation techniques as we would have liked. Focus groups, interviews and observations all would have been invaluable methods for garnering data about our target group, their needs and interactions with out product. Questionnaires proved to be a very useful method for answering specific questions about our paper prototype and wireframe, and it opened up the possibility for quantitative data. It had the advantage of being able to reach many people with low resource requirements and the disadvantage that the design and phrasing of the questions needed to be well constructed to provide strong, reliable data and avoid the negative effects of human judgment bias.

Another limitation of our approach with the questionnaires concerning the size of the questionnaires we conducted. In the questionnaire, participants were recruited through ‘snowball sampling' (i.e. word of mouth) with all participants known to our team. Two problems arise. First, the size and diversity of the research sample are arguably an inadequate representation of the target population. As such, findings derived from the study are not generalisable to the wider population (Keeble, 2013). Whilst we acknowledge this shortcoming, there was scope for us to make greater efforts to reach our target audience, unknown to ourselves, and recruit them. Second, given that the participants were known to various members of our team, issues regarding participation bias arise, wherein participants behave as they expect the experimenter desires, which undermines the study's internal validity (Keeble, 2013, p. 1). To overcome these shortcomings, recruitment fliers and ‘community gatekeepers' to assist in recruitment could have generated a larger, more diverse pool of participants not known to our team and mitigated against the lack of generalisability and participation bias (Keller, 2016, p. 83).

One may object, however, that the exploratory nature of our approach limits its precision and scope. Instead, it would have benefited from descriptive research (Alan, 1999). But this misses the point. Our project was designed to explore research questions. Its main limitation, however, is that it fails to use other exploratory methodologies such as interviews and focus groups to inform the results of our user feedback (Reiter, 2017).

### User stories

Proto-personas based on feedback


### Heuristics

Why use these modelas and heuristics? Well, because they can help in predicting user behaviour and when compared to primary datam can uncoveer important resesarch questions and hypotheses.

ONe of the downsides of heuristics commonly make assumptions about products and people. Heuristics may not be suited to novel technologies - there is a risk of new technology outpacing heuristics. However, despite these considerations, heuristics are a great tool for making the design do's and don'ts intuitive. For our purposes, heurisitcs were perfect because we didn't have access to many users given the covid crisis. Challenges to end-users, particularly given that our end-users are an at-risk group.

### Other possible methods

We would have liked to employ a mixed methods approach to generate both quantitative and qualitative data, often using one to inform the other (that is, 'triangulation').

Qualitative methods generate data that are represented by observed or reported words and/or behaviours. It is best suited when you want to understand and represent the rich opinions and persepctive of your users.

Analysing qualitative data may include interviews, observation notes, open-ended survey responses, user-diaries. There are several qays in which such data may be analysed with differeing levels of rigour.

Models of behaviour are also useful - empirical research models of human behaviour using similar technologies / designs, can be used to predict or estimate evaluative outcomes. Fitts' law (1954) is a good example of research which cites Fitts' law.

**Cognitive walkthroughs** - emulating a user's problem-solving process at each step in the the human-computer-dialogue and check to see how users progress from step to step in these interactions

**Thematic analysis** is a popular and flexible means of applying strucutre and a prescriber process for your analysis. In short, this approach involves gathering together your data from all available sources, creating category labels ("codes") that describe emerging and or expected patterns trend, apportion evidence (e.g. quotes from users, research observations excerpts beneath each category label, restructuring codes into a hierarchy tree and grouping related items together to generate themes).

Thematic analysis. Affinity diagrams -> visual way of grouping different parts of our data together. It is important to analyse the data effectively.


### Timeline of evaluation of design

ADD timeline




## Unit testing

### Front-End
Functional testing is paramount to the successful launching of our MEAN stack SPA. Thankfully the MEAN stack includes some prerequisite software which helps implement easy front-end functional testing on the differing components.
The software includes Karma which is a test-runner for JavaScript which runs on Node.js. Karma is great for testing code in browsers as well as different devices. The software allows us to clearly see which tests are failing within the specific components. This helps speed up the debugging process.

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/Karma.png)

For Karma to work well we need to implement a test framework for our project. The are a wide variety of frameworks to choose from with some of the most popular being Mocha and Jasmine. Both of these frameworks allow us to write tests on our individual components. Mocha is a popular choice and actually also has an inbuilt driver which can also run tests in the browser just like Karma. Karma is however the better option to run these tests on thanks to its flexibility in its browser testing. Also, Mocha is lacking in assertion testing and requires a plug-in called Chai to be able to write such tests. Jasmine on the other hand already has these assertion tests built in. Weighing this all up we decided to choose Jasmine for our implementation.

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/Jasmine_Mocha.png)

Now that the framework was chosen, we could specifically test our JavaScript code using the Jasmine syntax which will capture any problematic component issues. See below for how these software’s were utilized on our project.
To begin the front-end testing, we had to produce a test plan as below:

--Screenshot of testing_plan.txt--

This test plan outlines the specifics of our front-end testing. As you can see our focus was purely on the navigation of our users as well as logging and out effectively.
In order to implement this, we had to edit the components spec files which our tests focused upon. As below:

--Example component testing code--

Then through running ‘ng test’ we could easily see any issues within our front-end code which could be problematic for our users. The Karma software allows us to clearly see which components failed the specific tests and hints towards fixes for these. Our functional testing showed that the navigation, login and logout of users is smooth and gives us confidence that the implementation was correct.

--Example Karma screenshot--

### Back-End

The backend API was tested vigorously using software known as Postman. This software allows us to test calls to the API. Postman tests that data is entering the database correctly and information is returned in regard to this….

--Lizhao to add more--

## User acceptance testing

We now turn to the user acceptance testing.

User acceptance testing. Evaluation of your design with users – methods undertaken, findings, implications.

### Questionnaires

Questionnaires are


Our data is qualitative. Qualitative methods generate data that are represented by observe or report words and or behaviorus. It is best suited when you want to understand and represent the opinions and perspectives of your users.


### User stories

Proto-personas based on feedback


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
