import { useContext } from "react";
import { TaskContext } from "../contexts/taskContext";
import { useNavigate } from "react-router-dom";
import '../css/Task.css'

const Task = ({task}) => {
  const {setShow} = useContext(TaskContext)
  const navigate = useNavigate();

  // ÖPPNA MODUL MED URL
  // Uppdatera state för att visa modul
  // Sätt rätt id i url för att hitta igen rätt task
  const handleShow = (task) => {
    setShow(true)
    navigate('/task/' + task.id)
};

  return (
    <>
    {/* Task som visas */}
    {/* Gör varje task draggable, skicka med taskens ID och visa modul på klick */}
      <div 
        className="task" 
        draggable
        onDragStart={(e) => {
          e.dataTransfer.setData('id', task.id)
        }}
        onClick={() => handleShow(task)}
      >
        <h2 className="task__title">{task.title}</h2>
        <h3 className="task__date">{task.date}</h3>
      </div>
    </>
  )
}

export default Task
