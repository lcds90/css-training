<template>
  <div class="layout">
    <header class="header">
      headerzin
    </header>
    <main class="main">
      <Nuxt />
    </main>
    <footer class="footer">
      footerzin
    </footer>
  </div>
</template>

<style>

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

.layout {
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  display: grid;
  grid: 0.5fr 1fr 0.1fr / 1fr;
  grid-template-areas:
    "header"
    "main"
    "footer";
}

.header {
  grid-area: header;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}

@media screen and (min-width: 768px) {
  .layout {
    grid: 0.35fr 2fr 0.15fr / 1fr;
    grid-template-areas:
      "header"
      "main"
      "footer";
  }
}

</style>
