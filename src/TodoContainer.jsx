import { For } from "solid-js";

function TodoContainer(props) {

    let checkInput;
    return (
        <div>
            <span style={{ "text-decoration": props.todo.completed ? "line-through" : "none" }}>{props.todo.text}</span>
            <input ref={checkInput} type="checkBox" checked={props.todo.completed} onChange={() => {
                props.modTodo(props.groupIdx, props.todoIdx, checkInput.checked);
                }}/>
        </div>
    );
  }
  
  export default TodoContainer;