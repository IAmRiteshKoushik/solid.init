import Card from "../components/Card"
import { useCartContext } from "../context/CartContext";

export default function Cart() {
    const { items } = useCartContext();

    const total = () => {
        return items.reduce((acc, product) => {
            return acc + product.quantity * product.price
        }, 0);
    }

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

                <p class="mt-8 pt-4border-t-2 font-bold">Total Cart Price - ${total()}</p>
            </Card>
        </div>
    );
}
