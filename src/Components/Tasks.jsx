import { useState } from "react";

const Tasks = () => {
    
    const [tasks, setTaks] = useState([
      {
        id: 1,
        text: "Doctors Appointment",
        day: "February 10th @ 12:00pm",
        reminder: true,
      },

      {
        id: 2,
        text: "Interview Appointment",
        day: "February 13th @ 14:00pm",
        reminder: true,
      },

      {
        id: 3,
        text: "Prayer Time",
        day: "February 10th @ 16:00pm",
        reminder: false,
      }
    ]);
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
