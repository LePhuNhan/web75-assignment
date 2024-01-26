import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    name: String,
    age: Number,
    password: String,
    role: String,
    updateAt: { type: Date, default: Date.now },
    createAt: { type: Date, default: Date.now },
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;

