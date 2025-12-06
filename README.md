# Bhagavad Gita Web Application

A spiritual web application built with [SvelteKit](https://kit.svelte.dev/) and TypeScript that allows users to explore the holy Bhagavad Gita. The app provides an interface to navigate through all 18 chapters, view verses (shlokas), and read lyrics in a responsive, user-friendly interface.

## 🌟 Features

* **Chapter Navigation:** Browse through all 18 chapters of the Bhagavad Gita presented in an interactive grid.
* **Verse Explorer:** Select a chapter to view all associated verses.
* **Verse Detail View:** Click on any verse to open a popup containing the full lyrics/text.
* **Responsive Design:** Optimized for desktops, tablets, and mobile devices using Bootstrap 5.
* **Live Data:** Fetches real-time data from an external Sanskrit API.
* **Beautiful UI:** features custom fonts ("Edensor", "Noto Sans Devanagari") and thematic aesthetics.

## 🛠️ Tech Stack

* **Framework:** [SvelteKit](https://kit.svelte.dev/) (Svelte 5)
* **Language:** TypeScript
* **Styling:** CSS3, [Bootstrap 5](https://getbootstrap.com/)
* **Build Tool:** Vite
* **Icons:** FontAwesome
* **API:** Fetches data from `sanskrit.ie` (via `allorigins.win` proxy).

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

* Node.js (v18 or later recommended)
* npm (Node Package Manager)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/gita-app.git]
    cd gita-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in Browser:**
    Navigate to `http://localhost:5173` to view the application.

## 📁 Project Structure

```
src/
├── lib/
│   ├── assets/        # Images (logos, banners, book covers)
│   ├── types.ts       # TypeScript interfaces (Verse, ApiResponse)
│   └── index.ts       # Lib exports
├── routes/
│   ├── +layout.svelte # Main layout (includes Bootstrap CDN, Fonts)
│   └── +page.svelte   # Main application logic (State, API calls, UI)
└── index.css          # Global custom styles
```
## 📡 API Usage

The application retrieves data dynamically.

* **Endpoint:** `https://sanskrit.ie/api/geeta.php?q={chapter_id}`
* **Proxy:** Uses `api.allorigins.win` to bypass CORS restrictions during client-side fetching.

## 🤝 Credits

* **Content:** © 2025 Rutger Kortenhorst
* **Design & Development:** Burning Desire Inclusive
* **Images & Assets:** Provided in the `src/lib/assets` directory.

## 📄 License

This project is intended for educational and spiritual purposes. Please refer to the repository owner for licensing details regarding the code and content.
