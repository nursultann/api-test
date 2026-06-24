import React, { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]); 
  const [taskInput, setTaskInput] = useState(""); 

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99
    },
    {
        id: 2,
        name: "Product 2",
        price: 19.99
    },
    {
        id: 3,
        name: "Product 3",
        price: 29.99
    }
  ]
  // Добавление новой задачи
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, 
        taskInput.trim()
      ]);
      setTaskInput(""); 
    }
  };
  // Удаление задачи по индексу
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>To-Do List</h1>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Введите задачу"
          style={{ padding: "10px", width: "calc(100% - 22px)" }}
        />
        <button onClick={addTask} style={{ padding: "10px", marginLeft: "5px" }}>
          Добавить
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <span>{task}</span>
            <button
              onClick={() => deleteTask(index)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: "3px",
              }}
            >
              Удалить
            </button>
          </div>
        ))}
      </ul>
      <div className="row">
      {products.length > 0 ? 
            <>
                {products.map((i) => (
                    <div className="col-4">
                        <h2>{i.name}</h2>
                        <p>{i.price}</p>
                    </div>
                ))}
            
            </>
            :
            <>
                Loading
            </>
      }
      </div>
    </div>
  );
}

export default Todo;
