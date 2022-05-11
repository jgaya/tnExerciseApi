const Sequelize = require('sequelize');
const axios = require('axios');

const { v4: uuidv4 } = require('uuid');
const task = require('../models').task;
module.exports = {
 create(req, res) {
    console.log(req.body);
    return task
        .create ({
             task: req.body.title,
             uuid: uuidv4()
        })
        .then(task => res.status(200).send(task))
        .catch(error => res.status(400).send(error))
 },
 async list(req, res) {
     //https://lorem-faker.vercel.app/api?quantity=5

     const amount = parseInt(req.params.count,10); 
     const count = await task.count();

     if (amount > count) {
        const response = await axios.get(`https://lorem-faker.vercel.app/api?quantity=${amount}`);
        const newTasks = [];
        response.data.forEach(element => {
            newTasks.push({title: element, uuid: uuidv4() })
        });
        return task.bulkCreate(newTasks).then(() => {
            return task.findAll({ limit: amount})
                .then(task => res.status(200).send(task))
                .catch(error => res.status(400).send(error))
        }).catch(error => res.status(400).send(error))
     }

     return task.findAll({ limit: amount})
        .then(task => res.status(200).send(task))
        .catch(error => res.status(400).send(error))
 },
 find (req, res) {
     return task.findAll({
         where: {
             username: req.params.title,
         }
     })
     .then(task => res.status(200).send(task))
     .catch(error => res.status(400).send(error))
  },
  complete(req, res) {
    console.log(`Task ${req.body.title}  completed`)
    return res.status(200).send('completed');
 },
};
