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
///檔案怎麼塞請參考結構圖///
