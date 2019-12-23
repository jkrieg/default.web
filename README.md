# Default Web
A general web template setup for node spikes and deep dives. Any forks in instruction will be labeled with ``Linux``, ``Mac`` and ``Windows`` respectively. If you're running Mac, follow the Linux instructions and modify as needed. My assumption is that all Linux instructions should be POSIX compliant. For the few instructions that are absolutely Mac specific, you'll see a Mac header.

## Prerequisites
Before begining, download the latest version of node and npm from https://nodejs.org/en/

## Getting Started
We'll run some scripts in terminal/command prompt to complete our project folder setup.

### Windows
in command prompt, run ``project-setup.bat`` with the folder directory you want set up. For example ``project-setup.bat ..\new-project`` will create a node project in a sibling folder to the current directory called new-project.

### Linux and Mac
in the terminal, run ``project-setup.sh`` with the folder directory you want set up. For example ``project-setup.sh ../new-project`` will create a node project in a sibling folder to the current directory called new-project.

Once you have your project folder set up, you can use whatever IDE you prefer to start working with JavaScript, HTML and CSS. You can even derive your project to work with ReactJS, or Vue. If you want an Angular project set up, you can see my GIT repo called default.angular which instructs you on how to install the Angular CLI and create a new project. This is still a good project to start with if you plan on using Angular CLI, as you'll be importing libraries from NPM to enhance functionality that Angular doesn't provide, such as momentjs, a date-time library that simplifies the transformation and math behind dates in JavaScript. If you want to learn how to use NPM from this project, you can check the script you ran to begin your Node project to see what's involved in creating the serverlet, and how it launches static files.
