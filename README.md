yarn / yarn server / yarn start
缺套件打不開的話
yarn add  react-router-dom axios moment cypress cors dotenv express mongoose uuid @material-ui/core @material-ui/icons
yarn add -D @babel/cli @babel/core @babel/node @babel/preset-env nodemon
yarn add antd

Mongoose 新增一個 Database , Cluster 名稱叫 User
.env改成自己的

package.json裡的scripts改成

"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "nodemon server/server.js --ext js --exec babel-node"
  },

新增一個 .babelrc 內容
{
    "presets": [
        "@babel/preset-env"
    ]
}

11/21 登入註冊功能
11/22 新增改密碼功能，User 新增Nickname,School資料
1/7   完成提醒事項功能
