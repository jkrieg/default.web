# Default Web
A general web template setup for node spikes and deep dives. Any forks in instruction will be labeled with ``Linux``, ``Mac`` and ``Windows`` respectively. If you're running Mac, follow the Linux instructions and modify as needed. My assumption is that all Linux instructions should be POSIX compliant. For the few instructions that are absolutely Mac specific, you'll see a Mac header.

## Prerequisites
Before begining, download the latest version of node and npm from https://nodejs.org/en/

## Getting Started
We'll run some scripts in terminal/command prompt to complete our project folder setup.

### Windows
in command prompt, run ``new-project.bat`` with the folder directory you want set up. For example ``new-project.bat ..\new-project`` will create a node project in a sibling folder to the current directory called new-project.

### Linux and Mac
in the terminal, run ``new-project.sh`` with the folder directory you want set up. For example ``sh ./new-project.sh ../new-project`` will create a node project in a sibling folder to the current directory called new-project. If you have permission issues, run ``chmod +x ./new-project.sh`` and you should be good to go.

### A few notes about Webpack
1.  Webpack makes the assumption that your code is stored under root/src. This is included for readability, but if left out, it would default to assume it.
2.  The config file is written by the developer of the project, so I included this as a starting point. Feel free to modify it as you see fit for your project.
3.  ``webpack.config.js`` is read by default from the current directory where webpack is run, and by extension in the ``package.json`` file above, where ``npm run build`` is run.
4.  Out of the box, webpack is not a requirement, but it helps organize your project and pulls your resources together into a distribution package if you configure it appropriately. If you're going to include more folders outside of the src folder, you'll want to include them in webpack.config.js

For more information on webpack for Node, see https://webpack.js.org/api/node/