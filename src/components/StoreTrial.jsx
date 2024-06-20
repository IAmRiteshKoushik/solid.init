import { createStore } from "solid-js/store";

export default function StoreTrial(){


    // While using stores, each variable declared at any level of the store 
    // has its own state and can be updated independently of others.
    const [person, setPerson] = createStore({
        name: {
            first: "Brandon",
            last: "Sanderson",
        },
        age: 45,
    });

    function changeName(){
        // Only one property is to be updated and that can be done as follows
        setPerson("name", "first", "mario");
    }

    const [products, setProducts] = createStore([
        { title: "ninja tee", price: 10, id: 1 },
        { title: "ninja tote", price: 15, id: 2 },
    ]);
    // While signals were returning getter() and setter() functions 
    // stores return the actual variable instead of function
    //

    function changeProduct(id){
        // By using a default id, we can update store-array elements as follows
        // setProducts(0, "price", 25);

        // In this method, we send an id and when a match is found then 
        // the price field of that is updated
        setProducts((p) => p.id === id, "price", 50);
    }

    return(
        <div>
            <p>The first name is {person.name.first}</p>
            <p>The last name is {person.name.last}</p>
            <button onClick={changeName}>Change the first name</button>

            <For each={products}>
                {(product) => {
                    <p>{product.title} = ${product.price}</p>
                }}
            </For>
            <button onClick={changeProduct}>Change a product</button>
        </div>
    );
}
