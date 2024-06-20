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
        <>
            <div class="grid grid-cols-4 gap-10 my-4">

                {/*<Card title="ninja tee" />*/}
                <Card title="ninja tote bag" rounded={true} flat={false}>
                    <h2>Ninja Tee, White</h2>
                    <button class="btn">view</button>
                    <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
                    <p>Only $10</p>
                </Card>
                <Card title="ninja hoodie" rounded={false} flat={true}>
                    <h2>NInja Tee, White</h2>
                    <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
                    <button class="btn">view</button>
                </Card>

                {/* Products.loading is true when there is not product and then
                it becomes false after the product has been loaded*/}
                <p>{console.log(products(), products.loading)}</p>
            </div>

            <SignalTrial />
            <EventHandler />
        </>
    );
}
