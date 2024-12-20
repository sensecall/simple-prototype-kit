const express = require('express');
const router = express.Router();
const apiRoutes = require('./api');
const viewRoutes = require('./views');
const { initSessionData, processFormData } = require('../middleware/session-data');

// Add middleware before routes
router.use(initSessionData);
router.use(processFormData);

// Mount routes
router.use('/', viewRoutes);
router.use('/api', apiRoutes);

module.exports = router;