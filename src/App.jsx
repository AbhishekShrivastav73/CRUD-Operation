import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null); // State to track the index of the item being edited

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addItem = () => {
    if (editIndex !== null) {
      // If editIndex is not null, update the existing item
      const updatedTodos = todo.map((item, index) =>
        index === editIndex ? input : item
      );
      setTodo(updatedTodos);
      setEditIndex(null);
    } else {
      // Otherwise, add a new item
      setTodo([...todo, input]);
    }
    setInput("");
  };

  const deleteItem = (idx) => {
    setTodo(todo.filter((_, index) => index !== idx));
  };

  const editItem = (index) => {
    setInput(todo[index]);
    setEditIndex(index);
  };

  return (
    <div className="bg-zinc-800 w-full h-screen text-white flex flex-col gap-10 items-center p-4">
      <h1 className="font-bold text-7xl">Todo List</h1>
      <div className="flex gap-5">
        <input
          onChange={handleInput}
          value={input}
          className="px-4 text-black"
          type="text"
          placeholder="Enter items"
        />
        <button onClick={addItem} className="bg-green-500 px-4 py-2 font-bold">
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <ul>
        {todo.map((elem, index) => {
          return (
            <li
              index={index}
              className="font-bold bg-white w-[100%] flex items-center justify-between m-2 px-4 py-2 text-black"
              key={index}
            >
              {elem}
              <div className="flex gap-3">

              <button
                onClick={() => editItem(index)}
                className="text-white font-bold bg-sky-500 px-3 py-1"
              >
                Edit
              </button>
              <button
                onClick={() => deleteItem(index)}
                className="text-white font-bold bg-red-500 px-3 py-1"
              >
                Delete
              </button>
              </ div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
