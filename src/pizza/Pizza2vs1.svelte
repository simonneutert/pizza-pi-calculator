<script>
  export const Result = {
    comparePizza: function(MediumPizza, LargePizza) {
      if (MediumPizza.price > 0 && LargePizza.price > 0 && MediumPizza.diameter > 0 && LargePizza.diameter > 0) {
        console.log(MediumPizza.area() * (LargePizza.price / MediumPizza.price));
        console.log(LargePizza.area());

        if (MediumPizza.area() * (LargePizza.price / MediumPizza.price) > LargePizza.area()) {
          let text = `
          Bestell dir 2 der kleineren Pizzen!
          <br>
          Fläche Medium Pizzen: ${(MediumPizza.area() * 2).toFixed(2)} cm²
          <br>
          Fläche große Pizza: ${LargePizza.area().toFixed(2)} cm²
          `
          return text
        } else {
          return "Bestell die große Pizza!"
        }
      } else {
        "nonono"
      }
    }
  }

  let areaOfCircle = function(diameter) {
    return Math.pow(diameter / 2, 2) * 3.1415;
  }

  export const MediumPizza = {
    diameter: 26,
    price: 5,
    area: function() {
      return areaOfCircle(this.diameter);
    }
  }

  export const LargePizza = {
    diameter: 32,
    price: 10,
    area: function() {
      return areaOfCircle(this.diameter);
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

<h2>2 vs. 1 Vergleich</h2>

<div class="col2">

  <div class="box">
    <h4>2 kleinere Pizzen</h4>
    <label for="diameter">Durchmesser</label>
    <input bind:value={MediumPizza.diameter}>
    <br><br>
    <label for="Preis">Preis</label>
    <input bind:value={MediumPizza.price}>
  </div>

  <div class="box">
    <h4>1 große Pizza</h4>
    <label for="diameter">Durchmesser</label>
    <input bind:value={LargePizza.diameter}>
    <br><br>
    <label for="Preis">Preis</label>
    <input bind:value={LargePizza.price}>
  </div>

</div>

<h3>{@html Result.comparePizza(MediumPizza, LargePizza)}</h3>
