echo off
set d=%cd%
set wd=%1

echo %d%

if not exist project-assets\index.js (
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
copy project-assets\* %wd%
cd %wd%

rem npm init will ask the user a series of questions when creating a new project. follow these instructions and your package.json file will be populated
npm init
rem MomentJS is a library for JavaScript that simplifies date-time manipulation and math. It also provides a formatter for JSON transformations so that you can have a predictable format for your Date object (e.g. Assuming local times, or assuming UTC). For more information, see https://momentjs.com/
npm install momentjs --save-dev
rem eslint is a development time library that allows, to albiet sometimes overly strict, compile-time errors for syntax preferences being violated (such as prefering double quote over single quote strings, spacing formats, etc.) All of which can be overidden in a .eslintrc file. For more information, see https://eslint.org/docs/user-guide/getting-started
npm install eslint --save-dev

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