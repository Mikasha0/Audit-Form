class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
      <div class="container">
        <div class="row g-4 g-md-5 justify-content-around">
          <div class="col-12 col-md-12 col-lg-3">
            <h5>LOGO</h5>
            <p>
              Our boundless imagination helps us to help business solve their
              problem with technology in an innovative way.
            </p>
            n
          </div>
          <div class="col-12 col-md-12 col-lg-2">
            <h4>USEFUL LINKS</h4>
            <ul>
              <li><a href="#">ANZSCO codes</a></li>
              <li><a href="#">CDR Samples</a></li>
              <li><a href="#">Positive Skill Assessment</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">PR point calculator</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Ask a expert</a></li>
            </ul>
          </div>
          <div class="col-12 col-md-12 col-lg-3">
            <h4>OUR SERVICES</h4>
            <ul>
              <li><a href="#">CDR Report Writing</a></li>
              <li><a href="#">ACS RPL Report Writing</a></li>
              <li><a href="#">KA02 Knowledge Accessment</a></li>
              <li><a href="#">Career Episode Writing</a></li>
              <li><a href="#">Summary Statement</a></li>
              <li><a href="#">CDR Report Review Service in Australia</a></li>
            </ul>
          </div>
        </div>
        <p class="text-center">© Copyright @ 2023 - CDR Writer Australia</p>
      </div>
    </footer>
    `;
  }
}
customElements.define("my-footer", MyFooter);
