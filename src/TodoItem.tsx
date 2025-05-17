import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


interface TodoItemProps{
    id: string;
    name: string;
    completed: boolean;
    onToggle: (id: string) => void;
    deleteTask: (id: string) => void;


}
function TodoItem(props: TodoItemProps){
    function handleChange(){
        props.onToggle(props.id);
        
    
    
    }

    return (
    <li>
        <label className="todo-label" htmlFor={props.id}>
            <input 
            id = {props.id}
            type="checkbox"
            onChange={handleChange}
            checked={props.completed} /> 
            {props.name}
        </label>
        <button  onClick={()=> props.deleteTask(props.id)} className = "ml-7 text-gray-400">
            <FontAwesomeIcon title="Trash" icon={faTrash} />
        </button>
        
    </li>
    

)



}

export default TodoItem;