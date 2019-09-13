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

<style>
.col2 {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto;
  background-color: #fff;
  color: #444;
}
.box {
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
}
</style>

<div class="col2">

  <div class="box">
    <h3>Pizza Quadratmeter Preisvergleich</h3>
    <label for="diameter">Durchmesser</label>
    <input bind:value={Pizza.diameter}>
    <br><br>
    <label for="Preis">Preis</label>
    <input bind:value={Pizza.price}>
  </div>

</div>


<h4>
  1 m² dieser Pizza kostet dich {Pizza.relativePriceSquareMeter()} Euro
</h4>
