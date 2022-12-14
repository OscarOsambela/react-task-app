import TaskCard from "./TaskCard";

const TaskList = ({ tasks, deleteTask }) => {
  if (tasks.length === 0) {
    return <h1>No hay tareas</h1>;
  }
  return (
    <>
      <div>TaskList</div>
      <div className="grid grid-cols-4 gap-2">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} deleteTask={deleteTask} />
        ))}
      </div>
    </>
  );
};

export default TaskList;
