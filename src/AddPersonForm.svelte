<script>
  import { createEventDispatcher } from "svelte";

  export let maxId;
  let dispatch = createEventDispatcher();
  let name, beltColor, age;
  let skills = [];

  const submitHandler = () => {
    let person = {
      name,
      beltColor,
      age,
      skills,
      id: maxId,
    };
    dispatch("addPerson", person);
  };
</script>

<!-- <p>Add a New Person</p> -->
<form on:submit|preventDefault={submitHandler}>
  <input
    type="text"
    placeholder="Name"
    id="name"
    name="name"
    bind:value={name}
  />
  <br />
  <input
    type="number"
    placeholder="Age"
    id="age"
    name="age"
    bind:value={age}
  /><br />
  <input type="checkbox" bind:group={skills} value="fighting" />fighting <br />
  <input type="checkbox" bind:group={skills} value="sneaking" />sneaking <br />
  <input type="checkbox" bind:group={skills} value="running" />running <br />
  <select bind:value={beltColor}>
    <option value="black">black</option>
    <option value="brown">brown</option>
    <option value="green">green</option>
    <option value="yellow">yellow</option>
    <option value="white">white</option>
  </select>
  <button>Add Person</button>
</form>

<style>
</style>
