const Router = require('express');
const commentController = require('../controllers/commentController');
const router = new Router();


router.get('/', commentController.getAll);
router.post('/', commentController.create);
router.post('/:id', commentController.delete);
router.put('/update', commentController.update);

module.exports = router;