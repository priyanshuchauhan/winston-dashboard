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

  const port = config.port || 8000;
  if (config.express == null) {
    app = express();
  } else {
    app = config.express;
  }

  app.use('/api', require('./router/api')(config));
  
  if (config.rootRoute == null) {
    app.use('/', require('./router/app'));
  } else {
    app.use(config.rootRoute, require('./router/app'));
  }

  app.use(require('./errorHandler'));

  if (config.express == null) {
    // Example AWS Lambda then do nothing
    app.listen(port, () => console.log(`listening to port ${port}`));
  }
};
