<script>
  import Modal from "./Modal.svelte";
  import AddPersonForm from "./AddPersonForm.svelte";

  let showModal = false;
  let isPromo = false;
  let maxId;

  let people = [
    { name: "yohsi", beltColor: "black", age: 12, id: 1 },
    { name: "mario", beltColor: "green", age: 14, id: 2 },
    { name: "luigi", beltColor: "brown", age: 13, id: 3 },
    { name: "ali", beltColor: "green", age: 20, id: 4 },
    { name: "veli", beltColor: "yellow", age: 25, id: 5 },
    { name: "cengiz", beltColor: "white", age: 25, id: 6 },
  ];

  const deleteHandler = (personId, event) => {
    // console.log(personId, event);
    people = people.filter((p) => p.id != personId);
  };

  const showModalToggle = () => {
    showModal = !showModal;
    maxId = generateUserId();
  };

  const generateUserId = () => {
    return people.length != 0 ? Math.max(...people.map((p) => p.id)) + 1 : 1;
  };

  const addPersonHandler = (event) => {
    // console.log(event);
    people = [event.detail, ...people];
    showModal = !showModal;
  };
  /* ------------------------------------------------------- Script End ------------------------------------------------------- */
</script>

<main>
  <Modal {isPromo} {showModal} on:click={showModalToggle}>
    <AddPersonForm on:addPerson={addPersonHandler} {maxId} />
  </Modal>

  <button on:click={showModalToggle}>Modal Toggle</button>

  {#if people.length < 4 && people.length != 0}
    <p>
      person sayisi 4 den az olmaya başladı. person sayisi -> {people.length}
    </p>
  {/if}
  {#if people.length == 0}
    <p>
      there is no person. insan sayisi -> {people.length}
    </p>
  {/if}
  {#each people as person, index}
    <div
      style="border: 2px solid silver; padding:8px; border-radius:8px;  max-width:400px; margin:auto; margin-bottom:14px;"
    >
      <h4>{person.name}</h4>
      <h3>{person.beltColor}</h3>

      {#if person.beltColor === "black"}
        <p style="font-weight: bolder; font-size:22px;">Master Ninja !</p>
      {/if}

      {#if person.skills?.length > 0}
        <ul id="skills">
          {#each person.skills as skill, index}
            <li>{skill}</li>
          {/each}
        </ul>
      {/if}

      <h2>{person.age}</h2>
      <button on:click={(event) => deleteHandler(person.id, event)}
        >Delete</button
      >
    </div>
  {/each}
</main>

<style>
  main {
    text-align: center;

    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: var(--theme-color);
    font-size: 4em;
    font-weight: 100;
  }

  #skills {
    margin: 0;
    padding: 0;
  }
  #skills li {
    color: cadetblue;
    font-size: 16px;
    list-style-type: none;
    text-decoration: underline;
    margin: 8px 0px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
