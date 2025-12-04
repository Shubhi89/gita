<script lang="ts">
  import { onMount } from 'svelte';
  import ChapterList from '$lib/components/ChapterList.svelte';
  import VerseList from '$lib/components/VerseList.svelte';
  import type { Verse } from '$lib/types';

  let currentChapter = 1;
  let verses: Verse[] = [];
  let isLoading = true;
  let error: string | null = null;

  // The API Endpoint provided
  const BASE_URL = 'https://sanskrit.ie/api/geeta.php';

  async function fetchChapter(chapterId: number) {
    currentChapter = chapterId;
    isLoading = true;
    error = null;
    verses = [];

    try {
      const res = await fetch(`${BASE_URL}?q=${chapterId}`);
      
      if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
      
      const data = await res.json();
      
      // Data normalization: Ensure the API response maps to our Verse type
      // If the API returns a different structure, adjust this map function.
      verses = Array.isArray(data) ? data : []; 
      
    } catch (err) {
      console.error(err);
      error = "Unable to load verses. Please check your connection.";
    } finally {
      isLoading = false;
    }
  }

  // Load Chapter 1 immediately on page load
  onMount(() => {
    fetchChapter(1);
  });
</script>

<svelte:head>
  <title>Bhagavad Gita - Chapter {currentChapter}</title>
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Noto+Sans+Devanagari:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="app-layout">
  <aside class="sidebar">
    <ChapterList 
      activeChapter={currentChapter} 
      onSelect={fetchChapter} 
    />
  </aside>

  <main class="content">
    <header class="page-header">
      <h1>Bhagavad Gītā</h1>
      <p>Chapter {currentChapter}</p>
    </header>

    {#if isLoading}
      <div class="loading">Loading Sanskrit verses...</div>
    {:else if error}
      <div class="error">
        <p>{error}</p>
        <button on:click={() => fetchChapter(currentChapter)}>Retry</button>
      </div>
    {:else}
      <VerseList {verses} />
    {/if}
  </main>
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: 'Merriweather', serif;
    background-color: #f9f9f9;
  }

  .app-layout {
    display: flex;
    min-height: 100vh;
  }

  .content {
    flex: 1;
    height: 100vh;
    overflow-y: auto;
  }

  .page-header {
    background: white;
    padding: 2rem;
    text-align: center;
    border-bottom: 1px solid #eee;
  }

  h1 {
    margin: 0;
    color: #8b0000;
  }

  .loading, .error {
    text-align: center;
    padding: 4rem;
    font-size: 1.2rem;
    color: #666;
  }

  /* Mobile Responsive Layout */
  @media (max-width: 768px) {
    .app-layout {
      flex-direction: column;
    }
    
    .sidebar {
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .content {
      height: auto;
      overflow-y: visible;
    }
  }
</style>