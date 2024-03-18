import { createSignal } from "solid-js";

function GroupForm(props) {

    let textInput;

    return (
      <div>
        <input type="text" ref={textInput}/>
        <button onClick={() => {props.addGroup(textInput.value)}}>Create group</button>
      </div>
    );
}
  
export default GroupForm;