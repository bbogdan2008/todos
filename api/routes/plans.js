var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/check-auth');

const PlansController = require('../controllers/plans');

router.get  ('/',                   PlansController.plans_get_all);
router.post ('/',       checkAuth,  PlansController.plans_create);
router.get  ('/:planId',            PlansController.plans_get_plan);
router.patch('/:planId',            PlansController.plans_update_plan);
router.delete('/:planId',           PlansController.plans_delete_plan);

module.exports = router;
