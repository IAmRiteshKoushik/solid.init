import Card from "../components/Card";
import SignalTrial from "../components/SignalTrial";
import EventHandler from "../components/EventHandler";

export default function Home(){
    
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
            </div>

            <SignalTrial />
            <EventHandler />
        </>
    );
}
