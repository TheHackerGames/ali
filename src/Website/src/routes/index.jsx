import express from 'express';

/*eslint-disable*/
const router = express.Router();
/*eslint-enable*/

router.get('*', (req, res) => {
  res.render('index', {title: 'Ally'});
});

module.exports = router;
