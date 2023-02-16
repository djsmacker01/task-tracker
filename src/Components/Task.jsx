import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className="task" onDoubleClickCapture={()=> onToggle(task.id)}>
      <h3>
        {task.text}{" "}
        <FaTimes
        
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Task;
