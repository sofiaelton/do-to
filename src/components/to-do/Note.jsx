import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase";
import {
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const Note = ({ todoList, setTodoList }) => {
  const deleteItem = async (id) => {
    try {
      const itemDoc = doc(db, "items", id);
      await deleteDoc(itemDoc);
      setTodoList((prevTodoList) =>
        prevTodoList.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const toggleCompleted = async (item) => {
    try {
      const itemDoc = doc(db, "items", item.id);
      await updateDoc(itemDoc, { completed: !item.completed });
      setTodoList((prevTodoList) =>
        prevTodoList.map((todo) =>
          todo.id === item.id ? { ...todo, completed: !item.completed } : todo
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {todoList.map((item) => (
        <div key={item.id} className="note">
          <input
            onChange={() => toggleCompleted(item)}
            type="checkbox"
            checked={item.completed ? "checked" : ""}
          />
          <h1
            onClick={() => toggleCompleted(item)}
            className={item.completed ? "note-title-completed" : "note-title"}
          >
            {item.title}
          </h1>
          <p>Detalle: {item.detail}</p>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Note;
