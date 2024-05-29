class SupportCard extends HTMLElement {

  connectedCallback() {

    

    const headingTitle = this.getAttribute('heading-title');
    const des = this.getAttribute('des');
    const link = this.getAttribute('link');
    const linkIcon = this.getAttribute('linkIcon');
    const img = this.getAttribute('img');


    // Check if the image attribute is empty and conditionally render the image div
    let imgHTML = '';
    if (img) {
      imgHTML = `
        <div class="card-sup-img">
          <img
            src="${img}"
            alt=""
          />
        </div>
      `;
    }

    this.innerHTML = `
      <div class="card-sup-wrapper">
        <div class="card-sup-des">
          <h2 class="heading-sm">${headingTitle}</h2>
          <p>${des}</p>
          <a href="#">${link}</a>
        </div>
        ${imgHTML}
      </div>
    `;
  }
}

customElements.define('support-card', SupportCard);
