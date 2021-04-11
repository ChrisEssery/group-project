<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/header.png)

</div>

___

# UX Design

In this section, we discuss the design of our app. We start with the initial to our working app. We include details about some users and their interests. We also explain the interface before looking at areas where we could have developed the product.

## Table of contents

* [**UX Design**](#ux-design)
   * [Design Process and Ideation](#design-process-and-ideation)
* [**Identification of users and stakeholders**](#identification-of-users-and-stakeholders)
   * [Stakeholders](#stakeholders)
   * [Admin](#admin)
   * [Problem definition](#problem-definition)
* [**UX approach - design methods**](#ux-approach-design-methods)
  * [Understanding user group](#understanding-user-group)
* [**Wireframes and interaction flow diagrams**](#wireframes-and-interaction-flow-diagrams)
  * [Web wireframe](#web-wireframe)
  * [MEAN stack wireframe](#mean-stack-wireframe)


## UX Design

With regard to the UX design, we decided to...

### Design Process and ideation


Below is a picture of a mind map created for our project ideation phase. The mind map shows the different types of games we were considering when trying to determine what board game to build.

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/mind_map.png)

</div>

Here is a mind map of the different real world issues and problems we were considering. The idea here was to combine a real world issue/problem with a particular type of game to generate a a board game for our SPA.

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/mind_map2.png)

</div>

The following are photos of the ideas matrix we used to generate ideas for the application. Different types of games are in the rows and different types of real-world issues are in the columns.

[![ideas1.png](https://i.postimg.cc/TwvNhtdg/ideas1.png)](https://postimg.cc/WDSwH6J1)

As you can see, the rows are populated with different types of games. These include 'unforgiving games' 'card games' 'guessing games' and 'educational games'. Along the columns there are different real-world issues such as 'political issues' 'mental health issues' and 'learning english'.

[![ideas.png](https://i.postimg.cc/GtcMx9sp/ideas.png)](https://postimg.cc/MMFbW65k)

### Evolution of UI Design

**Version 1: paper prototype**

At this stage, we used the shared powerpoint in Teams to brainstorm and design each web page separately with considration of  the content and funcionaility of each page. 

**Version 2: short paper prototype video**

At this stage, we integrated all the web pages together and focused on adding navigation between the pages. We filmed a short video demo to make sure the navigation flow goes well. 
<br/><br/>
<p align="center">
  <img width="700" height="400" src="https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/images/demo.gif" alt="">
  <br/><br/>
  <b >Paper Prototype Demo</b>
  <br/><br/>
</p>
<br/><br/>

**Version 3: UI wireframe in Figma**

At this stage, we converted the paper prototype of our website to a wireframe to simulate all the features (including the structure of menu, button control, requests and responses) we have planned with the use of [Figma](https://www.figma.com/) (a digital design and prototyping tool). See our initial wireframe version [here](https://www.figma.com/proto/0CgBZ0XKPHl8fCcgvPSsWr/NotSoBoredGames-Copy?node-id=6%3A137&scaling=scale-down&page-id=6%3A121).


**Version 4: Updated UI wireframe in Figma**

We distributed the digital UI prototype to the potential users and created a test to gather user feedback with a focus on the feasibility of the website, the functionality and ease of use. We distributed our digital UI prototype to the potential users with an online questionnaire to gather feedback and update our wireframes. 

Here are some sample questions from the prototype test:
![image](https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/images/test1.png)
![image](https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/images/test2.png)
![image](https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/images/test3.png)
See our full test report [here](https://my.helio.app/report/01F1WDKPM82XVYYJVE0HS5Q93T).
<br/><br/>
Based on the report, we focused on the following key issues to update:
- We updated the profile page of the user and added more information about the user's gaming experience to enhance the user experience. This includes the number of matches recently played, the win rate of the user, the people recently played with etc.
- How to play?

- We added a "how to play" button under the title of each games and the player can click on the button to learn the rules and operations before starting the game.

- After the game menu page, we planned to add a new option for the user to choose who they want to play with. If the user chooses to play with friends, we will provide the online friends from their friendlist so that they can select and send invitation to the friend.
 
- We added a button to view the leaderboard of each game.

- We used combination of text and icon to present information/button.

Here is the [updated wireframe](https://www.figma.com/proto/fEaURWLCXr8yoBFjMjvQzi/NotSoBoredGames?node-id=6%3A137&scaling=scale-down&page-id=6%3A121) for our website:
<br/><br/>
<p align="center">
  <img width="700" height="400" src="https://github.com/ChrisEssery/group-project/blob/dev/Portfolio/images/Wireframe.gif" alt="">
  <br/><br/>
  <b>UI Wireframe</b>
  <br/><br/>
</p>


## Identification of users and stakeholders

When identifying the users and stakeholders we took the decision to...

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/user_bob_profile.jpg)

</div>


|                                                                             User's story                                                 |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------:|
|<div style="text-align:center"> Bill enjoys playing board games, but he has no experience with digital games. He wants a challenge, but he doesn't want to get lost in the complexity of a 'busy' interface. He wants to play games to stimulate his brain and learn more. He thinks that online games aren't just for teenagers, they're for people of all ages.  </div>                                                                                                                                                        |                                                                                                           
|                                                                                                                                                           |


<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/user_simon_profile.jpg)

</div>


|                                                                               User's story                                                 |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------:|
|<div style="text-align:center"> Simon, 78, has been a regular gamer for many years. He thinks it is the best form of entertainment. He isn't fussy about what he plays so long as it's fun and social, he's happy. </div>                                                                                                                                                        |                                                                                                           
|                                                                                                                                                          |

<div align="center">

![alt text](https://github.com/ChrisEssery/group-project/blob/dev/Logo/user_sally_profile.jpg)

</div>



|                                                                               User's story                                                 |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------:|
|<div style="text-align:center"> John knows nothing about digital games. He used to play board games when he was younger, but he doesn't play anyone since he doesn't socialise very much. After his wife passed away a few years ago, he began to withdraw from socialising. His family visit him when they can, but they would like to see him more often. John thinks that an online game platform might a good way for him to connect with his family more regularly. </div>                                                                                                                                                        |                                                                                                           
|                                                                                                                                                          |



## Game design for older people

A digital game for the elderly should be designed with the needs of the target user in mind. In particular, it is important to design the game according to the technical competence of the user and familiarity with digital interfaces and online platforms. There are, of course, mental and physical impairments associated with old age such as loss of hearing, vision, motor movement and cognitive abilities both in terms of memory and executive function. Older adults tend to have slower response times to game stimuli.

In light of these user requirements, we can tailor our approach. For this, it is useful to turn to research on the design of digital games. Ijsselsteijn et al () conducted research on the design of digital games for the elderly from the perspective of health and psychology. In this work, the authors stress the importance of going beyond typical usability requirements to account for the wide range of abilities and impairments in the 70+ age group.
Some of the suggestions include:

- Using a game for social and educational purposes
- For relaxation and entertainment
- Motivation for sharpening the mind
- Encouraging physical activity

Similarly, Wang () suggests a very similar set of design requirements.



## UX approach - design methods

When considering the UX approach we felt it was important to choose something that was relevant and of genuine importance. As such, we honed in on major issues facing society. After drafting two project proposals we decided that NotSoBored Games was the best project given the constraints of time, skills and resources we had to design and implement the application.

## Wireframes and interaction flow diagrams

## References

[3] Ijsselsteijn W., Herman H. et al., “Digital game design for elderly users”, Eindhoven University of Technology, 2007. https://dl.acm.org/citation.cfm?id=1328206

[4] Wang J., “Digital Game Design for Elderly Users: A Multi-Disciplinary Review”, The University of Birmingham, School of Computer Science, August 2016, http://www.cs.bham.ac.uk/~rjh/courses/ResearchTopicsInHCI/2015-16/Submissions/wangjiahui.pdf

___
