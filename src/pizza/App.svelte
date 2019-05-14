<script>
	import PizzaSquare from './PizzaSquare.svelte'
	import Pizza2vs1 from './Pizza2vs1.svelte'

	let settings = {
		navSelected: 'quadratmeter',
		buttonText: 'Preis pro Quadratmeter'
	}
	
	function toggle() {
		switch (settings.navSelected) {
			case 'quadratmeter':
				settings.navSelected = '2vs1';
				settings.buttonText = '2 vs 1 Vergleich';
				break;
			case '2vs1':
				settings.navSelected = 'quadratmeter';
				settings.buttonText = 'Quadratmeterpreis';
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

	.logo {
		background-color: salmon;
	}

	.nav {
		background-color: salmon;
		grid-area: nav;
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

	.content {
		margin: 1em;
	}

	.container {
	display: grid;
	grid-template-columns: auto auto 50px auto;
  grid-template-rows: auto;
	grid-template-areas: 
		"logo logo logo nav"
		"header header header header"
    "main main . sidebar"
    "footer footer footer footer";
	}
</style>

<div class="container">
	<div class="logo">
		<h1>Pizza Pi Rechner</h1>
	</div>
		<div class="logo">
	</div>
		<div class="logo">
	</div>
	<div class="nav">
		<button on:click={toggle}>
			{settings.buttonText}
		</button>
	</div>
	
	<div class="content">
		<div class="item-a">
			<h2>Hol das meiste aus deiner Pizza Bestellung!</h2>
		</div>

		{#if settings.navSelected == 'quadratmeter'}
			<div class="item-b">
				<PizzaSquare/>
			</div>
		{/if}

		{#if settings.navSelected == '2vs1'}
			<div class="item-b">
				<Pizza2vs1/>
			</div>
		{/if}
	</div>
</div>

