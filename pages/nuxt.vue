<template>
  <section>
    <article>
      <img
        src="https://miro.medium.com/max/1400/1*dKYx6tc_nT6hELIz9_pExg.png"
        alt="Logo vue"
      >
    </article>
    <article>
      <div class="desenho">
        <div class="wrapper">
          <div class="triangle-1" />
          <div class="triangle-2" />
          <div class="triangle-3" />
        </div>
        <div class="title">
          <h2>NUXT</h2>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>
section {
  display: grid;
  grid: 1fr / 1fr 1fr;
  height: 100%;
  width: 100%;
  background: lightgrey;
}

article {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}

img {
  width: 100%;
  height: auto;
}

.desenho {
  width: 75%;
  height: 100%;
  display: grid;
  grid: 1fr / 1fr 1fr;
}

.wrapper {
  position: relative;
  padding: 25px;
}

.triangle-1,
.triangle-2,
.triangle-3 {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  bottom: 25vh;
}

.triangle-1 {
  border-width: 0 50px 90px 50px;
  border-color: transparent transparent#39495C transparent;
  z-index: 2;
  left: 60px;
}

.triangle-2 {
  border-width: 0 70px 110px 60px;
  border-color: transparent transparent#4C7E70 transparent;
  z-index: 1;
  left: 60px;
}

.triangle-3 {
  border-width: 0 72px 130px 71px;
  border-color: transparent transparent#68b587 transparent;
  left: 16px;
}

.title {
  display: grid;
  place-items: center;
}

h2 {
  font-weight: 100;
  color: #39495c;
  font-size: 5rem;
  position: relative;
  top: 50px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
