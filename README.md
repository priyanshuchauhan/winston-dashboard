# winston-dashboard

React Based Log Browser for WinstonJs

![alt text](https://raw.githubusercontent.com/spearmootz/winston-dashboard/gh-pages/winston-dashboard.png)

## Instalation

`npm install --save winston-dashboard`
Minimum requirement: Node 8

## Usage

```
const winstonServer = require('winston-dashboard');
const path = require('path');

// Instantiate the server
winstonServer({
  path: path.join(__dirname, '/logs'), //Root path of the logs (used to not show the full path on the log selector)
  logFiles: '/**/*.log', //Glob to search for logs, make sure you start with a '/'
  port: 8000, // Optional custom port, defaults to 8000,
  orderBy: 'creationTime' // 'creationTime' | 'modifiedTime', if none is provided then it will sort by alphabetical order
});
```

## How it works

It uses options.path and options.logFiles to look for all logs.
Each one of these logs is instantiated as a Transport.

Server provides query api for these transports.


## What you can do

* Picks up new log files every minute
* Filter logs with an input. useful when you have a lot of log files, for example daily files.
* Filter logs with an input
* Filter by maximum level (if Info is selected verbose and silly wont show).
* Select amount of rows to show.
* Paginate

## What it cant do

* It cannot sort even thought he Api provides a way to do so because the order 'desc' has a bug and does not paginate.

* Cannot filter by time. if you are really interested in this and just let me know and i can make it work. I had it at some point but while investingating the transport query function i removed this functionality.

## Roadmap

* Add a refresh button

## Make Contribution

`npm i concurrently --save-dev`
`npm build`
`npm login`
`npm publish`

### Note
In node js software folder, node-sass\4.5.0 folder is still created in npm-cache folder. So I download win32-x64-48_binding.node manually, put it in C:\Users\Administrator\AppData\Roaming\npm-cache\node-sass\4.5.0 folder.
And run npm install command, issue resolved.