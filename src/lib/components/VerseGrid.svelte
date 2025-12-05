<script lang="ts">
  import type { Verse } from '$lib/types';
  export let verses: Verse[] = [];
  export let onSelect: (v: Verse) => void;

  // Logic from your provided JS code
  function getDisplayName(no: string | number) {
    if (no == 0) return "Whole Chapter";
    if (no == 99) return "End of Chapter";
    return no;
  }
</script>

<div class="shlok-area">
  {#each verses as verse}
    <button class="shlok-img" on:click={() => onSelect(verse)}>
      <div class="shlok-bg">
        <span class="envelope-icon">✉️</span>
      </div>
      <div class="shlok-num">
        <p>{getDisplayName(verse.shlok_no)}</p>
      </div>
      <div class="play-icon">▶</div>
    </button>
  {/each}
</div>

<style>
  .shlok-area {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 20px;
  }

  .shlok-img {
    position: relative;
    width: 120px;
    height: 120px;
    background: #fdfbf7;
    border: 1px solid #dcdcdc;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }

  .shlok-img:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  .shlok-num {
    position: absolute;
    z-index: 2;
    font-weight: bold;
    color: #4a3b2a;
    font-size: 1.1rem;
  }

  .envelope-icon {
    font-size: 4rem;
    opacity: 0.1;
  }

  .play-icon {
    position: absolute;
    bottom: 5px;
    right: 5px;
    color: #8b0000;
    font-size: 0.8rem;
  }
</style>