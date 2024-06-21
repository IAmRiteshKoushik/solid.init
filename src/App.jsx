import banner from "./assets/banner.png";
import { createSignal, lazy } from "solid-js";
import { Router, Route } from "@solidjs/router";

import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Product from "./pages/Product"

// Lazy loading (reduces initial load time when you have a big application)
// Currently, does not work

// const Cart = lazy(() => import("./pages/Cart"));
// const Home = lazy(() => import("./pages/Home"));
// const Product = lazy(() => import("./pages/Product"));

function App(props) {
    const [darkTheme, setDarkTheme] = createSignal(false);
    function toggleTheme() {
        setDarkTheme(!darkTheme());
    }

    return (
        <div class="container m-auto">
            
            {/* Common components across all screens must stay at the top which
            should be followed by the routing logic. */}
            <header 
                class="my-4 p-2 text-xl flex items-center gap-4"
                classList={{"bg-neutral-900" : darkTheme(), "text-white": darkTheme()}}>
                <span
                    class="material-symbols-outlined cursor-pointer"
                    onClick={toggleTheme}
                >light_mode</span>
                <h1>Ninja Merch</h1>
                <a href="/">Home</a>
                <a href="/cart">Cart</a>
            </header>
            <img class="rounded-md" src={banner} alt="site banner"/>
            {props.children}

            {/* All routing logic stays after the home-screen has been decided */}
            <Router>
                <Route path="/" component={Home}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/product/:id" component={Product}/>
            </Router>
        </div>
    );
}

export default App;
