import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    UserID : String,
    Todo: String,
    Day: [String ,String ,String ]
},{collection: 'Todo'});

const Todo = mongoose.model( 'Todo' , TodoSchema );
export default Todo;