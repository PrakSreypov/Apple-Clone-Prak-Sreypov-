class SupportSearchForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="support-container search-bar">
      <div class="search-form">
        <div class="group">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
            <g>
              <path
                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
              ></path>
            </g>
          </svg>
          <input required type="text" class="input" id="search-input"/>
          <label>Search Support</label>
        </div>
      </div>
      <div class="search-content" id="search-content">
        <p>Quick Links</p>
          <a href="#">If you forgot your Apple ID password</a>
          <a href="#">If you forgot the passcode for your iPhone, iPad, or iPod touch</a>
          <a href="#">How to cancel a subscription from Apple</a>
          <a href="#">Update iOS on your device</a>
          <a href="#">Contact Apple Support</a>
        </ul>
      </div>
    </div>
    `;
  }
}

customElements.define('support-search-form', SupportSearchForm);

// Show or hide search contents 
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const searchContent = document.getElementById('search-content');

  searchInput.addEventListener('focus', () => {
    searchContent.classList.add('show');
    searchInput.style.borderRadius = "12px 12px 0 0"
  });

  searchInput.addEventListener('blur', () => {
    searchContent.classList.remove('show');
    searchInput.style.borderRadius = "12px";
  });
});
