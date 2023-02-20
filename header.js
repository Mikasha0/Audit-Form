class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="head container-fluid">
      <ul class="d-sm-flex gap-md-3 gap-sm-0 gap-lg-5 justify-content-center">
        <li>
          <a href=""><i class="bi bi-telephone"></i>+977 9805674141</a>
        </li>
        <li>
          <a href=""
            ><i class="bi bi-geo-alt"></i>Tripureshwor, Kathmandu, Nepal</a
          >
        </li>
        <li>
          <a href=""
            ><i class="bi bi-envelope"></i>sumanthapaliya22@gmail.com</a
          >
        </li>
        <li><a href="">ENGLISH|NEPALI</a></li>
      </ul>
    </div>
    <header class="sticky-top">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-top py-3 ">
          <a class="navbar-brand" href="index.html">
            <!-- <img class="logo" src="./img/logo.webp" alt="..." /> -->
            <span class="">Logo</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav gap-lg-4 ms-auto">
              <li class="nav-item">
                <a href="home.html" class="nav-link">HOME</a>
              </li>
              <li class="nav-item">
                <a href="about-us.html" class="nav-link">ABOUTUS</a>
              </li>
              <li class="nav-item">
                <a href="our-services.html" class="nav-link">SERVICES</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="publications.html"> PUBLICATIONS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href=""
                  >NEWSROOM</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="our-memories.html">GALLERY</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="career.html">CAREER</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blogs.html">BLOGS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact-us.html">CONTACT US</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    `;
  }
}
customElements.define("my-header", MyHeader);
