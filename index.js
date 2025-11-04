// import modules
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const cors = require('cors');

// import and configure dotenv for environment variables
require('dotenv').config();

// create Express application
const app = express();
const port = 3000;

// Add CORS for React dev server (before other middleware)
app.use(cors({
  origin: 'http://localhost:3001', // React dev server port
  credentials: true
}));

// serve static files from public directory
app.use(express.static('public'));
// parse URL-encoded bodies (form submissions)
app.use(express.urlencoded({ extended: true }));
// parse JSON bodies
app.use(express.json());
app.use(bodyParser.json());

// configure session middleware with 
// secret from env or generate random one
app.use(session({
    secret: process.env.SESSION_SECRET || crypto.randomBytes(32).toString('hex'),
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));

// import route modules
const authApiRouter = require('./routes/authApi');
const postsApiRouter = require('./routes/postsApi');

// mount auth and posts routers
app.use('/api/auth', authApiRouter);
app.use('/api/posts', postsApiRouter);

// For production build (uncomment when ready to deploy):
// const path = require('path');
// app.use(express.static('build'));
// app.get('*', (req, res) => {
//   if (!req.path.startsWith('/api')) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   }
// });

// start server, listen on port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});