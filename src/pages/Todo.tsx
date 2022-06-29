import { useState } from "react";
import { Header } from "../components/Header";
import { Task } from "../components/task";
import { tasks } from "../data/tasks";
export function Todo() {
  const [tasksTrue, setTasksTrue] = useState(tasks);
  const [valueInput, setValueInput] = useState("");
  const newTask = () => {
    setTasksTrue([
      ...tasksTrue,
      { id: Math.random(), title: valueInput, checked: false },
    ]);
    setValueInput("");
  };
  return (
    <>
      <Header />
      <div className="bg-slate-800 w-2/4 m-auto p-3 mt-10 rounded">
        <h1 className="text-4xl uppercase text-center border-b p-4">
          Suas Tarefas
        </h1>
        <div className="flex m-2 justify-center">
          <input
            className="rounded-l text-black p-2"
            type="text"
            placeholder="Nome da Nova Tarefa"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
          />
          <button
            onClick={() => newTask()}
            className="bg-blue-700 p-2 rounded-r"
          >
            Enviar
          </button>
        </div>

        <ul className="bg-slate-800">
          {tasksTrue.map((e) => (
            <Task
              title={e.title}
              id={e.id}
              setTasksTrue={setTasksTrue}
              tasks={tasksTrue}
              checked={e.checked}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
