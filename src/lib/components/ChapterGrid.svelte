<script lang="ts">
  export let onSelect: (id: number) => void;
  const chapters = Array.from({ length: 18 }, (_, i) => i + 1);
</script>

<div class="chapter-container">
  {#each chapters as num}
    <button class="chapter-box" on:click={() => onSelect(num)}>
      <div class="chapter-img">
        <div class="book-placeholder">📖</div>
      </div>
      <div class="chapter-num">
        <p>{num}</p>
      </div>
    </button>
  {/each}
</div>

<style>
  .chapter-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 20px;
    padding: 20px;
    max-width: 1000px;
    margin: 0 auto;
  }

  .chapter-box {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2s;
  }

  .chapter-box:hover {
    transform: scale(1.05);
  }

  .chapter-img {
    background: #fff;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .book-placeholder {
    font-size: 3rem;
    width: 80px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #8b4513;
    color: white;
    border-radius: 2px;
  }

  .chapter-num p {
    font-family: serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin: 0;
  }
</style>