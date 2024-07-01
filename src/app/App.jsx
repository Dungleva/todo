import { useState, useRef } from 'react';
import './App.css';
import List from '../component/List';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = (e) =>{
    e.preventDefault();
    const value = inputRef.current.value;
    if(value) {
      setToDoList([...toDoList, value]);
      //rs value
      inputRef.current.value="";
    }
  };
  const handleClear = () =>{
    setToDoList([]);
    setIsEdit(false);
    setEditIndex(null);
    inputRef.current.value= "";
  }
  const handleDelete = (index) =>{
    setToDoList(toDoList.filter((_, i) => i !== index));
    if (index== editIndex){
      setIsEdit(false);
      setEditIndex(null);
      inputRef.current.value="";
    }
  }
  const handleEdit = (index) =>{
    setIsEdit = true;
    setEditIndex(index);
    //lay gia tri can edit
    const editValue = toDoList.at(index);
    //set gia tri vao input
    inputRef.current.value=editValue;

  }
  const HandleCancelEdit = () =>{
    setIsEdit(false);
    inputRef.current.value="";
  }
  const inputRef = useRef(null);
  return (
    <>
      <div className='app'>
        <h1>ToDo List</h1>
        <form onSubmit={(e) =>{
          if (isEdit) {
            handleUpdate(e, editIndex);
          }
          else handleAdd(e)}}> 
          {isEdit && (<button type='button' onClick={HandleCancelEdit}>Cancel</button>)}
          <input type="text" className='inputField' placeholder={isEdit ? 'Edit todo list' :'Input todo list'} ref={inputRef} p />
            <div className='button-container'>
              <button type='submit'>{isEdit ? "edit" : "add"}</button>
              <button onClick={() => handleClear()}>Clear</button>
            </div>
        </form>
        <List
        toDoList={toDoList}
        handleDelete={handleDelete}
        handleEdit={handleEdit}/>
      </div>
    </>
  )
}

export default App
