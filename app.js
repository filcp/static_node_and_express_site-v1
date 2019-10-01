/**
 * Start the app
 */

const express = require('express'),
    path = require('path'),
    app = express(),
    routes = require('./routes');

// Set the engine
app.set('view engine', 'pug');
// Use static route to serve the files in the public folder
app.use('/static', express.static(path.join(__dirname, 'public')));

// Call the routes
app.use(routes);

// Middleware to create a 404 error
app.use((req, res, next) => {
    const err = new Error('Oops, seems like the page you were looking for doesn\'t exist.');
    err.status = 404;
    next(err);
});

// Render the error template when there is an error
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.render('error');
});

app.listen(3000);