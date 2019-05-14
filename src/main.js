import PizzaApp from './pizza/App.svelte';

const pizzaApp = new PizzaApp({
	target: document.getElementById('pizza'),
});

export default pizzaApp;