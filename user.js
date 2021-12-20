import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    UserID:String,
    Password:String,
    /*UserKey: { type: String, unique: true },*/
    /*TimeStamp: Date*/
},{
    collection: 'User'

});
const User=mongoose.model('User',UserSchema);
export default User;