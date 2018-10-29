const mongoose = require('mongoose');

const Plan = require('../models/plan');

exports.plans_get_all = (req, res, next) => {
    Plan.find()
        .select('_id name creationDate creationUser')
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

exports.plans_get_all_for_user = (req, res, next) => {
    const userId = req.body.userId;
    Plan.find({creationUser: userId})
        .select('_id name creationDate creationUser')
        .exec()
        .then(planList => {
            const response = {
                count: planList.length,
                plans: planList.map(plan => {
                    return {
                        _id: plan._id,
                        text: plan.name,
                        creationDate: plan.creationDate,
                        creationUser: plan.creationUser,
                        updatedDate: plan.updatedDate
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
    console.log(req.body.name);
    console.log(req.body.creationUser);
    const creationDate = Date.now();
    const plan = new Plan({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        creationUser: req.body.creationUser,
        creationDate: creationDate,
        updatedDate: creationDate
    });

    plan
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Created Plan successfully',
                createdPlan: {
                    _id: result._id,
                    name: result.name,
                    creationUser: result.creationUser,
                    creationDate: result.creationDate,
                    updatedDate: result.updatedDate
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