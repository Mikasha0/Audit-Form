class ContactUs extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="form-info">
      <div class="container">
        <div class="section-heading">
         <span>CONTACT US</span>
          <h2>Get In Touch</h2>
        </div>
        <div class="row g-0 justify-content-around">
          <div class="col-12 col-lg-8">
            <div class="card">
              <div class="card-body">
                <form action="">
                  <div class="row g-4 g-md-5">
                    <div class="col-12 col-md-4">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Full Name*"
                        name="FullName"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email*"
                        name="Email"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Phone Number*"
                        name="PhoneNumber"
                      />
                    </div>
                    <div class="col-12 col-md-12">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Message"
                        name="Message"
                      />
                    </div>
                    <div class="form-button">
                      <button class="btn-all">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-8 col-lg-4">
            <div class="card">
              <div class="card-body">
                <p class="info-icon">
                  <i class="bi-envelope"></i>
                  <a href="mailto:info@cdrwriteraustralia.com">
                    info@cdrwriteraustralia.com</a
                  >
                </p>
                <p class="info-icon">
                  <i class="bi-geo-alt"></i>
                  <a href="#">George Street, Sydney, NSW, 2000 </a>
                </p>
                <p class="info-icon">
                  <i class="bi-telephone"></i>
                  <a href="#"> +61 480097490</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      `;
  }
}
customElements.define("contact-us", ContactUs);
