<script>

  export const Result = {
    comparePizza: function(MediumPizza, LargePizza) {
      if (MediumPizza.price > 0 && LargePizza.price > 0 && MediumPizza.diameter > 0 && LargePizza.diameter > 0) {
        if (MediumPizza.relativePrice() < LargePizza.relativePrice()) {
          return "Bestell dir 2 der kleineren Pizzen!"
        } else {
          return "Bestell die große Pizza!"
        }
      } else {
        "nonono"
      }
    }
  }

  export const MediumPizza = {
    diameter: 26,
    price: 5,
    area: function() {
      return Math.pow(this.diameter / 2, 2) * 3.1415 * 2;
    },
    relativePrice: function() {
      return this.price * 2 / this.area();
    }
  }

  export const LargePizza = {
    diameter: 32,
    price: 10,
    area: function() {
      return Math.pow(this.diameter / 2, 2) * 3.1415;
    },
    relativePrice: function() {
      return this.price / this.area();
    }
  } 
</script>

<h2>2 vs. 1 Vergleich</h2>
<h4>2 kleinere Pizzen</h4>
<label for="diameter">Durchmesser</label>
<input bind:value={MediumPizza.diameter}>
<br><br>
<label for="Preis">Preis</label>
<input bind:value={MediumPizza.price}>
<hr>
<h4>1 große Pizza</h4>
<label for="diameter">Durchmesser</label>
<input bind:value={LargePizza.diameter}>
<br><br>
<label for="Preis">Preis</label>
<input bind:value={LargePizza.price}>

<h3>{Result.comparePizza(MediumPizza, LargePizza)}</h3>