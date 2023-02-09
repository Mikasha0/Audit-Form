class Subscribe extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="subscribe">
      <div class="container text-center">
        <div class="section-heading">
          <span>SUBSCRIBE</span>
          <h2>Subscribe To Get The Latest News About Us</h2>
          <p>
            Please Drop Your Email Below To Get Daily Update About What We Do
          </p>
        </div>
        <div class="row justify-content-center">
          <div class="col-6">
            <form action="">
              <div class="input-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Enter Your Email Address"
                />
                <button class="btn-all">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
      `;
  }
}
customElements.define("subscribe-us", Subscribe);
