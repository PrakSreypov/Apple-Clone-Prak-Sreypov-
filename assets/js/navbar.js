class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    <nav class="navbar navbar-expand-lg sticky justify-content-center p-0">
    <div class="navbar-collapse justify-content-center align-items-center">
      <div class="">
        <ul class="nav-items">
          <li class="nav-item">
            <a class="nav-logo nav-link" href="/index.html">
              <span class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  class="bi bi-apple"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"
                  />
                  <path
                    d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"
                  />
                </svg>
              </span>

              <div class="left-icon-mobile">
                <span
                  class="nav-link nav-icon-sm"
                  href="#"
                  data-bs-toggle="dropdown"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                    /></svg
                ></span>

                <span
                  class="nav-link nav-icon-sm"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-bag"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
                    />
                  </svg>
                </span>

                <span
                  class="nav-link nav-icon-sm"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <span class="hamburger-menu"></span>
                </span>
              </div>
            </a>
          </li>

          <!-- Store  -->
          <li
            class="nav-item dropdown has-megamenu"
            
          >
            <a class="nav-link" href="#" data-bs-toggle="dropdown"> Store </a>
            <div class="dropdown-menu" role="menu">
              <div
                class="text-nowrap dropdown-menu-container"
              >
                <div class="col-megamenu">
                  <p class="menu-title">Shop</p>
                  <ul class="list-unstyled">
                    <li><a href="/public/latest-shop.html">Shop the Latest</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Apple Watch</a></li>
                    <li><a href="#">Accessories</a></li>
                  </ul>
                </div>

                <div class="col-megamenu">
                  <p class="menu-title">Quick Links</p>
                  <ul class="list-unstyled">
                    <li class="nav-link-sm">
                      <a href="#">Find a Store</a>
                    </li>
                    <li class="nav-link-sm">
                      <a href="#">Order Status</a>
                    </li>
                    <li class="nav-link-sm">
                      <a href="#">Apple Trade In</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Financing</a></li>
                  </ul>
                </div>

                <div class="col-megamenu">
                  <p class="menu-title">Shop Special Stores</p>
                  <ul class="list-unstyled">
                    <li class="nav-link-sm">
                      <a href="#">Certified refurbished</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Education</a></li>
                    <li class="nav-link-sm"><a href="#">Business</a></li>
                    <li class="nav-link-sm">
                      <a href="#">Veterans and Military</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Government</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <!-- Mac  -->
          <li
            class="nav-item dropdown has-megamenu"
          >
            <a class="nav-link" href="#" data-bs-toggle="dropdown"> Mac </a>
            <div class="dropdown-menu" role="menu">
              <div
                class="text-nowrap dropdown-menu-container"
              >
                <div class="col-megamenu">
                  <p class="menu-title">Shop</p>
                  <ul class="list-unstyled">
                    <li><a href="/public/all-mac.html">Explore All Mac</a></li>
                    <li><a href="#">Macbook Air</a></li>
                    <li><a href="#">Macbook Pro</a></li>
                    <li><a href="#">iMac</a></li>
                    <li><a href="#">Mac Mini</a></li>
                    <li><a href="#">Mac Studio</a></li>
                    <li><a href="#">Mac Pro</a></li>
                    <li><a href="#">Displays</a></li>
                  </ul>
                </div>

                <div class="col-megamenu">
                  <p class="menu-title">Quick Links</p>
                  <ul class="list-unstyled">
                    <li class="nav-link-sm">
                      <a href="#">Find a Store</a>
                    </li>
                    <li class="nav-link-sm">
                      <a href="#">Order Status</a>
                    </li>
                    <li class="nav-link-sm">
                      <a href="#">Apple Trade In</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Financing</a></li>
                  </ul>
                </div>

                <div class="col-megamenu">
                  <p class="menu-title">Shop Special Stores</p>
                  <ul class="list-unstyled">
                    <li class="nav-link-sm">
                      <a href="#">Certified refurbished</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Education</a></li>
                    <li class="nav-link-sm"><a href="#">Business</a></li>
                    <li class="nav-link-sm">
                      <a href="#">Veterans and Military</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Government</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <!-- iPad  -->
          <li
            class="nav-item dropdown has-megamenu"
          >
            <a class="nav-link" href="#" data-bs-toggle="dropdown"> iPad </a>
            <div class="dropdown-menu" role="menu">
              <div
                class="text-nowrap dropdown-menu-container"
              >
                <div class="col-megamenu">
                  <p class="menu-title">Explore iPad</p>
                  <ul class="list-unstyled">
                    <li><a href="/public/all-ipad.html">Explore All iPad</a></li>
                    <li><a href="#">iPad Pro</a></li>
                    <li><a href="#">iPad Air</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPad Mini</a></li>
                    <li><a href="#">Apple Pencil</a></li>
                    <li><a href="#">Keyboards</a></li>
                  <p class="menu-title">Compare Mac</p>
                  <p class="menu-title">Mac Does That</p>

                  </ul>
                </div>

                <div class="col-megamenu">
                  <p class="menu-title">Quick Links</p>
                  <ul class="list-unstyled">
                    <li class="nav-link-sm">
                      <a href="#">Find a Store</a>
                    </li>
                    <li class="nav-link-sm">
                      <a href="#">Order Status</a>
                    </li>
                    <li class="nav-link-sm">
                      <a href="#">Apple Trade In</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Financing</a></li>
                  </ul>
                </div>

                <div class="col-megamenu">
                  <p class="menu-title">Shop Special Stores</p>
                  <ul class="list-unstyled">
                    <li class="nav-link-sm">
                      <a href="#">Certified refurbished</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Education</a></li>
                    <li class="nav-link-sm"><a href="#">Business</a></li>
                    <li class="nav-link-sm">
                      <a href="#">Veterans and Military</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Government</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <!-- iPhone  -->
          <li
            class="nav-item dropdown has-megamenu"
          >
            <a class="nav-link" href="#" data-bs-toggle="dropdown">
              iPhone
            </a>
            <div class="dropdown-menu" role="menu">
              <div
                class="text-nowrap dropdown-menu-container"
              >
                <div class="col-megamenu">
                  <p class="menu-title">Shop</p>
                  <ul class="list-unstyled">
                    <li><a href="#">Shop the Latest</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Apple Watch</a></li>
                    <li><a href="#">Accessories</a></li>
                  </ul>
                </div>

                <div class="col-megamenu">
                  <p class="menu-title">Quick Links</p>
                  <ul class="list-unstyled">
                    <li class="nav-link-sm">
                      <a href="#">Find a Store</a>
                    </li>
                    <li class="nav-link-sm">
                      <a href="#">Order Status</a>
                    </li>
                    <li class="nav-link-sm">
                      <a href="#">Apple Trade In</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Financing</a></li>
                  </ul>
                </div>

                <div class="col-megamenu">
                  <p class="menu-title">Shop Special Stores</p>
                  <ul class="list-unstyled">
                    <li class="nav-link-sm">
                      <a href="#">Certified refurbished</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Education</a></li>
                    <li class="nav-link-sm"><a href="#">Business</a></li>
                    <li class="nav-link-sm">
                      <a href="#">Veterans and Military</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Government</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <!-- Watch -->
          <li
            class="nav-item dropdown has-megamenu"
          >
            <a class="nav-link" href="#" data-bs-toggle="dropdown"> Watch </a>
            <div class="dropdown-menu" role="menu">
              <div
                class="text-nowrap dropdown-menu-container"
              >
                <div class="col-megamenu">
                  <p class="menu-title">Shop</p>
                  <ul class="list-unstyled">
                    <li><a href="#">Shop the Latest</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Apple Watch</a></li>
                    <li><a href="#">Accessories</a></li>
                  </ul>
                </div>

                <div class="col-megamenu">
                  <p class="menu-title">Quick Links</p>
                  <ul class="list-unstyled">
                    <li class="nav-link-sm">
                      <a href="#">Find a Store</a>
                    </li>
                    <li class="nav-link-sm">
                      <a href="#">Order Status</a>
                    </li>
                    <li class="nav-link-sm">
                      <a href="#">Apple Trade In</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Financing</a></li>
                  </ul>
                </div>

                <div class="col-megamenu">
                  <p class="menu-title">Shop Special Stores</p>
                  <ul class="list-unstyled">
                    <li class="nav-link-sm">
                      <a href="#">Certified refurbished</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Education</a></li>
                    <li class="nav-link-sm"><a href="#">Business</a></li>
                    <li class="nav-link-sm">
                      <a href="#">Veterans and Military</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Government</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <!-- Vision -->
          <li
          class="nav-item dropdown has-megamenu"
          style="position: static !important"
        >
          <a class="nav-link" href="#" data-bs-toggle="dropdown"> Vision </a>
          <div class="dropdown-menu" role="menu">
            <div
              class="text-nowrap dropdown-menu-container"
            >
              <div class="col-megamenu">
                <p class="menu-title">Shop</p>
                <ul class="list-unstyled">
                  <li><a href="#">Shop the Latest</a></li>
                  <li><a href="#">Mac</a></li>
                  <li><a href="#">iPad</a></li>
                  <li><a href="#">iPhone</a></li>
                  <li><a href="#">Apple Watch</a></li>
                  <li><a href="#">Accessories</a></li>
                </ul>
              </div>

              <div class="col-megamenu">
                <p class="menu-title">Quick Links</p>
                <ul class="list-unstyled">
                  <li class="nav-link-sm">
                    <a href="#">Find a Store</a>
                  </li>
                  <li class="nav-link-sm">
                    <a href="#">Order Status</a>
                  </li>
                  <li class="nav-link-sm">
                    <a href="#">Apple Trade In</a>
                  </li>
                  <li class="nav-link-sm"><a href="#">Financing</a></li>
                </ul>
              </div>

              <div class="col-megamenu">
                <p class="menu-title">Shop Special Stores</p>
                <ul class="list-unstyled">
                  <li class="nav-link-sm">
                    <a href="#">Certified refurbished</a>
                  </li>
                  <li class="nav-link-sm"><a href="#">Education</a></li>
                  <li class="nav-link-sm"><a href="#">Business</a></li>
                  <li class="nav-link-sm">
                    <a href="#">Veterans and Military</a>
                  </li>
                  <li class="nav-link-sm"><a href="#">Government</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>

          <!-- AirPods  -->
          <li
            class="nav-item dropdown has-megamenu"
          >
            <a class="nav-link" href="#" data-bs-toggle="dropdown">
              AirPods
            </a>
            <div class="dropdown-menu" role="menu">
              <div
                class="text-nowrap dropdown-menu-container"
              >
                <div class="col-megamenu">
                  <p class="menu-title">Shop</p>
                  <ul class="list-unstyled">
                    <li><a href="#">Shop the Latest</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Apple Watch</a></li>
                    <li><a href="#">Accessories</a></li>
                  </ul>
                </div>

                <div class="col-megamenu">
                  <p class="menu-title">Quick Links</p>
                  <ul class="list-unstyled">
                    <li class="nav-link-sm">
                      <a href="#">Find a Store</a>
                    </li>
                    <li class="nav-link-sm">
                      <a href="#">Order Status</a>
                    </li>
                    <li class="nav-link-sm">
                      <a href="#">Apple Trade In</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Financing</a></li>
                  </ul>
                </div>

                <div class="col-megamenu">
                  <p class="menu-title">Shop Special Stores</p>
                  <ul class="list-unstyled">
                    <li class="nav-link-sm">
                      <a href="#">Certified refurbished</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Education</a></li>
                    <li class="nav-link-sm"><a href="#">Business</a></li>
                    <li class="nav-link-sm">
                      <a href="#">Veterans and Military</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Government</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <!-- TV and Home  -->
          <li
            class="nav-item dropdown has-megamenu"
          >
            <a class="nav-link" href="#" data-bs-toggle="dropdown">
              Tv & Home
            </a>
            <div class="dropdown-menu" role="menu">
              <div
                class="text-nowrap dropdown-menu-container"
              >
                <div class="col-megamenu">
                  <p class="menu-title">Shop</p>
                  <ul class="list-unstyled">
                    <li><a href="#">Shop the Latest</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Apple Watch</a></li>
                    <li><a href="#">Accessories</a></li>
                  </ul>
                </div>

                <div class="col-megamenu">
                  <p class="menu-title">Quick Links</p>
                  <ul class="list-unstyled">
                    <li class="nav-link-sm">
                      <a href="#">Find a Store</a>
                    </li>
                    <li class="nav-link-sm">
                      <a href="#">Order Status</a>
                    </li>
                    <li class="nav-link-sm">
                      <a href="#">Apple Trade In</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Financing</a></li>
                  </ul>
                </div>

                <div class="col-megamenu">
                  <p class="menu-title">Shop Special Stores</p>
                  <ul class="list-unstyled">
                    <li class="nav-link-sm">
                      <a href="#">Certified refurbished</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Education</a></li>
                    <li class="nav-link-sm"><a href="#">Business</a></li>
                    <li class="nav-link-sm">
                      <a href="#">Veterans and Military</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Government</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <!-- Entertainment  -->
          <li
            class="nav-item dropdown has-megamenu"
          >
            <a class="nav-link" href="#" data-bs-toggle="dropdown">
              Entertainment
            </a>
            <div class="dropdown-menu" role="menu">
              <div
                class="text-nowrap dropdown-menu-container"
              >
                <div class="col-megamenu">
                  <p class="menu-title">Shop</p>
                  <ul class="list-unstyled">
                    <li><a href="#">Shop the Latest</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Apple Watch</a></li>
                    <li><a href="#">Accessories</a></li>
                  </ul>
                </div>

                <div class="col-megamenu">
                  <p class="menu-title">Quick Links</p>
                  <ul class="list-unstyled">
                    <li class="nav-link-sm">
                      <a href="#">Find a Store</a>
                    </li>
                    <li class="nav-link-sm">
                      <a href="#">Order Status</a>
                    </li>
                    <li class="nav-link-sm">
                      <a href="#">Apple Trade In</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Financing</a></li>
                  </ul>
                </div>

                <div class="col-megamenu">
                  <p class="menu-title">Shop Special Stores</p>
                  <ul class="list-unstyled">
                    <li class="nav-link-sm">
                      <a href="#">Certified refurbished</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Education</a></li>
                    <li class="nav-link-sm"><a href="#">Business</a></li>
                    <li class="nav-link-sm">
                      <a href="#">Veterans and Military</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Government</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <!-- Accessories  -->
          <li
            class="nav-item dropdown has-megamenu"
          >
            <a class="nav-link" href="#" data-bs-toggle="dropdown">
              Accessories
            </a>
            <div class="dropdown-menu" role="menu">
              <div
                class="text-nowrap dropdown-menu-container"
              >
                <div class="col-megamenu">
                  <p class="menu-title">Shop</p>
                  <ul class="list-unstyled">
                    <li><a href="#">Shop the Latest</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Apple Watch</a></li>
                    <li><a href="#">Accessories</a></li>
                  </ul>
                </div>

                <div class="col-megamenu">
                  <p class="menu-title">Quick Links</p>
                  <ul class="list-unstyled">
                    <li class="nav-link-sm">
                      <a href="#">Find a Store</a>
                    </li>
                    <li class="nav-link-sm">
                      <a href="#">Order Status</a>
                    </li>
                    <li class="nav-link-sm">
                      <a href="#">Apple Trade In</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Financing</a></li>
                  </ul>
                </div>

                <div class="col-megamenu">
                  <p class="menu-title">Shop Special Stores</p>
                  <ul class="list-unstyled">
                    <li class="nav-link-sm">
                      <a href="#">Certified refurbished</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Education</a></li>
                    <li class="nav-link-sm"><a href="#">Business</a></li>
                    <li class="nav-link-sm">
                      <a href="#">Veterans and Military</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Government</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <!-- Support  -->
          <li
            class="nav-item dropdown has-megamenu"
          >
            <a class="nav-link" href="#" data-bs-toggle="dropdown">
              Support
            </a>
            <div class="dropdown-menu" role="menu">
              <div
                class="text-nowrap dropdown-menu-container"
              >
                <div class="col-megamenu">
                  <p class="menu-title">Shop</p>
                  <ul class="list-unstyled">
                    <li><a href="/public/support.html">iPhone</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">Vision Pro</a></li>
                    <li><a href="#">Airpod</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">TV</a></li>
                  </ul>
                </div>

                <div class="col-megamenu">
                  <p class="menu-title">Quick Links</p>
                  <ul class="list-unstyled">
                    <li class="nav-link-sm">
                      <a href="#">Find a Store</a>
                    </li>
                    <li class="nav-link-sm">
                      <a href="#">Order Status</a>
                    </li>
                    <li class="nav-link-sm">
                      <a href="#">Apple Trade In</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Financing</a></li>
                  </ul>
                </div>

                <div class="col-megamenu">
                  <p class="menu-title">Shop Special Stores</p>
                  <ul class="list-unstyled">
                    <li class="nav-link-sm">
                      <a href="#">Certified refurbished</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Education</a></li>
                    <li class="nav-link-sm"><a href="#">Business</a></li>
                    <li class="nav-link-sm">
                      <a href="#">Veterans and Military</a>
                    </li>
                    <li class="nav-link-sm"><a href="#">Government</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <!-- Search icon  -->
          <li
            class="nav-item dropdown has-megamenu"
          >
            <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                /></svg
            ></a>
          </li>

          <!-- Bag icon  -->
          <li
            class="nav-item dropdown has-megamenu"
          >
            <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                class="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    `;
  }
}
customElements.define("my-navbar", Navbar);
