<script lang="ts">
  export let activeChapter: number;
  export let onSelect: (id: number) => void;

  const chapters = Array.from({ length: 18 }, (_, i) => i + 1);
</script>

<nav class="chapter-nav">
  <h3>Chapters</h3>
  <ul>
    {#each chapters as chapter}
      <li>
        <button 
          class:active={activeChapter === chapter} 
          on:click={() => onSelect(chapter)}
        >
          Chapter {chapter}
        </button>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .chapter-nav {
    background: #fdfbf7; /* Parchment-like background */
    border-right: 1px solid #e0d8c0;
    height: 100vh;
    overflow-y: auto;
    width: 250px;
    flex-shrink: 0;
  }

  h3 {
    padding: 1.5rem;
    margin: 0;
    font-family: 'Merriweather', serif;
    color: #4a3b2a;
    border-bottom: 2px solid #e0d8c0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    padding: 1rem 1.5rem;
    cursor: pointer;
    font-size: 1rem;
    color: #665;
    transition: all 0.2s;
    border-bottom: 1px solid #eee;
  }

  button:hover {
    background: #f0e6d2;
    color: #000;
  }

  button.active {
    background: #8b0000; /* Deep saffron/maroon typical of Sanskrit sites */
    color: white;
    font-weight: bold;
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .chapter-nav {
      width: 100%;
      height: auto;
      border-right: none;
      border-bottom: 1px solid #ccc;
    }
    
    ul {
      display: flex;
      overflow-x: auto;
      padding-bottom: 5px;
    }
    
    button {
      white-space: nowrap;
      border-bottom: none;
    }
  }
</style>