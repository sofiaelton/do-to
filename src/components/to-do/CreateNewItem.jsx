import React, { useState } from "react";
import { db, auth } from "../../firebase";
import { collection, addDoc, doc } from "firebase/firestore";

const CreateNewItem = ({ setTodoList }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDetail, setNewDetail] = useState("");

  const itemsCollection = collection(db, "items");

  const submiteNote = async (event) => {
    event.preventDefault();

    try {
      const user = auth.currentUser; // Obtén el usuario autenticado
      if (user) {
        const uid = user.uid; // Obtén el UID del usuario autenticado
        const docRef = await addDoc(itemsCollection, {
          title: newTitle,
          detail: newDetail,
          completed: false, 
          uid,
        }); // Agrega el campo 'uid' al documento
        // Usa docRef.id como el ID del nuevo elemento
        const newItem = {
          title: newTitle,
          detail: newDetail,
          completed: false, 
          uid,
          id: docRef.id, // Usa el ID del documento recién creado
        };
        setNewTitle("");
        setNewDetail("");
        setTodoList((prevTodoList) => [...prevTodoList, newItem]);
      } else {
        console.error("Usuario no autenticado");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Pendiente"
        name="title"
        value={newTitle}
      />
      <br />
      <textarea
        onChange={(e) => setNewDetail(e.target.value)}
        placeholder="Detalle"
        name="detalle"
        rows={3}
        value={newDetail}
      />
      <button onClick={submiteNote}>Agregar</button>
    </div>
  );
};

export default CreateNewItem;
