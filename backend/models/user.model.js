const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
     name: {
          type: String,
          required: true
     },
     email: {
          type: String,
          required: true
     },
     gender: {
          type: String,
          enum: {
               values: ['male', 'female'],
               message: "Please choose only male/female options"
          }
     },
     status: {
          type: String,
          enum: {
               values: ['active', 'inactive'],
               message: "Please choose only active/inactive options"
          }
     }
}, { versionKey: false, timestamps: true });


const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;