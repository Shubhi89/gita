<script>
  import img from "../assets/logo.png";
  import "../index.css";
</script>

<header class="nav_background">
  <nav class="navbar navbar-expand-lg bg-light navbar-light">
    <div class="container nav-container">
      <a class="navbar-brand" href="#">
        <img src={img} alt="Logo" />
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
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">
              <i class="fa fa-search"></i>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              >ĀYURVEDA</a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              >YOGASUTRAS</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              id="navbarDropdown"
              >BHAGAVAD GĪTĀ</a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              >UPNISADS</a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              >SANSKRIT</a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="#"
              id="navbarDropdown"
              >CONTACT US</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
