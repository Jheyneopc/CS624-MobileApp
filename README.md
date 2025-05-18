PE03/

INPUT
The app allows users to type tasks into a text input field. The input is stored temporarily and is used to create a new item in the to-do list when the user presses the Submit button.

PROCESS
When the app starts, it uses React Native to display the main screen. The user types in a task and clicks Submit. This triggers a function that adds the task to an array in the app’s state. The user can then mark tasks as “Done” or “Delete” them. There is also a tab bar at the bottom that filters the list to show All, Active (not done), or Completed (done) tasks. The app updates its view based on the selected tab and any changes made.

OUTPUT
The output is a to-do list that updates live on the screen. Tasks can be filtered, completed, or removed. The design is simple and mobile-friendly.


PE02/

INPUT:
The app lets users type their favorite course (like "CS624") into a text box. It also loads a picture from the assets folder (cityu-image.jpg) and uses hardcoded course lists (core, depth, and capstone) to display on the screen.

PROCESS:
When the app starts, it uses React Native components like View, Text, Image, TextInput, ScrollView, and StyleSheet. It shows a scrollable screen where the image appears at the top, and below it, the input field and course lists are styled and displayed clearly.

OUTPUT:
The user sees a nice mobile screen with a CityU image, an input box to type in a course, and a list of MSCS courses grouped under Core Requirements, Depth of Study, and Capstone. The layout is organized with color highlights and works on both web and mobile using Expo.


# CS-624-
PE01/
INPUT:
There is no direct user input in this app. The content is hard-coded into the app in a way that would display a message with my name, degree program, and university name. The data is written using React Native Text components.

PROCESS:
The app was built using GitHub Codespaces with Expo and React Native. So I used a View to store everything and three Text components to display each line of my message. The layout of the app is styled using StyleSheet as per the assignment requirement. I applied a yellow background color to the View to meet the user requirements and also centered the text in the middle of the screen using basic style properties.

OUTPUT 
When the app runs, it displays a yellow screen with my name, program name, and school name (CityU) displayed across three lines. This serves the purpose of creating a simple mobile app.
