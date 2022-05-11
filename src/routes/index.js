/* Controllers */
const taskController = require('../controllers/task');
module.exports = (app) => {
   app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));
   app.post('/api/task/create', taskController.create);
   app.get('/api/task/list/:count', taskController.list);
   app.put('/api/task', taskController.complete);
   app.get('/api/task/find/title/:title', taskController.find);
};