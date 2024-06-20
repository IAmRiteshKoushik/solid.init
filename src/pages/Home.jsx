import Card from "../components/Card";
import SignalTrial from "../components/SignalTrial";
import EventHandler from "../components/EventHandler";
import { createResource } from "solid-js";

const fetchProducts = async() => {
    const res = await fetch("http://localhost:4000/products")
    return res.json();
}

export default function Home(){

    const [products] = createResource(fetchProducts);

    // The following console log would give out an undefined as createResource 
    // works with async functions and takes some time to fetch the data from 
    // the JSON-server
    // console.log(products());
    
    return(
        <Show when={products()} fallback={<p>Loading...</p>}>
            <div class="grid grid-cols-4 gap-10 my-4">
                <For each={products()}>
                    {(product) => (
                        <Card rounded={true} flat={true}>
                            <img src={product.img} alt="product img" />
                            <h2 class="my-3 font-bold">{product.title}</h2>
                        </Card>
                    )}
                </For>
            </div>
            {/* Basic signal and event-handler
                <SignalTrial />
                <EventHandler />
            */}
        </Show>
    );
}
