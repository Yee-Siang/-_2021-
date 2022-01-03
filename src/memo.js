import React, { useEffect, useState, useRef } from "react";
import "antd/dist/antd.css";
import {Input, DatePicker, Button, Space, Table, message, Tag} from "antd";
import {CheckCircleOutlined, ClockCircleOutlined} from "@ant-design/icons";

function Memo(props) {
    const user = props.user;
    const axios = props.axios;
    //console.log(props.data);

    const [newTodo, setNewTodo] = useState("");
    const [newDate, setNewDate] = useState(Date());
    const [todos, setTodos] = useState(props.data);
    const [now, setNow] = useState("All");
    
    //新增 todo
    const handleNewTodo = async () => {
        console.log(newTodo);
        console.log(newDate);
        if (!newTodo || !newDate) {
          message.error("Missing Due date or Task");
          return
        }
        const {data} = await axios.post("/api/newTodo", {user: user, todo: newTodo, date: newDate});
        console.log(data);
        if (data.message == "Success") {
          const newT = [...todos, data];
          const newSort = newT.sort((a,b) => new Date(a.Day)-new Date(b.Day));
          setTodos(newSort);
          message.success("New task added");
        }
        else if (data.message == "Repeated Todo") {
          message.error("This task already exists");
        }
    }
    //刪除所有 todos
    const handleClearAll = async () => {
      const {data} = await axios.post("/api/clearAllTodos", {user: user});
      console.log(data);
      if (data.message == "clear all success") {
        setTodos([]);
        message.success("Clear all success")
      }
      else {
        message.error("Clear tasks failed")
      }
    }
    //變換 Todo State
    const changeState = async (task) => {
      //console.log(task);
      const {data} = await axios.post("/api/changeTodoState", {task: task});
      //console.log(data);
      
      setTodos(todos.map(t => {
        if (t.Todo == task) {
          if (t.State == "Active") return {...t, State:"Complete"};
          else return {...t, State:"Active"};
        } 
        else return t
      }))
    }
    //顯示 todos
    const dataSource = todos.map((t, i) => ({task: t.Todo, date: `${String(t.Day).split("T")[0]}`, state: t.State, key:i}));
    const columns = [
      {title: 'Task',dataIndex: 'task',key: 'task'},
      {title: 'Due date',dataIndex: 'date',key: 'date', width: "8rem"},
      {title: 'State',dataIndex: 'state',key: 'state', width: "8rem", render: (state, record) => (
        state=="Active"?
        <Tag icon={<ClockCircleOutlined/>} color="orange"  onClick={() => {changeState(record.task)}} style={{cursor:"pointer", width: "5.5rem"}}>{state}</Tag>:
        <Tag icon={<CheckCircleOutlined/>} color="success" onClick={() => {changeState(record.task)}} style={{cursor:"pointer", width: "5.5rem"}}>{state}</Tag>)},
    ];
    //render
    return (
        <>
          <Input.Group compact>
              <DatePicker 
                style={{ width: '30%' }}
                onChange={(e) => {
                    //console.log(String(e))
                    setNewDate(e)
                }}/>
              <Input.Search
                value={newTodo}
                style={{ width: '70%' }}
                placeholder="Type yous task here"
                onSearch={(e) => {handleNewTodo();setNewTodo("")}}
                onChange={(e) => {setNewTodo(e.target.value)}}
                enterButton="Add"/>
          </Input.Group>
          <Space>
            <Button type="primary" style={{ width: '8rem' }} onClick={() => {setNow("All");}}>All</Button>
            <Button type="primary" style={{ width: '8rem' }} onClick={() => {setNow("Active");}}>Active</Button>
            <Button type="primary" style={{ width: '8rem' }} onClick={() => {setNow("Complete");}}>Complete</Button>
            <Button type="primary" style={{ width: '8rem' }}>Clear Complete</Button>
            <Button type="primary" style={{ width: '8rem' }} onClick={handleClearAll}>Clear All</Button>
          </Space>
          <Table dataSource={dataSource} columns={columns} pagination={{pageSize: 6}}/>;
        </>
    )
}

export default Memo;