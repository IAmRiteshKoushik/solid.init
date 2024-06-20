import banner from "./assets/banner.png";
import Card from "./components/Card";
import SignalTrial from "./components/SignalTrial";

function App() {
    return (
        <div class="container m-auto">
            <header>
                <h1>Ninja Merch</h1>
            </header>
            <img class="rounded-md" src={banner} alt="site banner"/>

            <div class="grid grid-cols-4 gap-10 my-4">

                {/*<Card title="ninja tee" />*/}
                <Card title="ninja tote bag" rounded={true} flat={false}>
                    <h2>NInja Tee, White</h2>
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
        </div>
    );
}

export default App;
