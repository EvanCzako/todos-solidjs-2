import { createSignal } from "solid-js";

function TodoForm(props) {

    let textInput;

    return (
      <div>
        <input type="text" ref={textInput}/>
        <button onClick={() => {props.addTodo(textInput.value, props.groupIdx)}}>Add Todo</button>
      </div>
    );
}
  
export default TodoForm;