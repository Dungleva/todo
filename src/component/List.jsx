export default function List({toDoList,handleDelete,handleEdit}) {
  return (
    <ul>
      <div>
      {toDoList.map((toDo, index) => (
        <li key={index} style={{color:'black', textAlign:'left'}}>
          <span>{toDo}</span>
          <div className="ButtonList">
            <button className="button" onClick={()  => handleEdit(index)}>Edit</button>
            <button className="button" onClick={() => handleDelete(index)}>Delete</button>
          </div>
        </li>
      ))}
      </div>
    </ul>   
  )
}
