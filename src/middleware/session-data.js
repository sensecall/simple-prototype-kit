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

module.exports = { processFormData }; 