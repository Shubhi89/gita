<!-- <script lang="ts">
  import type { Verse } from '$lib/types';
  export let verse: Verse;
  export let onClose: () => void;

  let fontSize = 24; // Default font size from your code
  let isProjectorMode = false;
</script>

<div class="deliveryOverlay" on:click={onClose}></div>

<div class="song-popup" class:projector={isProjectorMode}>
  
  <div class="controls-bar">
    {#if !isProjectorMode}
      <button class="close-btn" on:click={onClose}>x</button>
      <button class="projector-btn" on:click={() => isProjectorMode = true}>
        Projector Mode
      </button>
    {:else}
      <div class="slider-control">
        <b>Font Size: {fontSize}px</b>
        <input type="range" min="12" max="65" bind:value={fontSize}>
      </div>
      <button class="projector-close" on:click={() => isProjectorMode = false}>
        X
      </button>
    {/if}
  </div>

  <div class="content-box">
    <div class="lyrics-container">
      <div class="lyrics" style="font-size: {fontSize}px;">
        {@html verse.lyrics}
      </div>
    </div>

    <div class="audio-box">
      <audio controls autoplay src={verse.music} class="audio-player">
        Your browser does not support audio.
      </audio>
    </div>
  </div>
</div>

<style>
  .deliveryOverlay {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.6); z-index: 998;
  }

  .song-popup {
    position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 60%; max-width: 700px;
    background: #fff8e1; /* Parchment color */
    padding: 20px; z-index: 999;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    display: flex; flex-direction: column;
    max-height: 80vh;
  }

  /* Projector Mode Styles */
  .song-popup.projector {
    width: 95%; height: 95%; max-width: none; max-height: none;
    background: white;
  }

  .controls-bar {
    display: flex; justify-content: space-between; align-items: center;
    margin-bottom: 10px; border-bottom: 1px solid #ccc; padding-bottom: 10px;
  }

  .close-btn, .projector-close {
    background: #8b0000; color: white; border: none;
    width: 30px; height: 30px; border-radius: 50%; cursor: pointer;
  }

  .projector-btn {
    background: none; border: 1px solid #333; padding: 5px 10px; cursor: pointer;
  }

  .content-box {
    flex: 1; display: flex; flex-direction: column; overflow: hidden;
  }

  .lyrics-container {
    flex: 1; overflow-y: auto; text-align: center; margin-bottom: 15px;
  }

  .lyrics {
    font-family: 'Noto Sans Devanagari', sans-serif;
    white-space: pre-wrap;
    line-height: 1.6;
    color: #333;
  }

  .audio-player { width: 100%; }
</style> -->