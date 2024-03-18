import { For } from "solid-js";
import TodoContainer from "./TodoContainer";
import TodoForm from "./TodoForm";

function GroupContainer(props) {

    return (
      <div>
        {props.name}
        <For each={props.todos}>{(todo, todoIdx) => {
            return <TodoContainer modTodo={props.modTodo} todo={todo} todoIdx={todoIdx()} groupIdx={props.groupIdx}/>
        }
        }</For>
        <TodoForm addTodo={props.addTodo} groupIdx={props.groupIdx}/>
      </div>
    );
  }
  
  export default GroupContainer;