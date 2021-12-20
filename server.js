import WebSocket from 'ws';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv-defaults";
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import User from "../model/user.js"

/* 連接資料庫 */
dotenv.config();
if (!process.env.MONGO_URL){
    console.error("Missing MONGO_URL!!");
    process.exit(1);
}
mongoose
    .connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,})
const db = mongoose.connection
db.on( "error" , ( e ) => {
    throw new Error( "DBConnectionError" + e )
})
const app =express();
const server = http.createServer( app );
const wss = new WebSocket.Server( { server } );
app.use( cors() );
app.use( bodyParser.json() );

/* 確定有連到資料庫 */
db.once( "open" , () => {
    console.log( "MongoDB connected!" )
    const PORT = process.env.port || 4000
    server.listen( PORT , () =>{
        console.log( `Listening on ${PORT}` )
    })
})

/* 註冊新用戶(3/4) */
app.post( '/api/CreateNewUser' , async ( req , res ) => {
    let SignupUserID = req.body.SignupUserID;
    let SignupUserPassword = req.body.SignupUserPassword;
    const response = await SaveNewUser( SignupUserID , SignupUserPassword );
    res.json( { message: `${response}` } )
})

/* 註冊新用戶(4/4) */
const SaveNewUser = async ( UserID , Password ) => {
    const existing = await User.findOne( { UserID : UserID } );
    if ( existing ) {try { return `UserID ${UserID} has repeated !!`}
        catch( e ) { throw new Error( "User creation error" + e ) }}
    else {
        console.log( "BackendNowCreateNewUser" );
        try {
        const newUser = new User( { UserID , Password } );
        let nowreturn = newUser.save();
        console.log( "BackendFinishCreateNewUser" );
        return `FrontendFinishCreateNewUser(${UserID},${Password})`;
        
        }
        catch( e ) { throw new Error( "User creation error" + e ) }}
}

/* 舊用戶登入(3/4) */
app.post( '/api/UserLogin' , async ( req , res ) => {
    let InputUserID = req.body.LoginUserID;
    let InputUserPassword = req.body.LoginUserPassword;
    const [ response , loginstatus ] = await UserLogin( InputUserID , InputUserPassword );
    res.json( { message : `${response}` , loginsuccess : `${loginstatus}` } )
})

/* 舊用戶登入(4/4) */
const UserLogin = async ( UserID , Password ) => {
    const existing = await User.findOne( { UserID : UserID } );
    console.log( "BackendNowUserLogin" );
    if ( existing ) {try {
        if ( existing.Password === Password ){
            try{
                console.log( "BackendFinishUserLogin" );
                
                return [`FrontendFinishUserLogin(${UserID},${Password})`, true ]
            }
            catch( e ) { throw new Error( "User Login error" + e ) }
        }
        else {
            try{return [`Wrong Password!!` , false ]}
            catch( e ) { throw new Error( "User Login error" + e ) }
        }
        }
        catch( e ) { throw new Error( "User Login error" + e ) }}
    else {
        try {
        return [`UserID is not existing !` , false ];
        }
        catch( e ) { throw new Error( "User Login error" + e ) }}
}

/*刪除所有使用者(3/4)*/
app.delete( '/api/DeleteAllUsers' , async ( req , res ) => {
    const response = await DeleteDB();
    res.json( { message: `${response}` } )
    
});

/*刪除所有使用者(4/4)*/
const DeleteDB = async () => {
    try{
        console.log( "BackendNowDeleteAllUser" );
        await User.deleteMany( {} );
        console.log( "BackendFinishDeleteAllUser" );
        return `FrontendFinishDeleteAllUser` ;
    }
     catch( e ) { throw new Error( "database deletion failed" + e ) }
}