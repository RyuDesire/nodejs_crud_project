const express = require('express');
const path = require("path")
const router = express.Router();

const UserController = require('../controllers/userController');

const view = (document) => path.join(__dirname, 'views', document);

router.get('/users', (request, response) => {
  response.sendFile(view('userView.html'));
});

//router.use('/users');
router.get('/api/users', UserController.getUsers);

router.post('/register', async (request, response) => {
  const person = request.body;
  const user = await UserController.createUser(person);
  response.send(user);
})

router.put('/delete', async (request, response) => {
  const id = request.body.id;
  const user = await UserController.deleteUser(id);
  response.send(user);
})
module.exports = router;