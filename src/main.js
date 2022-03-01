import App from "./App.svelte";
import List from "./List.svelte";

const app = new App({
  target: document.body,
  props: {},
});
/* const listComponent = new List({
  target: document.getElementById("list"),
  props: {
    count: 14,
  },
}); */

// export default listComponent;
export default app;
