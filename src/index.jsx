/* @refresh reload */
import { render } from 'solid-js/web';
import './index.css';
import App from './App';
import { Router, Route } from '@solidjs/router';
import Home from "./pages/Home";
import Cart from "./pages/Cart"
import Product from './pages/Product';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
    <Router root={App}>
        <Route path="/" component={Home}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/product/:id" component={Product}/>
    </Router>
), root);
