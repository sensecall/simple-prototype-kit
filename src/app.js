const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const net = require('net');
const EventEmitter = require('events');

const app = express();
const BASE_PORT = process.env.PORT || 3000;
const portEmitter = new EventEmitter();

// Configure Nunjucks
nunjucks.configure(path.join(__dirname, 'views'), {
  autoescape: true,
  express: app,
  watch: true
});

app.set('view engine', 'njk');
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes'));

// Function to check if a port is in use
const isPortAvailable = (port) => {
  return new Promise((resolve) => {
    const server = net.createServer()
      .once('error', () => resolve(false))
      .once('listening', () => {
        server.close();
        resolve(true);
      })
      .listen(port);
  });
};

// Function to find an available port
const findAvailablePort = async (startPort) => {
  let port = startPort;
  while (!(await isPortAvailable(port))) {
    port++;
  }
  return port;
};

// Start the server with port checking
const startServer = async () => {
  const port = await findAvailablePort(BASE_PORT);
  
  if (port !== BASE_PORT) {
    console.log(`Port ${BASE_PORT} was in use, using port ${port} instead.`);
    const confirm = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    confirm.question('Continue with new port? (y/n) ', (answer) => {
      if (answer.toLowerCase() === 'y') {
        app.listen(port, () => {
          console.log(`Server running on http://localhost:${port}`);
          portEmitter.emit('portFound', port);
        });
      } else {
        console.log('Server startup cancelled');
        process.exit(0);
      }
      confirm.close();
    });
  } else {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
      portEmitter.emit('portFound', port);
    });
  }
  return portEmitter;
};

module.exports = { startServer };