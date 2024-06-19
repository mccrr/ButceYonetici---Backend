const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    username: {
        type: String,
        required: "Username is required",
        unique: "This username is not available"
    },
    email: {
        type: String,
        required: 'Email is required',
        unique: 'This email is already being used.',
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Lütfen geçerli bir e-posta adresi girin.']
      },
    password: {
        type: String,
        required: 'Password is required.',
    }
} );

module.exports