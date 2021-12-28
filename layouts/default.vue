<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <NuxtLink to="/">
          Home page
        </NuxtLink>
        <NuxtLink to="/nuxt">
          Nuxt
        </NuxtLink>
        <NuxtLink to="/nuxt">
          Nuxt
        </NuxtLink>
      </nav>
    </header>
    <main class="main">
      <Nuxt />
    </main>
    <footer class="footer">
      Feito por <a href="https://lcds.vercel.app" target="_blank" rel="noopener noreferrer">
        Leonardo Santos
      </a>
    </footer>
  </div>
</template>

<style>

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
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
  padding: 10px;
}

.nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: min-content;
  gap: 20px 50px;
  height: 100%;
}

.nav a {
  padding: 5px;
  display: grid;
  place-items: center;
  background: purple;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.25);
  z-index: 2;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
  display: grid;
  place-items: center;
  grid: 1fr / 0.5fr 1fr;
  width: 100%;
}

.footer a {
  background-color: purple;
  color: white;
  font-weight: 500;
  font-style: italic;
  border-radius: 5px;
  display: grid;
  place-items: center;
  height: 75%;
  justify-self: flex-start;
  text-decoration: none;
  padding: 5px;
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
