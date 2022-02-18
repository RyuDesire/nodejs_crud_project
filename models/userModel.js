const db = require('../config/database');

  module.exports = {
    getAll: function (result) {
      db.query('SELECT * FROM users', (error, results)=>{
        if(error){
          result (null, error);
        }else{
          result (null, results);
        }
      });
    },
    create: function (person, result) {
      console.log(Object.keys(person));
      console.log(Object.values(person));
      try{
        const user = db.query('INSERT INTO users(name, username, email, user_status) VALUES(?)', [Object.values(person)]);
        return {
          user, 
          success: true,
        };
      }
      catch(error){
        return {
          error,
          success: false,
        };
      }
    },
    delete: function (id, result) {
      try{
        const user = db.query('DELETE FROM users WHERE id = ?', [id]);
        return {
          user, 
          success: true,
        };
      }
      catch(error){
        return {
          error,
          success: false,
        };
      }
    }
  };