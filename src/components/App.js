
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
   let[todo,setTodo]=useState("");
    let[add,setAdd]=useState([]);

    function addonlist(){
        setAdd([...add,todo])
    }
    function delet(index){
         const updatedtodo = [...add];
         updatedtodo.splice(index,1)
         setAdd(updatedtodo);
    }
   
    return(
        <div>
         <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}></input>
         <button onClick={addonlist}>Add Todo</button>
         <ul>
         {
            add.map((list,index)=>(
                <li key={index} className="li">
                        {list}
                        <button onClick={()=>delet(index)}>delete</button>
                    </li>
            ))
        }
         </ul>
        </div>
        
    )
}

export default App
