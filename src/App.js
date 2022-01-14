import React, { useEffect, useState, useRef } from "react";
import "antd/dist/antd.css";
import {
  Button,
  Input,
  Tag,
  Tooltip,
  Layout,
  Menu,
  Breadcrumb,
  Descriptions,
  Badge,
  DatePicker,
  InputNumber,
  Select,
  Radio,
  Table,
  Alert,
} from "antd";
import {
  UserOutlined,
  SettingOutlined,
  SmileOutlined,
  DollarOutlined,
  EyeInvisibleOutlined,
  AuditOutlined,
  AlertOutlined,
  PieChartOutlined,
  AccountBookOutlined,
  AimOutlined,
  ReadOutlined,
  TeamOutlined,
  CarOutlined,
  KeyOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import axios from "./api";
import moment from "moment";
import { sum } from "lodash";
import Memo from "./memo"
import Learning from "./learning";

function App() {
  ///////////////////////////////////////////////////////////////////////////////

  /* PageState 為顯示的界面 */
  const [PageState, setPageState] = useState("Welcome");

  /* LoginUserID , LoginUserPassword 為登入 input 欄位中的帳密 */
  const [LoginUserID, setLoginUserID] = useState("");
  const [LoginUserPassword, setLoginUserPassword] = useState("");

  /* 註冊 input 欄位中的帳密及基本資料 */
  const [SignupUserID, setSignupUserID] = useState("");
  const [SignupUserPassword, setSignupUserPassword] = useState("");
  const [SignupNickname, setSignupNickname] = useState("");
  const [SignupSchool, setSignupSchool] = useState("");
  const [SignupBirthday, setSignupBirthday] = useState(["", "", ""]);
  const [SignupAboutMe, setSignupAboutMe] = useState("");

  /* HasLogin 為目前已經登入 */
  const [HasLogin, setHasLogin] = useState(false);

  /* 目前已經登入的使用者的帳密及基本資料 */
  const [NowUserID, setNowUserID] = useState("");
  const [NowUserPassword, setNowUserPassword] = useState("");
  const [NowNickname, setNowNickname] = useState("");
  const [NowSchool, setNowSchool] = useState("");
  const [NowBirthday, setNowBirthday] = useState(["", "", ""]);
  const [NowAboutMe, setNowAboutMe] = useState("");

  /* OldUserPassword , NewUserPassword 為使用者改密碼時的的舊/新密碼 */
  const [OldUserPassword, setOldUserPassword] = useState("");
  const [NewUserPassword, setNewUserPassword] = useState("");

  /* 顯示在底部 ( footer ) 的系統訊息和文字顏色 */
  const [SystemMessage, setSystemMessage] = useState("Welcome to エムエム");
  const [SystemDescription, setSystemDescription] = useState(
    "Please login or signup first"
  );
  const [SystemMessageType, setSystemMessageType] = useState("success");

  /*側邊選單的Logo和收起/展開狀態，預設為展開*/
  const [SiderLogo, setSiderLogo] = useState("🥺😳😎🥺😳😎");
  const [SiderOnCollapse, setSiderOnCollapse] = useState(false);

  /* 新增一筆記帳時輸入的資訊*/
  const [NewCostTitle, setNewCostTitle] = useState("");
  const [NewCostIsOutcome, setNewCostIsOutcome] = useState(true);
  const [NewCostMoney, setNewCostMoney] = useState(0);
  const [NewCostTag, setNewCostTag] = useState("");
  const [NewCostDay, setNewCostDay] = useState(["", "", ""]);

  /* 使用者改個人資料時的的新資料 */
  const [NewNickname, setNewNickname] = useState("");
  const [NewSchool, setNewSchool] = useState("");
  const [NewBirthday, setNewBirthday] = useState(["", "", ""]);
  const [NewAboutMe, setNewAboutMe] = useState("");

  /* 當前使用者的所有記帳紀錄 */
  const [MyCost, setMyCost] = useState([]);
  /* 當前使用者的所有備忘錄 */
  const [MemoData, setMemoData] = useState([]);
  const resetTodo = async (UserID) => {
    const {data} = await axios.post("/api/allTodo", {user: UserID});
    console.log("Todos: ", data.Todos);
    setMemoData(data.Todos);
  }
  /* 當前使用者的所有單字 */
  const [WordData, setWordData] = useState([]);
  const resetWord = async (UserID) => {
    const {data} = await axios.post("/api/allWord", {user: UserID});
    console.log("Words: ", data.words);
    setWordData(data.words);
  }

  ///////////////////////////////////////////////////////////////////////////////

  /*註冊新用戶(2/4)*/
  const handleCreateNewUser = async () => {
    console.log("FrontendNowCreateNewUser");
    const {
      data: { Message, SignupSuccess },
    } = await axios.post("/api/CreateNewUser", {
      SignupUserID,
      SignupUserPassword,
      SignupNickname,
      SignupSchool,
      SignupBirthday,
      SignupAboutMe,
    });
    console.log(Message);
    if (SignupSuccess === "true") {
      setSystemMessage("Signup success!!");
      setSystemDescription("Now you can login and start エムエム😳");
      setSystemMessageType("success");
      //初始化學習功能的字典
      const {data} = await axios.post("/api/initWord", {user:SignupUserID});
      console.log(data.message);
    } else {
      setSystemMessage("Signup failed!!");
      setSystemDescription(Message);
      setSystemMessageType("error");
    }
  };

  /*舊用戶登入(2/4)*/
  const handleUsersLogin = async () => {
    console.log("FrontendNowUserLogin");
    const {
      data: {
        Message,
        LoginSuccess,
        UserID,
        UserPassword,
        Nickname,
        School,
        Birthday,
        AboutMe,
      },
    } = await axios.post("/api/UserLogin", { LoginUserID, LoginUserPassword });
    console.log(Message);

    if (LoginSuccess === "true") {
      setHasLogin(true);
      setPageState("Login");
      setNowUserID(UserID);
      setNowUserPassword(UserPassword);
      setNowNickname(Nickname);
      setNowSchool(School);
      setNowBirthday([
        Birthday.split(",")[0],
        Birthday.split(",")[1],
        Birthday.split(",")[2],
      ]);
      setNowAboutMe(AboutMe);
      setSystemMessage("Login success!!");
      setSystemDescription(Message);
      setSystemMessageType("success");
      //query todos
      resetTodo(UserID);
      //query words
      resetWord(UserID);

    } else {
      setSystemMessage("Login failed!!");
      setSystemDescription(Message);
      setSystemMessageType("error");
    }
  };

  /*刪除所有使用者(2/4)*/
  const handleDeleteAllUsers = async () => {
    console.log("FrontendNowDeleteAllUser");
    const {
      data: { Message },
    } = await axios.delete("/api/DeleteAllUsers");
    console.log(Message);
    setSystemMessage("All users has been deleted");
    setSystemDescription("User DB is empty now");
    setSystemMessageType("info");
  };

  /*修改個人資料(2/4)*/
  const handleChangePersonalInfo = async () => {
    console.log("FrontendNowChangePersonalInfo");
    const {
      data: { Message, ChangePersonalInfoSuccess },
    } = await axios.post("/api/ChangePersonalInfo", {
      NowUserID,
      NewNickname,
      NewSchool,
      NewBirthday,
      NewAboutMe,
    });
    console.log(Message);
    if (ChangePersonalInfoSuccess === "true") {
      setNowNickname(NewNickname);
      setNowSchool(NewSchool);
      setNowBirthday(NewBirthday);
      setNowAboutMe(NewAboutMe);
      setSystemMessage("Change PersonalInfo success !!");
      setSystemDescription(Message);
      setSystemMessageType("success");
    } else {
      setSystemMessage("Change PersonalInfo failed !!");
      setSystemDescription("Some error happens !!");
      setSystemMessageType("error");
    }
  };

  /*修改密碼(2/4)*/
  const handleChangePassword = async () => {
    console.log("FrontendNowChangePassword");
    const {
      data: { Message, ChangePasswordSuccess },
    } = await axios.post("/api/ChangePassword", {
      NowUserID,
      OldUserPassword,
      NewUserPassword,
    });
    console.log(Message);
    if (ChangePasswordSuccess === "true") {
      setNowUserPassword(NewUserPassword);
      setSystemMessage("Change Password success !!");
      setSystemDescription(Message);
      setSystemMessageType("success");
    } else {
      setSystemMessage("Change Password failed !!");
      setSystemDescription("Some error happens !!");
      setSystemMessageType("error");
    }
  };

  /*新增一筆記帳(2/4)*/
  const handleCreateNewCost = async () => {
    console.log("FrontendNowCreateNewCost");

    const {
      data: { Message, CreateNewCostSuccess },
    } = await axios.post("/api/CreateNewCost", {
      NowUserID,
      NewCostTitle,
      NewCostIsOutcome,
      NewCostMoney,
      NewCostTag,
      NewCostDay,
    });
    console.log(Message);

    if (CreateNewCostSuccess === "true") {
      setSystemMessage("New Cost has been created");
      setSystemDescription(Message);
      setSystemMessageType("success");
    } else {
      setSystemMessage("New Cost creating failed");
      setSystemDescription("Some error happens !!");
      setSystemMessageType("error");
    }
  };

  /*從資料庫取得目前使用者記帳紀錄(2/4)*/
  const handleCheckMyCost = async () => {
    console.log("FrontendNowCheckMyCost");
    const {
      data: { Message, CheckMyCostSuccess, AllMyCost },
    } = await axios.post("/api/CheckMyCost", { NowUserID });
    console.log(Message);

    if (CheckMyCostSuccess === "true") {
      setMyCost(
        AllMyCost.map((e) => [
          e.Title,
          e.IsOutcome,
          e.Money,
          e.Tag,
          e.Day,
          e._id,
        ])
      );
      setSystemMessage("You can check your cost here");
      setSystemDescription(Message);
      setSystemMessageType("success");
    } else {
      setSystemMessage("Can't get data from DB ");
      setSystemDescription("Some error happens !!");
      setSystemMessageType("error");
    }
  };

  /* 刪除個人所有記帳紀錄(2/4) */
  const handleDeleteMyCost = async () => {
    console.log("FrontendNowDeleteMyCost");
    const {
      data: { Message },
    } = await axios.post("/api/DeleteMyCost", { NowUserID });
    console.log(Message);
    setSystemMessage("Delete my cost success");
    setSystemDescription(Message);
    setSystemMessageType("info");
  };

  /*刪除所有用戶所有記帳(2/4)*/
  const handleDeleteAllCosts = async () => {
    console.log("FrontendNowDeleteAllCosts");
    const {
      data: { Message },
    } = await axios.delete("/api/DeleteAllCosts");
    console.log(Message);
    setSystemMessage("Delete all cost success");
    setSystemDescription("Cost DB is empty now");
    setSystemMessageType("info");
  };

  ///////////////////////////////////////////////////////////////////////////////

  //處理月份英文名稱到數字的轉換
  const MonthToNumber = (Month) => {
    if (Month === "Jan") {
      return "01";
    }
    if (Month === "Feb") {
      return "02";
    }
    if (Month === "Mar") {
      return "03";
    }
    if (Month === "Apr") {
      return "04";
    }
    if (Month === "May") {
      return "05";
    }
    if (Month === "Jun") {
      return "06";
    }
    if (Month === "Jul") {
      return "07";
    }
    if (Month === "Aug") {
      return "08";
    }
    if (Month === "Sep") {
      return "09";
    }
    if (Month === "Oct") {
      return "10";
    }
    if (Month === "Nov") {
      return "11";
    }
    if (Month === "Dec") {
      return "12";
    }
    return "";
  };

  //處理側邊選單收起/展開時Logo的改變
  const handleSiderCollapse = () => {
    if (!SiderOnCollapse) {
      setSiderOnCollapse(true);
      setSiderLogo("🥺");
    } else {
      setSiderOnCollapse(false);
      setSiderLogo("🥺😳😎🥺😳😎");
    }
  };

  //計算使用者記帳的總支出和收入
  const handleTotalOutcome = (MyCost) => {
    return sum(MyCost.map((e) => (e[1] ? e[2] : 0)));
  };

  const handleTotalIncome = (MyCost) => {
    return sum(MyCost.map((e) => (!e[1] ? e[2] : 0)));
  };

  //useEffect( () => { console.log( "" ) } )

  ///////////////////////////////////////////////////////////////////////////////

  //登入前歡迎頁面
  const WelcomePage = (
    <Layout.Content>
      <div /* 輸入使用者帳號 */>
        <p>To Login , Please Enter Your ID</p>
        <Input
          onChange={(e) => {
            setLoginUserID(e.target.value);
          }}
          placeholder="Enter your UserID"
          prefix={<UserOutlined />}
        />
      </div>
      <div /* 輸入使用者密碼 */>
        <p>Please Enter Your Password</p>
        <Input
          onChange={(e) => {
            setLoginUserPassword(e.target.value);
          }}
          placeholder="Enter your Password"
          prefix={<UserOutlined />}
        />
      </div>
      <div /* 舊用戶登入(1/4) */>
        <Button
          onClick={handleUsersLogin}
          disabled={!LoginUserID || !LoginUserPassword}
          type="primary"
        >
          Login
        </Button>
      </div>
      <div /* 註冊按鈕 */>
        <p>First Time To エムエム ? Please Signup First</p>
        <Button
          onClick={() => {
            setPageState("Signup");
            setSignupUserID("");
            setSignupUserPassword("");
            setSignupNickname("");
            setSignupSchool("");
            setSignupBirthday(["", "", ""]);
            setSignupAboutMe("");
            setSystemMessage("Welcome to sign up エムエム");
            setSystemDescription("Please enter your info.");
            setSystemMessageType("success");
          }}
          type="primary"
        >
          Signup
        </Button>
      </div>
      <div /* 刪除所有使用者(1/4) */>
        <Button onClick={handleDeleteAllUsers} type="danger">
          Delete All Users
        </Button>
      </div>
      <div /* 刪除所有用戶所有記帳(1/4) */>
        <Button onClick={handleDeleteAllCosts} type="danger">
          Delete All Costs
        </Button>
      </div>
    </Layout.Content>
  );

  //已登入的主頁面🛠️🛠️🛠️🛠️🛠️🛠️🛠️需要施工🛠️🛠️🛠️🛠️🛠️🛠️🛠️🛠️🛠️
  const LoginPage = (
    <Layout.Content>
      <p>Welcome back 🥺🥺 {NowUserID} 🥺🥺 Please choose the servive </p>
    </Layout.Content>
  );

  //註冊頁面
  const SignupPage = (
    <Layout.Content>
      <p>🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺</p>
      <p>🥺 This is WelcomeエムエムPage🥺</p>
      <p>🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺</p>
      <p>This is Signup Page</p>
      <div /* 註冊輸入帳號 */>
        <p>Please Enter Your ID *</p>
        <Input
          onChange={(e) => {
            setSignupUserID(e.target.value);
          }}
          placeholder="Enter your UserId"
          prefix={<UserOutlined />}
        />
      </div>
      <div /* 註冊輸入密碼 */>
        <p>Please Enter Your Password *</p>
        <Input
          onChange={(e) => {
            setSignupUserPassword(e.target.value);
          }}
          placeholder="Enter your UserPassword"
          prefix={<UserOutlined />}
        />
      </div>
      <div /* 註冊輸入暱稱 */>
        <p>Please Enter Your Nickname *</p>
        <Input
          onChange={(e) => {
            setSignupNickname(e.target.value);
          }}
          placeholder="Enter your Nickname"
          prefix={<UserOutlined />}
        />
      </div>
      <div /* 註冊輸入學校 */>
        <p>Please Enter Your School</p>
        <Input
          onChange={(e) => {
            setSignupSchool(e.target.value);
          }}
          placeholder="Enter your School (optional)"
          prefix={<UserOutlined />}
        />
      </div>
      <div /* 註冊輸入生日 */>
        <p>Please Enter Your Birthday</p>
        <DatePicker
          onChange={(e) => {
            !e
              ? setSignupBirthday(["", "", ""])
              : setSignupBirthday([
                  String(e).split(" ")[3],
                  MonthToNumber(String(e).split(" ")[1]),
                  String(e).split(" ")[2],
                ]);
          }}
          placeholder="Enter your Birthday (optional)"
          style={{ width: "500px" }}
        />
      </div>

      <div /* 註冊輸入個人簡介 */>
        <p>We want to know you more,please enter something</p>
        <Input.TextArea
          onChange={(e) => {
            setSignupAboutMe(e.target.value);
          }}
          placeholder="About me ... (optional)"
          rows={3}
        />
      </div>

      <div /* 註冊新用戶(1/4) */>
        <Button
          type="primary"
          onClick={handleCreateNewUser}
          disabled={!SignupUserID || !SignupUserPassword || !SignupNickname}
        >
          Submit
        </Button>
      </div>
      <div /* 放棄註冊 */>
        <Button
          type="danger"
          onClick={() => {
            setPageState("Welcome");
            setLoginUserID("");
            setLoginUserPassword("");
            setSystemMessage("Welcome to エムエム");
            setSystemDescription(
              "You can login if you already have a account."
            );
            setSystemMessageType("success");
          }}
        >
          Go back
        </Button>
      </div>
    </Layout.Content>
  );

  //個人資訊頁面
  const PersonalInfoPage = (
    <Layout.Content>
      <p>This is Personal Info Page</p>
      <Descriptions bordered column={1}>
        <Descriptions.Item label="UserId">{NowUserID}</Descriptions.Item>
        <Descriptions.Item label="Password">
          {NowUserPassword}
        </Descriptions.Item>
        <Descriptions.Item label="Nickname">{NowNickname}</Descriptions.Item>
        <Descriptions.Item label="School">
          {NowSchool === "" ? "文盲" : NowSchool}
        </Descriptions.Item>
        <Descriptions.Item label="Birthday">
          {NowBirthday[0] === ""
            ? "Not Set"
            : `${NowBirthday[0]}-${NowBirthday[1]}-${NowBirthday[2]}`}
        </Descriptions.Item>
        <Descriptions.Item label="About me">
          {NowAboutMe === "" ? "Not Set" : NowAboutMe}
        </Descriptions.Item>
      </Descriptions>
    </Layout.Content>
  );
  
  //備忘錄頁面
  const MemoPage = (
    <Layout.Content>
      <p style={{fontSize:"3rem", fontWeight:"100", textAlign: "center", lineHeight: "3rem", marginBottom: "0", marginTop: "0.5rem"}}>Memo</p>
      <Memo user={NowUserID} axios={axios} data={MemoData}></Memo>
    </Layout.Content>
  );

  //記帳本頁面
  const SpendingPage = (
    <Layout.Content>
      <p>This is Spending Page</p>
      <div>
        <Button
          onClick={() => {
            setPageState("NewCost");
            setNewCostTitle("");
            setNewCostMoney("");
            setNewCostTag("");
            setNewCostDay([
              String(Date()).split(" ")[3],
              MonthToNumber(String(Date()).split(" ")[1]),
              String(Date()).split(" ")[2],
            ]);
            setNewCostIsOutcome(true);
            setSystemMessage("You can record your income or outcome here");
            setSystemDescription("Please enter some detail about the cost.");
            setSystemMessageType("success");
          }}
          type="danger"
        >
          CreateNewCost
        </Button>
      </div>
      <div /*從資料庫取得目前使用者記帳紀錄(1/4)*/>
        <Button
          onClick={() => {
            setPageState("CheckMyCost");
            handleCheckMyCost(NowUserID);
          }}
          type="primary"
        >
          CheckMyCost
        </Button>
      </div>
      <div /* 刪除個人所有記帳紀錄(1/4) */>
        <Button onClick={handleDeleteMyCost} type="danger">
          Delete My Cost
        </Button>
      </div>
    </Layout.Content>
  );

  //新增一筆記帳頁面
  const NewCostPage = (
    <Layout.Content>
      <p>This is NewCost Page</p>
      <p>Please Enter Your Cost Title*</p>
      <Input
        onChange={(e) => {
          setNewCostTitle(e.target.value);
        }}
        placeholder="Enter your Cost Title"
        prefix={<AccountBookOutlined />}
      />
      <p>Please Enter Your Cost Money*</p>
      <InputNumber
        addonBefore={
          <Radio.Group
            onChange={(e) => {
              setNewCostIsOutcome(e.target.value);
            }}
            value={NewCostIsOutcome}
          >
            <Radio value={true}>OutCome</Radio>
            <Radio value={false}>Income</Radio>
          </Radio.Group>
        }
        onChange={(e) => {
          !e ? setNewCostMoney(0) : setNewCostMoney(e);
        }}
        placeholder="Enter your Cost Money"
        style={{ width: "500px" }}
      />
      <p>Please Enter Your Cost Tag</p>
      <Input
        onChange={(e) => {
          setNewCostTag(e.target.value);
        }}
        placeholder="Enter your Tag"
        prefix={<AimOutlined />}
      />
      <p>Please Enter Your Cost Day</p>
      <DatePicker
        onChange={(e) => {
          !e
            ? setNewCostDay([
                String(Date()).split(" ")[3],
                MonthToNumber(String(Date()).split(" ")[1]),
                String(Date()).split(" ")[2],
              ])
            : setNewCostDay([
                String(e).split(" ")[3],
                MonthToNumber(String(e).split(" ")[1]),
                String(e).split(" ")[2],
              ]);
        }}
        placeholder="Enter your Cost Day, left blank is today"
        style={{ width: "500px" }}
      />
      <div /* 新增一筆記帳(1/4) */>
        <Button
          onClick={handleCreateNewCost}
          type="danger"
          disabled={!NewCostTitle || !NewCostMoney}
        >
          Submit
        </Button>
      </div>
    </Layout.Content>
  );

  //使用者記帳紀錄頁面
  const CheckMyCostPage = (
    <Layout.Content>
      <p>This is CheckMyCost Page</p>
      <Table
        columns={[
          { title: "Title", dataIndex: "title" },
          {
            title: "Type",
            dataIndex: "isoutcome",
            filters: [
              { text: "Outcome", value: "Outcome" },
              { text: "Income", value: "Income" },
            ],
            onFilter: (value, record) => record.isoutcome.includes(value),
          },
          { title: "Money", dataIndex: "money" },
          { title: "Tag", dataIndex: "tag" },
          {
            title: "Day",
            dataIndex: "day",
            sorter: (a, b) =>
              `${a.day.split("-")[0]}${a.day.split("-")[1]}${
                a.day.split("-")[2]
              }` -
              `${b.day.split("-")[0]}${b.day.split("-")[1]}${
                b.day.split("-")[2]
              }`,
          },
        ]}
        dataSource={MyCost.map((e) => ({
          title: e[0],
          isoutcome: e[1] === true ? "Outcome" : "Income",
          money: e[2],
          tag: e[3],
          day: `${e[4][0]}-${e[4][1]}-${e[4][2]}`,
          key: e,
        }))}
      />
      <Alert
        message={`Your total outcome is : ${handleTotalOutcome(MyCost)}`}
        type="info"
        showIcon
      />
      <Alert
        message={`Your total income is : ${handleTotalIncome(MyCost)}`}
        type="info"
        showIcon
      />
      <Alert
        message={`Your net debt is : ${
          handleTotalOutcome(MyCost) - handleTotalIncome(MyCost)
        }`}
        type="info"
        showIcon
      />
    </Layout.Content>
  );

  //聊天室頁面🛠️🛠️🛠️🛠️🛠️🛠️🛠️需要施工🛠️🛠️🛠️🛠️🛠️🛠️🛠️🛠️🛠️
  const ChatroomPage = (
    <Layout.Content>
      <p>This is Chatroom Page</p>
    </Layout.Content>
  );

  //學習功能頁面🛠️🛠️🛠️🛠️🛠️🛠️🛠️需要施工🛠️🛠️🛠️🛠️🛠️🛠️🛠️🛠️🛠️
  const LearningPage = (
    <Layout.Content>
      <p style={{fontSize:"3rem", fontWeight:"100", textAlign: "center", lineHeight: "3rem", marginBottom: "0", marginTop: "0.5rem"}}>Learning</p>
      <Learning user={NowUserID} axios={axios} data={WordData}></Learning>
    </Layout.Content>
  );

  //一般設定頁面
  const NormalSettingPage = (
    <Layout.Content>
      <p>This is Normal Setting Page</p>
      <div>
        <Button
          onClick={() => {
            setPageState("ChangePersonalInfo");
            setNewNickname(NowNickname);
            setNewSchool(NowSchool);
            setNewBirthday(NowBirthday);
            setNewAboutMe(NowAboutMe);
            setSystemMessage("You can change your PersonalInfo here");
            setSystemDescription("* implies needed");
            setSystemMessageType("success");
          }}
          type="danger"
          icon={<KeyOutlined />}
        >
          ChangePersonalInfo
        </Button>
      </div>
    </Layout.Content>
  );

  //修改個人資料頁面
  const ChangePersonalInfoPage = (
    <Layout.Content>
      <p>This is ChangePersonalInfo Page</p>
      <div /* 修改個人資料(1/4) */>
        <p>You can change your Nickname here*</p>
        <Input
          onChange={(e) => {
            setNewNickname(e.target.value);
          }}
          placeholder="Enter your NewNickname"
          defaultValue={NowNickname}
          prefix={<EyeInvisibleOutlined />}
        />
        <p>You can change your School here</p>
        <Input
          onChange={(e) => {
            setNewSchool(e.target.value);
          }}
          placeholder="Enter your NewSchool (optional) "
          defaultValue={NowSchool}
          prefix={<EyeInvisibleOutlined />}
        />
        <p>You can change your Birthday here</p>
        <DatePicker
          onChange={(e) => {
            !e
              ? setNewBirthday(["", "", ""])
              : setNewBirthday([
                  String(e).split(" ")[3],
                  MonthToNumber(String(e).split(" ")[1]),
                  String(e).split(" ")[2],
                ]);
          }}
          placeholder="Enter your Birthday (optional)"
          defaultValue={
            !NowBirthday[0]
              ? null
              : moment(
                  `${NowBirthday[0]}-${NowBirthday[1]}-${NowBirthday[2]}`,
                  "YYYY-MM-DD"
                )
          }
          style={{ width: "500px" }}
        />
        <p>You can change your AboutMe here</p>
        <Input.TextArea
          onChange={(e) => {
            setNewAboutMe(e.target.value);
          }}
          placeholder="Enter your NewAboutMe (optional) "
          defaultValue={NowAboutMe}
          rows={3}
        />
        <Button
          onClick={handleChangePersonalInfo}
          disabled={!NewNickname}
          type="primary"
        >
          Submit
        </Button>
      </div>
    </Layout.Content>
  );

  //帳號設定頁面
  const AccountSettingPage = (
    <Layout.Content>
      <p>This is AccountSetting Page</p>
      <div>
        <Button
          onClick={() => {
            setPageState("ChangePassword");
            setOldUserPassword("");
            setNewUserPassword("");
            setSystemMessage("You can change your password here");
            setSystemDescription("Please enter your old and new PW");
            setSystemMessageType("success");
          }}
          type="danger"
          icon={<KeyOutlined />}
        >
          ChangePassword
        </Button>
      </div>
    </Layout.Content>
  );

  //修改密碼頁面
  const ChangePasswordPage = (
    <Layout.Content>
      <p>This is ChangePassword Page</p>
      <div /* 修改密碼(1/4) */>
        <p>Change your password here</p>
        <p>Please your Old password </p>
        <Input
          onChange={(e) => {
            setOldUserPassword(e.target.value);
          }}
          placeholder="Enter your OldPassword"
          prefix={<UserOutlined />}
        />
        <p>Please your New password </p>
        <Input
          onChange={(e) => {
            setNewUserPassword(e.target.value);
          }}
          placeholder="Enter your NewPassword"
          prefix={<EyeInvisibleOutlined />}
        />
        <Button
          onClick={handleChangePassword}
          disabled={!OldUserPassword || !NewUserPassword}
          type="primary"
        >
          Submit
        </Button>
      </div>
    </Layout.Content>
  );

  //登出確認頁面
  const SignoutPage = (
    <Layout.Content>
      <p>Are you sure to sign out ?</p>
      <div>
        <Button
          type="danger"
          onClick={() => {
            setPageState("Welcome");
            setLoginUserID("");
            setLoginUserPassword("");
            setHasLogin(false);
            setNowUserID("");
            setNowUserPassword("");
            setNowNickname("");
            setNowSchool("");
            setNowBirthday(["", "", ""]);
            setNowAboutMe("");
            setSystemMessage("Welcome to エムエム🥺🥺");
            setSystemDescription("You are signup");
            setSystemMessageType("success");
          }}
          icon={<CarOutlined />}
        >
          Yes
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setSystemMessage("謝謝你留下來陪郁翔😳😳");
            setSystemDescription("Stay here... ...");
            setSystemMessageType("success");
          }}
          icon={<CarOutlined />}
        >
          No
        </Button>
      </div>
    </Layout.Content>
  );

  ///////////////////////////////////////////////////////////////////////////////

  //側邊的選單，登入前只有welcome，登入後可選功能
  const PageSider = () => {
    if (HasLogin === false) {
      return (
        <Layout.Sider
          collapsible
          onCollapse={handleSiderCollapse}
          style={{ background: "#98BAE7", height: "auto" }}
        >
          <p>🥺😳😎 エムエム_2021α</p>
        </Layout.Sider>
      );
    } else {
      return (
        <Layout.Sider
          collapsible
          onCollapse={handleSiderCollapse}
          style={{ background: "#98BAE7", height: "auto" }}
        >
          <p>This is Login Sider!</p>
          <p
            style={
              SiderOnCollapse
                ? { fontSize: "50px", lineHeight: "10px" }
                : { fontSize: "30px", lineHeight: "0px" }
            }
          >
            {SiderLogo}
          </p>
          <Menu
            theme="dark" /* 各種功能和登出按鈕 */
            defaultSelectedKeys={["Login"]}
            mode="inline"
          >
            <Menu.Item
              onClick={() => {
                setPageState("Login");
                setSystemMessage(`Welcome back , ${NowUserID}`);
                setSystemDescription("You are free to choose the service");
                setSystemMessageType("success");
              }}
              key="Login"
              icon={<SmileOutlined />}
            >
              Welcome
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                setPageState("PersonalInfo");
                setSystemMessage("This is PersonalInfo Page");
                setSystemDescription("You can modify them in account setting");
                setSystemMessageType("success");
              }}
              key="PersonalInfo"
              icon={<UserOutlined />}
            >
              Personal Info
            </Menu.Item>

            <Menu.SubMenu /* 提醒事項的子選單，分為備忘錄（memo）跟記帳區（spending）*/
              title="Reminder"
              key="Reminder"
              icon={<AlertOutlined />}
            >
              <Menu.Item
                onClick={() => {
                  setPageState("Memo");
                  setSystemMessage("This is Memo Page");
                  setSystemDescription("施工中");
                  setSystemMessageType("success");
                }}
                key="Memo"
                icon={<AuditOutlined />}
              >
                Memo
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  setPageState("Spending");
                  setSystemMessage("This is Spending Page");
                  setSystemDescription("You can manage your cost here.");
                  setSystemMessageType("success");
                }}
                key="Spending"
                icon={<DollarOutlined />}
              >
                Spending
              </Menu.Item>
            </Menu.SubMenu>

            <Menu.Item
              onClick={() => {
                setPageState("Chatroom");
                setSystemMessage("This is Chatroom Page");
                setSystemDescription("施工中");
                setSystemMessageType("success");
              }}
              key="Chatroom"
              icon={<TeamOutlined />}
            >
              Chatroom
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                setPageState("Learning");
                setSystemMessage("This is Learning Page");
                setSystemDescription("施工中");
                setSystemMessageType("success");
              }}
              key="Learning"
              icon={<ReadOutlined />}
            >
              Learning
            </Menu.Item>

            <Menu.SubMenu /* 設定的子選單，分為一般設定（改界面和使用者基本資料）跟帳號設定（改密碼）*/
              title="Setting"
              key="Setting"
              icon={<SettingOutlined />}
            >
              <Menu.Item
                onClick={() => {
                  setPageState("NormalSetting");
                  setSystemMessage("This is normal setting page");
                  setSystemDescription("Do you want yo modify somthing?");
                  setSystemMessageType("success");
                }}
                key="NormalSetting"
                icon={<PieChartOutlined />}
              >
                NormalSetting
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  setPageState("AccountSetting");
                  setSystemMessage("This is AccountSetting Page");
                  setSystemDescription("Do you want yo modify somthing?");
                  setSystemMessageType("success");
                }}
                key="AccountSetting"
                icon={<ToolOutlined />}
              >
                AccountSetting
              </Menu.Item>
            </Menu.SubMenu>

            <Menu.Item
              onClick={() => {
                setPageState("Signout");
                setSystemMessage("Are you sure to leave エムエム 🥺🥺?");
                setSystemDescription("Don't go ... ");
                setSystemMessageType("success");
              }}
              key="Signout"
              icon={<CarOutlined />}
            >
              Signout
            </Menu.Item>
          </Menu>
        </Layout.Sider>
      );
    }
  };

  //目前頁面內容
  const NowPageContent = () => {
    if (PageState === "Welcome") {
      return WelcomePage;
    } else if (PageState === "Login") {
      return LoginPage;
    } else if (PageState === "Signup") {
      return SignupPage;
    } else if (PageState === "PersonalInfo") {
      return PersonalInfoPage;
    } else if (PageState === "Memo") {
      return MemoPage;
    } else if (PageState === "Spending") {
      return SpendingPage;
    } else if (PageState === "NewCost") {
      return NewCostPage;
    } else if (PageState === "CheckMyCost") {
      return CheckMyCostPage;
    } else if (PageState === "Chatroom") {
      return ChatroomPage;
    } else if (PageState === "Learning") {
      return LearningPage;
    } else if (PageState === "NormalSetting") {
      return NormalSettingPage;
    } else if (PageState === "ChangePersonalInfo") {
      return ChangePersonalInfoPage;
    } else if (PageState === "AccountSetting") {
      return AccountSettingPage;
    } else if (PageState === "ChangePassword") {
      return ChangePasswordPage;
    } else if (PageState === "Signout") {
      return SignoutPage;
    }
  };

  //底部訊息，包含系統發送給前端的任何訊息
  const PageFooter = () => {
    return (
      <Layout.Content style={{ background: "#B8E4F0" }}>
        <Alert
          message={SystemMessage}
          type={SystemMessageType}
          showIcon
          description={SystemDescription}
        />

        <p>2021🥺wp1101🥺final🥺🥺🥺🥺🥺 🥺 🥺 🥺 🥺 🥺 🥺 🥺 🥺 🥺🥺 </p>
      </Layout.Content>
    );
  };

  //回傳側邊選單+頁面內容+底部訊息
  return (
    <Layout>
      {PageSider()}
      <Layout>
        <Layout style={{ background: "#CCDDEE" }}>{NowPageContent()}</Layout>
        {PageFooter()}
      </Layout>
    </Layout>
  );
}

export default App;
