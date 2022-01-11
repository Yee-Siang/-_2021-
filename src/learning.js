import React, { useEffect, useState, useRef } from "react";
import "antd/dist/antd.css";
import {Input, DatePicker, Button, Space, Table, message, Tag, Tabs} from "antd";
import {CheckCircleOutlined, ClockCircleOutlined, DeleteOutlined} from "@ant-design/icons";

const data_test = [
  {word: "apple", answer: "蘋果", key:1},
  {word: "banana", answer: "香蕉", key:2},
  {word: "cherry", answer: "櫻桃", key:3},
  {word: "coconut", answer: "椰子", key:4},
  {word: "grape", answer: "葡萄", key:5},
  {word: "lemon", answer: "檸檬", key:6},
  {word: "papaya", answer: "木瓜", key:7}
]

function Learning(props) {
  const user = props.user;
  const axios = props.axios;
  //console.log(props.data);
  //所有單字
  const [allData, setAllData] = useState(props.data);
  //目前在哪個功能
  const [feature, setFeature] = useState("dictionary");
  //目前展示的單字
  const [showData, setShowData] = useState(props.data);
  const [find, setFind] = useState();
  const [newWord, setNewWord] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  //進入測驗功能時的初始化
  const handleTest = async() => {
    setFeature("test");
  }
  //搜尋單字
  const handleSearch = () => {
    const dataFilter = allData.filter((data) => {return data.word.includes(find)});
    //onsole.log(dataFilter);
    setShowData(dataFilter);
    setFind("");
  };
  //新增單字
  const handleAdd = async() => {
    const {data} = await axios.post("/api/newWord", {user: user, word: newWord, answer: newAnswer});
    console.log(data.message);
    if (data.message == "adding success") {
      message.success("adding success");
      const newD = [{word: newWord, answer: newAnswer, key: newWord}, ...allData];
      setAllData(newD);
      setShowData(newD);
    }
    else  {
      message.error(data.message);
      setShowData(allData);
    }
    setNewWord("");
    setNewAnswer("");
  };
  //刪除單字
  const handleDelete = async(word) => {
    console.log(word);
    const {data} = await axios.post("/api/deleteWord", {user: user, word: word});
    console.log(data.message);
    if (data.message == "delete success") {
      const dataFilter = allData.filter((data) => {return data.word != word});
      setAllData(dataFilter);
      setShowData(dataFilter);
      message.success(data.message);
    }
    else {
      message.error(data.message);
    }
  };
  //用 Table 顯示
  const columns = [
    {title: 'Words',dataIndex: 'word',key: 'word', width: "50%"},
    {title: 'Translation',dataIndex: 'answer',key: 'answer', width: "50%", render: (answer, record) => (
      <span style={{display: "flex"}}>{answer}
      <Button type="primary" shape="circle" ghost={true} danger={true} size="small"
              icon={<DeleteOutlined />} style={{marginLeft: "auto"}} onClick={() => {handleDelete(record.word)}}/>
      </span>
    )}
  ];
  //字典功能頁面
  const dictionary = (
    <>
      <Button type="primary" onClick={() => {setShowData(allData)}}>Show all words</Button>
      <Input.Search
          value={find}
          style={{ width: '100%' }}
          placeholder="Search a word"
          onSearch={handleSearch}
          onChange={(e) => {setFind(e.target.value)}}
          enterButton/>
      <Input.Group compact>
        <Input
          value={newWord}
          style={{ width: '50%' }}
          onChange={(e) => {setNewWord(e.target.value)}}
          placeholder="Add a new word"/>
        <Input.Search
          value={newAnswer}
          style={{ width: '50%' }}
          onChange={(e) => {setNewAnswer(e.target.value)}}
          onSearch={handleAdd}
          enterButton="Add"
          placeholder="What does it mean?"/>
      </Input.Group>
      <Table dataSource={showData} columns={columns} pagination={{pageSize: 6}}/>
    </>
  )
  //測驗功能頁面
  const test = (
    <h1>this is a test</h1>
  )

  return (
    <>
      <Space style={{ width: "100%" }}>
        <Button type="primary" style={{ width: '8rem' }} onClick={() => {setFeature("dictionary")}}>Dictionary</Button>
        <Button type="primary" style={{ width: '8rem' }} onClick={handleTest}>Test</Button>
      </Space>
      {feature=="dictionary"? dictionary: test}
    </>
  )
}

export default Learning;