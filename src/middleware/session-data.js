const initSessionData = (req, res, next) => {
  // Make session data available to all templates
  res.locals.data = req.session.data || {};
  next();
};

const processFormData = (req, res, next) => {
  if (req.method === 'POST') {
    // Store all form data in session
    req.session.data = {
      ...req.session.data,
      ...req.body
    };
  }
  next();
};

module.exports = { initSessionData, processFormData }; 