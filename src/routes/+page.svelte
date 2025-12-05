<script lang="ts">
  // 1. Import Global Styles
  import "../index.css";
  import img from "$lib/assets/logo2.png";
  import img2 from "$lib/assets/gita_open.png";
  import img3 from "$lib/assets/gita_book.jpg";
  import img4 from "$lib/assets/logo.png";

  // 2. Import Components & Types
  import type { Verse, ApiResponse } from "$lib/types";

  // --- LOGIC SECTION ---

  // App State
  let view: "chapters" | "verses" = "chapters";
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
    view = "verses";
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
    view = "chapters";
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
  <link
    href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Noto+Sans+Devanagari&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<header class="nav_background">
  <nav class="navbar navbar-expand-lg bg-light navbar-light">
    <div class="container nav-container">
      <a class="navbar-brand" href="#">
        <img src={img4} alt="Logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto mt-2 mt-lg-0 gap-3">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">
              <i class="fa fa-search"></i>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
              >ĀYURVEDA</a
            >
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
              >YOGASUTRAS</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="navbarDropdown">BHAGAVAD GĪTĀ</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
              >UPNISADS</a
            >
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
              >SANSKRIT</a
            >
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDropdown">CONTACT US</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
<div class="inner_background inner-pad">
  <h1 class="inner_head">BHAGAVAD GITA</h1>
  <div class="container border_bg hero-container16">
    <div class="row">
      <div class="col-sm-12"></div>
    </div>
    <div class="book_img">
      <img src={img2} alt="Gita Banner" />
    </div>
  </div>
</div>
<div class="inner_background shlok_inner" style="padding:0px;">
  <section class="chapter_main">
    <div class="chapter_head">
      <p>GITA CHAPTERS</p>
    </div>
    <div class="chapter_container">
      {#each chapters as chapter}
        <div class="chapter">
          <div class="chapter_img">
            <img src={img3} alt="Chapter Background" />
          </div>
          <div class="chapter_num">
            <p>{chapter}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>
<div class="footer">

</div>
<div class="p-1 footer_bottom">
            <div class="social_icon">
                <ul class="list-unstyled">
                    <li class="connect"><h4>Connect</h4></li>
                    <li><a href="#" target="_blank"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fab fa-youtube"></i></a></li>
                    <li><a href="#"><i class="fab fa-safari"></i></a></li>
                </ul>
            </div>
            <img src={img} alt="logo"/>
            <h1 class="footer-showcase">WELLBEING~SVASTI</h1>
            <p>© 2025 Rutger Kortenhorst. All Rights Reserved | Design and Developed by <a href="#">Burning Desire Inclusive</a></p>
        </div>

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
