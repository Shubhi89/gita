<script lang="ts">
  import ChapterGrid from '$lib/components/ChapterGrid.svelte';
  import VerseGrid from '$lib/components/VerseGrid.svelte';
  import PlayerModal from '$lib/components/PlayerModel.svelte';
  import type { Verse, ApiResponse } from '$lib/types';
  import logo from '$lib/assets/logo.png'

  

  // State Management
  let view: 'chapters' | 'verses' = 'chapters';
  let currentChapter = 0;
  let verses: Verse[] = [];
  let selectedVerse: Verse | null = null;
  let isLoading = false;
  let error = '';



  // API Call
  async function loadChapter(chapter: number) {
    currentChapter = chapter;
    view = 'verses';
    isLoading = true;
    error = '';
    verses = [];

    try {
      const res = await fetch(`https://sanskrit.ie/api/geeta.php?q=${chapter}`);
      const data: ApiResponse = await res.json();
      
      if (data.message === "No Data found") {
        error = "Data Not Found";
      } else {
        verses = data.data;
      }
    } catch (e) {
      error = "Failed to load chapter. Please try again.";
      console.error(e);
    } finally {
      isLoading = false;
    }
  }

  function goBack() {
    view = 'chapters';
    verses = [];
    error = '';
  }
</script>

<svelte:head>
  <title>Bhagavad Gita</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari&display=swap" rel="stylesheet">
  <link href="./index.css" rel="stylesheet"/>
</svelte:head>

<header class="navbar">
  <div class="container">
    <span class="brand">
        <img src={logo} alt="Bhagavad Gita Logo" style="width: 25%;"/>
    </span>
    <nav>
      <ul class="nav-links">
        <li>AYURVEDA</li>
        <li>YOGASUTRAS</li>
        <li>BHAGAVAD GITA</li>
        <li>UPANISADS</li>
        <li>SANSKRIT</li>
        <li>CONTACT US</li>
      </ul>
    </nav>
  </div>
</header>

<main class="main-content">
  <div class="banner">
    <h1 class="inner_head">BHAGAVAD GITA</h1>
    <div class="container border_bg hero-container">
        
    </div> </div>

  <section class="app-area">
    {#if view === 'chapters'}
      <div class="section-head">
        <p>GITA CHAPTERS</p>
      </div>
      <ChapterGrid onSelect={loadChapter} />
    
    {:else}
      <div class="verse-view">
        <button class="back-btn" on:click={goBack}>&lt; Back</button>
        
        <div class="section-head">
          <p>CHAPTER {currentChapter}</p>
        </div>

        {#if isLoading}
          <div class="loader">Loading Verses...</div>
        {:else if error}
          <div class="error-msg">{error}</div>
        {:else}
          <VerseGrid {verses} onSelect={(v) => selectedVerse = v} />
        {/if}
      </div>
    {/if}
  </section>
</main>

{#if selectedVerse}
  <PlayerModal 
    verse={selectedVerse} 
    onClose={() => selectedVerse = null} 
  />
{/if}

<style>
  :global(body) { margin: 0; font-family: sans-serif; background-color: #f9f9f9; }
  
  .navbar { background: #f8f9fa; padding: 1rem; border-bottom: 1px solid #ddd; }
  .container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; }
  .brand { font-weight: bold; font-size: 1.2rem; max-width: 100%; width: 60%;}
  
  .banner { text-align: center; padding: 2rem; background: #fff; margin-bottom: 1rem; }
  .book-icon { font-size: 4rem; margin-top: 1rem; }

  .app-area { max-width: 1000px; margin: 0 auto; background: white; min-height: 500px; padding-bottom: 2rem; }
  
  .section-head { 
    background: #8b0000; color: white; text-align: center; 
    padding: 10px; font-weight: bold; margin-bottom: 20px;
  }

  .back-btn {
    margin: 10px; padding: 5px 15px; background: #333; color: white;
    border: none; cursor: pointer;
  }

  .inner_head {
    font-size: 7em;
    color: #3E4939;
    padding-bottom: 10px;
    margin-bottom: -.75em;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: center;
    display: flex;
    position: inherit;
    z-index: 1;
    background-color: #ffffffa3;
}

  .nav-links { list-style: none; display: flex; gap: 25px; margin: 10px; }
  .nav-links li { cursor: pointer; font-size: 0.7rem; margin-right: 15px; }

  .loader, .error-msg { text-align: center; padding: 2rem; font-size: 1.2rem; }
  .error-msg { color: red; }
</style>