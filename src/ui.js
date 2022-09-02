import { React, useState } from "react";
export default function Ui({ todos, setTodos }) {
  const [undoneList, setUndoneList] = useState([]);
  const toDoRemover = (e) => {
    setTodos((prev) => prev.filter((f) => f.item !== e.item));
    //setUndoneList(undos);
    setUndoneList((prev) => [e, ...prev]);
  };
  console.log(1, undoneList);

  return (
    <div>
      <div style={{ textAlign: "left" }}>
        {todos.map((e) => (
          <h2 key={e.id}>
            <button
              onClick={() => {
                toDoRemover(e);
              }}
            >
              Remove
            </button>{" "}
            {e.item}
          </h2>
        ))}
        <div>
          {undoneList.length > 0 && (
            <button
              onClick={() => {
                setTodos((prev) => [...prev, undoneList[0]]);
                setUndoneList((prev) => prev.slice(1, prev.length));
              }}
            >
              Undo
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
