
import { useState } from "react";
import Header from './Components/Header';
import Tasks from './Components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
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
    <div className="container">
      <Header title="TasK Tracker" />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
