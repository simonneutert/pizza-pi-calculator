<script>
  export const Pizza = {
    diameter: 30,
    price: 5,
    area: function() {
      return Math.pow(this.diameter / 2, 2) * 3.1415;
    },
    relativePriceSquareMeter: function() {
      let factor = 1 / (this.area() / 10000); 
      return (factor * this.price).toFixed(2);
    }
  }
</script>

<h3>Pizza Preisvergleich</h3>
<label for="diameter">Durchmesser</label>
<input bind:value={Pizza.diameter}>
<br><br>
<label for="Preis">Preis</label>
<input bind:value={Pizza.price}>

<h4>
  1 m² dieser Pizza kostet dich {Pizza.relativePriceSquareMeter()} Euro
</h4>
