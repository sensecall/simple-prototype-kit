const express = require('express');
const router = express.Router();
const apiRoutes = require('./api');
const viewRoutes = require('./views');

// Mount routes
router.use('/', viewRoutes);
router.use('/api', apiRoutes);

module.exports = router;