import logo from './logo.svg';
import styles from './App.module.css';
import { For } from "solid-js";
import { createStore } from "solid-js/store";
import GroupContainer from './GroupContainer';
import GroupForm from './GroupForm';

const initState = {
  groups: [
    {
      name: "Group A",
      todos: [
        {
          text: "Pet the cat",
          completed: false,
          id: 0
        },
        {
          text: "Feed the cat",
          completed: false,
          id: 1
        },
      ],
      id: 0
    },
    {
      name: "Group B",
      todos: [
        {
          text: "Pet the dog",
          completed: false,
          id: 2
        },
        {
          text: "Feed the dog",
          completed: false,
          id: 3
        }
      ],
      id: 1
    }
  ]
}

let todoId = 4;
let groupId = 2;

function App() {

  const [state, setState] = createStore(initState);

  const addTodo = (text, groupIdx) => {
    
    const newTodo = {
      text,
      completed: false,
      id: todoId
    };
    todoId++;
    
    const newTodos = [
      ...state.groups[groupIdx].todos,
      newTodo
    ]

    setState("groups",groupIdx,"todos",newTodos);
  };

  const modTodo = (groupIdx, todoIdx, completedVal) => {
    setState("groups",groupIdx,"todos",todoIdx,"completed",completedVal);
  }

  const addGroup = (name) => {
    const newGroup = {
      name,
      todos: [],
      id: groupId
    };
    groupId++;
    const newState = {
      groups: [
        ...state.groups,
        newGroup
      ]
    }
    setState(newState);
  };

  const moveGroupDown = (groupIdx) => {
    if(state.groups.length <= 1 || groupIdx >= state.groups.length - 1){
      return;
    }
    const newGroups = [...state.groups];
    [newGroups[groupIdx], newGroups[groupIdx+1]] = [newGroups[groupIdx+1], newGroups[groupIdx]];
    const newState = {
      ...state,
      groups: newGroups
    }
    setState(newState);
  };

  const moveGroupUp = (groupIdx) => {
    if(state.groups.length <= 1 || groupIdx === 0){
      return;
    }
    const newGroups = [...state.groups];
    [newGroups[groupIdx], newGroups[groupIdx-1]] = [newGroups[groupIdx-1], newGroups[groupIdx]];
    const newState = {
      ...state,
      groups: newGroups
    }
    setState(newState);
  };

  const moveTodoDown = (groupIdx, todoIdx) => {
    if(state.groups[groupIdx].todos.length <= 1 || todoIdx >= state.groups[groupIdx].todos.length - 1){
      return;
    }
    const newTodos = [...state.groups[groupIdx].todos];
    [newTodos[todoIdx], newTodos[todoIdx+1]] = [newTodos[todoIdx+1], newTodos[todoIdx]];
    setState("groups",groupIdx,"todos",newTodos);
  };

  const moveTodoUp = (groupIdx, todoIdx) => {
    if(state.groups[groupIdx].todos.length <= 1 || todoIdx === 0){
      return;
    }
    const newTodos = [...state.groups[groupIdx].todos];
    [newTodos[todoIdx], newTodos[todoIdx-1]] = [newTodos[todoIdx-1], newTodos[todoIdx]];
    setState("groups",groupIdx,"todos",newTodos);
  };

  return (
    <div class={styles.App}>
      <For each={state.groups}>{(group, groupIdx) => 
        <div class="group-wrapper">
          <GroupContainer name={group.name} addTodo={addTodo} modTodo={modTodo} groupIdx={groupIdx()} todos={group.todos} moveTodoUp={moveTodoUp} moveTodoDown={moveTodoDown}/>
          <button onClick={() => {moveGroupUp(groupIdx())}}>-^- Move group up -^-</button>
          <button onClick={() => {moveGroupDown(groupIdx())}}>-V- Move group down -V-</button>
        </div>
      }
      </For>
      <GroupForm addGroup={addGroup}/>
    </div>
  );
}

export default App;
