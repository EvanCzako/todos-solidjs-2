import logo from './logo.svg';
import styles from './App.module.css';

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

const todoId = 4;

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
  }

  return (
    <div class={styles.App}>
      
    </div>
  );
}

export default App;
