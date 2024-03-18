import { For } from "solid-js";
import TodoContainer from "./TodoContainer";

function GroupContainer(props) {

    return (
      <div>
        {props.name}
        <For each={props.todos}>{(todo, todoIdx) => {
            return <TodoContainer modTodo={props.modTodo} todo={todo} todoIdx={todoIdx()} groupIdx={props.groupIdx}/>
        }
        }</For>
      </div>
    );
  }
  
  export default GroupContainer;