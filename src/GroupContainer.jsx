import { For } from "solid-js";
import TodoContainer from "./TodoContainer";
import TodoForm from "./TodoForm";

function GroupContainer(props) {

    return (
      <div>
        <h1>{props.name}</h1>
        <div class="todos-list-wrapper">
            <For each={props.todos}>{(todo, todoIdx) => {
                return <div class="todo-wrapper">
                    <TodoContainer modTodo={props.modTodo} todo={todo} todoIdx={todoIdx()} groupIdx={props.groupIdx}/>
                    <button onClick={() => {props.moveTodoUp(props.groupIdx, todoIdx())}}>-^- Move Todo Up -^-</button>
                    <button onClick={() => {props.moveTodoDown(props.groupIdx, todoIdx())}}>-V- Move Todo Down -V-</button>
                </div>
            }
            }</For>
        </div>

        <TodoForm addTodo={props.addTodo} groupIdx={props.groupIdx}/>
      </div>
    );
  }
  
  export default GroupContainer;