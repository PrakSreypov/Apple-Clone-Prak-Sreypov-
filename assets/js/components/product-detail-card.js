import {MacLaptops, MacDesktops, MacDisplay} from '../data/all-mac-data.js';
import {Ipad} from '../data/ipad-data.js'

const dataSources = {
  'mac-laptop': MacLaptops,
  'mac-desktop': MacDesktops,
  'mac-display': MacDisplay,
  'ipad': Ipad
}

const ProductCardContainer = (contents) => {
  
  return `
  <div class="product-container">
  ${contents.map((content) => `
        
        <div class="product-card">
          <img
            class="product-img"
            src="${content.prodImg}"
            alt=""
          />

          <div class="contents">
            <div class="top-block">
              <!-- color option  -->
              <div class="colorsOpt">
                ${content.colorsOpt.map(color => `
                  <div class="colors-circle ${color}"></div>
                `).join('')}
              </div>

              <!-- model Status -->
              <div class="model-status text-center">
                <p>${content.status}</p>
              </div>

              <!-- model info  -->
              <div class="model-info">
                <h3 class="model-name">${content.modelName}</h3>
                <p class="model-chip">${content.modelChip}</p>
                <p class="model-description">
                ${content.modeldes}
                </p>
                <h3 class="model-price">
                ${content.price}
                </h3>
              </div>

              <!-- model btn link  -->
              <div class="d-flex justify-content-center py-4">
                <a href="#" class="btn btn-primary rounded-pill px-4 py-2"
                  >${content.link1}</a
                >
                <a href="#" class="btn text-primary">${content.link2}</a>
              </div>
            </div>
            <div class="bottom-content text-center">
              <div class="block-content">
                <h3>${content.size}</h3>
                <p>
                  ${content.components}
                </p>
              </div>

              <div class="block-content">
                <img
                  src="${content.chipImg}"
                  alt=""
                />
                <p>${content.chipName}</p>
              </div>

              <div class="block-content">
                <p>${content.specText}</p>
                <h3>${content.hours}</h3>
                <p>${content.battery}</p>
              </div>

              <div class="block-content">
                <h3>${content.portNum}</h3>
                <p>${content.portDes}</p>
              </div>

              <div class="block-content">
                <h3>${content.weight}</h3>
                <p>${content.weightCap}</p>
              </div>
            </div>
          </div>
        </div> 

        `).join("")}
      </div>        
    
  
  `
}


class ProductInfo extends HTMLElement {
  connectedCallback(){
    const dataAttribute = this.getAttribute('data-source');
    const dataSourceKey = dataSources[dataAttribute];
    this.innerHTML = ProductCardContainer(dataSourceKey);
  }

}


customElements.define('product-info', ProductInfo)