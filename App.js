import React, { useEffect, useState ,useRef } from 'react'
import 'antd/dist/antd.css';
import { Button, Input , Tag , message , Tooltip  } from 'antd'
import { UserOutlined , AudioOutlined , InfoCircleOutlined } from '@ant-design/icons';
import axios from './api';

function App() {

  /* PageState 為顯示的界面 */
  const [ PageState , setPageState ] = useState( "Welcome" )

  /* LoginUserID , LoginUserPassword 為登入 input 欄位中的帳密 */
  const [ LoginUserID , setLoginUserID ] = useState("")
  const [ LoginUserPassword , setLoginUserPassword ] = useState("")

  /* SignupUserID , SignupUserPassword 為註冊 input 欄位中的帳密 */
  const [ SignupUserID , setSignupUserID ] = useState("")
  const [ SignupUserPassword , setSignupUserPassword ] = useState("")

  /* HasLogin 為目前已經登入 */
  const [ HasLogin , setHasLogin ] = useState(false)

  /* NowUserID , NowUserPassword 為目前已經登入的使用者的帳密 */
  const [ NowUserID , setNowUserID ] = useState("")
  const [ NowUserPassword , setNowUserPassword ] = useState("")
  

  /*刪除所有使用者(2/4)*/
  const handleDeleteAllUsers =  async() => {
    console.log( "FrontendNowDeleteAllUser" )
    const { data: { message }} = await axios.delete( '/api/DeleteAllUsers' );
    console.log(message)
  };

  /*註冊新用戶(2/4)*/
  const handleCreateNewUser =  async() => {
    console.log( "FrontendNowCreateNewUser" )
    const { data: { message }} = await axios.post('/api/CreateNewUser', 
    { SignupUserID , SignupUserPassword });
    console.log(message)
  };

  /*舊用戶登入(2/4)*/
  const handleUsersLogin =  async() => {
    console.log( "FrontendNowUserLogin" )
    const { data:  {message,loginsuccess}} = await axios.post('/api/UserLogin', 
    { LoginUserID , LoginUserPassword });
    console.log( message )
    if ( loginsuccess === "true" ){
      setHasLogin(true)
      setPageState( "Login" )
      setNowUserID( LoginUserID )
      setNowUserPassword( LoginUserPassword )
    }
  };

  
//歡迎頁面

  const WelcomePage=
    <div>
      <p>This is WelcomePage</p>
      <p>This is WelcomePage</p>
      <p>This is WelcomePage</p>  
      <div /* 輸入使用者帳號 */> 
        <p>Please Enter ID</p>
        <Input onChange = { ( e ) => { setLoginUserID( e.target.value )}}
               placeholder = "Enter your UserId"
               prefix = { <UserOutlined /> }
          
        />
      </div>
      <div /* 輸入使用者密碼 */>
        <p>Please Enter Password</p>
        <Input onChange = { ( e ) => { setLoginUserPassword( e.target.value )}}
               placeholder = "Enter your Password"
               prefix = { <UserOutlined /> }
               
        />
      </div>
      <div /* 舊用戶登入(1/4) */>
        <Button onClick = { handleUsersLogin }
                disabled = { !LoginUserID || !LoginUserPassword }
                type = "primary"
        >Login</Button>
      </div>
      <div /* 註冊按鈕 */>
        <p>First Time To Use? Please Signup</p>
        <Button onClick = { ()=> { setPageState( "Signup" );
                                   setSignupUserID("");
                                   setSignupUserPassword("");               
      }}
                type = "primary"
      >Signup</Button>
      </div>
      <div /* 刪除所有使用者(1/4) */>
        <Button onClick = { handleDeleteAllUsers }
                type = "danger"
                
      >Delete All Users</Button>
      </div>
    </div>

//已登入的主頁面
  const LoginPage=
    <div>
      <div /* 各種功能 */>
        <p>Welcome back { NowUserID } Please choose the servive </p>
        <Button type = "primary"
                onClick = { () => {setPageState("PersonalInfo")}}>Personal Info</Button>
        <br/>
        <Button type="primary"
                onClick = { () => {setPageState("Reminder")}}>Reminder</Button>
        <br/>
        <Button type="primary"
                onClick = { () => {setPageState("Chatroom")}}>Chatroom</Button>
        <br/>        
        <Button type="primary"
                onClick = { () => {setPageState("Learning")}}>Learning</Button>
        <br/>        
        <Button type="primary"
                onClick = { () => {setPageState("Setting")}}>Setting</Button>
      </div>
      <div /* 登出按鈕 */>
        <Button type = "danger"
                onClick = { () => {setPageState("Welcome");
                                   setLoginUserID("");
                                   setLoginUserPassword("");
                                   setHasLogin(false)
                                   setNowUserID("")
                                   setNowUserPassword("")

      
        }}>Signout</Button>
      </div>
    </div>

//註冊頁面
  const SignupPage=
    <div>
      <p>This is Signup Page</p>
      <div /* 註冊輸入帳號 */>
        <p>Please Enter ID</p>
        <Input onChange = { ( e ) => { setSignupUserID( e.target.value )}}
               placeholder = "Enter your UserId"
               prefix = { <UserOutlined /> }
        />
      </div>
      <div /* 註冊輸入密碼 */>
        <p>Please Enter Password</p>
        <Input onChange = { ( e ) => { setSignupUserPassword( e.target.value )}}
               placeholder = "Enter your UserPassword"
               prefix = { <UserOutlined /> }
        />
      </div>
      <div /* 註冊新用戶(1/4) */>
        <Button type = "primary"
                onClick = { handleCreateNewUser }
                disabled = { !SignupUserID || !SignupUserPassword }
        >Submit</Button>
      </div>
      <div /* 放棄註冊 */>
        <Button type = "danger"
                onClick = { () => { setPageState("Welcome")
                                    setLoginUserID("");
                                    setLoginUserPassword("");
        }}>Go back</Button>
      </div>
    </div>


//個人資訊頁面
  const PersonalInfoPage=
    <div>
      <p>This is Personal Info Page</p>
      <button onClick = { () => { setPageState("Login") }}>Go Back</button>
    </div>

//提醒事項頁面
  const ReminderPage=
    <div>
      <p>This is Reminder Page</p>
      <button onClick = { () => { setPageState("Login") }}>Go Back</button>
    </div>

//聊天室頁面
  const ChatroomPage=
    <div>
      <p>This is Chatroom Page</p>
      <button onClick = { () => { setPageState("Login") }}>Go Back</button>
    </div>

//學習功能頁面
  const LearningPage=
    <div>
      <p>This is Learning Page</p>
      <button onClick = { () => { setPageState("Login") }}>Go Back</button>
    </div>

//偏好設定頁面
  const SettingPage=
    <div>
      <p>This is Setting Page</p>
      <button onClick = { () => { setPageState("Login") }}>Go Back</button>
    </div>  



  if ( PageState === "Welcome" )
  {return ( WelcomePage)}
  else if ( PageState === "Login" )
  {return ( LoginPage)}
  else if ( PageState==="Signup" )
  {return ( SignupPage)}
  else if ( PageState==="PersonalInfo" )
  {return ( PersonalInfoPage)}
  else if ( PageState==="Reminder" )
  {return ( ReminderPage)}
  else if ( PageState==="Chatroom" )
  {return ( ChatroomPage)}
  else if ( PageState==="Learning" )
  {return ( LearningPage)}
  else if ( PageState==="Setting" )
  {return ( SettingPage)}
  
}

export default App;
