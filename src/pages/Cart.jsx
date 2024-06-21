import Card from "../components/Card"
import { useCartContext } from "../context/CartContext";

export default function Cart() {
    const { items } = useCartContext();

    console.log(items);

    return(
        <div
            class="max-w-md my-8 mx-auto">
            <Card rounded={true}>
                <h2>Your Shopping Cart</h2> 
                <For each={items}>
                    {(item) => (
                        <p class="my-3">{item.title} - ${item.price} x {item.quantity}</p>
                    )}
                </For>
            </Card>
        </div>
    );
}
