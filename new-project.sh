echo off
d=$0
wd=$1

if [ ! -e "./project-assets/server.js" ]; then
    echo "This script must be run from the default.web directory. Try setting your directory there before continuing."
    exit 1
fi

if [ -d "$wd" ]; then
    mkdir "$wd"
fi

cp project-assets/* "$wd"
cd "$wd" || exit

# npm init will ask the user a series of questions when creating a new project. follow these instructions and your package.json file will be populated
npm init -y
# node-static allows serving static files easily without specifying each individual file in server.js
npm install node-static
# webpack allows you to develop your code in one format, but deploy in an expected format so that your source code can be easier to read. for more information, see https://webpack.js.org/api/node/
npm install webpack --save-dev