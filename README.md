# Context

通过`createContext`创建`Context`

```js
export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);
```

```react
// app.jsx
<TasksContext.Provider value={tasks} >
  <TasksDispatchContext.Provider value={dispatch}>
    <h1>Day off in Kyoto</h1>
    <AddTask />
    <TaskList />
  </TasksDispatchContext.Provider>
</TasksContext.Provider>
```

`useContext`获取绑定到Context上的value  

# Ref

useRef也能做响应式，不过需要新建一个`state`，让绑定到useRef上的值改变的同时更改state,触发re-render  

