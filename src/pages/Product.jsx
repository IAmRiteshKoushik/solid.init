import { useParams } from "@solidjs/router";
import { Show, createResource } from "solid-js";
import { useCartContext } from "../context/CartContext";

const fetchProduct = async(id) => {
    const res = await fetch("http://localhost:4000/products/" + id);
    return res.json();
}

export default function Product(){
    const params = useParams();
    // send arguments to fetch product
    const [product] = createResource(params.id, fetchProduct);
    const { items, setItems } = useCartContext();

    const addProduct = () => {
        // Check if product exists 
        const exists = items.find(p => p.id === product().id);
        if(exists){
            // increment quantity of product
            setItems(p => p.id === product().id, "quantity", q => q + 1);
        }
        if(!exists){
            // add a new product if does not exists (using spread operater)
            setItems([...items, {...product(), quantity: 1}]);
        }
    }

    return(
        <div>
            <Show when={product()} fallback={<p>Loading...</p>}>
                <div class="grid grid-cols-5 gap-7 p-10">
                    <div class="col-span-2">
                        <img src={product().img} alt="product img" />
                    </div>
                    <div class="col-span-3">
                        <h2 class="text-3xl font-bold mb-7">{product().title}</h2>
                        <p>{product().description}</p>
                        <p class="my-7 text-2xl">Only ${product().price}</p>

                        <button class="btn" onClick={addProduct}>Add to Cart</button>
                    </div>
                </div>
            </Show>
        </div>
    );
}
