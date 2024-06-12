// Get Id for creating card 
const MacInfoContainer = document.getElementById(
  "card-container-getToknowMac"
);
const IpadInfoContainer = document.getElementById(
  "card-container-getToknowIpad"
);

// Get to know mac Data 
const getToknowMacData = [
  {
    image:
      "../../assets/images/macPage/all-mac-page/mac_ease__bvgkz2zdltxy_small_2x.jpg",
    alt: "store-card-40-vision-pro-20240",
    title: "Getting started",
    link: "Welcome to spatial computing.",
    textColor: "light",
  },

  {
    image:
      "https://www.apple.com/v/mac/home/bz/images/overview/consider/mac_performance__dh5hyac1zf8m_xlarge.jpg",
    alt: "store-card-40-macbook-air-202402",
    title: "Performance and Better Life",
    link: "Go fast. Go far.",
    textColor: "light",
  },

  {
    image:
      "https://www.apple.com/v/mac/home/bz/images/overview/consider/mac_iphone__gh1tblkt6bqm_xlarge.jpg",
    alt: "store-card-40-macbook-air-202402",
    title: "Mac and iPhone",
    link: "Dream team.",
    textColor: "dark",
  },

  {
    image:
      "https://www.apple.com/v/mac/home/bz/images/overview/consider/mac_compatibility__cu59oukz81ci_xlarge.jpg",
    alt: "store-card-40-macbook-air-202402",
    title: "compatibility",
    link: "Mac run your favorite apps.",
    textColor: "dark",
  },

  {
    image:
      "https://www.apple.com/v/mac/home/bz/images/overview/consider/mac_security__gfwda10khdym_xlarge.jpg",
    alt: "store-card-40-macbook-air-202402",
    title: "Privacy and Security",
    link: "Your business is nobody's else.",
    textColor: "light",
  },

  {
    image:
      "https://www.apple.com/v/mac/home/bz/images/overview/consider/mac_durability__epiwcuk7zkeq_xlarge.jpg",
    alt: "store-card-40-macbook-air-202402",
    title: "Durability",
    link: "Build to stand the test of time.",
    textColor: "dark",
  },

  {
    image:
      "https://www.apple.com/v/mac/home/bz/images/overview/consider/mac_values__c9gck9qi4kia_xlarge.jpg",
    alt: "store-card-40-macbook-air-202402",
    title: "Apple values",
    link: "Our value drive everything we do.",
    textColor: "dark",
  },


  
];

// Function for create Mac Info 
function macInfoContainer(container, cardClass, data) {
  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("swiper-slide");
    card.classList.add(cardClass);

    card.innerHTML = `
      <div class="card rounded-4 overflow-hidden product-card border-0 shadow" style="height: 600px; width: 350px">
      <img src="${item.image}" class="card-img" alt="${item.alt}">
      <div class="card-img-overlay p-4">
      <h6 class="product-title-${item.textColor} text-uppercase"><small>${item.title}</small></h6>
      <a class="product-link-${item.textColor}">${item.link}</a>
      </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Call the function 
macInfoContainer(
  MacInfoContainer,
  "card-getToknowMac",
  getToknowMacData
);

// Customize the swiper for carousel 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  // slidesOffsetBefore: 300,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Message Data 
const msgData = [

  {
    svgLink: "https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_apple_card__fa68csvawtei_large.png",
    messageContent: `<h4 class="product-title-dark mt-2 lh-sm">Pay over time, <br>interest free.</h4>
    <span>When you choose to check out with Apple Card Monthly Installments.◊</span>
    `,
  },

  {
    svgLink: "https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_trade_in__ca5f20mux4b6_large.png",
    messageContent: `<h4 class="product-title-dark mt-2 lh-sm">Save with<br>Apple Trade In.</h4>
    <span>Get credit toward your next Mac when you trade in an eligible device. ◊</span>`,
  },

  {
    svgLink: "https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_customize__b6w4i5ax89py_large.png",
    messageContent: `<h4 class="product-title-dark mt-2 lh-sm">Customize your Mac</h4>
    <span>Choose your chip, memory, storage, even color.</span>`,
  },

  {
    svgLink: "https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_delivery__fyzranm9416y_large.png",
    messageContent: `<h4 class="product-title-dark mt-2 lh-sm">Get flexible delivery<br>and easy pickup.</h4>
    <span>Choose two-hour delivery from an Apple Store, free delivery, or easy pickup options.</span>`,
  },

    {
    svgLink: "https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_specialist_alt__fht15dmiclei_large.png",
    messageContent: `<h4 class="product-title-dark mt-2 lh-sm">Shop live with<br>a Specialist.</h4>
    <span>Let us guide you live over video and answer all of your questions.</span>`,
  },

  {
    svgLink: "https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_person__bayst2x5jyya_large.png",
    messageContent: `<h4 class="product-title-dark mt-2 lh-sm">Get to know your <br>new Mac.</h4>
    <span>Learn how to get the most out of your new Mac with a free one-on-one Personal Session.</span>`,
  },

  {
    svgLink: "https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_asa__urbsp7b9ktuq_large.png",
    messageContent: `<h4 class="product-title-dark mt-2 lh-sm">Explore a shopping<br>experience designed around you.</h4>
    <span>Use the Apple Store app to get a more personl way to shop.</span>`,
  },


];

// Function for creating Message card 
function messageCard(data) {
  const cardContainer = document.getElementById("card-container-message");

  data.forEach((msg) => {
    const card = document.createElement("div");
    card.classList.add("message-product-card", "swiper-slide");

    card.innerHTML = `
      <div class="card rounded-4 overflow-hidden product-card border-0 mx-2 shadow">
        <div class="p-4">
        <img src="${msg.svgLink}" alt="">
          <div class="msg-content">
            ${msg.messageContent}
          </div>
          
        </div>
      </div>
    `;

    cardContainer.appendChild(card);
  });
}

// Call the fuction 
messageCard(msgData);

// Button Tab to show different products 
const tabs = document.querySelectorAll('.explores__tab');
const tabsContainer = document.querySelector('.explores__tab-container');
const tabsContent = document.querySelectorAll('.explores__content');
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.explores__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('explores__tab--active'));
  tabsContent.forEach(c => c.classList.remove('explores__content--active'));

  // Activate tab
  clicked.classList.add('explores__tab--active');

  // Activate content area
  document
    .querySelector(`.explores__content--${clicked.dataset.tab}`)
    .classList.add('explores__content--active');
});
