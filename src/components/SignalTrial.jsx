import { createSignal } from "solid-js";

export default function SignalTrial(){
    const [name, setName] = createSignal("Ritesh");
    const [bool, setBool] = createSignal(true);
    const [age, setAge] = createSignal(25);
    const [person, setPerson] = createSignal({
        name: {
            first: "brandon",
            last: "sanderson",
        },
        age: 45,
    });

    setTimeout(() => {
        setName("Mario");
    }, 1000);
    setTimeout(() => {
        // setBool(false)
        // setBool(!bool());
        setBool((prev) => !prev)
    }, 2000);
    setInterval(() => {
        setAge(age() + 1);
    }, 1000);
    setTimeout(() => {
        setPerson({
            name: {
                first: "brandon",
                last: "williams"
            },
            age: 45,
        })
    }, 3000);

    return(
        <div>
            <p>The name is {name()} and his age is {age()}</p>
            <p>The boolean is {bool().toString()}</p>
            <p>The name is {person().name.first} {person().name.last}</p>
        </div>
    );
    
    
}
