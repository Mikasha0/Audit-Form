class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="head container-fluid">
      <ul>
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
        <nav class="navbar navbar-expand-lg navbar-top">
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
                <a href="index.html" class="nav-link">HOME</a>
              </li>
              <li class="nav-item">
                <a href="index.html" class="nav-link">ABOUTUS</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICES
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="cdr-report-writing.html"
                      >CDR Report Writing</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="career-episode-writing.html"
                      >Career Episode Writing</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="summary-statement-engineer-australia.html"
                      >Summary Statement</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="acs-rpl-report.html"
                      >ACS RPL Report Writing</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="ka02-knowledge-assessment.html"
                      >KA02 Knowledge Assessment</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="cdr-report-review-service-australia.html"
                    >
                      CDR Report Review Service in Australia</a
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="anzsco-codes.html"> PUBLICATIONS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="australia-pr-points-calculator.html"
                  >NEWS ROOM</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pricing.html">GALLERY</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="cdr-report-samples.html">CAREER</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blog.html">BLOGS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">CONTACT US</a>
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
