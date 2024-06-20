import { createEffect, createSignal } from "solid-js";
import { createStore } from "solid-js/store";

export default function EffectTrial() {
    const [count, setCount] = createSignal(0);
    const [person, setPerson] = createStore({
        name: {
            first: "brandon",
            last: "sanderson",
        },
        age: 45,
    });

    function changeName(){
        setPerson("name", "last", "finch");
    }

    // We keep updating the count variable after every second
    const int = setInterval(() => setCount(count() + 1), 1000);

    createEffect(() => {
        // this re-runs when any of its dependencies change. It is like the 
        // useEffect hook but it does not require you to give it a 
        // dependency list
        //
        // Here, count() is a dependency and everytime the value of count
        // changes, the useEffect hook will be called and function body
        // would be executed.
        console.log(count());

        if(count() === 5){
            // Clear interval cleaers the timer created by setInterval
            clearInterval(int);
        }
    }) 

    createEffect(() => {
        // If this is used then the createEffect runs only once as stores
        // are not like signals. The whole value is not changing but some 
        // deeply nested value is altered.
        // console.log(person);
        // console.log(person.name);


        // If we zero down to the exact store-varialbe that is behaving like
        // a signal then we are able to mimic fire the createEffect everytime
        // a change in the last name comes in.
        console.log(person.name.last);
    })

    return(
        <div>
            <p>The count is {count()}</p>
            <p>My name is {person.name.first} {person.name.last}</p>
            <button onClick={changeName}></button>
        </div>
    );
}
