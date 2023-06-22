const UserModel = require('../models/user.model');


/**
 * GET ALL THE USERS 
 */ 
const getAllUsers = async (req, res) => {
     try {
          const users = await UserModel.find();
          res.status(200).send({ message: 'success', data: users });
     } catch (error) {
          console.log('❌ error:', error)
          res.status(400).send({ messgae: error.message, error })
     }
};



/**
 * UPDATE A SINGLE USER BY PROVIDING THE UDPATES IN `body` AND USER-ID IN PARAMS
 */ 
const updateUser = async (req, res) => {

     if (!req.body) {
          res.status(401).send({ message: 'Please provide the update in the body of the request' })
          return;
     };

     const update = req.body;
     const userId = req.params.id;

     try {
          const user = await UserModel.findById(userId);
          if (user) {
               await UserModel.findByIdAndUpdate(userId, update);
               res.status(200).send({ message: `${user.name} is updated successful` });
          } else {
               res.status(404).send({ message: 'User not found!' });
          }
     } catch (error) {
          console.log('❌ error:', error)
          res.status(400).send({ messgae: error.message, error })
     }
}

module.exports = { getAllUsers, updateUser };