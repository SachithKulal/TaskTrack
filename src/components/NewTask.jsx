import { useState } from "react";

export const NewTask = ({ onAddTask, onDeleteTask }) => {
  const [enteredTask, setEnteredTask] = useState();

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleCick() {
    onAddTask(enteredTask);
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="p-1 border-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-800 focus:bg-stone-50"
        onChange={handleChange}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleCick}
      >
        Add Task
      </button>
    </div>
  );
};
