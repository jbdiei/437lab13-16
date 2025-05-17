import {useState} from "react"

interface TaskFormProps{

    name: string;
    onNewTask: (task: string) => void;



}

function AddTaskForm(props : TaskFormProps){
    const [task, setTask] = useState<string>("")

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setTask(event.target.value);
    }

    function handleClick(){
        if (task==""){return;}
        props.onNewTask(task);
        setTask("");
    
    }


    return(
        <div>
            <input 
                value={task}
                placeholder="New task name"  
                onChange={handleChange}
                className="border-2 mr-2 p-3 rounded-md"/>
            <button onClick={handleClick}  className="bg-blue-400 
                        hover:bg-blue-600 
                        rounded-md p-2">{props.name}</button>

    </div>
    )

};
export default AddTaskForm;