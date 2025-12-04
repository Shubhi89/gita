<script lang="ts">
  import type { Verse } from '$lib/types';
  export let verses: Verse[] = [];
</script>

<div class="verse-container">
  {#each verses as verse, index}
    <article class="verse-card">
      <div class="verse-header">
        <span class="verse-number">Verse {verse.verse_number || index + 1}</span>
      </div>
      
      <div class="sanskrit-text">
        {verse.sanskrit}
      </div>

      {#if verse.transliteration}
        <div class="transliteration">
          {verse.transliteration}
        </div>
      {/if}

      <div class="translation">
        {verse.translation}
      </div>
    </article>
  {/each}
</div>

<style>
  .verse-container {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .verse-card {
    background: white;
    border: 1px solid #e0d8c0;
    border-radius: 8px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  }

  .verse-number {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #8b0000;
    font-weight: bold;
  }

  .sanskrit-text {
    font-family: 'Noto Sans Devanagari', sans-serif; /* Standard readable Sanskrit font */
    font-size: 1.5rem;
    line-height: 1.8;
    color: #2c3e50;
    margin: 1rem 0;
    text-align: center;
  }

  .transliteration {
    font-style: italic;
    color: #666;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .translation {
    font-family: 'Merriweather', serif;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;
    border-top: 1px solid #eee;
    padding-top: 1rem;
  }
</style>