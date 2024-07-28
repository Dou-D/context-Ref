import { useContext, useEffect } from "react";
import { TasksContext } from "./TasksContext";

export default function Detail() {
  const task = useContext(TasksContext); // 在组件顶层使用 useContext
  return (
    <div className="detail">
      {task.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.text}</h3>
            <p>{item.done}</p>
          </div>
        );
      })}
    </div>
  );
}
