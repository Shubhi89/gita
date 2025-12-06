<script lang="ts">
  // 1. Import Global Styles
  import "../index.css";
  import img from "$lib/assets/logo2.png";
  import img2 from "$lib/assets/gita_open.png";
  import img3 from "$lib/assets/gita_book.jpg";
  import img4 from "$lib/assets/logo.png";
  import img5 from "$lib/assets/sletter.png";

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
      // FIX: Use 'api.allorigins.win' proxy to bypass CORS restrictions
      const targetUrl = `https://sanskrit.ie/api/geeta.php?q=${id}`;
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`;

      const res = await fetch(proxyUrl);

      if (!res.ok) throw new Error("Network response was not ok");

      const data: ApiResponse = await res.json();
      console.log("API Data:", data);

      if (data.message === "No Data found") {
        error = "No verses found for this chapter.";
      } else {
        verses = data.data;
        console.log("Verses:", verses);
      }
    } catch (err) {
      error = "Failed to load data. Please check connection.";
      console.error("API Error:", err);
    } finally {
      isLoading = false;
    }
  }

  function goBack() {
    view = "chapters";
    verses = [];
    error = null;
  }
  function openVerse(verse: Verse) {
    selectedVerse = verse;
    fontSize = 24; // Reset defaults
    isProjectorMode = false;
  }

  function closeVerse() {
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
<div class="row"></div>
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
  {#if view === "chapters"}
    <section class="chapter_main">
      <div class="chapter_head">
        <p>GITA CHAPTERS</p>
      </div>
      <div class="chapter_container">
        {#each chapters as chapter}
          <div
            class="chapter"
            on:click={() => loadChapter(chapter)}
            role="button"
            tabindex="0"
            on:keypress={(e) => e.key === "Enter" && loadChapter(chapter)}
          >
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
  {:else}
    <section class="shlok" style="display:block;">
      <div class="shlok_main">
        <div class="back_chapter" on:click={() => goBack()}>Back</div>
        <div class="shlok_head">
          <p>CHAPTER {currentChapter}</p>
        </div>
        <div class="shlok_sort">
          <div class="shlok_h">
            <p>Verse</p>
          </div>
        </div>
        {#if isLoading}
          <div class="loader"></div>
        {:else if error}
          <div class="error_box_shlok" style="display:block;">{error}</div>
        {:else}
          <div class="shlok_container">
            <div class="shlok_area">
              {#each verses as verse, i}
                <div
                  class="shlok_img"
                  on:click={() => openVerse(verse)}
                  role="button"
                  tabindex="0"
                  on:keypress={(e) => e.key === "Enter" && openVerse(verse)}
                >
                  <img src={img5} alt="verse background" />
                  <div class="shlok_num">
                    {#if i === 0}
                      <p>Whole Chapter</p>
                    {:else}
                      <p>{i}</p>
                    {/if}
                  </div>
                </div>
              {/each}
            </div>
            {#if selectedVerse}
              <div>selected</div>
            {/if}
          </div>
        {/if}
      </div>
    </section>
  {/if}
</div>

<footer></footer>
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
  <img src={img} alt="logo" />
  <h1 class="footer-showcase">WELLBEING~SVASTI</h1>
  <p>
    © 2025 Rutger Kortenhorst. All Rights Reserved | Design and Developed by <a
      href="#">Burning Desire Inclusive</a
    >
  </p>
</div>

{#if selectedVerse}
  <div class="song_popup" style="display: block;">
    <div class="deliveryOverlay"></div>
    <div class="song_pop_close" on:click={closeVerse}>x</div>
    <div class="inner_background_pop">
      <div>
        <center>
          <div class="col-md-8 music_popup">
            <div class="music-bg">
              <div class="music_box_contral">
                <div class="lyrics">
                  <div class="music-single" id="lyrics">
                    <p style="text-align:justify;">&nbsp;</p>
                    <p style="text-align:justify;">
                      <span
                        class="text-huge"
                        style="color:hsl(0, 0%, 0%);font-family:Tahoma, Geneva, sans-serif;"
                        >{@html selectedVerse.lyrics}</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div></center
        >
      </div>
    </div>
  </div>
{/if}
