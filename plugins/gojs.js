export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('go', msg => console.log(`Hello ${msg}!`))
}
