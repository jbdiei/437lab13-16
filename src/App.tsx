
import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import TodoItem from './TodoItem.tsx';
import AddTaskForm from './AddTaskForm.tsx';
import Modal from './Modal.tsx';

interface Task {
  id: string;
  name: string;
  completed: boolean;
}

const INITIAL_TASK_LIST: Task[] =[
  { id: 'todo-0', name: 'Eat', completed: false },
  { id: 'todo-1', name: 'Sleep', completed: false },
  { id: 'todo-2', name: 'Repeat', completed: false },
];


function App() {
  const [tasks, setTaskList] = useState<Task[]>(INITIAL_TASK_LIST);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Modal visibility state

  const taskList = tasks.map((task) => (
    <TodoItem
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      onToggle={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  function addTask(name: string) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTaskList([...tasks, newTask]);
    setIsModalOpen(false); // Close modal after adding task
  }

  function toggleTaskCompleted(id: string) {
    const updatedTasks = tasks.map((task) =>
      id === task.id ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTasks);
  }

  function deleteTask(id: string) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTaskList(remainingTasks);
  }

  return (
    <main className="m-4">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-4"
        onClick={() => setIsModalOpen(true)}
      >
        Add Task
      </button>

      <Modal
        headerLabel="Add New Task"
        isOpen={isModalOpen}
        onCloseRequested={() => setIsModalOpen(false)}
      >
        <AddTaskForm onNewTask={addTask} name="Add Task" />
      </Modal>

      <section>
        <h1 className="text-xl font-bold">To do</h1>
        <ul>{taskList}</ul>
      </section>
    </main>
  );
}

export default App;
