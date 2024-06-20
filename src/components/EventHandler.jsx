import { createSignal } from "solid-js";

export default function EventHandler(){
    const [name, setName] = createSignal("luigi");
    const [age, setAge] = createSignal(25);

    const changeName = (name) => {
        setName(name)
    }

    return(
        <div>
            <p>The name is {name()} and the age is {age()}</p>
            <button onClick={() => changeName('bowser')}>Change the name</button>
            <input 
                type="text" 
                onInput={(e) => setName(e.target.value)}
                value={name()}
            />
        </div>
    );

}
