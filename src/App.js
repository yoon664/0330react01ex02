import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

// 부모 컴포넌트
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e)=>{
    console.log(e.target.value);
    setNewTask(e.target.value);
    // useState는 비동기로 처리되기 때문에 이전값이 출력
    // console.log(newTask);
  }

  const handleAddClick = ()=>{
      setTasks([...tasks, newTask]);
      setNewTask('');
  }
  // handleAddClick 다른 버전
  const hadleAddTask = () => {
    /*
    const copyTasks = [...tasks];
    copyTasks.push(newtask);
    setTasks(copyTasks);
    */
    setTasks([...tasks, newTask]);
    setNewTask(''); // 추가 버튼 클릭하면 기존에 있던 텍스트 초기화
  }

  useEffect(()=>{
    console.log(tasks)
  })

  const handleDelete = (index) => {
    if(window.confirm('정말 지우시겠습니까?')){
      const newTasks = tasks.filter((_, i) => i !== index);
      setTasks(newTasks);
    }
  }

  const handleRemoveTask = (index) => {
    const confirm = window.confirm('정말로 지우시겠습니까?');
    if(confirm) {
      const copyTasks = [...tasks];
      copyTasks.splice(index, 1);
      setTasks(copyTasks);
    }
  }
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4 text-center">To-Do 리스트</h1>
          <div className="mb-4 flex">
            <input
            ////Input값 읽어오기////
              type="text"
              placeholder="할 일을 입력하세요"
              className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              /*
                1. 입력필드의 값과 리액트 상태를 동기화
                2. 추가버튼 클릭시 입력필드 초기화  setNewTask('')
              */
              value={newTask}
              onChange={handleInputChange}
            />
            <button
            onClick={handleAddClick}            
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
              추가
            </button>
          </div>
          <ul>
            {
              tasks.map((v,i)=>(
                <TodoItem key={v} task={v} handleRemoveTask={handleRemoveTask} i={i} />
              ))
            } 
            {/* {tasks.map((task, index)=>(
              <TodoItem key={index} task={task} onDelete={()=> handleDelete(index)} />
            ))} */}
            {/* <li className="bg-white shadow-md rounded-lg px-4 py-2 mb-2 flex justify-between items-center cursor-pointer hover:bg-gray-100">
              <span>여기에 입력한 값을 넣어주세요</span>
              <button onClick={onDelete} className="text-red-500 hover:text-red-700">삭제</button>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}

// 자식 컴포넌트
/*
function TodoItem(props) {
  console.log('props',props)
  return (
    <li className="bg-white shadow-md rounded-lg px-4 py-2 mb-2 flex justify-between items-center cursor-pointer hover:bg-gray-100">
      <span>{props.task}</span>
      <button onClick={()=>{props.handleRemoveTask(props.i)}} className="text-red-500 hover:text-red-700">
        삭제
      </button>
    </li>
  );
}
*/
function TodoItem({task, handleRemoveTask, i}) {
  return (
    <li className="bg-white shadow-md rounded-lg px-4 py-2 mb-2 flex justify-between items-center cursor-pointer hover:bg-gray-100">
      <span>{task}</span>
      <button onClick={()=>{handleRemoveTask(i)}} className="text-red-500 hover:text-red-700">
        삭제
      </button>
    </li>
  );
}


/*
function TodoItem({ task, onDelete }) {
  return (
    <li className="bg-white shadow-md rounded-lg px-4 py-2 mb-2 flex justify-between items-center cursor-pointer hover:bg-gray-100">
      <span>{task}</span>
      <button onClick={onDelete} className="text-red-500 hover:text-red-700">
        삭제
      </button>
    </li>
  );
}
*/

export default App;
