# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to add functionality to the tabs below the 'Lambda Times' logo. These tabs will act as filters for our articles, and when clicked on, should filter out all articles except those with that tag.

![Working Sprint Challenge Gif](./Sprint-Challenge.gif "Example of working project")

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the DOM?

- _The DOM is an acronym for Document Object Model which is the programming interface for web pages. It is a tree node representation of the structure of the page which the browser uses to render and with which JavaScript can make changes to the page._

2. What is an event?

- _An event occurs when the browser or user manipulates a page. Events are the things that occur due to user or browser interaction with a page. The event can be the loading of a page or direct click from the user._

3. What is an event listener?

- _An event listener is a function that waits for an event to occur. An event listener is like an ear that listens and waits for events to occur. When the events occur, a function is called to respond or handle the event._

4. Why would we convert a NodeList into an Array?

- _A NodeList is an Array-like data structure. The only method available for traversing a NodeList is `forEach`. By converting a NodeList to an Array, we have the advantage of using the array methods such as map, filter, etc on the NodeList._

5. What is a component?

- _Components in programming are small re-usable pieces of code. They allow us to write code using the DRY methodology. With components, writing large pieces of repeatable code can be easily done. Components driven UI allows us to use JavaScript components to create HTML based on the data available._

### Git Set up

- [x] Fork the project into your GitHub user account
- [x] Clone the forked project into a directory on your machine
- [x] Create a pull request before you start working on the project requirements. You will continuously push your updates throughout the project.
- [x] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [x] Look through the HTML code paying particular attention to the Tabs component and the Cards components. You will notice they share a data attribute. We will be using this data attribute to determine which cards should show when each tab is selected.

- [x] Following the instructions in the `Tabs.js` file, complete the `TabLink`, and `TabCard` class components. It will look and feel very similar to the last project we worked on, but with a twist. Now, instead of one `Item` to display, we will need to display a collection of `Cards`. Think about ways to iterate over an array and manipulate each item. **Note: You will need to un-comment the code after the lines of instructions. The code is commented out so you can work error-free**

- [x] Once you get your `Tab` component working properly add a couple more articles yourself and check out how it works.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. You have the HTML and CSS already in place, simply un-comment the HTML in the `index.html` file. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. You may reference the `Tabs.js` file for assistance.

- [x] Complete the carousel functionality in `Carousel.js`

- [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

- [x] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

- [ ] If you have finished the above, play around with the styling on all the components, and understand how each is built.
