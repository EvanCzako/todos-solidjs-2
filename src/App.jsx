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
    const newState = {
      groups: [
        ...state.groups
      ]
    };
    newState.groups[groupIdx].todos.push({
      text,
      completed: false
    })
    setState(newState);
  };

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

  return (
    <div class={styles.App}>
      <For each={state.groups}>{(group, groupIdx) => 
        <GroupContainer name={group.name} addTodo={addTodo} groupIdx={groupIdx()} todos={group.todos}/>
      }
      </For>
      <GroupForm addGroup={addGroup}/>
    </div>
  );
}

export default App;
