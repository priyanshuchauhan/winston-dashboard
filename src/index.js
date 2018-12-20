const express = require('express');
let app;

module.exports = config => {
  if (config.path == null) {
    throw new Error('Please provide a path property to the logs');
  }

  if (config.logFiles == null) {
    throw new Error(
      'Please provide a logFiles property to look for the logs. remember this is a Glob.'
    );
  }
  if (config.express == null) {
    app = express();
  } else {
    app = config.app;
  }
  const port = config.port || 8000;

  app.use('/api', require('./router/api')(config));
  app.use('/', require('./router/app'));

  app.use(require('./errorHandler'));

  if (config.skipListenOnPort) {
    // Example AWS Lambda
  } else {
    app.listen(port, () => console.log(`listening to port ${port}`));
  }
};
