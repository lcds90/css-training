<template>
  <section>
    <article>1</article>
    <article>2</article>
    <article>3</article>
    <article>4</article>
    <article>5</article>
    <article>6</article>
    <article>7</article>
    <article>8</article>
    <article>9</article>
    <article>10</article>
    <article>11</article>
    <article>12</article>
    <article>13</article>
    <article>14</article>
    <article>15</article>
    <article>16</article>
    <article>17</article>
    <article>18</article>
    <article>19</article>
    <article>20</article>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: grid;
  grid: 1fr / repeat(5, 1fr);
  grid-auto-rows: 1fr;
  height: 100%;
  gap: 25px;
}

article {
  width: 100%;
  text-align: center;
  transition: all 2s ease-in-out;
  height: 100%;

  &:hover {
    box-shadow: $box-shadow;
  }

  &:nth-of-type(1) {
    height: 100px;
    background: red;
    grid-column: span 2;
  }

  &:nth-of-type(3) {
    background: green;
    grid-row: span 3;
    grid-column: span 2;

    &::backdrop {
      color: white;
    }
  }

  &:nth-of-type(2) {
    width: 200px;
    grid-row: span 4;
    display: grid;
    place-items: center;
    position: relative;

    &:hover {
      background: orange;
    }

    &::before {
      content: "before";
      height: 50%;
      background: black;
      color: white;
      position: absolute;
      left: 0;
    }
  }
}
</style>
