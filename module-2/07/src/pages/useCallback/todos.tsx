interface ITodos {
  todos: string[];
  addTodo: () => void;
}

export default function Todos(props: ITodos) {
  const { todos, addTodo } = props;

  console.log("child render");
  return (
    <div>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}
