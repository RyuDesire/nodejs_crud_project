const User = require('../models/userModel');

module.exports = {
  getUsers: (request, response) => {
    User.getAll((error, data) =>{
      if(error){
        response.send(error);
      }
      response.send(data);  
    })
  },
  createUser: (request, response) => {
    const person = request;
    User.create(person, (error, data) => {
      if(error){
        response.send(error);
      }
      response.send(data);
    }) 
  }, 
  
  deleteUser: (request, response) => {
    const id = request.body;
    User.delete(id, (error, data) => {
      if(error){
        response.send(error);
      }
      response.send(data);
    })
  }
}
