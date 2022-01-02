import React, { useEffect, useState, useRef } from "react";
import "antd/dist/antd.css";
import {Input, DatePicker, Button, Space, Table} from "antd";

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

function Memo(props) {
    const user = props.user;
    const axios = props.axios;

    const [newTodo, setNewTodo] = useState("");
    const [newDate, setNewDate] = useState([]);
    const [todos, setTodos] = useState([]);
    const [now, setNow] = useState("All");
    //第一次進來時 query 所有 todos
    const update = async() => {
      const {data} = await axios.post("/api/allTodo", {user: user});
      //console.log(data);
      setTodos(data.Todos);
    }
    update();
    //新增 todo
    const handleNewTodo = async () => {
        console.log(newTodo);
        console.log(newDate);
        const {data} = await axios.post("/api/newTodo", {user: user, todo: newTodo, date: newDate});
        console.log(data);
        if (data.message == "Success") {
          setTodos([...todos, data]);
        }
    }
    //顯示todo
    const dataSource = todos.map((t, i) => ({task: t.Todo, date: `${t.Day}`, state: "Active", key:i}));
    const columns = [
      {title: 'Task',dataIndex: 'task',key: 'task'},
      {title: 'Due date',dataIndex: 'date',key: 'date'},
      {title: 'State',dataIndex: 'state',key: 'state'},
    ];
    return (
        <>
            <Input.Group compact>
                <DatePicker 
                    style={{ width: '30%' }}
                    onChange={(e) => {
                        console.log(String(e))
                        e?
                        setNewDate([String(e).split(" ")[3], MonthToNumber(String(e).split(" ")[1]), String(e).split(" ")[2],]):
                        setNewDate(["", "", ""])
                    }}/>
                <Input.Search 
                    style={{ width: '70%' }}
                    placeholder="Type yous task here"
                    onSearch={handleNewTodo}
                    onChange={(e) => {setNewTodo(e.target.value)}}
                    enterButton="Add"/>
            </Input.Group>
            <Space>
                <Button type="primary" style={{ width: '10rem' }} onClick={update}>All</Button>
                <Button type="primary" style={{ width: '10rem' }}>Active</Button>
                <Button type="primary" style={{ width: '10rem' }}>Complete</Button>
            </Space>
            <Table dataSource={dataSource} columns={columns} />;
        </>
    )
}

export default Memo;