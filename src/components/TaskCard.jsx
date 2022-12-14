import React from "react";

const TaskCard = ({task, deleteTask}) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h4 className="text-x1 font-bold capitalize">{task.title}</h4>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button className="bg-red-500 px-2 py-1 rounded-md mt-4P
      " onClick={()=>deleteTask(task.id)}>Eliminar tarea</button>
    </div>
  );
};

export default TaskCard;
