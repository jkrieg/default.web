echo off
set d=%cd%
set wd=%1

echo %d%

if not exist project-assets\server.js (
    goto err2 
)

if '%wd%' equ '' (
    goto err1
)

if exist %wd% (
    goto direxists
) else (
    mkdir %wd%
    goto direxists
)

:direxists
robocopy project-assets\ %wd% /purge /MIR
cd %wd%

rem npm init will ask the user a series of questions when creating a new project. follow these instructions and your package.json file will be populated
npm init -y
rem node-static allows serving static files easily without specifying each individual file in server.js
npm install node-static
rem webpack allows you to develop your code in one format, but deploy in an expected format so that your source code can be easier to read. for more information, see https://webpack.js.org/api/node/
npm install webpack --save-dev

goto end

:err1
echo Missing required path parameter
goto errend

:err2
echo This script must be run from the default.web directory. Try setting your directory there before continuing.
goto errend

:end
echo on
echo Project created successfully

:errend
cd %d%
echo on