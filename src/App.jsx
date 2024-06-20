import banner from "./assets/banner.png";
import { createSignal } from "solid-js";
import { A } from "@solidjs/router";

function App(props) {

    const [darkTheme, setDarkTheme] = createSignal(false);

    function toggleTheme() {
        setDarkTheme(!darkTheme());
    }

    return (
        <div class="container m-auto">
            <header 
                class="my-4 p-2 text-xl flex items-center gap-4"
                classList={{"bg-neutral-900" : darkTheme(), "text-white": darkTheme()}}
            >
                <span
                    class="material-symbols-outlined cursor-pointer"
                    onClick={toggleTheme}
                >light_mode</span>
                <h1>Ninja Merch</h1>

                <A href="/">Home</A>
                <A href="/cart">Cart</A>
            </header>

            <img class="rounded-md" src={banner} alt="site banner"/>

            {props.children}

        </div>
    );
}

export default App;
