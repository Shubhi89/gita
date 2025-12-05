<script lang="ts">
  // 1. Import Global Styles
  import '$lib/index.css';

  // 2. Import Components & Types
  import ChapterGrid from '$lib/components/ChapterGrid.svelte';
  import VerseGrid from '$lib/components/VerseGrid.svelte';
  import type { Verse, ApiResponse } from '$lib/types';
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';

  // --- LOGIC SECTION ---
  
  // App State
  let view: 'chapters' | 'verses' = 'chapters';
  let currentChapter = 0;
  let isLoading = false;
  let error: string | null = null;
  
  // Data State
  let chapters = Array.from({ length: 18 }, (_, i) => i + 1);
  let verses: Verse[] = [];
  let selectedVerse: Verse | null = null;

  // UI State (Lifted from PlayerModal)
  let fontSize = 24;
  let isProjectorMode = false;

  // Actions
  async function loadChapter(id: number) {
    currentChapter = id;
    view = 'verses';
    isLoading = true;
    error = null;
    verses = [];

    try {
      const res = await fetch(`https://sanskrit.ie/api/geeta.php?q=${id}`);
      const data: ApiResponse = await res.json();
      
      if (data.message === "No Data found") {
        error = "No verses found for this chapter.";
      } else {
        verses = data.data;
      }
    } catch (err) {
      error = "Failed to load data. Please check connection.";
      console.error(err);
    } finally {
      isLoading = false;
    }
  }

  function goBack() {
    view = 'chapters';
    verses = [];
    error = null;
  }

  function openPlayer(verse: Verse) {
    selectedVerse = verse;
    // Reset player state when opening new verse
    fontSize = 24;
    isProjectorMode = false;
  }

  function closePlayer() {
    selectedVerse = null;
  }
</script>

<svelte:head>
  <title>Bhagavad Gita</title>
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Noto+Sans+Devanagari&display=swap" rel="stylesheet">
</svelte:head>

<Header />
<Hero />

<nav class="navbar">
  <div class="nav-container">
    <a href="/" class="brand">SANSKRIT.IE</a>
    <a href="/" class="nav-link">BHAGAVAD GĪTĀ</a>
  </div>
</nav>

<!-- <main class="main-content">
  <div class="banner">
    <h1 class="page-title">BHAGAVAD GITA</h1>
    <div class="book-icon">📖</div>
  </div>

  <div class="app-container">
    {#if view === 'chapters'}
      <div class="section-head">GITA CHAPTERS</div>
      
      <ChapterGrid 
        {chapters} 
        onSelect={loadChapter} 
      />
    
    {:else}
      <button class="back-btn" on:click={goBack}>&lt; Back to Chapters</button>
      <div class="section-head">CHAPTER {currentChapter}</div>

      {#if isLoading}
        <div class="loader">Loading verses...</div>
      {:else if error}
        <div class="error-msg">{error}</div>
      {:else}
        <VerseGrid 
          {verses} 
          onSelect={openPlayer} 
        />
      {/if}
    {/if}
  </div>
</main>

{#if selectedVerse}
  <PlayerModal 
    verse={selectedVerse}
    {fontSize}
    {isProjectorMode}
    onClose={closePlayer}
    onToggleProjector={() => isProjectorMode = !isProjectorMode}
    onFontSizeChange={(newSize) => fontSize = newSize}
  />
{/if} -->