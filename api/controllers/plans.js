const mongoose = require('mongoose');

const Plan = require('../models/plan');

exports.plans_get_all = (req, res, next) => {
    Plan.find()
        .select('_id name')
        .exec()
        .then(planList => {
            const response = {
                count: planList.length,
                plans: planList.map(plan => {
                    return {
                        _id: plan._id,
                        text: plan.name
                    }
                })
            }
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
}

exports.plans_create = (req, res, next) => {
    console.log(req);
    console.log(res);
    console.log(req.body.text);
    const plan = new Plan({
        _id: new mongoose.Types.ObjectId(),
        plan: req.body.plan
    });

    plan
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Created Plan successfully',
                createdPlan: {
                    name: result.name,
                    _id: result._id
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
}

exports.plans_get_plan = (req, res, next) => {
    const id = req.params.planId;
    Plan.findById(id)
      .select('_id name')
      .exec()
      .then(plan => {
        console.log("From database", plan);
        if (plan) {
          res.status(200).json(plan);
        } else {
          res.status(404).json({ message: 'No plan found for provided ID' });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  }

  exports.plans_update_plan = (req, res, next) => {
    const id = req.params.planId;
  
    const updateOps = {};
    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }
  
    Plan.update({ _id: id }, { $set: updateOps })
      .exec()
      .then(result => {
        console.log(result);
        res.status(200).json({
          message: 'Plan updated'
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  }

  exports.plans_delete_plan = (req, res, next) => {
    const id = req.params.planId;
    Plan.remove({ _id: id })
      .exec()
      .then(result => {
        res.status(200).json({
          message: 'Plan deleted'
        });

        // TODO delete all Todo's for this plan

      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  }