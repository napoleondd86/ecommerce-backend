const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// JUST GIVES A "WRONG ROUTE" FOR ANY THAT IS NOT /api
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;