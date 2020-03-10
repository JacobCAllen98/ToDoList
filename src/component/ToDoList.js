import React, { useState } from "react";

const ToDoList = props => {
    const [todolist, setToDoList] = useState([
        {title:"First Task", content:"This is the first task", completed:false},
        {title:"Second Task", content:"This is the second task", completed:true},
        {title:"Third Task", content:"This is the third task", completed:false}
    ]);
    const unfinish = e => {
        let alter = [...todolist];
        alter[e.target.value].completed = false;        
        setToDoList(alter);
    }
    const finish = e => {
        let alter = [...todolist];
        alter[e.target.value].completed = true;        
        setToDoList(alter);
    }
    const deleteTask = e => {
        let tasky = [...todolist];
        tasky.splice(e.target.value, 1);
        setToDoList(tasky);
    }
    const [ formState, setFormState] = useState({
        title: "",
        content: ""
    })
    const onChangeHandler = e => {
        setFormState({
            ...formState, [e.target.name] : e.target.value
        });
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        let title = formState.title;
        let content = formState.content;
        let completed = false;
        let newBox = { title, content, completed };
        setToDoList([...todolist, newBox]);
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Task Name:</label>
                <input type="text" name="title" onChange={onChangeHandler}/>
                <br/>
                <label>Description:</label>
                <input type="text" name="content" onChange={onChangeHandler}/>
                <br/>
                <input type="submit" />
            </form>
            {todolist.map((item, i) =>
                <div>
                    {item.completed==true ? <p style={{textDecoration:"line-through"}}>{item.title}</p>:<p>{item.title}</p>}
                    {item.completed==true ? <p style={{textDecoration:"line-through"}}>{item.content}</p>:<p>{item.content}</p>}
                    {item.completed ? <button onClick={unfinish} value={i}>Not Done</button>: <button onClick={finish} value={i}>Done</button>}
                    <button onClick={deleteTask} value={i}>Delete</button>
                </div>
            )}
        </div>

    )
}

export default ToDoList;