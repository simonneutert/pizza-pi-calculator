<script>
	import PizzaSquare from './PizzaSquare.svelte'
	import Pizza2vs1 from './Pizza2vs1.svelte'

	let settings = {
		navSelected: 'quadratmeter'
	}
	
	function toggle() {
		switch (settings.navSelected) {
			case 'quadratmeter':
				settings.navSelected = '2vs1';
				break;
			case '2vs1':
				settings.navSelected = 'quadratmeter'
				break;
			default:
				break;
		}
		settings.loggedIn = !settings.loggedIn;
	}
</script>

<style>
	button {
		max-width: 220px;
	}

	.item-a {
		grid-area: header;
	}
	.item-b {
		grid-area: main;
	}
	.item-c {
		grid-area: sidebar;
	}
	.item-d {
		grid-area: footer;
	}

	.container {
  display: grid;
  grid-template-columns: auto auto 50px auto;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
	}
</style>

<h1>Pizza Pi Rechner</h1>
<h2>Hol das meiste aus deiner Pizza Bestellung!</h2>

<div class="container">

	{#if settings.navSelected == 'quadratmeter'}
		
		<div class="item-a">
		<button on:click={toggle}>
			2 vs 1 Vergleich
		</button>
		</div>
		
		<div class="item-b">
			<PizzaSquare/>
		</div>
	{/if}

	{#if settings.navSelected == '2vs1'}
		<div class="item-a">
		<button on:click={toggle}>
			Quadratmeter Vergleich
		</button>
		</div>
		
		<div class="item-b">
			<Pizza2vs1/>
		</div>
	{/if}
	
</div>


