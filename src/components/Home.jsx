import React, { useState, useEffect } from "react";
import CreateNewItem from "./To-do/CreateNewItem";
import Note from "./to-do/Note";
import { db, auth } from "../firebase";
import { getDocs, collection, query, where } from "firebase/firestore";


const Home = () => {

  const [todoList, setTodoList] = useState([]);

  const itemsCollection = collection(db, "items");

  useEffect(() => {
    const user = auth.currentUser;

    if (user) {
      const q = query(itemsCollection, where("uid", "==", user.uid));
      const getTodoList = async () => {
        try {
          const data = await getDocs(q);
          const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setTodoList(filteredData);
        } catch (err) {
          console.error(err);
        }
      };

      getTodoList();
    }
  }, []);

  return (
    <div>
      <h1>Hello!</h1>
      <CreateNewItem setTodoList={setTodoList} />
      <Note todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default Home;
