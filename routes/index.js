/**
 * Create the routes
 */

const express = require('express'),
    router = express.Router(),
    { projects } = require('../data');

// Create the starter route, pointing to the homepage
router.get('/', (req, res) => {
    res.render('index', {projects});
});

// Route to point to the about page
router.get('/about', (req, res) => {
    res.render('about');
});

// Route to point to the projects page based on the id parameter passed
router.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    res.render('project', {project: projects[id]});
});

module.exports = router;