const mongoose = require('mongoose');
const { Schema } = require('zod');
require('dotenv').config();

// Connect with Mongo instance
try {
  mongoose.connect(process.env.DB_URL);
  console.log('Connected to MongoDB');
} catch (error) {
  console.error(error.message);
}

// Create user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30,
  },
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User Model
    required: 'true',
  },
  balance: {
    type: Number,
    required: true,
  },
});

// Create a model from the schema
const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);

module.exports = { Account, User };
