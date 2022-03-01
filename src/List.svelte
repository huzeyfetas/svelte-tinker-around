<script>
  export let count;
</script>

<ul>
  {#each Array(count) as _, i}
    <li>{i + 1}. eleman</li>
  {/each}
</ul>

<style>
  ul li {
    padding: 4px;
    color: red;
    font-size: 22px;
  }
</style>
