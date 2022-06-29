import React, { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
interface taksProps {
  title: string;
  id: number;
  tasks: { id: number; title: string; checked: boolean }[];
  checked: boolean;
  setTasksTrue: Dispatch<
    SetStateAction<{ id: number; title: string; checked: boolean }[]>
  >;
}

export function Task(taksProps: taksProps) {
  const heTask = taksProps.tasks.find((t) => taksProps.id === t.id);
  let TasksImport = [...taksProps.tasks];

  function alterarCheck() {
    const newArray: { id: number; title: string; checked: boolean }[] = [];
    TasksImport.map((t) => {
      if (t.id === taksProps.id) {
        t.checked = !t.checked;
      }
      newArray.push(t);
    });
    taksProps.setTasksTrue(newArray);
  }

  const alterar = () => {
    const data = prompt("Digite o Valor para editar");
    const newArrayEdit: { id: number; title: string; checked: boolean }[] = [];
    TasksImport.map((t) => {
      if (t.id === taksProps.id) {
        if (data != null && data != "") {
          t.title = data;
        } else {
          t.title = t.title;
        }
      }
      newArrayEdit.push(t);
    });
    taksProps.setTasksTrue(newArrayEdit);
  };

  const deletar = () => {
    const tasksnew = taksProps.tasks.filter((t) => heTask != t);
    taksProps.setTasksTrue(tasksnew);
    console.log(taksProps.tasks);
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        transition: { duration: 0.5 },
      }}
      drag
      className="flex items-center  bg-slate-800 p-2 rounded shadow-md  justify-between"
    >
      <div className="flex items-center">
        <motion.input
          onChange={() => alterarCheck()}
          whileTap={{ scale: 0.4 }}
          checked={taksProps.checked}
          type="checkbox"
          className="m-4 "
        />
        {!taksProps.checked ? (
          <h1>{taksProps.title}</h1>
        ) : (
          <h1 className="line-through">{taksProps.title}</h1>
        )}
      </div>
      <div className="flex gap-2">
        <button className="bg-red-500 px-2 rounded" onClick={() => deletar()}>
          Deletar
        </button>
        <button className="bg-green-700 px-2 rounded" onClick={() => alterar()}>
          Editar
        </button>
      </div>
    </motion.div>
  );
}
