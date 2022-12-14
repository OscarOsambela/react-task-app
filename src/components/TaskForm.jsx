import React, { useState } from "react";

const TaskForm = ({ createTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Escribe aquí"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripción"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button>Guardar</button>
      </form>
    </div>
  );
};

export default TaskForm;
