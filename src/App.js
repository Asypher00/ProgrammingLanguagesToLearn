import "./styles.css";
import { React, useState } from "react";
import { data } from "./data";
import Ui from "./ui";
export default function App() {
  const [todos, setTodos] = useState(data);
  return (
    <div className="App">
      <Ui todos={todos} setTodos={setTodos} />
    </div>
  );
}
