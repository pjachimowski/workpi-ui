#WorkPi Assessment Data Profile

*Patryk Jachimowski*

##1. Technology used
* Language: Typescript
* Styling: Scss (with use of pre-existing styles from workpi.scss)
* Graphs: charts.js
* UI reusable Components: storybook.js


##2. Component Structure
* Entire project was done and edited in Profile folder inside src/Components
* Components built with single responsibility principle
* Styling kept inside scss files (with global class definitions)
* I Placed each component is in its own directory with scss and stories files corresponding  to it

The entire project is incorporated within higher order component - SidePane.tsx, which sits directly in App.tsx. This ensures unidirectional data flow.



**SIDE PANE:**
The section can be divided into 3 subsections:
- Personal Information
- Top Skills Enneagram
- Development Skills

(each of those screenblocks in wrapped in **PaneWrapper** component which provides different styling for mobile and desktop view)

Side Pane is fitted with button which hides the pane to the left. This toggle button changes in mobile version for better user experience.

**PERSONAL INFO:**
Personal Info Component is the second most complex component in the project. I accept 3 props from higher order component:
 - userProfile
   -- These are data received from API regarding Profile of the user (ie. name, current job, profile picture)
 - list 
   -- this is a complete list of personal information about the user
 - updatePersonalInfo
   -- only informations which user wants to display on the profile page. These are changing dynamically. 

**TOP SKILLS**
This component display chart which shows the three skills (indicators) with the highest assessment scores (IndicatorValue). Those are taken from the database and passed inside props at the higher level component. Icons are stored in mocked database and are styled accordingly. 

**DEVELOPMENT SKILLS**
This component display chart which shows the three skills (indicators) with the lowest assessment scores (IndicatorValue). Those are taken from the database and passed inside props at the higher level component. 

##MOBILE
App is fully responsive and few elements change in different views. However, last thing I was working on was displaying data list and buttons inside PersonalInformation Component. And the outcome is not yet as I imagined it to be. 

Mobile Preview is cleaner (no box shadowing), and fonts are few pixels bigger.

Main component SidePane is fitted with the slide button which changes in mobile view. 


##DATA
My first step when planning my workflow, apart from checking all the folders and understanding how application works, was mocking data and assigning types. In the first stage I mocked date inside each component, later I extracted this data to single JSON file. At the end I created 3 .ts files each mimicking separate request to API. 

Data files also import interfaces from type.ts file which I store in separated folder.

##STORY BOOK
This element was new to me and I had a great time learning and discovering its efficiency. I have created components basing my code on existing files.

###miscellaneous
1) I have tried to connect to API with GraphQL. However, it was hard as the only data I could find was only user logging data. Later after communication with Daniel I decided to focus on building reusable components and frontend and left the backend untouched.
2) There were some styling elements used by designers which were missing in documentation od Chart.js. Current state is the closest to the one from the assigment. 
3) I did encountered several bugs along the way and therefor I worked on several branches. 
4) There is a NewNav folder created when I was trying to implement a navbar on the side of the page. Due to lack of time I was unable to finish that extra part. 

###IN THE FUTURE
If time would allow I would deffinitely correct personal information list on mobile, add more interesting praphs and move navigation bar to the side (which should not be a big problem).

Thank you vary much for this challenge. I really enjoyed every minute spent on it and I have learnt a lot along the way. I hope you are satysfied with the outcome. 





